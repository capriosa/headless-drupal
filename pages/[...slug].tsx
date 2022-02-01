import * as React from "react"
import Head from "next/head"
import {
  DrupalNode,
  getPathsFromContext,
  getResourceFromContext,
  getResourceTypeFromContext,
  getMenu,
} from "next-drupal"
import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next"
import { NodeArticle } from "@/components/node-article"
import { NodeBasicPage } from "@/components/node-basic-page"
import Link from "next/link"


interface NodePageProps {
  preview: GetStaticPropsContext["preview"]
  node: DrupalNode
  menu: any
}

export default function NodePage({ node, preview, menu }: NodePageProps) {
  const [showPreviewAlert, setShowPreviewAlert] = React.useState<boolean>(false)
  
  //if (!node) return null

  React.useEffect(() => {
    setShowPreviewAlert(preview && window.top === window.self)
  }, [])

  return (
    <>
      <Head>
        <title>{node.title}</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      {showPreviewAlert && (
        <div className="fixed top-4 right-4">
          <a
            href="/api/exit-preview"
            className="px-4 py-2 text-sm text-white bg-black rounded-md"
          >
            Exit preview
          </a>
        </div>
      )}
            <ul>
        {menu?.map((item) => {
          return (
            <li key={item.id}>
              <Link href={item.url} passHref>
                <a>{item.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
      {node.type === "node--page" && <NodeBasicPage node={node} />}
      {node.type === "node--article" && <NodeArticle node={node} />}
    </>
  )
}

export async function getStaticPaths(context): Promise<GetStaticPathsResult> {
  return {
    paths: await getPathsFromContext(["node--article", "node--page"], context),
    fallback: "blocking",
  }
}

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<NodePageProps>> {
  const type = await getResourceTypeFromContext(context)
  const { tree } = await getMenu("main")
  if (!type) {
    return {
      notFound: true,
      
    }
  }

  let params = {}
  if (type === "node--article") {
    params = {
      include: "field_image,uid",
    }
  }

  const node = await getResourceFromContext<DrupalNode>(type, context, {
    params,
  })

  if (!node?.status) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      preview: context.preview || false,
      node,
      menu: tree,
    },
    revalidate: 900,
  }
}

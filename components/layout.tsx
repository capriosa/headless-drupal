import Link from "next/link"
import { DrupalNode,getMenu, getResourceTypeFromContext, getResourceFromContext } from "next-drupal"
import { useRouter } from "next/dist/client/router"
import {
  
  GetStaticPropsResult,
} from "next"

interface NodePageProps {
  node: DrupalNode
  menu: any
}

export function Layout({ children, menu }) {
  const { asPath } = useRouter()
  const  tree  = getMenu("main")
  //console.log(menu)
  
  return (
    <div className="max-w-screen-md mx-auto px-6">
      <header>
        <div className="container mx-auto flex items-center justify-between py-6">
          
          <nav>
            Navigation
            <ul className={`flex`}>
              {menu?.map((link) => (
                <li key={link.url}>
                  <Link href={link.url} passHref>
                    <a
                      className={`ml-10 hover:text-blue-600 ${
                        asPath === link.url ? "underline" : "no-underline"
                      }`}
                    >
                      {link.title}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto py-10">{children} Body</main>
    </div>
  )
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
      
      node,
      menu: tree,
    },
    revalidate: 900,
  }
}

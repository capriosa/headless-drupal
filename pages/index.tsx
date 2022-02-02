import Head from "next/head"
import Link from "next/link"
import {
  getResource,
  DrupalNode,
  
} from "next-drupal";

interface NodePageProps {
  node: DrupalNode
  
}

export default function IndexPage({node}) {
  return (
    <>
          <article>
      <h1>{node.title}</h1>
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className="mt-6 font-serif text-xl leading-loose prose"
        />
      )}
    </article>
    
    </>
  )
}

export async function getStaticProps() {
  // Fetch the node from Drupal.
  const node = await getResource(
    "node--page",
    "18e4fe22-ad8b-4981-a036-8ee64816a4ee"
  )

  // Pass the node as props to the AboutPage.
  return {
    props: {
      node,
    },
  }
}

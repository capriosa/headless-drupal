import Dangerous from "./dangerous"

export function NodeBasicPage({ node, ...props }) {
  return (
    <article {...props}>
      <h1 className="text-6xl text-white my-4 leading-tight">{node.title}</h1>
      {node.body?.processed && (
        <Dangerous node={node.body.processed} />
        
      )}
    </article>
  )
}

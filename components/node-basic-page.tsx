import Dangerous from "./dangerous"

export function NodeBasicPage({ node, ...props }) {
  
  return (
    <article {...props}>
      <h1 className="text-6xl text-white my-4 leading-tight">{node.title}</h1>
      {node.body?.processed && (
        <Dangerous node={node.body} />
        
      )}
      
        <div className="grid grid-cols-3 gap-10 border-t-2 mt-12">
          { 
            node.field_columns.map((item,index) => 
              <Dangerous  key={index} node={item} />
            )
          }
       </div>

    </article>
  )
}

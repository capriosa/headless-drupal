import Dangerous from "./dangerous"

export function NodeBasicPage({ node, ...props }) {
  
  return (
    <article {...props}>
      <h1 className="text-6xl text-white my-4 leading-tight">{node.title}</h1>
      {node.body?.processed && (
        <div
        dangerouslySetInnerHTML={{ __html: node.body?.processed }}
        className="mt-6 font-serif text-xl text-white leading-loose"
/>
        
      )}
      
        <div className="grid grid-cols-3 gap-10 border-t-2 mt-24">
          { 
            node.field_columns && (
            node.field_columns.map((item => 
          
            <Dangerous  node={item} />
          
          ))
          
       )
       }
       </div>
    </article>
  )
}

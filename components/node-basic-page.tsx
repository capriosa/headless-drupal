import Dangerous from "./dangerous"
import Image from "next/image"

export function NodeBasicPage({ node, ...props }) {
  console.log(node.field_image_columns)
  return (
    <article {...props}>
      <h1 className="text-6xl text-white my-4 leading-tight">{node.title}</h1>
      {node.body?.processed && (
        <div
        dangerouslySetInnerHTML={{ __html: node.body?.processed }}
        className="mt-6 font-serif text-xl text-white leading-loose"
        />
        
      )}
      
        <div className="grid grid-cols-3 gap-10  mt-6">
          { 
            node.field_columns && (
            node.field_columns.map((item => 
          
            <Dangerous  node={item} />
          
          ))
          
       )
       }
       </div>
       {node.field_extra_body?.processed && (
        <div
        dangerouslySetInnerHTML={{ __html: node.field_extra_body?.processed }}
        className="mt-6 font-serif text-xl text-white leading-loose"
        />
        
      )}

        {
          node.field_image_columns?.uri && (
          node.field_image_columns[0].uri.url
          )
        }

       {
         
           node.field_image_columns.map((item =>
            {node.field_image_columns?.uri && (
              <>
              {console.log(item)}
              {process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${item.uri.url}
              <figure>
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${item.uri.url}`}
                  width={360}
                  height={240}
                  layout="responsive"
                  objectFit="cover"
                  alt={item.resourceIdObjMeta.alt}
                />
                {item.resourceIdObjMeta.title && (
                  <figcaption className="text-sm py-2 text-gray-600 text-center">
                    {item.resourceIdObjMeta.title}
                  </figcaption>
                )}
              </figure></>
            )}
            
           ))
         
       }

    </article>
  )
}

import React from "react"
import Dangerous from "./dangerous"
import PopupLink  from "./PopupLink"
import Image from "next/image"

export function NodeBasicPage({ node, ...props }) {
  
  return (
    <>
    <header>
    {node.field_hero_image?.uri && (
    <figure>
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.field_hero_image.uri.url}`}
                  layout="fill"
                  objectFit="cover"
                  alt={node.field_hero_image.resourceIdObjMeta.alt}
                  className="min-w-full min-h-screen brightness-75"
                />
                {node.field_hero_title && (
                  <figcaption className="text-8xl relative mb-96 w-4/5 -ml-8 mt-96 pt-24 inset-x-1/4  text-lime-600">
                    {node.field_hero_title}
                  </figcaption>
                )}
              </figure>
    )}

    
    <PopupLink ctaLabel={node.field_cta_label} overlayContent={node.field_overlay_content.value} overlayTitle={node.field_overlay_title} />
    </header>
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
            node.field_columns[0] && (
            node.field_columns.map((item => 
          
            <Dangerous  key={item.id} node={item} />
          
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

        
      <div className="grid grid-cols-3 gap-10  mt-6 mb-12">
       {
         
           node.field_image.map((item,index )=>
            {
              return (
              
              <figure key={index}>
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${item.uri.url}`}
                  width={360}
                  height={240}
                  layout="responsive"
                  objectFit="cover"
                  alt={item.resourceIdObjMeta.alt}
                  className="rounded shadow-lg"
                />
                {item.resourceIdObjMeta.title && (
                  <figcaption className="text-sm py-2 text-gray-600 text-center">
                    {item.resourceIdObjMeta.title}
                  </figcaption>
                )}
              </figure>
            
              )
                }
           )
       }
       </div>

    </article>
    </>
  )
}

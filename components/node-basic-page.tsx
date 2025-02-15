import React from "react"
import Dangerous from "./dangerous"
import PopupLink  from "./PopupLink"
import Image from "next/image"

export function NodeBasicPage({ node, ...props }) {
  
  return (
    <>
    <section className="py-32 bg-white md:px-0">
  <div className="items-center">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl mt-96 font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="block xl:inline-block mr-1">Beautiful Pages to</span>
            <span className="block text-indigo-600 xl:inline">Tell Your Story!</span>
          </h1>
          <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">It's never been easier to build beautiful websites that convey your message and tell your story.</p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
            
            <PopupLink ctaLabel={node.field_cta_label} overlayContent={node.field_overlay_content.value} overlayTitle={node.field_overlay_title} />
              
            
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
      {node.field_hero_image?.uri && (
    <figure>
                <Image
                  src={`${process.env.NEXT_PUBLIC_DRUPAL_BASE_URL}${node.field_hero_image.uri.url}`}
                  layout="responsive"
                  objectFit="cover"
                  width="360"
                  height="240"
                  alt={node.field_hero_image.resourceIdObjMeta.alt}
                  className="transform rotate-1"
                />
                
    </figure>
    )}
      </div>
    </div>
  </div>
</section>
<section className="grid grid-cols-3 gap-10  mt-48">
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
       </section>
<section className="grid grid-cols-3 gap-10">
          { 
            node.field_columns[0] && (
            node.field_columns.map((item => 
          
            <Dangerous  key={item.id} node={item} />
          
          ))
          
       )
       }
       </section>
<section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16">

     
        <div className="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
            <img src="https://cdn.devdojo.com/images/december2020/productivity.png" className="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 "/>
        </div>

        <div className="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Boost Productivity
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                Build an atmosphere that creates productivity in your organization and your company culture.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Maximize productivity and growth
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Speed past your competition
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Learn the top techniques
                </li>
            </ul>
        </div>
        
    </div>
    
    <div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

    
        <div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
            <h2 className="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                Automated Tasks
            </h2>
            <p className="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                Save time and money with our revolutionary services. We are the leaders in the industry.
            </p>
            <ul className="p-0 m-0 leading-6 border-0 border-gray-300">
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Automated task management workflow
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Detailed analytics for your data
                </li>
                <li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                    <span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-yellow-300 rounded-full"><span className="text-sm font-bold">✓</span></span> Some awesome integrations
                </li>
            </ul>
        </div>
   

       
        <div className="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
            <img src="https://cdn.devdojo.com/images/december2020/settings.png" className="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/>
        </div>
    </div>
</section>

    
    <article {...props}>
      
      {node.body?.processed && (
        <div
        dangerouslySetInnerHTML={{ __html: node.body?.processed }}
        className="mt-6 font-serif text-xl text-black leading-loose"
        />
        
      )}
      
        
       {node.field_extra_body?.processed && (
        <div
        dangerouslySetInnerHTML={{ __html: node.field_extra_body?.processed }}
        className="mt-6 font-serif text-xl text-black leading-loose"
        />
        
      )}

        
      

    </article>
    </>
  )
}

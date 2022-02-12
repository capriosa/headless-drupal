import Link from "next/link"
import { DrupalMenuLinkContent,DrupalNode,getMenu, getResourceTypeFromContext, getResourceFromContext } from "next-drupal"
import { useRouter } from "next/dist/client/router"


export function Layout({ children }) {
  
  return (
    <div className="bg-white">
      
      <main className="container mx-auto max-w-7xl py-10">{children} </main>
    </div>
  )
}

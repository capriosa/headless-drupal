import Link from "next/link"
import { DrupalMenuLinkContent,DrupalNode,getMenu, getResourceTypeFromContext, getResourceFromContext } from "next-drupal"
import { useRouter } from "next/dist/client/router"


export function Layout({ children }) {
  
  return (
    <div className="max-w-screen-md mx-auto px-6">
      
      <main className="container mx-auto py-10">{children} </main>
    </div>
  )
}

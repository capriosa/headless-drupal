import Link from "next/link"
import { DrupalMenuLinkContent,DrupalNode,getMenu, getResourceTypeFromContext, getResourceFromContext } from "next-drupal"
import { useRouter } from "next/dist/client/router"


export function Layout({ children }) {
  
  return (
    <div className="bg-indigo-600 min-h-screen px-6">
      
      <main className="container mx-auto max-w-screen-lg py-10">{children} </main>
    </div>
  )
}

import Link from "next/link"
import { useMenu } from "next-drupal"
import { useRouter } from "next/dist/client/router"

export function Layout({ children }) {
  const { asPath } = useRouter()
  const { tree } = useMenu("main")

  return (
    <div className="max-w-screen-md mx-auto px-6">
      <main className="container mx-auto py-10">{children}</main>
    </div>
  )
}

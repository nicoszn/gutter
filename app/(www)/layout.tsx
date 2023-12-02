
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'


export const metadata = {
  title: 'Home',
  description: "Spiral home page",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

          <div className="relative flex min-h-screen flex-col container p-4 lg:p-2">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <SiteFooter />
          </div>
  )
}

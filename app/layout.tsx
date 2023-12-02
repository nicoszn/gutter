import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/providers'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gutter',
  description: 'Secure Trading Platform',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={cn(
          "bg-background  font-sans antialiased",
          inter.className
        )}>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          </ThemeProvider>
          <Toaster />
          </body>
    </html>
  )
}

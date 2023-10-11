import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Kikapcsolódni vágyóknak egy ajándék.',
  description: 'Ha utazni szeretni, itt a helye.',
}

export default function RootLayout({
  children, // will be a page or nested layout
}) {
  return (
    <html lang='en'>
      <body>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Nav />
        <main className='app container mx-auto'>
          {/* <div className='container md:min-h-[500px] w-full'>
            <img className='bg-auto' src="assets/images/bg.png" alt="" />
          </div> */}
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
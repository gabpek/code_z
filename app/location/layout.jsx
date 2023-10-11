import React from 'react'

export const metadata = {
  title: 'A hely varázsa.',
  description: 'Ha utazni szeretne, itt a helye.',
}

export default function Location({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {children}
    </section>
  )
}

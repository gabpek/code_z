import React from 'react'

export const metadata = {
  title: 'Szolgáltatásaink.',
  description: 'Ha utazni szeretne, itt a helye.',
}

export default function Services({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {children}
    </section>
  )
}
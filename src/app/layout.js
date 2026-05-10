import './globals.css'

export const metadata = {
  title: "Brandon's Auto Detailing",
  description: 'Professional mobile car detailing services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

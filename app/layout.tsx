import '../styles/style.scss'
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Impa Akazi',
  description: 'Find verified and trusted artisans in your area',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

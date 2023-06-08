import '../styles/style.scss'
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Kichor - find verified artisans in your area',
  description: 'Find verified artisans, gym instructors, hair dressers and others in your area',
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

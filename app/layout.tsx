import '../styles/style.scss'
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: 'Slelinks - Social network for learners',
  description: 'Social network for learners',
  href: "https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,300,400&amp;display=swap"
  // rel: "stylesheet"
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

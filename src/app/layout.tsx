import './globals.css'
import Navbar from '@/components/Navbar'
import fondo from '../assets/fondo.jpg';
export const metadata = {
  title: 'Portafolio de Kenyth y Juliana',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
      style={{
        backgroundImage: `url(${fondo.src})`,
        backgroundSize: 'cover',
      }}
      >
      <Navbar />
        {children}
      </body>
    </html>
  )
}

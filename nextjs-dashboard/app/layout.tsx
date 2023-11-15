import './ui/global.css'; //Para obtener todos los estilos globales en todas las páginas.
import { roboto } from './ui/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {children}
        <footer className='py-10 flex justify-center items-center'>
          Este es el layout principal
        </footer>
      </body>
    </html>
  );
}

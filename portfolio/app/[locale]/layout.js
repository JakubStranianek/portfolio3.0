import './globals.css'
import { Inter } from 'next/font/google'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import "cal-sans";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Jakub Stranianek | Frontend Web Developer',
  description: 'Vitajte na mojej webstránke, kde sa venujem tvorbe moderných a atraktívnych webov. Som pripravený vytvoriť pre Vás webové stránky s dôrazom na skvelý dizajn a výbornú optimalizáciu. Objavte moje portfólio a neváhajte ma kontaktovať.',
}

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className + " selection:bg-[#13EF9A] selection:text-black"}>        
        {children}
      </body>
    </html>
  )
}

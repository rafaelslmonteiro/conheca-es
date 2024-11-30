import Link from 'next/link'

export function Header() {
  return (
    <header className="bg-sky-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="text-3xl font-bold mb-4 sm:mb-0 hover:text-sky-200 transition-colors">
            Conheça o ES
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-lg hover:text-sky-200 transition-colors">
                  Mapa
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-lg hover:text-sky-200 transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

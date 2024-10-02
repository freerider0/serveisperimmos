import Link from 'next/link'

export default function ResponsiveLogo() {
  return (
    <Link href="/" className="inline-block">
      {/* Desktop version */}
      <div className="hidden sm:flex items-center">
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
            RUMECH
          </span>
        </h1>
        <div className="mx-2 w-0.5 h-8 bg-gradient-to-b from-blue-600 to-teal-600 rounded-full" />
        <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase max-w-[100px] leading-tight">
          Para profesionales inmobiliarios
        </p>
      </div>

      {/* Mobile version */}
      <div className="sm:hidden flex flex-col items-center">
        <h1 className="text-2xl font-extrabold tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
            RUMECH
          </span>
        </h1>
        <div className="w-full h-0.5 my-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full" />
        <p className="text-xs font-medium text-muted-foreground tracking-wide uppercase text-center">
          Para profesionales inmobiliarios
        </p>
      </div>
    </Link>
  )
}
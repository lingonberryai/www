import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <div className="flex flex-col items-center w-full text-center">
      <img src={logo} alt="Lingonberry Logo" className="h-16 mb-4" />
      <div>
        <h1 className="text-3xl font-bold">Lingonberry Intelligence</h1>
        <span className="text-xl text-gray-400">
          リンゴンベリーインテリジェンス
        </span>
        <nav className="flex justify-center mt-2 space-x-4 text-lg font-bold text-center">
          <a href="https://tanaki.ai/" className="hover:text-red-500">
            Tanaki
          </a>
          <a
            href="https://tiktok.com/@lingonberryai"
            className="hover:text-red-500"
          >
            TikTok
          </a>
          <a
            href="mailto:careers@lingonberry.ai"
            className="hover:text-red-500"
          >
            Careers
          </a>
          <a href="#" className="hover:text-red-500">
            Investors
          </a>
        </nav>
      </div>
    </div>
  )
}

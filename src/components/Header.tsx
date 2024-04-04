import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Lingonberry Logo" className="mr-4 h-14" />
          <div>
            <h1 className="text-3xl font-bold">Lingonberry Intelligence</h1>
            <span className="text-xl">リンゴンベリーインテリジェンス</span>
          </div>
        </div>
        <nav className="flex space-x-4 text-lg font-bold">
          <a href="https://tanaki.ai/">Tanaki</a>
          <a href="#">HostOS</a>
          <a href="#">Careers</a>
          <a href="#">Investors</a>
        </nav>
      </div>
    </div>
  )
}

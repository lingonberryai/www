import logo from '../assets/logo.svg';

export default function Header() {
  return (
    <div className='bg-red-300'>
      <div className='float-left bg-red-300'>
        <img src={logo} alt="Lingonberry Logo" className="float-left mr-4 h-14" />
        <div>
          <h1 className='text-3xl font-bold'>Lingonberry Intelligence</h1>
          <span className='text-xl'>リンゴンベリーインテリジェンス</span>
        </div>
      </div>
      <div className='float-right bg-blue-400'>
      <span>hi links here</span>
      </div>
    </div>
  )
}

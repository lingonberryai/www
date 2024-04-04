import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import tanaki from './assets/tanaki-avatar.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <div className="width-xl">
        <div className="pt-20 text-center body">
          <img
            className="inline-block text-center w-80"
            src={tanaki}
            alt="tanaki"
          />
          <div>
            <div className="pb-2 text-2xl">
              Brand mascots run communities with
            </div>
            <div className="text-5xl font-bold">HostOS®</div>
          </div>

          <div className="mt-20 text-3xl">
            <p>
              Mascots brought to life with HostOS® are the ultimate brand
              ambassadors.
            </p>
            <p>
              Trained to work out of the box. <br /> Ready to learn your brand
              personality.
            </p>
          </div>
          <div>
            We’ve spent hundreds of hours training our base mascots to be
            collaborative and fun
          </div>
          <div>but to take it further...</div>
          <div>we offer a</div>
          <div>mascot training ground</div>
        </div>
      </div>
    </>
  )
}

export default App

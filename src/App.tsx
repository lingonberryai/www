import './App.css'
import Header from './components/Header'
import whatbro from './assets/what-bro.svg'
import Rive from '@rive-app/react-canvas'

export const Mascots = () => <Rive src="/mascots.riv" />

function App() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl pt-20">
          <Mascots />
          <div className="text-center">
            <div className="pb-2 text-2xl">Know your audience with</div>
            <div className="text-5xl font-bold">HostOS®</div>
            <div className="inline-block px-4 py-2 mt-2 bg-yellow-300 rounded-full">
              beta
            </div>
          </div>

          <div className="mt-24 text-center text-gray-500">
            <p className="text-4xl text-black">
              The ultimate brand ambassador.
            </p>
            <p className="mt-2 text-2xl">Trained to work out of the box.</p>
            <p className="text-2xl">Ready to learn your brand personality.</p>
          </div>

          <div className="mt-48 text-center">
            <img className="mt-24" src="social.png" alt="training" />

            <div className="text-4xl font-bold">Cross-Platform</div>
            <div className="mt-2 text-2xl text-gray-500">
              Hosts bring customers together, meeting them where they already
              are.
              <br />
            </div>
            <div className="mt-2 text-gray-500">
              Venues include TikTok, YouTube, Twitch, Discord, iMessage &amp;
              embedded in custom apps.{' '}
            </div>
          </div>

          <img
            className="mt-48 screenshot"
            src="kym.png"
            alt="know your meme"
          />

          <img
            className="mt-48 screenshot knowledge"
            src="kym-knowledge.png"
            alt="knowledge"
          />

          <img
            className="mt-48 screenshot"
            src="kym-playground.png"
            alt="host playground"
          />

          <img
            className="mt-48 screenshot results genie-drift"
            src="results.png"
            alt="results"
          />
        </div>
      </div>

      <div className="mt-40 text-center">
        <div className="text-4xl text-center">
          <p>Our Hosts reach & entertain millions of fans.</p>

          <br />
          <p className="mt-16 font-bold">Imagine</p>
          <br />
          <div className="text-2xl text-gray-500">
            <p>Weilding the #1 TikTok Live stream</p>
            <p>A buzzing Discord server</p>
            <p>Knowing your audience</p>
          </div>
          <br />
          <p className="text-3xl italic">You're in luck</p>
          <br />
        </div>
        <div className="inline-block px-8 py-4 mt-4 text-6xl font-bold text-center bg-yellow-300 rounded-full ">
          <a href="mailto:tanaki@lingonberry.ai?subject=I%20want%20to%20use%20HostOS%20to%20connect%20with%20my%20customers.%20How%20do%20I%20get%20access%3F">
            Try HostOS® Beta
          </a>
        </div>
      </div>

      <div className="pt-40 text-center">
        {' '}
        everything has a butt. this is the butt of the website. thanks for
        stopping by.
      </div>
    </>
  )
}

export default App

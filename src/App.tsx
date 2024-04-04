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
        <div className="max-w-xl pt-20">
          <Mascots />
          <div className="text-center">
            <div className="pb-2 text-2xl">
              Brand mascots run communities with
            </div>
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
          <div className="text-4xl text-center pt-36">
            We’ve spent thousands of hours training our base mascots to be{' '}
            <span className="text-orange-500 ">collaborative</span> &{' '}
            <span className="text-purple-500 ">fun</span>.
          </div>
          <div className="mt-8 text-2xl text-center text-gray-500">
            but to take it further...
          </div>
          <div className="text-2xl text-center text-gray-500">we offer a</div>
          <br />
          <br />
          <div className="italic font-bold text-center text-9xl">
            MASCOT TRAINING GROUND
          </div>
          <br />
          <div className="flex justify-center mt-48">
            <img
              className="block w-100"
              src={whatbro}
              alt="what does that mean bro?"
            />
          </div>
          <div className="mt-48 text-center">
            <div className="text-4xl font-bold">Train by Speaking</div>
            <div className="mt-2 text-2xl text-gray-500">
              Teach your Host to care for your customers in a language they
              understand. Personality, memes, in-jokes, the things that make
              your brand shine.
              <br />
              <br />
              You speak, your Host listens.
            </div>
          </div>

          <div className="mt-48 text-center">
            <div className="text-4xl font-bold">Design</div>
            <div className="mt-2 text-2xl text-gray-500">
              Customizing made as easy as playing a video game.
              <br />
            </div>
          </div>

          <div className="mt-48 text-center">
            <div className="text-4xl font-bold">Cross-Platform</div>
            <div className="mt-2 text-2xl text-gray-500">
              Hosts bring customers together, meeting them where they already
              are.
              <br />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 text-center">
        <div className="inline-block px-8 py-4 mt-2 text-6xl font-bold text-center bg-yellow-300 rounded-full ">
          <a href="mailto:tanaki@lingonberry.ai">Want to try the beta? →</a>
        </div>
      </div>

      <div className="pt-40 text-center">
        {' '}
        everything has a butt. this is the butt of the website.
      </div>
    </>
  )
}

export default App

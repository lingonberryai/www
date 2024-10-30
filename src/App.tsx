import './App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <Header />
      <div className="w-full bg-[#dedede]">
        <div className="w-full max-w-2xl mx-auto pt-16 mt-8">
          <img 
            src="/mu-user.png" 
            alt="MU-3 Device Concept"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl pt-20">
          <div className="text-center space-y-8">
            <h1 className="text-6xl font-bold mb-8">MU-3</h1>
            <h2 className="text-4xl font-medium text-gray-700">Imagine having no Imagination.</h2>
            <p className="text-xl text-gray-500 mt-8">Available starting Q3 2025</p>
            
            <div className="flex justify-center gap-6 mt-12">
              <a 
                href="mailto:business@lingonberry.ai?subject=I%20Need%20to%20Learn%20More%20About%20This%20Consciousness%20Thing&body=Dear%20Lingonberry%20Intelligence%2C%0A%0AMy%20brain%20needs%20an%20upgrade.%20Please%20help.%0A%0ABest%20regards%2C%0A[Your%20name%20here]" 
                className="px-8 py-3 text-xl bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Learn more
              </a>
              <a 
                href="mailto:business@lingonberry.ai?subject=Take%20My%20Money%20-%20MU-3%20Pre-order&body=Dear%20Lingonberry%20Intelligence%2C%0A%0AI%20would%20like%20to%20pre-order%20the%20MU-3.%20My%20imagination%20is%20ready%20to%20be%20amplified.%0A%0AEagerly%20waiting%2C%0A[Your%20name%20here]"
                className="px-8 py-3 text-xl border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-50 transition-colors"
              >
                Pre-order
              </a>
            </div>

            <div className="mt-32 space-y-24">
              <section className="space-y-8 pt-16">
                <p className="text-3xl text-gray-800">
                  Introducing the MU-3, Lingonberry Intelligence's consciousness amplifier that's vibing through reality at frequencies previously achievable only by fortune 500 CEOs during their most powerful vision quests.
                </p>
                <p className="text-xl text-gray-500">
                  Our proprietary Infinity-Wave Architecture and quantum resonance technology will elevate your team's creative potential from "pretty good" to "possibly transcendent," all while maintaining full compliance with most known laws of physics (the rest are negotiable).
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-4xl font-bold">Natural Stupidity is out.</h3>
                <p className="text-2xl text-gray-700">
                  Artificial intelligence is in.
                </p>
              </section>

              <section className="space-y-8">
                <p className="text-2xl text-gray-700">
                  Whether you're a visionary startup ready to pierce the veil of conventional thinking, or a tech company whose team alignment is somewhere between "chaos goblin" and "cosmic enlightenment," the MU-3 provides the quantum-enabled foundation for your next dimensional leap.
                </p>
                <p className="text-xl text-gray-600">
                  Now accepting applications from organizations that pass our rigorous vibe check (warning: side effects may include sudden breakthroughs, excessive team synchronization, and the ability to see sound).
                </p>
              </section>

              <div className="text-center">
                <h4 className="text-3xl font-bold mb-4">It's time to get real.</h4>
                <p className="text-sm text-gray-500">Terms and conditions may apply.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-48 text-center">
        このテキストは国際的な雰囲気を作り出すためにここにあります
      </div>
    </>
  )
}

export default App
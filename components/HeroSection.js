import { FaRocket, FaChartLine, FaUsers } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-dark">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-brand-purple/10 opacity-50 blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 pt-24 text-center relative z-10">
        <div className="mb-12">
          <h1 className="text-5xl font-bold mb-6 leading-tight text-white">
            Boost Your Brand with Premium Telegram Channels
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            We connect advertisers with high-impact Telegram communities
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <button className="bg-gradient-cta text-white px-12 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition shadow-xl transform hover:scale-105 duration-300">
            Get Started
          </button>
        </div>

        <div className="mt-16 flex justify-center space-x-12 text-white/70">
          <div className="flex items-center space-x-2">
            <FaRocket className="text-brand-blue text-3xl" />
            <span>50+ Partner Channels</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaUsers className="text-brand-purple text-3xl" />
            <span>1M+ Total Subscribers</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaChartLine className="text-brand-blue text-3xl" />
            <span>10K+ Ads Placed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

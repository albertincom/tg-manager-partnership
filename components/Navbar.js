import { FaTelegram } from 'react-icons/fa'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-dark/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FaTelegram className="text-3xl text-brand-blue" />
          <span className="font-bold text-xl">TeleAds</span>
        </div>
        
        <div className="hidden md:flex space-x-6 text-gray-300">
          <a href="#channels" className="hover:text-white hover:underline transition">Channels</a>
          <a href="#categories" className="hover:text-white hover:underline transition">Categories</a>
          <a href="#stats" className="hover:text-white hover:underline transition">Statistics</a>
          <a href="#contact" className="hover:text-white hover:underline transition">Contact</a>
        </div>
        
        <button className="bg-gradient-to-r from-brand-blue to-brand-purple text-white px-6 py-2 rounded-full hover:opacity-90 transition">
          Get Started
        </button>
      </div>
    </nav>
  )
}

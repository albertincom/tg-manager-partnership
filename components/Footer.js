import { 
  FaTelegram, 
  FaLinkedin, 
  FaEnvelope 
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-2">
            <FaTelegram className="text-3xl text-brand-blue" />
            <span className="font-bold text-xl">TeleAds</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-2xl text-gray-400 hover:text-brand-blue transition"><FaTelegram /></a>
            <a href="#" className="text-2xl text-gray-400 hover:text-brand-blue transition"><FaLinkedin /></a>
            <a href="#" className="text-2xl text-gray-400 hover:text-brand-blue transition"><FaEnvelope /></a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} TeleAds. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

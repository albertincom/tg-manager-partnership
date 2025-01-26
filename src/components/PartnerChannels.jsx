import { useState } from 'react'
import { 
  FaTelegram, 
  FaUsers, 
  FaChartLine, 
  FaSearch,
  FaCaretUp,
  FaCaretDown,
  FaLock,
  FaCommentDots,
  FaEye,
  FaStar
} from 'react-icons/fa'

const channels = [
  {
    id: 1,
    name: 'Offerzone 2.0',
    logo: 'https://via.placeholder.com/40',
    subscribers: 5759412,
    adsIndex: 'A',
    growth24h: -4261,
    growth30d: -66248,
    er: 6.69,
    views: 385305,
    category: 'Sales',
    isClosed: true
  },
  {
    id: 2,
    name: 'DealDost',
    logo: 'https://via.placeholder.com/40',
    subscribers: 3464139,
    adsIndex: 'C',
    growth24h: -2668,
    growth30d: -68431,
    er: 1.92,
    views: 66668,
    category: 'Sales',
    isClosed: false
  },
  {
    id: 3,
    name: 'Sarkari Result',
    logo: 'https://via.placeholder.com/40',
    subscribers: 2135372,
    adsIndex: 'A',
    growth24h: 1072,
    growth30d: 28926,
    er: 17.35,
    views: 370379,
    category: 'Education',
    isClosed: false
  },
  {
    id: 4,
    name: 'Maths By Gagan Pratap',
    logo: 'https://via.placeholder.com/40',
    subscribers: 1920588,
    adsIndex: 'A+',
    growth24h: -315,
    growth30d: 22233,
    er: 33.53,
    views: 643944,
    category: 'Education',
    isClosed: false
  },
  {
    id: 5,
    name: 'Crypto Daily Updates',
    logo: 'https://via.placeholder.com/40',
    subscribers: 892567,
    adsIndex: 'A+',
    growth24h: 2456,
    growth30d: 45678,
    er: 28.45,
    views: 254123,
    category: 'Crypto',
    isClosed: false
  },
  {
    id: 6,
    name: 'Tech Insider Pro',
    logo: 'https://via.placeholder.com/40',
    subscribers: 756234,
    adsIndex: 'B+',
    growth24h: 1234,
    growth30d: 15678,
    er: 12.87,
    views: 97234,
    category: 'Tech',
    isClosed: false
  },
  {
    id: 7,
    name: 'Gaming Universe',
    logo: 'https://via.placeholder.com/40',
    subscribers: 654321,
    adsIndex: 'B',
    growth24h: -567,
    growth30d: 8976,
    er: 15.43,
    views: 100897,
    category: 'Gaming',
    isClosed: false
  },
  {
    id: 8,
    name: 'Finance Masters',
    logo: 'https://via.placeholder.com/40',
    subscribers: 543210,
    adsIndex: 'A',
    growth24h: 789,
    growth30d: 12345,
    er: 22.56,
    views: 122345,
    category: 'Finance',
    isClosed: false
  }
]

const getAdsIndexStyle = (grade) => {
  const styles = {
    'A+': 'bg-gradient-to-r from-green-500 to-green-400 text-white',
    'A': 'bg-gradient-to-r from-green-400 to-green-300 text-white',
    'B+': 'bg-gradient-to-r from-blue-500 to-blue-400 text-white',
    'B': 'bg-gradient-to-r from-blue-400 to-blue-300 text-white',
    'C': 'bg-gradient-to-r from-yellow-500 to-yellow-400 text-white',
    'D': 'bg-gradient-to-r from-red-500 to-red-400 text-white'
  }
  return styles[grade] || 'bg-gray-500 text-white'
}

const GrowthValue = ({ value }) => {
  const isPositive = value > 0
  return (
    <div className={`flex items-center justify-end space-x-1
      ${isPositive ? 'text-green-400' : 'text-red-400'} font-medium`}>
      <span>{isPositive ? '+' : ''}{value.toLocaleString()}</span>
      {isPositive ? (
        <FaCaretUp className="text-lg" />
      ) : (
        <FaCaretDown className="text-lg" />
      )}
    </div>
  )
}

export default function PartnerChannels() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <section className="py-16 bg-dark-secondary" id="channels">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-brand-blue to-brand-purple bg-clip-text text-transparent">
            Our Telegram Channel Partnerships
          </h2>
          <p className="text-xl text-gray-300">
            Explore our growing network of high-performing Telegram communities
          </p>
        </div>

        <div className="mb-6 sticky top-0 bg-dark-secondary z-10 py-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search channels..."
              className="w-full bg-dark border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-800">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900/50">
                <th className="py-4 px-4 text-left text-gray-300 font-semibold">#</th>
                <th className="py-4 px-4 text-left text-gray-300 font-semibold">Channel Name</th>
                <th className="py-4 px-4 text-right text-gray-300 font-semibold">
                  <div className="flex items-center justify-end space-x-2">
                    <FaUsers className="text-brand-blue" />
                    <span>Subscribers</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center text-gray-300 font-semibold">
                  <div className="flex items-center justify-center space-x-2">
                    <FaStar className="text-brand-purple" />
                    <span>Ads Index</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-right text-gray-300 font-semibold">
                  <div className="flex items-center justify-end space-x-2">
                    <FaChartLine className="text-brand-blue" />
                    <span>Growth (24h)</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-right text-gray-300 font-semibold">Growth (30d)</th>
                <th className="py-4 px-4 text-right text-gray-300 font-semibold">
                  <div className="flex items-center justify-end space-x-2">
                    <FaCommentDots className="text-brand-purple" />
                    <span>ER</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-right text-gray-300 font-semibold">
                  <div className="flex items-center justify-end space-x-2">
                    <FaEye className="text-brand-blue" />
                    <span>Views</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-left text-gray-300 font-semibold">Category</th>
              </tr>
            </thead>
            <tbody>
              {channels.map((channel, index) => (
                <tr 
                  key={channel.id}
                  className="border-t border-gray-800 hover:bg-gradient-to-r hover:from-brand-blue/5 hover:to-brand-purple/5 transition-all duration-200"
                >
                  <td className="py-4 px-4 text-white font-medium">{index + 1}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <div className="relative">
                        <img 
                          src={channel.logo} 
                          alt={channel.name}
                          className="w-10 h-10 rounded-full border-2 border-gray-700"
                        />
                        <FaTelegram className="absolute -bottom-1 -right-1 text-brand-blue text-lg bg-dark-secondary rounded-full" />
                      </div>
                      <div className="ml-3">
                        <div className="flex items-center">
                          <span className="font-semibold text-white">{channel.name}</span>
                          {channel.isClosed && (
                            <div className="ml-2 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs flex items-center">
                              <FaLock className="mr-1" />
                              Closed
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-right text-white font-medium">
                    {channel.subscribers.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-bold shadow-lg ${getAdsIndexStyle(channel.adsIndex)}`}>
                      {channel.adsIndex}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <GrowthValue value={channel.growth24h} />
                  </td>
                  <td className="py-4 px-4 text-right">
                    <GrowthValue value={channel.growth30d} />
                  </td>
                  <td className="py-4 px-4 text-right text-white font-medium">
                    {channel.er}%
                  </td>
                  <td className="py-4 px-4 text-right text-white font-medium">
                    {channel.views.toLocaleString()}
                  </td>
                  <td className="py-4 px-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium
                      ${channel.category === 'Sales' ? 'bg-purple-500/20 text-purple-300' :
                        channel.category === 'Education' ? 'bg-blue-500/20 text-blue-300' :
                        channel.category === 'Crypto' ? 'bg-orange-500/20 text-orange-300' :
                        channel.category === 'Tech' ? 'bg-cyan-500/20 text-cyan-300' :
                        channel.category === 'Gaming' ? 'bg-red-500/20 text-red-300' :
                        channel.category === 'Finance' ? 'bg-green-500/20 text-green-300' :
                        'bg-gray-500/20 text-gray-300'}`}>
                      {channel.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="relative">
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-secondary to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
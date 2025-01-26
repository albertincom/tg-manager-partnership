import { 
  FaChartLine, 
  FaBitcoin, 
  FaNewspaper, 
  FaLaptopCode, 
  FaGraduationCap, 
  FaHeartbeat 
} from 'react-icons/fa'

const categories = [
  { 
    name: 'Finance', 
    icon: FaChartLine, 
    description: 'Investment insights and market trends' 
  },
  { 
    name: 'Crypto', 
    icon: FaBitcoin, 
    description: 'Blockchain and cryptocurrency updates' 
  },
  { 
    name: 'News', 
    icon: FaNewspaper, 
    description: 'Latest global and local news' 
  },
  { 
    name: 'Tech', 
    icon: FaLaptopCode, 
    description: 'Cutting-edge technology insights' 
  },
  { 
    name: 'Education', 
    icon: FaGraduationCap, 
    description: 'Learning and skill development' 
  },
  { 
    name: 'Lifestyle', 
    icon: FaHeartbeat, 
    description: 'Health, wellness, and personal growth' 
  }
]

export default function Categories() {
  return (
    <section className="py-16 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Channel Categories
        </h2>
        
        <div className="grid grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div 
                key={index} 
                className="bg-dark-secondary rounded-lg p-6 text-center hover:border-brand-blue border border-transparent transition duration-300"
              >
                <Icon className="text-5xl text-brand-purple mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-300">{category.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default function Testimonials() {
  const testimonials = [
    { name: 'Alex K.', revenue: '$5,420', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Sarah M.', revenue: '$3,750', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Mike T.', revenue: '$7,200', image: 'https://randomuser.me/api/portraits/men/3.jpg' }
  ]

  return (
    <div className="bg-dark-secondary py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Creator Success Stories</h2>
        
        <div className="flex justify-center space-x-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-dark rounded-xl p-6 text-center shadow-lg">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gradient-start"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gradient-start text-2xl font-bold">Monthly Revenue: {testimonial.revenue}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

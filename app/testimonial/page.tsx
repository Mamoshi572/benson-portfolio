export default function TestimonialsPage() {
  const testimonials = [
    {
      content: "Benson delivered exceptional work on our e-commerce platform. His attention to detail and technical expertise were outstanding.",
      author: "Client Name",
      role: "CEO, Company",
      rating: 5
    },
    // Add more...
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">What Clients Say</h2>
          <p className="text-gray-600 dark:text-gray-400">Trusted by startups and enterprises worldwide</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex mb-4">
                {[...Array(test.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">★</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{test.content}"</p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">{test.author}</p>
                <p className="text-sm text-gray-500">{test.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
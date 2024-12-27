export default function HowItWorks() {
    const steps = [
      { title: "1. Register", description: "Sign up as a donor and help save lives." },
      { title: "2. Search & Request", description: "Search for donors or request blood easily." },
      { title: "3. Donate & Save Lives", description: "Make a donation and become a hero." }
    ];
  
    return (
      <section className="py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold text-red-600">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
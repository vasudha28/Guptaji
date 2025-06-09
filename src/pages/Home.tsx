import HeroSection from '@/components/HeroSection';
import PortfolioCard from '@/components/PortfolioCard';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, TrendingUp, Shield } from 'lucide-react';

const Home = () => {
  const portfolioCompanies = [
    {
      name: "Startoon Labs",
      description: "Medical device company focused on R&D and manufacturing of innovative healthcare solutions.",
      image: "", // Add your image URL here
      redirectPath: "/portfolio/startoon-labs"
    },
    {
      name: "Exprs",
      description: "Enhances last-mile delivery efficiency for eCommerce brands with smart logistics solutions.",
      image: "", // Add your image URL here
      redirectPath: "/portfolio/exprs"
    },
    {
      name: "Cloud Tailor",
      description: "Personalized fashion solutions platform for women offering custom-fit clothing.",
      image: "", // Add your image URL here
      redirectPath: "/portfolio/cloud-tailor"
    },
    {
      name: "Settlin",
      description: "Online brokerage service for residential properties simplifying real estate transactions.",
      image: "", // Add your image URL here
      redirectPath: "/portfolio/settlin"
    },
    {
      name: "Dial4242",
      description: "App-based ambulance network for emergency care providing 24/7 medical assistance.",
      image: "", // Add your image URL here
      redirectPath: "/portfolio/dial4242"
    },
    {
      name: "TakeMe2Space",
      description: "Building orbital infrastructure accessible to all for the future of space technology.",
      image: "", // Add your image URL here
      redirectPath: "/portfolio/takeme2space"
    }
  ];

  const partners = [
    "T-Hub", "Headstart", "VJIM", "TITA", "Startup Hyderabad"
  ];

  const mediaFeatures = [
    "TV5 News", "The Hindu BusinessLine", "The Times of India", "Finance Magazine"
  ];

  const fundraisingSteps = [
    {
      title: "Application",
      description: "Submit your startup details through our platform"
    },
    {
      title: "Screening",
      description: "Our team reviews and evaluates your business model"
    },
    {
      title: "Pitching",
      description: "Present to our network of angel investors"
    },
    {
      title: "Investment",
      description: "Get funded with strategic value addition"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Guptaji Invests was founded with a mission to bridge the gap between innovative startups 
                and strategic investors from the Gupta community. We believe in safeguarding dreams and 
                assets through proven investment strategies.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our platform connects the right stakeholders through carefully curated pitching events, 
                ensuring that startups receive not just capital, but strategic value addition from 
                experienced investors.
              </p>
              <div className="flex items-center space-x-4">
                <Shield className="text-primary-600" size={24} />
                <span className="text-gray-800 font-semibold">Safeguarding Dreams & Assets</span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg animate-fade-in">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <TrendingUp className="text-gold-500 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-primary-800">Growth</div>
                  <div className="text-gray-600">Focused</div>
                </div>
                <div className="text-center">
                  <Users className="text-gold-500 mx-auto mb-2" size={32} />
                  <div className="text-2xl font-bold text-primary-800">Community</div>
                  <div className="text-gray-600">Driven</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundraising Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Fundraising Process</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures efficient connection between startups and investors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {fundraisingSteps.map((step, index) => (
              <div key={step.title} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover the innovative startups we've invested in across various sectors
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCompanies.map((company, index) => (
              <div key={company.name} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <PortfolioCard {...company} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={partner} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gray-100 p-6 rounded-lg hover:bg-gray-200 transition-colors">
                  <h3 className="font-semibold text-gray-800">{partner}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured On Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured On</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {mediaFeatures.map((media, index) => (
              <div key={media} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                  <h3 className="font-semibold text-white">{media}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

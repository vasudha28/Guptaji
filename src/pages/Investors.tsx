import { Users, TrendingUp, Shield, Award, Building, UserCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Investors = () => {
  const investorTypes = [
    {
      icon: Building,
      title: "Traditional HNI Businesspersons",
      description: "Successful business owners with deep industry knowledge and extensive networks"
    },
    {
      icon: UserCheck,
      title: "Professionals",
      description: "Chartered Accountants, Company Secretaries, and Legal professionals"
    },
    {
      icon: Award,
      title: "Corporate CXOs",
      description: "Senior executives from leading corporations bringing strategic insights"
    },
    {
      icon: Shield,
      title: "Bureaucrats",
      description: "Government officials and policy makers with regulatory expertise"
    }
  ];

  const benefits = [
    "Access to pre-screened startup deals",
    "Diversified investment portfolio",
    "Strategic networking opportunities",
    "Due diligence support",
    "Post-investment mentoring",
    "Regular performance updates"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Connect the Right Dots
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8 animate-fade-in">
            Join our network of 100+ angel investors and be part of India's strategic investment revolution
          </p>
          <Button 
            size="lg" 
            className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3 text-lg animate-fade-in"
            onClick={() => window.open('https://docs.google.com/forms/d/1qDpZxrzDgVb9FHhc1sdehHFQovE52H8VR_EOXXUJ0eA/viewform?edit_requested=true&pli=1', '_blank')}
          >
            Become an Investor
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary-800 mb-2">100+</div>
              <div className="text-gray-600">Angel Investors</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary-800 mb-2">₹50Cr+</div>
              <div className="text-gray-600">Investments Facilitated</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary-800 mb-2">7+</div>
              <div className="text-gray-600">Portfolio Companies</div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Investor Community</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diverse professionals bringing unique perspectives and expertise to startup investments
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investorTypes.map((type, index) => (
              <Card key={type.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <type.icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Invest With Us?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Join a community of strategic investors who understand the value of long-term 
                partnerships and sustainable growth in the startup ecosystem.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-2xl animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Investment Process</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Registration</h4>
                    <p className="text-blue-100 text-sm">Complete your investor profile and verification</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Deal Flow</h4>
                    <p className="text-blue-100 text-sm">Access curated startup investment opportunities</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Due Diligence</h4>
                    <p className="text-blue-100 text-sm">Comprehensive analysis and risk assessment</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold mb-1">Investment</h4>
                    <p className="text-blue-100 text-sm">Make informed investment decisions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Start Investing?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Join our exclusive network of angel investors and be part of the next generation of successful startups
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="bg-gold-500 hover:bg-gold-600 text-white px-8 py-3"
              onClick={() => window.open('https://docs.google.com/forms/d/1qDpZxrzDgVb9FHhc1sdehHFQovE52H8VR_EOXXUJ0eA/viewform?edit_requested=true&pli=1', '_blank')}
            >
              Apply Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investors;

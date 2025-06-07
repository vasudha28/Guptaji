
import { User, Target, Clock, MapPin, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const aboutSections = [
    {
      icon: Target,
      title: "What",
      content: "Guptaji Invests is an angel network that strategically connects startups with investors from the Gupta community, facilitating meaningful partnerships beyond just capital."
    },
    {
      icon: Lightbulb,
      title: "Why",
      content: "Our mission is to safeguard dreams and assets through proven investment strategies, ensuring both startups and investors achieve sustainable growth."
    },
    {
      icon: Clock,
      title: "When",
      content: "We focus on adapting to technological advancements and changing consumer behavior, staying ahead of market trends and opportunities."
    },
    {
      icon: MapPin,
      title: "Where",
      content: "We specialize in bridge round and inflection point stages in startups' growth journey, providing crucial support during pivotal moments."
    },
    {
      icon: Users,
      title: "Who",
      content: "Led by Ravi Teja Gupta with over a decade of experience in the startup ecosystem, backed by a network of seasoned professionals."
    },
    {
      icon: User,
      title: "How",
      content: "Our platform connects the right stakeholders through carefully curated pitching events, ensuring quality matches between startups and investors."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Guptaji Invests</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in">
            Empowering the next generation of entrepreneurs through strategic investments and community-driven growth
          </p>
        </div>
      </section>

      {/* About Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aboutSections.map((section, index) => (
              <Card key={section.title} className="hover:shadow-lg transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                    <section.icon className="text-primary-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Founder</h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <div className="w-32 h-32 bg-primary-600 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                  <span className="text-4xl font-bold text-white">RT</span>
                </div>
              </div>
              
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ravi Teja Gupta</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Seasoned entrepreneur with over a decade of experience in the startup ecosystem. 
                  Ravi has worked with renowned companies including Practo, Paytm, and Shiksha, 
                  bringing invaluable insights to the investment landscape.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Active member of Startup Leadership Program</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">TITA (Telangana IT Association) Member</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                    <span className="text-gray-700">Headstart Network Contributor</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-slide-in">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To be the leading strategic investment platform that bridges traditional business 
                acumen with innovative startup solutions, creating sustainable value for both 
                entrepreneurs and investors in the Indian ecosystem.
              </p>
            </div>
            
            <div className="animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-blue-100 leading-relaxed">
                To foster a thriving startup ecosystem by connecting passionate entrepreneurs 
                with strategic investors, providing not just capital but mentorship, networks, 
                and expertise that drive long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

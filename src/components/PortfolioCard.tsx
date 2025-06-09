import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

interface PortfolioCardProps {
  name: string;
  description: string;
  image: string;
  redirectPath: string;
}

const PortfolioCard = ({ name, description, image, redirectPath }: PortfolioCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(redirectPath);
  };

  return (
    <Card 
      className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
      onClick={handleClick}
    >
      <CardContent className="p-6">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4 overflow-hidden">
          <img 
            src={image} 
            alt={`${name} logo`} 
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;

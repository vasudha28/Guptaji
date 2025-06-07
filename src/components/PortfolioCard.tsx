
import { Card, CardContent } from '@/components/ui/card';

interface PortfolioCardProps {
  name: string;
  description: string;
  image?: string;
}

const PortfolioCard = ({ name, description, image }: PortfolioCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <CardContent className="p-6">
        <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
          <span className="text-2xl font-bold text-primary-800">{name.charAt(0)}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;

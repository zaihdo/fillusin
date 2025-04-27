import Image from 'next/image';

type Statistic = {
    title: string;
    description: string;
    picture: string;
};

interface StatisticCardProps {
    statistic: Statistic;
}

const Card: React.FC<StatisticCardProps> = ({ statistic }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <Image
        src={statistic.picture}
        alt={statistic.title}
        width={400}
        height={300}
        className="w-full"
      />
      {/* <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{statistic.title}</div>
        <p className="text-gray-700 text-base">{statistic.description}</p>
      </div> */}
    </div>
  );
};

export default Card;
import { motion } from 'framer-motion';

interface IMetrics {
  label: string;
  value: string | number;
  delta: string;
  color: string;
  icon: string;
}
interface CardProps {
  m: IMetrics;
  i: number;
}

const Card = ({ m, i }: CardProps) => {
  return (
    <motion.div
      key={i}
      whileHover={{ y: -5 }}
      className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all overflow-hidden group"
    >
      {/* Background Accent Decor */}
      <div
        className={`absolute -top-4 -right-4 w-20 h-20 bg-${m.color}-50 rounded-full group-hover:scale-150 transition-transform duration-500`}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className={`p-2 bg-${m.color}-50 rounded-xl text-lg`}>
            {m.icon}
          </span>
          <span className="text-sm font-medium text-gray-500">{m.label}</span>
        </div>
        <div className="text-3xl font-bold text-gray-900 mb-2">{m.value}</div>
        <span
          className={`text-[11px] font-bold px-2 py-0.5 rounded-md bg-${m.color}-50 text-${m.color}-700`}
        >
          {m.delta}
        </span>
      </div>
    </motion.div>
  );
};

export default Card;

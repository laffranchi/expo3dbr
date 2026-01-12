import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface TimelineItem {
  year: number;
  title: string;
  theme?: string;
  location: string;
  type: 'meeting' | 'edition' | 'event';
  slug: string;
}

const timelineData: TimelineItem[] = [
  { year: 2014, title: "Encontro da Comunidade", location: "", type: "meeting", slug: "encontro-2014" },
  { year: 2015, title: "Encontro 3D", location: "Hortolândia - SP", type: "meeting", slug: "encontro-2015" },
  { year: 2016, title: "1ª Expo3DBr", theme: "Juntos Criando o Futuro", location: "Hortolândia - SP", type: "edition", slug: "2016" },
  { year: 2017, title: "2ª Expo3DBr", theme: "Os Próximos Passos", location: "São Bernardo - SP", type: "edition", slug: "2017" },
  { year: 2018, title: "3ª Expo3DBr", theme: "Manufatura Aditiva", location: "Hortolândia - SP", type: "edition", slug: "2018" },
  { year: 2019, title: "4ª Expo3DBr", theme: "Educação 4.0", location: "Hortolândia - SP", type: "edition", slug: "2019" },
  { year: 2023, title: "Expo3DBr", theme: "O Retorno", location: "Hortolândia - SP", type: "edition", slug: "2023" },
  { year: 2024, title: "Expo3DBr", theme: "Maior Edição", location: "Hortolândia - SP", type: "edition", slug: "2024" },
];

const TimelineTrajetoria = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            <span className="text-white">TRAJETÓRIA </span>
            <span className="text-secondary italic">IMPRESSA</span>
          </h2>
          <p className="text-white/70 mt-2 text-sm md:text-base">
            Nossa jornada desde 2014
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-secondary/50 via-secondary to-secondary/50 transform -translate-y-1/2" />
            
            {/* Timeline Items */}
            <div className="flex justify-between items-center relative">
              {timelineData.map((item, index) => {
                const isTop = index % 2 === 0;
                
                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: isTop ? -20 : 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className={`flex flex-col items-center ${isTop ? 'flex-col' : 'flex-col-reverse'}`}
                  >
                    {/* Content */}
                    <Link
                      to={`/edicoes/${item.slug}`}
                      className={`group text-center ${isTop ? 'mb-4' : 'mt-4'} max-w-[100px] lg:max-w-[120px]`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="transition-all duration-300"
                      >
                        <span className="text-2xl lg:text-3xl font-bold text-white group-hover:text-secondary transition-colors">
                          {item.year}
                        </span>
                        <p className="text-xs lg:text-sm text-white/80 font-medium mt-1 leading-tight">
                          {item.title}
                        </p>
                        {item.theme && (
                          <p className="text-[10px] lg:text-xs text-white/60 mt-0.5 leading-tight">
                            {item.theme}
                          </p>
                        )}
                        {item.location && (
                          <p className="text-[10px] lg:text-xs text-secondary/80 mt-0.5">
                            {item.location}
                          </p>
                        )}
                      </motion.div>
                    </Link>
                    
                    {/* Dot */}
                    <div className="w-4 h-4 rounded-full bg-secondary border-4 border-primary shadow-lg shadow-secondary/30 group-hover:scale-125 transition-transform" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden">
          <div className="relative pl-8">
            {/* Vertical Line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-secondary to-secondary/50" />
            
            <div className="space-y-6">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.4 }}
                  className="relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-5 top-1 w-3 h-3 rounded-full bg-secondary border-2 border-primary shadow-md shadow-secondary/30" />
                  
                  {/* Content */}
                  <Link
                    to={`/edicoes/${item.slug}`}
                    className="block group"
                  >
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10 hover:border-secondary/30 transition-all"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-xl font-bold text-secondary">
                          {item.year}
                        </span>
                        <span className="text-sm font-medium text-white">
                          {item.title}
                        </span>
                      </div>
                      {item.theme && (
                        <p className="text-xs text-white/70 mt-1">
                          {item.theme}
                        </p>
                      )}
                      {item.location && (
                        <p className="text-xs text-secondary/70 mt-0.5">
                          📍 {item.location}
                        </p>
                      )}
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8 text-white/50 text-sm"
        >
          <span>Clique em um ano para ver detalhes</span>
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineTrajetoria;

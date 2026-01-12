import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
    <section className="relative py-8 md:py-10 overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-95" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
            <span className="text-white">TRAJETÓRIA </span>
            <span className="text-secondary italic">IMPRESSA</span>
          </h2>
          <p className="text-white/60 mt-1 text-sm">
            Clique em um ano para ver detalhes
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal Single Line */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute bottom-[7px] left-0 right-0 h-0.5 bg-secondary/60" />
            
            {/* Timeline Items */}
            <div className="flex justify-between items-end relative">
              <TooltipProvider delayDuration={100}>
                {timelineData.map((item, index) => (
                  <Tooltip key={item.year}>
                    <TooltipTrigger asChild>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08, duration: 0.3 }}
                      >
                        <Link
                          to={`/edicoes/${item.slug}`}
                          className="group flex flex-col items-center cursor-pointer"
                        >
                          <span className="text-lg lg:text-xl font-bold text-white group-hover:text-secondary transition-colors mb-2">
                            {item.year}
                          </span>
                          <div className="w-3.5 h-3.5 rounded-full bg-secondary border-2 border-primary shadow-md shadow-secondary/40 group-hover:scale-150 transition-transform" />
                        </Link>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent side="top" className="bg-background border-secondary/30">
                      <p className="font-semibold text-foreground">{item.title}</p>
                      {item.theme && <p className="text-sm text-muted-foreground">{item.theme}</p>}
                      {item.location && <p className="text-xs text-secondary">{item.location}</p>}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </div>

        {/* Mobile Timeline - Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4">
          <div className="relative min-w-max px-4">
            {/* Timeline Line */}
            <div className="absolute bottom-[7px] left-0 right-0 h-0.5 bg-secondary/60" />
            
            {/* Timeline Items */}
            <div className="flex gap-8 items-end relative">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={`/edicoes/${item.slug}`}
                    className="flex flex-col items-center"
                  >
                    <span className="text-base font-bold text-white mb-2">
                      {item.year}
                    </span>
                    <div className="w-3 h-3 rounded-full bg-secondary border-2 border-primary shadow-md shadow-secondary/40" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineTrajetoria;

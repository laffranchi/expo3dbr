export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface Edition {
  slug: string;
  title: string;
  year: number;
  location?: string;
  date?: string;
  subtitle?: string;
  coverImage: string;
  aftermovieUrl?: string;
  highlights?: Highlight[];
  images: GalleryImage[];
  category: 'edition' | 'event' | 'meeting';
}

// Edições principais
export const editions: Edition[] = [
  {
    slug: "2024",
    title: "Expo3DBR 2024",
    year: 2024,
    location: "Hortolândia – SP",
    date: "28 de Setembro de 2024",
    coverImage: "/images/edicoes/2024/20240928_150721-scaled.jpg",
    highlights: [
      { icon: "Users", title: "Expositores", description: "Mais de 50 marcas presentes" },
      { icon: "Mic", title: "Palestras", description: "12 talks sobre impressão 3D" },
      { icon: "Users2", title: "Comunidade", description: "Centenas de entusiastas reunidos" },
      { icon: "Trophy", title: "Campeonatos", description: "Competições e premiações" },
    ],
    images: [
      { src: "/images/edicoes/2024/20240928_150721-scaled.jpg", alt: "Expo3DBR 2024 - Foto 1" },
      { src: "/images/edicoes/2024/20240928_151721-scaled.jpg", alt: "Expo3DBR 2024 - Foto 2" },
      { src: "/images/edicoes/2024/20240928_151736-scaled.jpg", alt: "Expo3DBR 2024 - Foto 3" },
      { src: "/images/edicoes/2024/20240928_155841-scaled.jpg", alt: "Expo3DBR 2024 - Foto 4" },
      { src: "/images/edicoes/2024/20240928_160425-scaled.jpg", alt: "Expo3DBR 2024 - Foto 5" },
      { src: "/images/edicoes/2024/20240928_160520.jpg", alt: "Expo3DBR 2024 - Foto 6" },
      { src: "/images/edicoes/2024/20240928_162921-scaled.jpg", alt: "Expo3DBR 2024 - Foto 7" },
      { src: "/images/edicoes/2024/20240928_163431-scaled.jpg", alt: "Expo3DBR 2024 - Foto 8" },
      { src: "/images/edicoes/2024/20240928_163922-scaled.jpg", alt: "Expo3DBR 2024 - Foto 9" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-095722.png", alt: "Expo3DBR 2024 - Foto 10" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-095836.png", alt: "Expo3DBR 2024 - Foto 11" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-095849.png", alt: "Expo3DBR 2024 - Foto 12" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-095919.png", alt: "Expo3DBR 2024 - Foto 13" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100033.png", alt: "Expo3DBR 2024 - Foto 14" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100110.png", alt: "Expo3DBR 2024 - Foto 15" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100127.png", alt: "Expo3DBR 2024 - Foto 16" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100313.png", alt: "Expo3DBR 2024 - Foto 17" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100341.png", alt: "Expo3DBR 2024 - Foto 18" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100400.png", alt: "Expo3DBR 2024 - Foto 19" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100420.png", alt: "Expo3DBR 2024 - Foto 20" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100453.png", alt: "Expo3DBR 2024 - Foto 21" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100622.png", alt: "Expo3DBR 2024 - Foto 22" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100743.png", alt: "Expo3DBR 2024 - Foto 23" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100834.png", alt: "Expo3DBR 2024 - Foto 24" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100904.png", alt: "Expo3DBR 2024 - Foto 25" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-100930.png", alt: "Expo3DBR 2024 - Foto 26" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-101413.png", alt: "Expo3DBR 2024 - Foto 27" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-101427.png", alt: "Expo3DBR 2024 - Foto 28" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-101440.png", alt: "Expo3DBR 2024 - Foto 29" },
      { src: "/images/edicoes/2024/Captura-de-tela-2024-10-08-101504.png", alt: "Expo3DBR 2024 - Foto 30" },
    ],
    category: 'edition'
  },
  {
    slug: "2023",
    title: "Expo3DBR 2023",
    year: 2023,
    location: "Hortolândia – SP",
    date: "Abril de 2023",
    coverImage: "/images/edicoes/2023/DSC_0017_Easy-Resize.com_-400x284.jpg",
    highlights: [
      { icon: "Users", title: "Expositores", description: "Grandes marcas do setor" },
      { icon: "Mic", title: "Palestras", description: "Conteúdo técnico de qualidade" },
      { icon: "Users2", title: "Networking", description: "Conexões valiosas" },
    ],
    images: [
      { src: "/images/edicoes/2023/DSC_0017_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 1" },
      { src: "/images/edicoes/2023/DSC_0018_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 2" },
      { src: "/images/edicoes/2023/DSC_0046_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 3" },
      { src: "/images/edicoes/2023/DSC_0191_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 4" },
      { src: "/images/edicoes/2023/DSC_0242_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 5" },
      { src: "/images/edicoes/2023/DSC_0247_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 6" },
      { src: "/images/edicoes/2023/DSC_0274_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 7" },
      { src: "/images/edicoes/2023/DSC_0279_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 8" },
      { src: "/images/edicoes/2023/DSC_0366_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 9" },
      { src: "/images/edicoes/2023/DSC_0413_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 10" },
      { src: "/images/edicoes/2023/DSC_0466_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 11" },
      { src: "/images/edicoes/2023/DSC_0510_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 12" },
      { src: "/images/edicoes/2023/DSC_0526_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 13" },
      { src: "/images/edicoes/2023/DSC_0559_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 14" },
      { src: "/images/edicoes/2023/DSC_0588_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 15" },
      { src: "/images/edicoes/2023/DSC_0596_Easy-Resize.com_-1-400x284.jpg", alt: "Expo3DBR 2023 - Foto 16" },
      { src: "/images/edicoes/2023/DSC_0660_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 17" },
      { src: "/images/edicoes/2023/DSC_0692_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 18" },
    ],
    category: 'edition'
  },
  {
    slug: "mega-2022",
    title: "Mega Expo3dBr 2022",
    year: 2022,
    location: "Hortolândia – SP",
    coverImage: "https://expo3dbr.com.br/wp-content/uploads/2024/02/pevcqwc_orig-1.jpg",
    highlights: [
      { icon: "Zap", title: "Mega Evento", description: "Edição especial pós-pandemia" },
      { icon: "Users", title: "Expositores", description: "Retorno triunfal" },
    ],
    images: [
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/pevcqwc_orig-1.jpg", alt: "Mega Expo3dBr 2022 - Foto 1" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/psac_orig.jpg", alt: "Mega Expo3dBr 2022 - Foto 2" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/pnqcqvp_orig.jpg", alt: "Mega Expo3dBr 2022 - Foto 3" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/p2kc2c_orig.jpg", alt: "Mega Expo3dBr 2022 - Foto 4" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/p2wcsac_orig.jpg", alt: "Mega Expo3dBr 2022 - Foto 5" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/pnqnqce_orig.jpg", alt: "Mega Expo3dBr 2022 - Foto 6" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/pnw_orig.jpg", alt: "Mega Expo3dBr 2022 - Foto 7" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/pnqnw_orig.jpg", alt: "Mega Expo3dBr 2022 - Foto 8" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/pncqwv_orig.jpg", alt: "Mega Expo3dBr 2022 - Foto 9" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/pw_orig.jpg", alt: "Mega Expo3dBr 2022 - Foto 10" },
    ],
    category: 'edition'
  },
  {
    slug: "2019",
    title: "4ª Expo3DBr 2019",
    year: 2019,
    location: "Hortolândia – SP",
    coverImage: "/images/edicoes/2019/slide26_orig-400x284.jpg",
    highlights: [
      { icon: "Users", title: "Expositores", description: "Dezenas de empresas" },
      { icon: "Mic", title: "Palestras", description: "Conteúdo inovador" },
    ],
    images: [
      { src: "/images/edicoes/2019/slide26_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 1" },
      { src: "/images/edicoes/2019/slide25_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 2" },
      { src: "/images/edicoes/2019/slide24_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 3" },
      { src: "/images/edicoes/2019/slide23_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 4" },
      { src: "/images/edicoes/2019/slide22_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 5" },
      { src: "/images/edicoes/2019/slide21_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 6" },
      { src: "/images/edicoes/2019/slide20_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 7" },
      { src: "/images/edicoes/2019/slide19_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 8" },
      { src: "/images/edicoes/2019/slide18_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 9" },
      { src: "/images/edicoes/2019/slide17_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 10" },
      { src: "/images/edicoes/2019/slide16_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 11" },
      { src: "/images/edicoes/2019/slide15_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 12" },
      { src: "/images/edicoes/2019/slide14_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 13" },
      { src: "/images/edicoes/2019/slide13_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 14" },
      { src: "/images/edicoes/2019/slide12_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 15" },
      { src: "/images/edicoes/2019/slide11_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 16" },
      { src: "/images/edicoes/2019/slide10_orig-400x284.jpg", alt: "4ª Expo3DBr 2019 - Foto 17" },
    ],
    category: 'edition'
  },
  {
    slug: "2018",
    title: "3ª Expo3Dbr 2018",
    year: 2018,
    location: "Hortolândia – SP",
    coverImage: "/images/edicoes/2018/20180429-151739_orig-400x284.jpg",
    highlights: [
      { icon: "Users", title: "Expositores", description: "Crescimento expressivo" },
      { icon: "Camera", title: "Bastidores", description: "Registro completo" },
    ],
    images: [
      { src: "/images/edicoes/2018/20180429-151739_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 1" },
      { src: "/images/edicoes/2018/20180429-151753_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 2" },
      { src: "/images/edicoes/2018/20180429-151753_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 3" },
      { src: "/images/edicoes/2018/20180429-151759_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 4" },
      { src: "/images/edicoes/2018/20180429-152848_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 5" },
      { src: "/images/edicoes/2018/20180429-152903_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 6" },
      { src: "/images/edicoes/2018/20180429-153046_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 7" },
      { src: "/images/edicoes/2018/20180429-153210_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 8" },
      { src: "/images/edicoes/2018/20180429-153307_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 9" },
      { src: "/images/edicoes/2018/20180429-153442_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 10" },
      { src: "/images/edicoes/2018/20180429-153520_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 11" },
      { src: "/images/edicoes/2018/20180429-153634_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 12" },
      { src: "/images/edicoes/2018/20180429-153711_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 13" },
      { src: "/images/edicoes/2018/20180429-153738_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 14" },
      { src: "/images/edicoes/2018/20180429-153813_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 15" },
      { src: "/images/edicoes/2018/20180429-153831_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 16" },
      { src: "/images/edicoes/2018/20180429-153836_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 17" },
      { src: "/images/edicoes/2018/20180429-153840_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 18" },
      { src: "/images/edicoes/2018/20180429-153847_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 19" },
      { src: "/images/edicoes/2018/20180429-153855_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 20" },
      { src: "/images/edicoes/2018/img-20180427-wa0081_orig-400x284.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 21" },
      { src: "/images/edicoes/2018/img-20180428-wa0026_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 22" },
      { src: "/images/edicoes/2018/img-20180428-wa0044_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 23" },
      { src: "/images/edicoes/2018/img-20180428-wa0050_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 24" },
      { src: "/images/edicoes/2018/img-20180429-wa0016_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 25" },
      { src: "/images/edicoes/2018/img-20180429-wa0018_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 26" },
      { src: "/images/edicoes/2018/img-20180429-wa0020_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 27" },
      { src: "/images/edicoes/2018/img-20180429-wa0033_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 28" },
      { src: "/images/edicoes/2018/img-20180429-wa0034_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 29" },
      { src: "/images/edicoes/2018/img-20180430-wa0028_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 30" },
      { src: "/images/edicoes/2018/img-20180430-wa0031_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 31" },
      { src: "/images/edicoes/2018/img-20180430-wa0038_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 32" },
      { src: "/images/edicoes/2018/img-20180430-wa0069_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 33" },
      { src: "/images/edicoes/2018/img-20180430-wa0080_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 34" },
      { src: "/images/edicoes/2018/img-20180430-wa0091_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 35" },
      { src: "/images/edicoes/2018/img-20180430-wa0097_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 36" },
      { src: "/images/edicoes/2018/img-20180430-wa0110_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 37" },
      { src: "/images/edicoes/2018/img-20180501-wa0029_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 38" },
      { src: "/images/edicoes/2018/img-20180501-wa0042_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 39" },
      { src: "/images/edicoes/2018/img-20180501-wa0050_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 40" },
      { src: "/images/edicoes/2018/img-20180501-wa0058_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 41" },
      { src: "/images/edicoes/2018/img-20180501-wa0077_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 42" },
      { src: "/images/edicoes/2018/img-20180501-wa0093_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 43" },
      { src: "/images/edicoes/2018/img-20180501-wa0098_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 44" },
      { src: "/images/edicoes/2018/img-20180501-wa0100_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 45" },
      { src: "/images/edicoes/2018/img-20180501-wa0114_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 46" },
      { src: "/images/edicoes/2018/img-20180501-wa0116_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 47" },
      { src: "/images/edicoes/2018/img-20180501-wa0117_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 48" },
      { src: "/images/edicoes/2018/img-20180501-wa0118_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 49" },
      { src: "/images/edicoes/2018/img-20180501-wa0134_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 50" },
    ],
    category: 'edition'
  },
  {
    slug: "2017",
    title: "2ª Expo3Dbr 2017",
    year: 2017,
    location: "São Bernardo do Campo – SP",
    coverImage: "/images/edicoes/2017/9136_orig-1-400x284.jpg",
    highlights: [
      { icon: "MapPin", title: "Nova Cidade", description: "Expandindo horizontes" },
      { icon: "Users", title: "Comunidade", description: "Evento consolidado" },
    ],
    images: [
      { src: "/images/edicoes/2017/9136_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 1" },
      { src: "/images/edicoes/2017/1659661_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 2" },
      { src: "/images/edicoes/2017/2077303_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 3" },
      { src: "/images/edicoes/2017/3166569_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 4" },
      { src: "/images/edicoes/2017/3236090_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 5" },
      { src: "/images/edicoes/2017/3381516_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 6" },
      { src: "/images/edicoes/2017/4702970_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 7" },
      { src: "/images/edicoes/2017/5299712_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 8" },
      { src: "/images/edicoes/2017/5743853_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 9" },
      { src: "/images/edicoes/2017/5748545_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 10" },
      { src: "/images/edicoes/2017/6317175_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 11" },
      { src: "/images/edicoes/2017/6366695_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 12" },
      { src: "/images/edicoes/2017/6893208_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 13" },
      { src: "/images/edicoes/2017/6971346_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 14" },
      { src: "/images/edicoes/2017/7361869_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 15" },
      { src: "/images/edicoes/2017/7433187_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 16" },
      { src: "/images/edicoes/2017/8665139_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 17" },
      { src: "/images/edicoes/2017/8768661_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 18" },
      { src: "/images/edicoes/2017/9340956_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 19" },
      { src: "/images/edicoes/2017/9392187_orig-1-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 20" },
    ],
    category: 'edition'
  },
  {
    slug: "2016",
    title: "1ª Expo3Dbr 2016",
    year: 2016,
    location: "Hortolândia – SP",
    subtitle: "Juntos Criando o Futuro",
    coverImage: "/images/edicoes/2016/20170501-095443_orig-400x284.jpg",
    highlights: [
      { icon: "Sparkles", title: "Primeira Edição", description: "O início de uma história" },
      { icon: "Heart", title: "Comunidade", description: "Sonho compartilhado" },
    ],
    images: [
      { src: "/images/edicoes/2016/20170501-095443_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 1" },
      { src: "/images/edicoes/2016/20170501-095453_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 2" },
      { src: "/images/edicoes/2016/20170501-095458_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 3" },
      { src: "/images/edicoes/2016/20170501-144433_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 4" },
      { src: "/images/edicoes/2016/20170501-144514_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 5" },
      { src: "/images/edicoes/2016/20170501-144948_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 6" },
      { src: "/images/edicoes/2016/20170501-145036_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 7" },
      { src: "/images/edicoes/2016/20170501-145252_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 8" },
      { src: "/images/edicoes/2016/20170501-145356_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 9" },
      { src: "/images/edicoes/2016/20170501-145430_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 10" },
      { src: "/images/edicoes/2016/20170501-145748_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 11" },
      { src: "/images/edicoes/2016/20170501-145959_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 12" },
      { src: "/images/edicoes/2016/20170501-151930_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 13" },
      { src: "/images/edicoes/2016/20170501-152041_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 14" },
      { src: "/images/edicoes/2016/20170501-152248_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 15" },
      { src: "/images/edicoes/2016/20170501-152726_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 16" },
      { src: "/images/edicoes/2016/img-20170501-wa0047_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 17" },
      { src: "/images/edicoes/2016/img-20170501-wa0049_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 18" },
      { src: "/images/edicoes/2016/img-20170501-wa0055_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 19" },
      { src: "/images/edicoes/2016/img-20170501-wa0056_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 20" },
      { src: "/images/edicoes/2016/img-20170501-wa0058_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 21" },
      { src: "/images/edicoes/2016/img-20170501-wa0072_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 22" },
      { src: "/images/edicoes/2016/img-20170501-wa0073_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 23" },
      { src: "/images/edicoes/2016/img-20170501-wa0086_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 24" },
      { src: "/images/edicoes/2016/img-20170502-wa0055_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 25" },
      { src: "/images/edicoes/2016/img-20170502-wa0059_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 26" },
      { src: "/images/edicoes/2016/img-20170502-wa0062_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 27" },
      { src: "/images/edicoes/2016/img-20170502-wa0091_orig-400x284.jpg", alt: "1ª Expo3Dbr 2016 - Foto 28" },
    ],
    category: 'edition'
  },
];

// Eventos que participamos
export const eventos: Edition[] = [
  {
    slug: "sebrae-2023",
    title: "Sebrae 2023 - MS",
    year: 2023,
    location: "Mato Grosso do Sul",
    coverImage: "/images/edicoes/2023/20230331-092435-hdr_orig-400x284.jpg",
    images: [
      { src: "/images/edicoes/2023/20230331-092435-hdr_orig-400x284.jpg", alt: "Sebrae 2023 MS - Foto 1" },
      { src: "/images/edicoes/2023/20230401-121514-hdr_orig-400x284.jpg", alt: "Sebrae 2023 MS - Foto 2" },
      { src: "/images/edicoes/2023/img-20230401-wa0016_orig-400x284.jpg", alt: "Sebrae 2023 MS - Foto 3" },
      { src: "/images/edicoes/2023/img-20230401-wa0017_orig-400x284.jpg", alt: "Sebrae 2023 MS - Foto 4" },
      { src: "/images/edicoes/2023/img-20230403-wa0029_orig-400x284.jpg", alt: "Sebrae 2023 MS - Foto 5" },
      { src: "/images/edicoes/2023/img-20230217-wa0067_orig-400x284.jpg", alt: "Sebrae 2023 MS - Foto 6" },
    ],
    category: 'event'
  },
  {
    slug: "expo-isa-2019",
    title: "Expo3DBr na EXPO ISA Campinas 2019",
    year: 2019,
    location: "Campinas – SP",
    coverImage: "/images/eventos/expo-isa-2019/psss_orig-400x284.jpg",
    images: [
      { src: "/images/eventos/expo-isa-2019/psss_orig-400x284.jpg", alt: "EXPO ISA Campinas 2019 - Foto 1" },
      { src: "/images/eventos/expo-isa-2019/psckvc_orig-400x284.jpg", alt: "EXPO ISA Campinas 2019 - Foto 2" },
      { src: "/images/eventos/expo-isa-2019/pcvc_orig-400x284.jpg", alt: "EXPO ISA Campinas 2019 - Foto 3" },
      { src: "/images/eventos/expo-isa-2019/pevcqwc_orig-400x284.jpg", alt: "EXPO ISA Campinas 2019 - Foto 4" },
      { src: "/images/eventos/expo-isa-2019/pecfqwedh_orig-400x284.jpg", alt: "EXPO ISA Campinas 2019 - Foto 5" },
      { src: "/images/eventos/expo-isa-2019/pd_orig-400x284.jpg", alt: "EXPO ISA Campinas 2019 - Foto 6" },
    ],
    category: 'event'
  },
];

// Encontros
export const encontros: Edition[] = [
  {
    slug: "encontro-2015",
    title: "Encontro 3D 2015",
    year: 2015,
    location: "Hortolândia – SP",
    coverImage: "/images/edicoes/2015/encontro-2015_orig.jpeg",
    images: [
      { src: "/images/edicoes/2015/encontro-2015_orig.jpeg", alt: "Encontro 3D 2015 - Foto 1" },
    ],
    category: 'meeting'
  },
  {
    slug: "encontro-2014",
    title: "Encontro de 2014",
    year: 2014,
    coverImage: "/images/encontros/2014/whatsapp-image-2019-02-22-at-10-16-48.jpeg",
    images: [
      { src: "/images/encontros/2014/whatsapp-image-2019-02-22-at-10-16-48.jpeg", alt: "Encontro de 2014 - Foto 1" },
    ],
    category: 'meeting'
  },
];

// Helper function to get edition by slug
export const getEditionBySlug = (slug: string): Edition | undefined => {
  return [...editions, ...eventos, ...encontros].find(e => e.slug === slug);
};

// Helper function to get all editions
export const getAllEditions = (): Edition[] => {
  return [...editions, ...eventos, ...encontros];
};

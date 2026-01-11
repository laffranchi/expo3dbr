import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  src: string;
  alt: string;
}

interface Edition {
  title: string;
  location?: string;
  images: GalleryImage[];
}

const editions: Edition[] = [
  {
    title: "Expo3DBR 2024",
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
  },
  {
    title: "Expo3DBR 2023",
    images: [
      { src: "/images/edicoes/2023/20230331-092435-hdr_orig-400x284.jpg", alt: "Expo3DBR 2023 - Foto 1" },
      { src: "/images/edicoes/2023/20230401-121514-hdr_orig-400x284.jpg", alt: "Expo3DBR 2023 - Foto 2" },
      { src: "/images/edicoes/2023/DSC_0017_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 3" },
      { src: "/images/edicoes/2023/DSC_0018_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 4" },
      { src: "/images/edicoes/2023/DSC_0046_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 5" },
      { src: "/images/edicoes/2023/DSC_0191_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 6" },
      { src: "/images/edicoes/2023/DSC_0242_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 7" },
      { src: "/images/edicoes/2023/DSC_0247_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 8" },
      { src: "/images/edicoes/2023/DSC_0274_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 9" },
      { src: "/images/edicoes/2023/DSC_0279_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 10" },
      { src: "/images/edicoes/2023/DSC_0366_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 11" },
      { src: "/images/edicoes/2023/DSC_0413_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 12" },
      { src: "/images/edicoes/2023/DSC_0466_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 13" },
      { src: "/images/edicoes/2023/DSC_0510_Easy-Resize.com_-400x284.jpg", alt: "Expo3DBR 2023 - Foto 14" },
    ],
  },
  {
    title: "Mega Expo3dBr 2022",
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
  },
  {
    title: "4ª Expo3DBr 2019",
    location: "Hortolândia – SP",
    images: [
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp9_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 1" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp8_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 2" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp7_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 3" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp6_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 4" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp5_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 5" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp4_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 6" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp3_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 7" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp2_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 8" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp15_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 9" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp14_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 10" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp13_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 11" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp12_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 12" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp11_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 13" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp10_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 14" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp1_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 15" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp18_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 16" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp17_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 17" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/4edp16_orig.jpg", alt: "4ª Expo3DBr 2019 - Foto 18" },
    ],
  },
  {
    title: "3ª Expo3Dbr 2018",
    location: "Hortolândia – SP",
    images: [
      { src: "/images/edicoes/2018/20180429-112401_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 1" },
      { src: "/images/edicoes/2018/20180429-151739_orig-400x284.jpg", alt: "3ª Expo3Dbr 2018 - Foto 2" },
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
    ],
  },
  {
    title: "2ª Expo3Dbr 2017",
    location: "São Bernardo do Campo – SP",
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
      { src: "/images/edicoes/2017/20170501-095443_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 21" },
      { src: "/images/edicoes/2017/20170501-095453_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 22" },
      { src: "/images/edicoes/2017/20170501-095458_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 23" },
      { src: "/images/edicoes/2017/20170501-144433_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 24" },
      { src: "/images/edicoes/2017/20170501-144514_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 25" },
      { src: "/images/edicoes/2017/20170501-144948_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 26" },
      { src: "/images/edicoes/2017/20170501-145036_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 27" },
      { src: "/images/edicoes/2017/20170501-145252_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 28" },
      { src: "/images/edicoes/2017/20170501-145356_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 29" },
      { src: "/images/edicoes/2017/20170501-145430_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 30" },
      { src: "/images/edicoes/2017/20170501-145748_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 31" },
      { src: "/images/edicoes/2017/20170501-145959_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 32" },
      { src: "/images/edicoes/2017/20170501-151930_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 33" },
      { src: "/images/edicoes/2017/20170501-152041_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 34" },
      { src: "/images/edicoes/2017/20170501-152248_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 35" },
      { src: "/images/edicoes/2017/20170501-152726_orig-400x284.jpg", alt: "2ª Expo3Dbr 2017 - Foto 36" },
    ],
  },
  {
    title: "1ª Expo3Dbr 2016",
    location: "Hortolândia – SP",
    images: [
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp24_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 1" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp23_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 2" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp22_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 3" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp21_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 4" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp20_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 5" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp19_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 6" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp18_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 7" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp17_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 8" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp16_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 9" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp15_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 10" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp14_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 11" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp13_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 12" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp12_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 13" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp11_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 14" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp10_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 15" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp9_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 16" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp8_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 17" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp7_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 18" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp6_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 19" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp5_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 20" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp4_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 21" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp3_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 22" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp2_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 23" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/02/1edp1_orig.jpg", alt: "1ª Expo3Dbr 2016 - Foto 24" },
    ],
  },
];

const EditionGallery = ({ edition, index }: { edition: Edition; index: number }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="py-12"
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
          {edition.title}
        </h2>
        {edition.location && (
          <p className="text-muted-foreground text-lg">{edition.location}</p>
        )}
        <p className="text-muted-foreground">{edition.images.length} fotos</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {edition.images.map((image, imgIndex) => (
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: imgIndex * 0.02 }}
            className="aspect-[3/2] overflow-hidden rounded-lg cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-background/95 backdrop-blur-sm border-border">
          {selectedImage && (
            <img
              src={selectedImage.replace("-768x512", "")}
              alt="Foto ampliada"
              className="w-full h-auto rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

const EdicoesAnteriores = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Edições Anteriores
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90 mb-4"
          >
            Confira o que rolou nas últimas edições da Expo3DBr
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/80 max-w-3xl mx-auto"
          >
            Conheça a história da Expo3dBr, eventos que participamos e confira como foi as últimas edições.
          </motion.p>
        </div>
      </section>

      {/* Galleries */}
      <div className="container mx-auto px-4">
        {editions.map((edition, index) => (
          <EditionGallery key={edition.title} edition={edition} index={index} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default EdicoesAnteriores;

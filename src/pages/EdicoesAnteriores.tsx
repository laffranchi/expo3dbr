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
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-01-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 1" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-02-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 2" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-03-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 3" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-04-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 4" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-05-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 5" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-06-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 6" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-07-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 7" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-08-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 8" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-09-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 9" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-10-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 10" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-11-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 11" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-12-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 12" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-13-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 13" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-14-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 14" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-15-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 15" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-16-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 16" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-17-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 17" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-18-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 18" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-19-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 19" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-20-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 20" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-21-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 21" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-22-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 22" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-23-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 23" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-24-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 24" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-25-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 25" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-26-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 26" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-27-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 27" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/09/expo3dbr-24-28-768x512.jpeg", alt: "Expo3DBR 2024 - Foto 28" },
    ],
  },
  {
    title: "Expo3DBR 2023",
    images: [
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-01-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 1" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-02-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 2" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-03-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 3" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-04-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 4" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-05-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 5" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-06-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 6" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-07-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 7" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-08-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 8" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-09-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 9" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-10-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 10" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-11-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 11" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-12-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 12" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-13-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 13" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-14-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 14" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-15-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 15" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-16-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 16" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-17-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 17" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2024/01/expo3dbr-23-18-768x512.jpeg", alt: "Expo3DBR 2023 - Foto 18" },
    ],
  },
  {
    title: "Mega Expo3dBr 2022",
    images: [
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-22-01-768x512.jpeg", alt: "Mega Expo3dBr 2022 - Foto 1" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-22-02-768x512.jpeg", alt: "Mega Expo3dBr 2022 - Foto 2" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-22-03-768x512.jpeg", alt: "Mega Expo3dBr 2022 - Foto 3" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-22-04-768x512.jpeg", alt: "Mega Expo3dBr 2022 - Foto 4" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-22-05-768x512.jpeg", alt: "Mega Expo3dBr 2022 - Foto 5" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-22-06-768x512.jpeg", alt: "Mega Expo3dBr 2022 - Foto 6" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-22-07-768x512.jpeg", alt: "Mega Expo3dBr 2022 - Foto 7" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-22-08-768x512.jpeg", alt: "Mega Expo3dBr 2022 - Foto 8" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-22-09-768x512.jpeg", alt: "Mega Expo3dBr 2022 - Foto 9" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-22-10-768x512.jpeg", alt: "Mega Expo3dBr 2022 - Foto 10" },
    ],
  },
  {
    title: "4ª Expo3DBr 2019",
    location: "Hortolândia - SP",
    images: [
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-01-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 1" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-02-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 2" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-03-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 3" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-04-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 4" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-05-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 5" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-06-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 6" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-07-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 7" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-08-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 8" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-09-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 9" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-10-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 10" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-11-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 11" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-12-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 12" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-13-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 13" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-14-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 14" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-15-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 15" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-16-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 16" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-17-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 17" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-19-18-768x512.jpeg", alt: "4ª Expo3DBr 2019 - Foto 18" },
    ],
  },
  {
    title: "3ª Expo3Dbr 2018",
    location: "Hortolândia - SP",
    images: [
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-01-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 1" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-02-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 2" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-03-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 3" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-04-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 4" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-05-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 5" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-06-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 6" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-07-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 7" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-08-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 8" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-09-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 9" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-10-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 10" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-11-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 11" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-12-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 12" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-13-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 13" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-14-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 14" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-15-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 15" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-16-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 16" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-17-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 17" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-18-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 18" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-19-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 19" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-20-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 20" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-21-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 21" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-22-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 22" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-23-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 23" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-24-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 24" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-25-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 25" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-26-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 26" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-27-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 27" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-28-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 28" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-29-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 29" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-30-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 30" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-31-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 31" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-32-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 32" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-33-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 33" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-34-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 34" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-35-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 35" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-36-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 36" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-37-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 37" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-38-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 38" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-39-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 39" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-40-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 40" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-41-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 41" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-42-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 42" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-43-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 43" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-44-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 44" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-45-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 45" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-46-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 46" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-47-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 47" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-18-48-768x512.jpeg", alt: "3ª Expo3Dbr 2018 - Foto 48" },
    ],
  },
  {
    title: "2ª Expo3Dbr 2017",
    location: "São Bernardo do Campo - SP",
    images: [
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-01-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 1" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-02-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 2" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-03-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 3" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-04-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 4" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-05-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 5" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-06-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 6" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-07-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 7" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-08-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 8" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-09-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 9" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-10-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 10" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-11-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 11" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-12-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 12" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-13-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 13" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-14-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 14" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-15-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 15" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-16-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 16" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-17-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 17" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-18-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 18" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-19-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 19" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-17-20-768x512.jpeg", alt: "2ª Expo3Dbr 2017 - Foto 20" },
    ],
  },
  {
    title: "1ª Expo3Dbr 2016",
    location: "Hortolândia - SP",
    images: [
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-01-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 1" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-02-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 2" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-03-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 3" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-04-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 4" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-05-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 5" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-06-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 6" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-07-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 7" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-08-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 8" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-09-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 9" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-10-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 10" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-11-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 11" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-12-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 12" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-13-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 13" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-14-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 14" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-15-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 15" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-16-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 16" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-17-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 17" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-18-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 18" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-19-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 19" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-20-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 20" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-21-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 21" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-22-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 22" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-23-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 23" },
      { src: "https://expo3dbr.com.br/wp-content/uploads/2023/05/expo3dbr-16-24-768x512.jpeg", alt: "1ª Expo3Dbr 2016 - Foto 24" },
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

import { Search, MapPin, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  selectedCity: string;
  setSelectedCity: (city: string) => void;
}

const categories = [
  { value: "all", label: "Todas Categorias" },
  { value: "shows", label: "Shows" },
  { value: "festas", label: "Festas" },
  { value: "conferencias", label: "Conferências" },
  { value: "workshops", label: "Workshops" },
  { value: "esportes", label: "Esportes" },
  { value: "teatro", label: "Teatro" },
];

const cities = [
  { value: "all", label: "Todas Cidades" },
  { value: "sao-paulo", label: "São Paulo" },
  { value: "rio-de-janeiro", label: "Rio de Janeiro" },
  { value: "belo-horizonte", label: "Belo Horizonte" },
  { value: "brasilia", label: "Brasília" },
  { value: "curitiba", label: "Curitiba" },
  { value: "salvador", label: "Salvador" },
];

const SearchBar = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  selectedCity,
  setSelectedCity,
}: SearchBarProps) => {
  return (
    <div className="glass-card rounded-2xl p-4 md:p-6 mb-8">
      <div className="flex flex-col md:flex-row gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar eventos, artistas, locais..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 bg-background/50"
          />
        </div>

        {/* Category Select */}
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full md:w-[180px] h-12 bg-background/50">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.value} value={cat.value}>
                {cat.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* City Select */}
        <Select value={selectedCity} onValueChange={setSelectedCity}>
          <SelectTrigger className="w-full md:w-[180px] h-12 bg-background/50">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Cidade" />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city.value} value={city.value}>
                {city.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Button className="h-12 px-8 gradient-primary text-primary-foreground font-semibold">
          <Search className="h-4 w-4 mr-2" />
          Buscar
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;

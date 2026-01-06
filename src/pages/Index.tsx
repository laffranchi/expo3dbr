import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import EventCard from "@/components/EventCard";
import { mockEvents } from "@/data/mockEvents";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCity, setSelectedCity] = useState("all");

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      event.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesCity =
      selectedCity === "all" ||
      event.city.toLowerCase().replace(" ", "-").includes(selectedCity);

    return matchesSearch && matchesCategory && matchesCity;
  });

  const categories = [
    "Todos",
    "Shows",
    "Festas",
    "Conferências",
    "Workshops",
    "Esportes",
    "Teatro",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        <HeroSection />

        <section className="container mx-auto px-4 py-8">
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
          />

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <Badge
                key={cat}
                variant={
                  (cat === "Todos" && selectedCategory === "all") ||
                  cat.toLowerCase() === selectedCategory
                    ? "default"
                    : "outline"
                }
                className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                  (cat === "Todos" && selectedCategory === "all") ||
                  cat.toLowerCase() === selectedCategory
                    ? "gradient-primary text-primary-foreground border-0"
                    : "hover:bg-muted"
                }`}
                onClick={() =>
                  setSelectedCategory(cat === "Todos" ? "all" : cat.toLowerCase())
                }
              >
                {cat}
              </Badge>
            ))}
          </div>

          {/* Events Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-foreground">
                Eventos em Destaque
              </h2>
              <span className="text-muted-foreground text-sm">
                {filteredEvents.length} eventos encontrados
              </span>
            </div>

            {filteredEvents.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredEvents.map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  Nenhum evento encontrado com os filtros selecionados.
                </p>
              </div>
            )}
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;

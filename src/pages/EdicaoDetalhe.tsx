import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EditionHero from "@/components/edicoes/EditionHero";
import EditionHighlights from "@/components/edicoes/EditionHighlights";
import PhotoGallery from "@/components/edicoes/PhotoGallery";
import CTASection from "@/components/edicoes/CTASection";
import { getEditionBySlug } from "@/data/editions";

const EdicaoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const edition = slug ? getEditionBySlug(slug) : undefined;

  if (!edition) {
    return <Navigate to="/edicoes-anteriores" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <EditionHero edition={edition} />
      
      {edition.highlights && edition.highlights.length > 0 && (
        <EditionHighlights highlights={edition.highlights} />
      )}
      
      <div className="container mx-auto px-4">
        <PhotoGallery images={edition.images} />
      </div>
      
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default EdicaoDetalhe;

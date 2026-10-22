import AmbientBackground from "../components/AmbientBackground";
import PromoBar from "../components/PromoBar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MovingRibbons from "../components/MovingRibbons";
import ReviewsSection from "../components/ReviewsSection";
import FooterContact from "../components/FooterContact";
import ChatbotWidget from "../components/ChatbotWidget";

export default function HomePage() {
  const handleBookClick = (selectedItem) => {
    console.log("Reserva solicitada para:", selectedItem || "Cita General VIP");
  };

  return (
    <div className="site-shell">
      {/* Doble fondo de video dinámico con transición suave al hacer scroll */}
      <AmbientBackground />

      {/* Cinta promocional superior en movimiento continuo */}
      <PromoBar />

      {/* Barra de navegación con efecto de resplandor al pasar el mouse */}
      <Navbar onBookClick={() => handleBookClick()} />

      {/* Contenido completo del Index */}
      <main>
        <HeroSection onBookClick={handleBookClick} />
        <MovingRibbons />
        <ReviewsSection onBookClick={handleBookClick} />
      </main>

      {/* Pie de página tradicional con reservas, redes sociales, correo y ubicación */}
      <FooterContact onBookClick={handleBookClick} />

      {/* Widget flotante con API de Chatbot IA Concierge */}
      <ChatbotWidget />
    </div>
  );
}

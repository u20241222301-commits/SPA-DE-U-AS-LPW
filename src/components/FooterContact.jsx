import {
  Badge,
  Button,
  Divider,
  Link,
  Text,
  Title2,
  Title3,
  Body1,
} from "@fluentui/react-components";
import { contactInfo } from "../data/homeData";

export default function FooterContact({ onBookClick }) {
  return (
    <footer className="footer-contact-wrap" id="contacto">
      <div className="footer-inner section-wrap">
        {/* CUADRO DE RESERVAS SUPERIOR JUNTO A LOS BOTONES (SE MANTIENE INTACTO) */}
        <div className="contact-hero-banner">
          <div className="contact-banner-copy">
            <Badge
              appearance="outline"
              shape="circular"
              className="luxury-kicker-pill tornasol-accent-badge"
            >
              <span className="sparkle-dot">✦</span> CONCIERGE PRIVADO & RESERVAS
            </Badge>
            <Title2 className="contact-banner-title">
              Reserva tu Momento en <span className="shimmer-inline">Lumière Spa</span>
            </Title2>
            <Body1 className="contact-banner-desc">
              Atención personalizada bajo cita previa, parqueadero privado con Valet Parking y Champagne Bar incluido en cada visita.
            </Body1>
          </div>

          <div className="contact-banner-actions">
            <Button
              className="luxury-btn primary-glow-btn"
              appearance="primary"
              size="large"
              shape="circular"
              onClick={() => onBookClick?.("Cita Concierge VIP")}
            >
              ✦ Agendar Cita Ahora
            </Button>
            <Button
              as="a"
              href="https://wa.me/573008942100"
              target="_blank"
              rel="noreferrer"
              className="luxury-btn outline-glow-btn"
              appearance="outline"
              size="large"
              shape="circular"
            >
              WhatsApp Concierge
            </Button>
          </div>
        </div>

        {/* PIE DE PÁGINA TRADICIONAL Y ELEGANTE (SIN CARDS) */}
        <div className="footer-open-grid">
          {/* COLUMNA 1: MARCA Y REDES SOCIALES */}
          <div className="footer-col footer-col-brand">
            <div className="footer-brand-header">
              <span className="brand-icon-mini">✦</span>
              <div>
                <Text className="footer-logo-title">LUMIÈRE</Text>
                <Text className="footer-logo-subtitle">MAISON DE HAUTE MANUCURE</Text>
              </div>
            </div>
            <Text className="footer-brand-bio">
              Santuario de alta manicura rusa, escultura en gel cristal y pigmentos de plata líquida con reflejos tornasol.
            </Text>

            <div className="footer-socials-row" aria-label="Redes sociales de Lumière Spa">
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
              >
                Instagram
              </Link>
              <span className="footer-dot">·</span>
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
              >
                TikTok
              </Link>
              <span className="footer-dot">·</span>
              <Link
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
              >
                Pinterest
              </Link>
              <span className="footer-dot">·</span>
              <Link
                href="https://wa.me/573008942100"
                target="_blank"
                rel="noreferrer"
                className="footer-social-link"
              >
                WhatsApp
              </Link>
            </div>
          </div>

          {/* COLUMNA 2: UBICACIÓN */}
          <div className="footer-col">
            <Title3 className="footer-col-heading">Ubicación & Atelier</Title3>
            <Text className="footer-plain-line">{contactInfo.address}</Text>
            <Text className="footer-plain-line">Medellín, Colombia</Text>
            <Text className="footer-plain-Accent">✦ Valet Parking & Acceso Privado VIP</Text>
          </div>

          {/* COLUMNA 3: HORARIOS */}
          <div className="footer-col">
            <Title3 className="footer-col-heading">Horarios de Atención</Title3>
            {contactInfo.hours.map((h, i) => (
              <Text key={i} className="footer-plain-line">
                <strong>{h.days}:</strong> {h.time}
              </Text>
            ))}
          </div>

          {/* COLUMNA 4: CORREO, TELÉFONO Y REDES */}
          <div className="footer-col">
            <Title3 className="footer-col-heading">Contacto & Correo</Title3>
            <Link href={`mailto:${contactInfo.email}`} className="footer-contact-link">
              ✉ {contactInfo.email}
            </Link>
            <Link href="https://wa.me/573008942100" target="_blank" rel="noreferrer" className="footer-contact-link">
              ✆ {contactInfo.phone}
            </Link>
            <Text className="footer-plain-line">
              Instagram Oficial: <strong>{contactInfo.instagram}</strong>
            </Text>
            <Text className="footer-plain-Accent">✦ Eventos Nupciales & Spa Parties</Text>
          </div>
        </div>

        <Divider className="footer-bottom-divider" />

        {/* BARRA INFERIOR DE DERECHOS Y ENLACES RÁPIDOS */}
        <div className="footer-bottom-bar">
          <Text className="footer-copy">
            © 2026 Lumière Nail Spa · Todos los derechos reservados.
          </Text>

          <div className="footer-nav-links">
            <Link href="#inicio" appearance="subtle" className="footer-link">Inicio</Link>
            <Link href="#coleccion" appearance="subtle" className="footer-link">Servicios VIP</Link>
            <Link href="#resenas" appearance="subtle" className="footer-link">Reseñas</Link>
            <Link href="#contacto" appearance="subtle" className="footer-link">Contacto</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

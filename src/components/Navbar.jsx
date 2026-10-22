import {
  Button,
  Link,
  Text,
  TabList,
  Tab,
  Tooltip,
  Badge,
} from "@fluentui/react-components";
import { useState } from "react";

export default function Navbar({ onBookClick }) {
  const [selectedTab, setSelectedTab] = useState("inicio");

  const handleTabSelect = (_, data) => {
    setSelectedTab(data.value);
    const section = document.getElementById(data.value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="navbar">
      <Link className="brand" href="#inicio" appearance="subtle">
        <span className="brand-icon">✦</span>
        <span className="brand-name">
          <Text as="span" className="brand-title-text">LUMIÈRE</Text>
          <Text as="small" className="brand-subtitle-text">MAISON DE HAUTE MANUCURE</Text>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Navegación principal con Fluent UI">
        <TabList
          selectedValue={selectedTab}
          onTabSelect={handleTabSelect}
          appearance="subtle"
          size="large"
          className="fluent-nav-tablist"
        >
          <Tab value="inicio" className="fluent-nav-tab">Inicio</Tab>
          <Tab value="coleccion" className="fluent-nav-tab">Servicios VIP</Tab>
          <Tab value="resenas" className="fluent-nav-tab">Reseñas</Tab>
          <Tab value="contacto" className="fluent-nav-tab">
            Ubicación & Contacto <Badge appearance="filled" color="brand" size="extra-small" className="vip-pink-lilac-badge">VIP</Badge>
          </Tab>
        </TabList>
      </nav>

      <Tooltip content="Reserva tu experiencia privada en Lumière" relationship="description">
        <Button
          className="luxury-btn primary-glow-btn"
          appearance="primary"
          shape="circular"
          size="large"
          onClick={onBookClick}
        >
          ✦ Agendar Cita VIP
        </Button>
      </Tooltip>
    </header>
  );
}

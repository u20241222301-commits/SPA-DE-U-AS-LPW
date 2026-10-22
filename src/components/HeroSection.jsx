import { useState } from "react";
import {
  Button,
  Title1,
  Title3,
  Body1,
  Text,
  Badge,
  Divider,
} from "@fluentui/react-components";
import { recommendedServices } from "../data/homeData";

export default function HeroSection({ onBookClick }) {
  const [selectedService, setSelectedService] = useState(recommendedServices[0]);

  return (
    <>
      {/* SECCIÓN 1 (INICIO): TEXTO CENTRADO SIN RECUADRO PESADO PARA APRECIAR LOS PINCELES DE FONDO */}
      <section className="hero-stage section-wrap" id="inicio">
        <div className="hero-copy hero-open-center">
          <Badge
            appearance="outline"
            size="extra-large"
            shape="circular"
            className="luxury-kicker-pill"
          >
            <span className="sparkle-dot">✦</span> SANTUARIO DE ALTA MANICURA & SPA
          </Badge>

          <Title1 className="hero-title">
            El Arte Supremo del
            <span className="shimmer-headline">Spa de Uñas</span>
          </Title1>

          <Body1 className="hero-description">
            Sumérgete en una ceremonia sensorial donde la precisión de la alta costura se une con pigmentos de plata líquida, destellos tornasol en rosa y lila, y elixires botánicos de brillo espejo.
          </Body1>

          <div className="hero-actions">
            <Button
              className="luxury-btn primary-glow-btn"
              appearance="primary"
              size="large"
              shape="circular"
              onClick={() => onBookClick?.(selectedService.name)}
            >
              ✦ Reservar Experiencia
            </Button>
            <Button
              className="luxury-btn outline-glow-btn"
              appearance="outline"
              size="large"
              shape="circular"
              onClick={() => {
                const nextEl = document.getElementById("coleccion");
                if (nextEl) nextEl.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver Servicios VIP ↓
            </Button>
          </div>

          <Divider appearance="brand" className="hero-fluent-divider" />

          <div className="hero-metrics">
            <div className="metric-item">
              <Title3 className="metric-number">100%</Title3>
              <Text className="metric-label">Esmaltes Hipoalergénicos 12-Free</Text>
            </div>
            <Divider vertical className="metric-divider" />
            <div className="metric-item">
              <Title3 className="metric-number">CHROME</Title3>
              <Text className="metric-label">Plata Líquida · Rosa & Lila Tornasol</Text>
            </div>
            <Divider vertical className="metric-divider" />
            <div className="metric-item">
              <Title3 className="metric-number">VIP</Title3>
              <Text className="metric-label">Suite Sensorial & Mimosa Bar</Text>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2 (SERVICIOS RECOMENDADOS): IZQUIERDA 4 OPCIONES · CENTRO LIBRE PARA EL VIDEO · DERECHA RESPUESTA */}
      <section className="collection-stage" id="coleccion">
        <div className="collection-split-layout">
          {/* COSTADO IZQUIERDO: 4 OPCIONES DE SERVICIOS RECOMENDADOS */}
          <aside className="collection-side-panel collection-left-options">
            <Badge
              appearance="tint"
              color="brand"
              shape="circular"
              className="shade-kicker-badge tornasol-accent-badge"
            >
              ✦ ATELIER & MENÚ VIP
            </Badge>
            <Title3 className="side-panel-heading">Servicios Recomendados</Title3>
            <Text className="side-panel-subtext">
              Elige uno de nuestros 4 rituales estrella para ver todo lo que incluye:
            </Text>

            <div className="shade-options-list" role="radiogroup" aria-label="Servicios recomendados del spa">
              {recommendedServices.map((srv) => {
                const isSelected = selectedService.id === srv.id;
                return (
                  <button
                    key={srv.id}
                    type="button"
                    onClick={() => setSelectedService(srv)}
                    className={`shade-option-item ${isSelected ? "active" : ""}`}
                    aria-pressed={isSelected}
                  >
                    <span
                      className="service-option-icon"
                      style={{ "--srv-accent": srv.accentColor }}
                    >
                      {srv.icon}
                    </span>
                    <span className="shade-option-info">
                      <span className="shade-option-name">{srv.name}</span>
                      <span className="shade-option-note">
                        {srv.duration} · <strong className="service-price-inline">{srv.price}</strong>
                      </span>
                    </span>
                    <span className="shade-option-arrow">✦</span>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* CENTRO LIBRE: VENTANA DESPEJADA PARA APRECIAR EL VIDEO DE LUMIÈRE SPA */}
          <div className="collection-center-window" aria-hidden="true" />

          {/* COSTADO DERECHO: RESPUESTA / DETALLE DEL SERVICIO SELECCIONADO */}
          <aside className="collection-side-panel collection-right-result">
            <div className="service-result-top">
              <Badge
                appearance="outline"
                shape="circular"
                className="shade-kicker-badge tornasol-accent-badge"
              >
                ✦ {selectedService.tag}
              </Badge>
              <span className="service-duration-pill">{selectedService.duration}</span>
            </div>

            <div className="service-result-header">
              <div
                className="service-hero-emblem"
                style={{ "--srv-accent": selectedService.accentColor }}
              >
                <span>{selectedService.icon}</span>
              </div>
              <Title3 className="shade-title service-result-title">
                {selectedService.name}
              </Title3>
              <div className="service-price-badge">
                <span className="price-amount">{selectedService.price}</span>
                <span className="price-currency">COP · Sesión VIP</span>
              </div>
            </div>

            <Body1 className="service-result-description">
              {selectedService.description}
            </Body1>

            <Divider className="service-result-divider" />

            <div className="service-includes-box">
              <Text className="includes-heading">LO QUE INCLUYE TU RITUAL:</Text>
              <ul className="service-includes-list">
                {selectedService.includes.map((item, idx) => (
                  <li key={idx} className="service-include-item">
                    <span className="include-sparkle">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              className="luxury-btn primary-glow-btn result-book-btn"
              appearance="primary"
              size="large"
              shape="circular"
              onClick={() => onBookClick?.(selectedService.name)}
            >
              ✦ Reservar {selectedService.name}
            </Button>
          </aside>
        </div>
      </section>
    </>
  );
}

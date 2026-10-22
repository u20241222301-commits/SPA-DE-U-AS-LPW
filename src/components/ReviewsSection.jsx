import {
  Avatar,
  Badge,
  Title2,
  Title3,
  Body1,
  Text,
  Divider,
  Button,
} from "@fluentui/react-components";
import { clientReviews } from "../data/homeData";

export default function ReviewsSection({ onBookClick }) {
  return (
    <section className="reviews-section section-wrap" id="resenas">
      <div className="reviews-header">
        <Badge
          appearance="outline"
          size="extra-large"
          shape="circular"
          className="luxury-kicker-pill tornasol-accent-badge"
        >
          <span className="sparkle-dot">✦</span> EXPERIENCIAS REALES · CLIENTAS VIP
        </Badge>

        <Title2 className="section-main-title">
          Voces de Nuestro <span className="shimmer-inline">Santuario</span>
        </Title2>

        <Body1 className="reviews-subtitle">
          Cada cita en Lumière es un ritual de alta costura. Descubre lo que opinan nuestras clientas sobre el brillo espejo plateado y los reflejos rosa y lila tornasol.
        </Body1>

        {/* Resumen global de calificación */}
        <div className="reviews-summary-pill">
          <span className="summary-stars" aria-label="5 de 5 estrellas">★★★★★</span>
          <Text className="summary-score">4.9 / 5.0</Text>
          <Divider vertical className="summary-divider" />
          <Text className="summary-count">+380 Reseñas Verificadas en Atelier</Text>
        </div>
      </div>

      <div className="reviews-grid">
        {clientReviews.map((rev) => (
          <article
            key={rev.id}
            className={`review-glass-panel accent-${rev.accent}`}
          >
            <div className="review-top-row">
              <div className="review-stars" aria-label={`${rev.rating} estrellas`}>
                {"★".repeat(rev.rating)}
              </div>
              <Badge
                appearance="tint"
                shape="circular"
                className="review-service-badge"
              >
                ✦ {rev.service}
              </Badge>
            </div>

            <Body1 className="review-comment">“{rev.comment}”</Body1>

            <Divider className="review-divider" />

            <div className="review-author-row">
              <div className="avatar-tornasol-ring">
                <Avatar
                  name={rev.name}
                  size={40}
                  color={rev.accent === "pink" ? "colorful" : "brand"}
                />
              </div>
              <div className="review-author-info">
                <Title3 className="review-author-name">{rev.name}</Title3>
                <Text className="review-author-role">
                  {rev.role} · <span>{rev.date}</span>
                </Text>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="reviews-cta-row">
        <Button
          className="luxury-btn primary-glow-btn"
          appearance="primary"
          size="large"
          shape="circular"
          onClick={() => onBookClick?.("Experiencia VIP desde Reseñas")}
        >
          ✦ Vivir la Experiencia Lumière
        </Button>
      </div>
    </section>
  );
}


import { Badge, Text } from "@fluentui/react-components";
import { promoItems } from "../data/homeData";

export default function PromoBar() {
  return (
    <div className="promo-bar" aria-label="Promociones destacadas">
      <div className="marquee-track promo-track">
        {[...promoItems, ...promoItems, ...promoItems].map((text, idx) => (
          <span key={idx} className="marquee-item">
            <Badge appearance="tint" color="brand" size="small" className="promo-fluent-badge">
              VIP
            </Badge>
            <Text className="promo-fluent-text">{text}</Text>
          </span>
        ))}
      </div>
    </div>
  );
}

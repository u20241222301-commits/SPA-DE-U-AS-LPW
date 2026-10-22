import { Text, Badge } from "@fluentui/react-components";
import { ribbonOneItems, ribbonTwoItems } from "../data/homeData";

export default function MovingRibbons() {
  return (
    <div className="ribbon-section" id="experiencias" aria-hidden="true">
      <div className="ribbon ribbon-one">
        <div className="marquee-track ribbon-track-left">
          {[...ribbonOneItems, ...ribbonOneItems, ...ribbonOneItems].map((item, idx) => (
            <span key={idx} className="ribbon-item">
              <Text className="ribbon-fluent-text">{item}</Text>
              <Badge appearance="ghost" color="brand" size="small">✦</Badge>
            </span>
          ))}
        </div>
      </div>

      <div className="ribbon ribbon-two">
        <div className="marquee-track ribbon-track-right">
          {[...ribbonTwoItems, ...ribbonTwoItems, ...ribbonTwoItems].map((item, idx) => (
            <span key={idx} className="ribbon-item">
              <Text className="ribbon-fluent-text-dark">{item}</Text>
              <Badge appearance="ghost" color="warning" size="small">✦</Badge>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

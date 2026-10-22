export default function NailPolishBottleSVG({ shade, cap = "#E2E8F0", id }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="polish-svg">
      <defs>
        <linearGradient id={`cap-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="28%" stopColor={cap} />
          <stop offset="52%" stopColor="#FFFFFF" />
          <stop offset="78%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id={`liquid-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="28%" stopColor={shade} stopOpacity="0.92" />
          <stop offset="68%" stopColor={shade} stopOpacity="0.98" />
          <stop offset="100%" stopColor="#64748B" stopOpacity="0.92" />
        </linearGradient>
        <linearGradient id={`glass-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#CBD5E1" stopOpacity="0.65" />
        </linearGradient>
      </defs>
      {/* Tapa de lujo en Cromo Plateado */}
      <rect x="44" y="10" width="32" height="58" rx="6" fill={`url(#cap-${id})`} />
      <rect x="42" y="62" width="36" height="8" rx="3" fill={`url(#cap-${id})`} />
      {/* Cuello de cristal plateado */}
      <rect x="47" y="70" width="26" height="12" rx="2" fill={`url(#glass-${id})`} />
      {/* Cuerpo de cristal exterior */}
      <rect x="20" y="80" width="80" height="104" rx="22" fill={`url(#glass-${id})`} stroke="rgba(255,255,255,0.95)" strokeWidth="2" />
      {/* Esmalte líquido interior con brillo plateado */}
      <rect x="26" y="88" width="68" height="88" rx="17" fill={`url(#liquid-${id})`} />
      {/* Reflejo de luz plateada vertical en el cristal */}
      <path d="M34 95 C34 95 31 130 34 166" stroke="rgba(255,255,255,0.92)" strokeWidth="4" strokeLinecap="round" />
      {/* Etiqueta haute couture plateada */}
      <rect x="38" y="114" width="44" height="32" rx="4" fill="rgba(255,255,255,0.9)" stroke="#94A3B8" strokeWidth="1" />
      <line x1="45" y1="126" x2="75" y2="126" stroke="#1E293B" strokeWidth="1.5" />
      <line x1="50" y1="134" x2="70" y2="134" stroke="#64748B" strokeWidth="1" />
    </svg>
  );
}

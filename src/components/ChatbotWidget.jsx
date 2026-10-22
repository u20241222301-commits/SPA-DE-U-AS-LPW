import { useState, useRef, useEffect } from "react";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Input,
  Spinner,
  Text,
  Title3,
  Tooltip,
} from "@fluentui/react-components";
import { recommendedServices, contactInfo } from "../data/homeData";

const SYSTEM_PROMPT = `Eres "Lumière AI Concierge", la asistente virtual de lujo de Lumière Nail Spa (Maison de Haute Manucure) en Medellín (${contactInfo.address}).
Responde siempre en español con un tono elegante, cálido, breve y muy profesional (máximo 3-4 oraciones por respuesta).
Información oficial del spa:
- Servicios y precios:
  1. Manicura Rusa Silver Chrome ($145.000 COP, 75 min): Limpieza profunda con puntas de diamante, bio-gel europeo 12-Free y acabado espejo plateado o tornasol.
  2. Ritual Spa Rose & Lila Tornasol ($180.000 COP, 90 min): Exfoliación con cuarzo rosa, mascarilla térmica de seda lila, masaje linfático de 20 min y esmaltado gel tornasol.
  3. Esculpido Cristal & Joyería ($220.000 COP, 120 min): Extensión anatómica en gel cristal con destellos plateados e incrustación de cristales de corte diamante.
  4. Pedicura Imperial & Parafina ($165.000 COP, 85 min): Sillón zero-gravity, sales del Himalaya, parafina tibia botánica, esmaltado espejo y copa de Champagne Rosé.
- Ubicación: ${contactInfo.address} (cuenta con Valet Parking privado).
- Horarios: Lunes a Viernes 9:00 AM - 8:00 PM, Sábados 9:00 AM - 7:00 PM, Domingos y Festivos 10:00 AM - 5:00 PM (con cita previa).
- Contacto: Teléfono/WhatsApp ${contactInfo.phone}, Correo ${contactInfo.email}, Instagram ${contactInfo.instagram}.`;

const QUICK_QUESTIONS = [
  "💅 ¿Cuáles son los servicios y precios?",
  "📍 ¿Dónde están ubicados y qué horario tienen?",
  "✨ Recomiéndame un ritual tornasol",
  "🥂 ¿Cómo agendo una cita VIP?",
];

function getSmartFallbackReply(userText) {
  const q = userText.toLowerCase();
  if (q.includes("precio") || q.includes("servicio") || q.includes("cuanto") || q.includes("cuesta") || q.includes("menu")) {
    return "Nuestros 4 rituales estrella son: Manicura Rusa Silver Chrome ($145.000 · 75 min), Pedicura Imperial & Parafina ($165.000 · 85 min), Ritual Spa Rose & Lila Tornasol ($180.000 · 90 min) y Esculpido Cristal & Joyería ($220.000 · 120 min). Todos incluyen bebidas en nuestro Champagne & Mocktail Bar.";
  }
  if (q.includes("ubic") || q.includes("direcc") || q.includes("donde") || q.includes("horario") || q.includes("abren")) {
    return `Nos encontramos en ${contactInfo.address}, con servicio de Valet Parking privado. Atendemos de Lunes a Viernes (9:00 AM – 8:00 PM), Sábados (9:00 AM – 7:00 PM) y Domingos/Festivos (10:00 AM – 5:00 PM con cita previa).`;
  }
  if (q.includes("recom") || q.includes("tornasol") || q.includes("platead") || q.includes("color")) {
    return "Si buscas un brillo espejo impactante, te recomiendo la Manicura Rusa Silver Chrome ($145.000) o el Ritual Spa Rose & Lila Tornasol ($180.000), que combina base de plata líquida con sutiles destellos rosa y lila.";
  }
  if (q.includes("agend") || q.includes("reserv") || q.includes("cita") || q.includes("whatsapp") || q.includes("contacto")) {
    return `Puedes reservar directamente haciendo clic en "Agendar Cita VIP" o escribiéndonos a nuestro WhatsApp Concierge al ${contactInfo.phone} o al correo ${contactInfo.email}. ¡Será un honor atenderte!`;
  }
  return `Soy tu Concierge Virtual de Lumière Spa ✨. Puedo ayudarte con precios de nuestra colección Silver Tornasol, detalles de Manicura Rusa y Esculpido en Gel, ubicación en Milla de Oro o reservas VIP al ${contactInfo.phone}.`;
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "¡Bienvenida a Lumière Nail Spa! ✦ Soy tu Concierge con IA. ¿En qué puedo asesorarte hoy sobre nuestros rituales Silver Tornasol o tu próxima cita VIP?",
    },
  ]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const sendMessage = async (textToSend) => {
    const trimmed = (textToSend ?? input).trim();
    if (!trimmed || isLoading) return;

    const userMsg = { id: Date.now(), sender: "user", text: trimmed };
    const updatedHistory = [...messages, userMsg];
    setMessages(updatedHistory);
    setInput("");
    setIsLoading(true);

    try {
      const apiMessages = [
        { role: "system", content: SYSTEM_PROMPT },
        ...updatedHistory.slice(-6).map((m) => ({
          role: m.sender === "user" ? "user" : "assistant",
          content: m.text,
        })),
      ];

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8500);

      const response = await fetch("https://text.pollinations.ai/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "openai",
          messages: apiMessages,
          temperature: 0.6,
        }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = await response.json();
      const aiReply =
        data?.choices?.[0]?.message?.content?.trim() ||
        getSmartFallbackReply(trimmed);

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: aiReply },
      ]);
    } catch {
      // Respaldo inteligente instantáneo si falla la red o el endpoint externo
      const fallback = getSmartFallbackReply(trimmed);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "bot", text: fallback },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="chatbot-floating-container">
      {isOpen && (
        <aside className="chatbot-window" aria-label="Asistente Virtual Lumière AI">
          {/* Cabecera del Chatbot con Fluent UI */}
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="avatar-tornasol-ring">
                <Avatar name="Lumière AI" size={36} color="brand" />
              </div>
              <div className="chatbot-title-group">
                <div className="chatbot-title-row">
                  <Title3 className="chatbot-name">Lumière Concierge</Title3>
                  <Badge appearance="filled" size="extra-small" className="chatbot-ai-badge">
                    IA API
                  </Badge>
                </div>
                <Text className="chatbot-status">● En línea · Respuesta inmediata</Text>
              </div>
            </div>

            <Button
              appearance="subtle"
              shape="circular"
              size="small"
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
            >
              ✕
            </Button>
          </div>

          <Divider className="chatbot-divider" />

          {/* Historial de mensajes */}
          <div className="chatbot-messages-area">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chatbot-bubble-row ${msg.sender === "user" ? "row-user" : "row-bot"}`}
              >
                <div
                  className={`chatbot-bubble ${
                    msg.sender === "user" ? "bubble-user" : "bubble-bot"
                  }`}
                >
                  <Text className="chatbot-bubble-text">{msg.text}</Text>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="chatbot-bubble-row row-bot">
                <div className="chatbot-bubble bubble-bot chatbot-typing">
                  <Spinner size="extra-tiny" label="Consultando Concierge IA..." />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Sugerencias rápidas */}
          <div className="chatbot-quick-chips">
            {QUICK_QUESTIONS.map((q) => (
              <button
                key={q}
                type="button"
                className="chatbot-chip"
                onClick={() => sendMessage(q)}
                disabled={isLoading}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Entrada de texto Fluent UI */}
          <form className="chatbot-input-row" onSubmit={handleFormSubmit}>
            <Input
              className="chatbot-fluent-input"
              placeholder="Escribe tu consulta al spa..."
              value={input}
              onChange={(_, data) => setInput(data.value)}
              disabled={isLoading}
            />
            <Button
              type="submit"
              appearance="primary"
              shape="circular"
              className="luxury-btn primary-glow-btn chatbot-send-btn"
              disabled={isLoading || !input.trim()}
            >
              ✦
            </Button>
          </form>
        </aside>
      )}

      {/* Botón flotante para abrir/cerrar el Chatbot */}
      <Tooltip
        content={isOpen ? "Ocultar Concierge IA" : "Hablar con Lumière Concierge IA"}
        relationship="label"
      >
        <Button
          appearance="primary"
          shape="circular"
          size="large"
          className="luxury-btn primary-glow-btn chatbot-fab-trigger"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="chatbot-fab-icon">{isOpen ? "✕" : "✦"}</span>
          <span className="chatbot-fab-label">
            {isOpen ? "Cerrar Chat" : "Concierge IA"}
          </span>
        </Button>
      </Tooltip>
    </div>
  );
}


/*
 * Configuración central del sitio.
 * Un solo lugar para el número de WhatsApp y los mensajes pre-cargados por
 * sección (spec §7): cada CTA abre wa.me con un texto distinto según de dónde
 * salió, para poder rastrear qué sección convierte.
 */

export const WHATSAPP_NUMBER = "5492922424416";

// Mensaje pre-cargado por sección de origen.
export const WHATSAPP_MESSAGES = {
  header: "Hola Ana 👋 Quiero saber más sobre el sistema.",
  hero: "Hola Ana 👋 Quiero mi sistema. ¿Cómo empezamos?",
  metodo: "Hola Ana, me interesa el método. Quiero que auditemos mi negocio.",
  modulos: "Hola Ana, quiero armar el sistema completo para mi negocio.",
  resultados: "Hola Ana, vi los casos y quiero resultados así para mi negocio.",
  paraQuien: "Hola Ana, creo que mi negocio encaja. ¿Lo vemos?",
  ctaAgenda: "Hola Ana, quiero agendar mi llamada de reconocimiento.",
  ctaDirecto: "Hola Ana, prefiero ir directo al grano. ¿Hablamos?",
};

/**
 * Arma el link de WhatsApp con el mensaje de la sección indicada.
 * @param {keyof typeof WHATSAPP_MESSAGES} section
 */
export function waLink(section) {
  const text = WHATSAPP_MESSAGES[section] ?? WHATSAPP_MESSAGES.header;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Módulos que orbitan el núcleo en el Hero (copy §1).
export const HERO_ORBIT_MODULES = [
  "Branding",
  "Identidad",
  "Contenido",
  "Procesos",
  "Automatización",
  "Auditoría",
];

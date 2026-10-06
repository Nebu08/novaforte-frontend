import { sendGAEvent } from "@next/third-parties/google";

/**
 * Registra un evento personalizado en Google Analytics 4
 */
export function trackEvent(eventName: string, parameters: Record<string, string | number | boolean> = {}) {
  try {
    sendGAEvent("event", eventName, parameters);
  } catch (error) {
    console.debug("[Analytics] Failed to track event:", eventName, error);
  }
}

/**
 * Evento al hacer clic en el botón flotante o enlace de WhatsApp
 */
export function trackWhatsAppClick(location: string) {
  trackEvent("contact_whatsapp_clicked", {
    location,
    timestamp: Date.now(),
  });
}

/**
 * Evento al enviar o iniciar una cotización
 */
export function trackQuoteRequest(serviceType: "humanos" | "veterinaria" | "biomedica" | "general", details?: string) {
  trackEvent("quote_request_initiated", {
    service_type: serviceType,
    details: details || "",
  });
}

/**
 * Evento al interactuar con el visor de modelos 3D
 */
export function trackModel3DInteraction(modelName: string, action: "rotate" | "zoom" | "reset") {
  trackEvent("model_3d_interaction", {
    model_name: modelName,
    action,
  });
}

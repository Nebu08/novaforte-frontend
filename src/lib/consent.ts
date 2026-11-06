// Consentimiento de cookies de analítica. Va en un archivo aparte (no "use client") porque el layout,
// que es un componente de servidor, necesita el texto del script y no una referencia de cliente.
export const CONSENT_KEY = "nf-cookies";
export const OPEN_EVENT = "nf-cookies-open";

export const CONSENT_DEFAULT_SCRIPT = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}
gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
try{if(localStorage.getItem('${CONSENT_KEY}')==='si')gtag('consent','update',{analytics_storage:'granted'})}catch(e){}`;

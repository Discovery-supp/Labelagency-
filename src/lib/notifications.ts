/**
 * Service de notifications WhatsApp
 * Envoie des notifications lorsqu'un nouveau contact est enregistré
 */

export interface ContactNotification {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

/**
 * Envoyer une notification WhatsApp via l'API
 * Cette fonction peut être configurée avec différents services
 */
export async function sendWhatsAppNotification(contact: ContactNotification) {
  const recipientPhone = import.meta.env.VITE_WHATSAPP_RECIPIENT || '243998187951';
  
  // Formater le message
  const message = formatContactMessage(contact);
  
  // Option 1: Utiliser l'API WhatsApp Business (Twilio, etc.)
  if (import.meta.env.VITE_WHATSAPP_API_URL) {
    return sendViaAPI(message, recipientPhone);
  }
  
  // Option 2: Utiliser Supabase Edge Function
  if (import.meta.env.VITE_SUPABASE_URL) {
    return sendViaSupabaseFunction(contact);
  }
  
  // Option 3: Créer un lien WhatsApp (fallback)
  console.log('Notification WhatsApp (lien):', createWhatsAppLink(message, recipientPhone));
  return { success: true, method: 'link' };
}

/**
 * Formater le message de notification
 */
function formatContactMessage(contact: ContactNotification): string {
  let message = `🔔 *Nouveau contact reçu*\n\n`;
  message += `👤 *Nom:* ${contact.name}\n`;
  message += `📧 *Email:* ${contact.email}\n`;
  
  if (contact.phone) {
    message += `📱 *Téléphone:* ${contact.phone}\n`;
  }
  
  if (contact.company) {
    message += `🏢 *Entreprise:* ${contact.company}\n`;
  }
  
  if (contact.message) {
    message += `\n💬 *Message:*\n${contact.message}\n`;
  }
  
  message += `\n⏰ *Date:* ${new Date().toLocaleString('fr-FR')}`;
  
  return message;
}

/**
 * Créer un lien WhatsApp
 */
function createWhatsAppLink(message: string, phone: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

/**
 * Envoyer via une API externe (Twilio, etc.)
 */
async function sendViaAPI(message: string, phone: string) {
  const apiUrl = import.meta.env.VITE_WHATSAPP_API_URL;
  const apiKey = import.meta.env.VITE_WHATSAPP_API_KEY;
  
  if (!apiUrl || !apiKey) {
    console.warn('Configuration WhatsApp API manquante');
    return { success: false, error: 'API non configurée' };
  }
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        to: phone,
        message: message,
      }),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    
    const data = await response.json();
    return { success: true, data, method: 'api' };
  } catch (error) {
    console.error('Erreur lors de l\'envoi WhatsApp via API:', error);
    return { success: false, error };
  }
}

/**
 * Envoyer via Supabase Edge Function
 */
async function sendViaSupabaseFunction(contact: ContactNotification) {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  
  if (!supabaseUrl) {
    console.warn('URL Supabase manquante');
    return { success: false, error: 'Supabase non configuré' };
  }
  
  try {
    // Appeler la fonction Edge Supabase
    const response = await fetch(`${supabaseUrl}/functions/v1/send-whatsapp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ contact }),
    });
    
    if (!response.ok) {
      throw new Error(`Edge Function error: ${response.statusText}`);
    }
    
    const data = await response.json();
    return { success: true, data, method: 'supabase-function' };
  } catch (error) {
    console.error('Erreur lors de l\'envoi WhatsApp via Supabase:', error);
    // Ne pas bloquer si la notification échoue
    return { success: false, error };
  }
}

/**
 * Envoyer une notification simple (utilise le lien WhatsApp comme fallback)
 */
export async function sendSimpleWhatsAppNotification(contact: ContactNotification) {
  const recipientPhone = import.meta.env.VITE_WHATSAPP_RECIPIENT || '243998187951';
  const message = formatContactMessage(contact);
  const link = createWhatsAppLink(message, recipientPhone);
  
  // Ouvrir WhatsApp dans un nouvel onglet (pour test)
  // En production, vous utiliserez une API
  console.log('Lien WhatsApp généré:', link);
  
  return { success: true, link, method: 'link' };
}

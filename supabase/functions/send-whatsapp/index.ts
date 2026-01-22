// Supabase Edge Function pour envoyer des notifications WhatsApp
// Déployez cette fonction dans Supabase: supabase functions deploy send-whatsapp

import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Contact {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

serve(async (req) => {
  // Gérer les requêtes OPTIONS pour CORS
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { contact } = await req.json() as { contact: Contact };

    // Récupérer les variables d'environnement
    const whatsappApiUrl = Deno.env.get('WHATSAPP_API_URL');
    const whatsappApiKey = Deno.env.get('WHATSAPP_API_KEY');
    const recipientPhone = Deno.env.get('WHATSAPP_RECIPIENT') || '243998187951';

    // Formater le message
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

    // Option 1: Utiliser une API WhatsApp (Twilio, etc.)
    if (whatsappApiUrl && whatsappApiKey) {
      const response = await fetch(whatsappApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${whatsappApiKey}`,
        },
        body: JSON.stringify({
          to: recipientPhone,
          message: message,
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      return new Response(
        JSON.stringify({ success: true, data }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    // Option 2: Utiliser un webhook externe (Zapier, Make.com, etc.)
    const webhookUrl = Deno.env.get('WHATSAPP_WEBHOOK_URL');
    if (webhookUrl) {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: recipientPhone,
          message: message,
          contact: contact,
        }),
      });

      return new Response(
        JSON.stringify({ success: true, method: 'webhook' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200,
        }
      );
    }

    // Si aucune configuration n'est trouvée, retourner le message formaté
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Aucune configuration WhatsApp trouvée',
        message: message // Pour debug
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );

  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});

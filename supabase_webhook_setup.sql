-- Script SQL pour créer un trigger qui envoie une notification
-- Optionnel : Utilisez plutôt un Database Webhook dans l'interface Supabase (plus simple)

-- Fonction pour déclencher une notification (appelle l'Edge Function)
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER AS $$
BEGIN
  -- Appeler l'Edge Function Supabase
  PERFORM
    net.http_post(
      url := current_setting('app.supabase_url') || '/functions/v1/send-whatsapp',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.supabase_anon_key')
      ),
      body := jsonb_build_object(
        'contact', jsonb_build_object(
          'name', NEW.name,
          'email', NEW.email,
          'phone', NEW.phone,
          'company', NEW.company,
          'message', NEW.message
        )
      )
    );
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Créer le trigger
CREATE TRIGGER on_contact_created
  AFTER INSERT ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();

-- Note: Cette méthode nécessite l'extension http dans Supabase
-- Alternative plus simple: Utilisez Database Webhooks dans l'interface Supabase

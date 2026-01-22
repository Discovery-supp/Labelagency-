# Configuration des Notifications WhatsApp

Ce guide vous explique comment configurer les notifications WhatsApp pour recevoir un message chaque fois qu'un nouveau contact est enregistré.

## 🎯 Options Disponibles

Il existe plusieurs façons de recevoir des notifications WhatsApp :

### Option 1 : Utiliser Twilio WhatsApp API (Recommandé pour production)

**Avantages :** Fiable, professionnel, API officielle
**Coût :** Payant (environ $0.005 par message)

1. Créez un compte sur [Twilio](https://www.twilio.com/)
2. Configurez WhatsApp Sandbox ou obtenez un numéro WhatsApp Business approuvé
3. Ajoutez vos credentials dans `.env.local` :

```env
VITE_WHATSAPP_API_URL=https://api.twilio.com/2010-04-01/Accounts/YOUR_ACCOUNT_SID/Messages.json
VITE_WHATSAPP_API_KEY=votre_api_key_twilio
VITE_WHATSAPP_RECIPIENT=243998187951
```

### Option 2 : Utiliser Supabase Edge Function + Webhook

**Avantages :** Gratuit, flexible, peut utiliser différents services
**Coût :** Gratuit (selon votre plan Supabase)

1. Déployez la fonction Edge dans Supabase :
   ```bash
   supabase functions deploy send-whatsapp
   ```

2. Configurez les variables d'environnement dans Supabase :
   - Allez dans **Project Settings** > **Edge Functions** > **Secrets**
   - Ajoutez :
     - `WHATSAPP_API_URL` (si vous utilisez une API)
     - `WHATSAPP_API_KEY` (si vous utilisez une API)
     - `WHATSAPP_RECIPIENT` (votre numéro: 243998187951)
     - `WHATSAPP_WEBHOOK_URL` (optionnel, pour Zapier/Make.com)

3. La fonction sera automatiquement appelée lors de la création d'un contact

### Option 3 : Utiliser Zapier ou Make.com (Simple et gratuit)

**Avantages :** Très simple à configurer, interface graphique
**Coût :** Gratuit (plan gratuit disponible)

1. Créez un compte sur [Zapier](https://zapier.com/) ou [Make.com](https://www.make.com/)
2. Créez un "Zap" ou "Scenario" :
   - **Trigger :** Webhook Supabase (nouveau contact)
   - **Action :** Envoyer un message WhatsApp
3. Copiez l'URL du webhook dans `.env.local` :

```env
VITE_WHATSAPP_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...
```

### Option 4 : Utiliser WhatsApp Business API (Officiel)

**Avantages :** Solution officielle Meta/Facebook
**Coût :** Payant, nécessite une vérification d'entreprise

1. Créez un compte WhatsApp Business API
2. Obtenez votre token d'accès
3. Configurez dans `.env.local` :

```env
VITE_WHATSAPP_API_URL=https://graph.facebook.com/v18.0/YOUR_PHONE_NUMBER_ID/messages
VITE_WHATSAPP_API_KEY=votre_token_acces
VITE_WHATSAPP_RECIPIENT=243998187951
```

## 🚀 Configuration Rapide (Solution Simple)

Pour une solution rapide et gratuite, utilisez **Zapier** :

1. **Créer un Zap sur Zapier :**
   - Trigger : "Webhooks by Zapier" > "Catch Hook"
   - Action : "WhatsApp" > "Send Message" (ou utilisez "Email" qui peut être reçu sur WhatsApp)

2. **Configurer Supabase Database Webhook :**
   - Dans Supabase, allez dans **Database** > **Webhooks**
   - Créez un nouveau webhook :
     - Table: `contacts`
     - Events: `INSERT`
     - HTTP Request URL: Votre URL Zapier

3. **Tester :** Remplissez le formulaire de contact et vérifiez que vous recevez la notification

## 📝 Format du Message

Le message envoyé contiendra :
```
🔔 Nouveau contact reçu

👤 Nom: [Nom du contact]
📧 Email: [Email]
📱 Téléphone: [Téléphone] (si fourni)
🏢 Entreprise: [Entreprise] (si fournie)

💬 Message:
[Message du contact]

⏰ Date: [Date et heure]
```

## 🔧 Configuration des Variables d'Environnement

Ajoutez ces variables dans votre fichier `.env.local` :

```env
# Numéro WhatsApp de destination
VITE_WHATSAPP_RECIPIENT=243998187951

# Option 1: API WhatsApp directe
VITE_WHATSAPP_API_URL=https://api.example.com/whatsapp
VITE_WHATSAPP_API_KEY=votre_cle_api

# Option 2: Webhook (Zapier, Make.com, etc.)
VITE_WHATSAPP_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/...

# Option 3: Supabase Edge Function (déjà configuré)
# La fonction utilise les secrets Supabase
```

## 🧪 Tester les Notifications

1. Assurez-vous que votre configuration est correcte
2. Remplissez le formulaire de contact sur votre site
3. Vérifiez que :
   - Le contact est bien enregistré dans Supabase
   - Vous recevez la notification WhatsApp

## 🐛 Dépannage

### La notification n'est pas reçue

1. **Vérifiez la console du navigateur** pour les erreurs
2. **Vérifiez les logs Supabase** (si vous utilisez Edge Functions)
3. **Testez votre API/webhook** directement avec un outil comme Postman
4. **Vérifiez les variables d'environnement** sont bien chargées

### Erreur "API non configurée"

Cela signifie qu'aucune méthode d'envoi n'est configurée. Le système utilisera un lien WhatsApp comme fallback (visible dans la console).

## 📚 Ressources

- [Documentation Twilio WhatsApp](https://www.twilio.com/docs/whatsapp)
- [Supabase Edge Functions](https://supabase.com/docs/guides/functions)
- [Zapier Webhooks](https://zapier.com/apps/webhook/integrations)
- [WhatsApp Business API](https://developers.facebook.com/docs/whatsapp)

## 💡 Recommandation

Pour commencer rapidement, utilisez **Zapier** avec un webhook Supabase. C'est gratuit, simple à configurer, et ne nécessite pas de code supplémentaire.

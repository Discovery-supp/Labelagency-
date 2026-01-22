# Label Agency

Application web B2B pour Label Agency - Solutions IA pour entreprises.

## 🚀 Fonctionnalités

- **Site web moderne** avec React + TypeScript + Vite
- **Base de données Supabase** pour la gestion des contacts
- **Notifications WhatsApp** automatiques lors de nouveaux contacts
- **Interface responsive** avec Tailwind CSS
- **Formulaire de contact** intégré avec sauvegarde en base de données

## 📋 Prérequis

- Node.js (v18 ou supérieur)
- npm ou yarn
- Compte Supabase

## 🛠️ Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/Discovery-supp/Labelagency-.git
   cd Labelagency-
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement**
   
   Créez un fichier `.env.local` à la racine du projet :
   ```env
   VITE_SUPABASE_URL=votre_url_supabase
   VITE_SUPABASE_ANON_KEY=votre_cle_anon
   VITE_WHATSAPP_RECIPIENT=243998187951
   ```

4. **Configurer la base de données Supabase**
   
   - Exécutez le script `supabase_setup.sql` dans l'éditeur SQL de Supabase
   - Consultez `DATABASE_SETUP.md` pour plus de détails

5. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

## 📚 Documentation

- **[DATABASE_SETUP.md](./DATABASE_SETUP.md)** - Guide de configuration de la base de données
- **[WHATSAPP_NOTIFICATIONS.md](./WHATSAPP_NOTIFICATIONS.md)** - Configuration des notifications WhatsApp

## 🏗️ Structure du Projet

```
Label Agency/
├── src/
│   ├── components/      # Composants React
│   ├── pages/          # Pages de l'application
│   ├── lib/            # Services et utilitaires
│   │   ├── supabase.ts      # Configuration Supabase
│   │   ├── database.ts      # Fonctions de base de données
│   │   └── notifications.ts # Service de notifications
│   └── hooks/          # Hooks React personnalisés
├── supabase/
│   └── functions/      # Edge Functions Supabase
└── public/             # Fichiers statiques
```

## 🎯 Technologies Utilisées

- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite** - Build tool
- **Tailwind CSS** - Framework CSS
- **Supabase** - Backend as a Service
- **Lucide React** - Icônes

## 📝 Scripts Disponibles

- `npm run dev` - Lancer le serveur de développement
- `npm run build` - Construire pour la production
- `npm run preview` - Prévisualiser le build de production
- `npm run lint` - Lancer ESLint
- `npm run typecheck` - Vérifier les types TypeScript

## 🔐 Sécurité

- Les fichiers `.env.local` sont ignorés par Git (ne contiennent pas de secrets)
- Row Level Security (RLS) activé sur Supabase
- Variables d'environnement pour les credentials sensibles

## 📞 Contact

- **WhatsApp**: +243 998 187 951
- **Email**: contact@labelcongo.com

## 📄 Licence

Ce projet est privé et propriétaire de Label Agency.

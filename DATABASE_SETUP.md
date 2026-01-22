# Configuration de la Base de Données

Ce projet utilise **Supabase** comme solution de base de données backend.

## 🚀 Configuration Initiale

### 1. Créer un projet Supabase

1. Allez sur [https://app.supabase.com](https://app.supabase.com)
2. Créez un compte ou connectez-vous
3. Créez un nouveau projet
4. Notez votre URL de projet et votre clé API anonyme

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet avec le contenu suivant :

```env
VITE_SUPABASE_URL=votre_url_supabase_ici
VITE_SUPABASE_ANON_KEY=votre_cle_anon_ici

# Configuration WhatsApp (optionnel - pour les notifications)
VITE_WHATSAPP_RECIPIENT=243998187951
# VITE_WHATSAPP_API_URL=https://api.example.com/whatsapp
# VITE_WHATSAPP_API_KEY=votre_cle_api
# VITE_WHATSAPP_WEBHOOK_URL=https://hooks.zapier.com/...
```

**Où trouver ces valeurs :**
- Dans votre projet Supabase, allez dans **Settings** > **API**
- **Project URL** = `VITE_SUPABASE_URL`
- **anon public** key = `VITE_SUPABASE_ANON_KEY`

**Pour les notifications WhatsApp :** Consultez `WHATSAPP_NOTIFICATIONS.md` pour la configuration complète.

### 3. Créer la table `contacts` dans Supabase

**Option 1 : Utiliser le fichier SQL fourni (recommandé)**

1. Ouvrez le fichier `supabase_setup.sql` à la racine du projet
2. Copiez tout son contenu
3. Allez dans votre projet Supabase > **SQL Editor**
4. Collez le SQL et cliquez sur **Run**

**Option 2 : Copier le SQL ci-dessous**

Exécutez cette requête SQL dans l'éditeur SQL de Supabase (SQL Editor) :

```sql
-- Créer la table contacts
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  company TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activer Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Créer une politique pour permettre l'insertion (ajustez selon vos besoins)
CREATE POLICY "Allow public insert" ON contacts
  FOR INSERT
  WITH CHECK (true);

-- Créer une politique pour permettre la lecture (ajustez selon vos besoins)
CREATE POLICY "Allow public read" ON contacts
  FOR SELECT
  USING (true);

-- Créer une politique pour permettre la mise à jour (ajustez selon vos besoins)
CREATE POLICY "Allow public update" ON contacts
  FOR UPDATE
  USING (true);

-- Créer une politique pour permettre la suppression (ajustez selon vos besoins)
CREATE POLICY "Allow public delete" ON contacts
  FOR DELETE
  USING (true);
```

⚠️ **Important :** Ne copiez PAS les balises markdown ```sql et ```. Copiez uniquement le code SQL entre ces balises, ou utilisez le fichier `supabase_setup.sql` fourni.

⚠️ **Note de sécurité :** Les politiques ci-dessus permettent l'accès public. Pour un environnement de production, vous devriez implémenter une authentification et des politiques plus restrictives.

## 📚 Utilisation

### Utiliser le client Supabase directement

```typescript
import { supabase } from './lib/supabase';

// Exemple d'utilisation
const { data, error } = await supabase
  .from('contacts')
  .select('*');
```

### Utiliser les fonctions du service database

```typescript
import * as db from './lib/database';

// Créer un contact
const { data, error } = await db.createContact({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+33123456789',
  message: 'Bonjour !',
  company: 'Acme Corp'
});

// Récupérer tous les contacts
const { data: contacts } = await db.getContacts();
```

### Utiliser le hook React

```typescript
import { useContacts } from './hooks/useDatabase';

function MyComponent() {
  const { contacts, loading, error, addContact } = useContacts();

  const handleSubmit = async () => {
    await addContact({
      name: 'John Doe',
      email: 'john@example.com'
    });
  };

  if (loading) return <div>Chargement...</div>;
  if (error) return <div>Erreur: {error.message}</div>;

  return (
    <div>
      {contacts.map(contact => (
        <div key={contact.id}>{contact.name}</div>
      ))}
    </div>
  );
}
```

## 🔧 Fonctions Disponibles

### Gestion des Contacts

- `createContact(contact)` - Créer un nouveau contact
- `getContacts()` - Récupérer tous les contacts
- `getContactById(id)` - Récupérer un contact par ID
- `updateContact(id, updates)` - Mettre à jour un contact
- `deleteContact(id)` - Supprimer un contact

### Fonctions Génériques

- `queryTable(tableName, options)` - Requête générique sur une table
- `insertIntoTable(tableName, data)` - Insertion générique
- `updateTable(tableName, id, updates)` - Mise à jour générique
- `deleteFromTable(tableName, id)` - Suppression générique

## 📁 Structure des Fichiers

```
src/
  lib/
    supabase.ts      # Configuration du client Supabase
    database.ts      # Fonctions de service pour la base de données
  hooks/
    useDatabase.ts   # Hook React pour utiliser la base de données
```

## 🔐 Sécurité

Pour un environnement de production :

1. **Implémentez l'authentification** avec Supabase Auth
2. **Configurez des politiques RLS** plus restrictives
3. **Utilisez des clés API avec des permissions limitées**
4. **Validez les données côté serveur** avec des fonctions Supabase Edge

## 📖 Documentation Supabase

- [Documentation Supabase](https://supabase.com/docs)
- [Guide JavaScript](https://supabase.com/docs/reference/javascript/introduction)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

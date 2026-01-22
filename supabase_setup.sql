-- Script SQL pour créer la table contacts dans Supabase
-- Copiez et exécutez ce script dans l'éditeur SQL de Supabase (SQL Editor)

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

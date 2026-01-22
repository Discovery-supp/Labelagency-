import { supabase } from './supabase';
import { sendWhatsAppNotification } from './notifications';

/**
 * Service de gestion de la base de données
 * Contient toutes les fonctions pour interagir avec Supabase
 */

// ===== GESTION DES CONTACTS =====

export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  company?: string;
  created_at?: string;
}

/**
 * Créer un nouveau contact
 */
export async function createContact(contact: Omit<Contact, 'id' | 'created_at'>) {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .insert([contact])
      .select()
      .single();

    if (error) throw error;
    
    // Envoyer une notification WhatsApp en arrière-plan (ne bloque pas si ça échoue)
    sendWhatsAppNotification(contact).catch(err => {
      console.warn('Notification WhatsApp échouée (non bloquant):', err);
    });
    
    return { data, error: null };
  } catch (error) {
    console.error('Erreur lors de la création du contact:', error);
    return { data: null, error };
  }
}

/**
 * Récupérer tous les contacts
 */
export async function getContacts() {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erreur lors de la récupération des contacts:', error);
    return { data: null, error };
  }
}

/**
 * Récupérer un contact par ID
 */
export async function getContactById(id: string) {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erreur lors de la récupération du contact:', error);
    return { data: null, error };
  }
}

/**
 * Mettre à jour un contact
 */
export async function updateContact(id: string, updates: Partial<Contact>) {
  try {
    const { data, error } = await supabase
      .from('contacts')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Erreur lors de la mise à jour du contact:', error);
    return { data: null, error };
  }
}

/**
 * Supprimer un contact
 */
export async function deleteContact(id: string) {
  try {
    const { error } = await supabase
      .from('contacts')
      .delete()
      .eq('id', id);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error('Erreur lors de la suppression du contact:', error);
    return { error };
  }
}

// ===== FONCTIONS GÉNÉRIQUES =====

/**
 * Fonction générique pour exécuter une requête sur une table
 */
export async function queryTable<T>(
  tableName: string,
  options?: {
    select?: string;
    filter?: { column: string; value: any };
    orderBy?: { column: string; ascending?: boolean };
    limit?: number;
  }
) {
  try {
    let query = supabase.from(tableName).select(options?.select || '*');

    if (options?.filter) {
      query = query.eq(options.filter.column, options.filter.value);
    }

    if (options?.orderBy) {
      query = query.order(options.orderBy.column, {
        ascending: options.orderBy.ascending ?? true,
      });
    }

    if (options?.limit) {
      query = query.limit(options.limit);
    }

    const { data, error } = await query;

    if (error) throw error;
    return { data: data as T[], error: null };
  } catch (error) {
    console.error(`Erreur lors de la requête sur ${tableName}:`, error);
    return { data: null, error };
  }
}

/**
 * Fonction générique pour insérer des données dans une table
 */
export async function insertIntoTable<T>(tableName: string, data: T | T[]) {
  try {
    const { data: result, error } = await supabase
      .from(tableName)
      .insert(Array.isArray(data) ? data : [data])
      .select();

    if (error) throw error;
    return { data: result, error: null };
  } catch (error) {
    console.error(`Erreur lors de l'insertion dans ${tableName}:`, error);
    return { data: null, error };
  }
}

/**
 * Fonction générique pour mettre à jour des données dans une table
 */
export async function updateTable<T>(
  tableName: string,
  id: string,
  updates: Partial<T>
) {
  try {
    const { data, error } = await supabase
      .from(tableName)
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error(`Erreur lors de la mise à jour dans ${tableName}:`, error);
    return { data: null, error };
  }
}

/**
 * Fonction générique pour supprimer des données d'une table
 */
export async function deleteFromTable(tableName: string, id: string) {
  try {
    const { error } = await supabase.from(tableName).delete().eq('id', id);

    if (error) throw error;
    return { error: null };
  } catch (error) {
    console.error(`Erreur lors de la suppression dans ${tableName}:`, error);
    return { error };
  }
}

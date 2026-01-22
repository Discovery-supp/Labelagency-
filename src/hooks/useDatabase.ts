import { useState, useEffect } from 'react';
import * as db from '../lib/database';
import type { Contact } from '../lib/database';

/**
 * Hook personnalisé pour gérer les contacts
 */
export function useContacts() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Charger les contacts au montage
  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setLoading(true);
    setError(null);
    const { data, error: err } = await db.getContacts();
    if (err) {
      setError(err as Error);
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  };

  const addContact = async (contact: Omit<Contact, 'id' | 'created_at'>) => {
    setError(null);
    const { data, error: err } = await db.createContact(contact);
    if (err) {
      setError(err as Error);
      return { success: false, data: null };
    }
    if (data) {
      setContacts((prev) => [data, ...prev]);
    }
    return { success: true, data };
  };

  const updateContact = async (id: string, updates: Partial<Contact>) => {
    setError(null);
    const { data, error: err } = await db.updateContact(id, updates);
    if (err) {
      setError(err as Error);
      return { success: false, data: null };
    }
    if (data) {
      setContacts((prev) =>
        prev.map((contact) => (contact.id === id ? data : contact))
      );
    }
    return { success: true, data };
  };

  const removeContact = async (id: string) => {
    setError(null);
    const { error: err } = await db.deleteContact(id);
    if (err) {
      setError(err as Error);
      return { success: false };
    }
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
    return { success: true };
  };

  return {
    contacts,
    loading,
    error,
    addContact,
    updateContact,
    removeContact,
    refresh: loadContacts,
  };
}

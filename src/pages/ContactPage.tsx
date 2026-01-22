import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, AlertCircle } from 'lucide-react';
import { createContact } from '../lib/database';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error: dbError } = await createContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        message: formData.message || undefined,
        company: formData.company || undefined,
      });

      if (dbError) {
        throw dbError;
      }

      setSubmitted(true);
      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Erreur lors de l\'envoi du formulaire:', err);
      setError('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-[#0f172a]">
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#0a1628] to-[#1e293b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-300">
            Parlons de votre projet. Sans engagement, sans jargon technique.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Envoyez-nous un message
              </h2>
              <p className="text-gray-300 mb-8">
                Remplissez ce formulaire et nous vous recontacterons rapidement pour discuter de vos besoins.
              </p>

              {error && (
                <div className="bg-red-500/10 border-2 border-red-500 rounded-xl p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">Erreur</h3>
                      <p className="text-gray-300 text-sm">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              {submitted ? (
                <div className="bg-pink-500/10 border-2 border-pink-500 rounded-xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/20 rounded-full mb-4">
                    <Send className="h-8 w-8 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-gray-300">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                      Votre nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a1628] border-2 border-gray-700 text-white rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="Jean Kabamba"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">
                      Entreprise / Organisation
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a1628] border-2 border-gray-700 text-white rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a1628] border-2 border-gray-700 text-white rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#0a1628] border-2 border-gray-700 text-white rounded-lg focus:border-pink-500 focus:outline-none transition-colors"
                      placeholder="+243 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                      Votre message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-[#0a1628] border-2 border-gray-700 text-white rounded-lg focus:border-pink-500 focus:outline-none transition-colors resize-none"
                      placeholder="Décrivez-nous votre projet ou vos besoins..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-4 rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Envoyer le message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-400 text-center">
                    * Champs obligatoires
                  </p>
                </form>
              )}
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Ou contactez-nous directement
              </h2>

              <div className="space-y-6 mb-8">
                <a
                  href="https://wa.me/243998187951"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-green-500/10 border-2 border-green-500/30 rounded-xl hover:border-green-500 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">WhatsApp (Recommandé)</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Réponse rapide et directe
                    </p>
                    <p className="text-green-400 font-semibold">
                      +243 998 187 951
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-[#0a1628] rounded-xl border border-gray-700">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Envoyez-nous un email
                    </p>
                    <a href="mailto:contact@labelcongo.com" className="text-pink-500 font-semibold hover:underline">
                      contact@labelcongo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#0a1628] rounded-xl border border-gray-700">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Téléphone</h3>
                    <p className="text-gray-300 text-sm mb-2">
                      Appelez-nous directement
                    </p>
                    <a href="tel:+243998187951" className="text-pink-500 font-semibold hover:underline">
                      +243 998 187 951
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-[#0a1628] rounded-xl border border-gray-700">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Localisation</h3>
                    <p className="text-gray-300 text-sm">
                      Kinshasa, République Démocratique du Congo
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-pink-500/10 border-l-4 border-pink-500 rounded-r-xl p-6">
                <h3 className="font-bold text-white mb-2">Engagement qualité</h3>
                <p className="text-gray-300 text-sm">
                  Nous nous engageons à vous répondre dans les 24 heures ouvrées.
                  Toutes vos informations restent confidentielles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0a1628] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            La première conversation est toujours gratuite et sans engagement
          </p>
          <a
            href="https://wa.me/243998187951?text=Bonjour%20Label%20Congo,%20je%20souhaite%20une%20démonstration"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
          >
            Demander une démonstration
          </a>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

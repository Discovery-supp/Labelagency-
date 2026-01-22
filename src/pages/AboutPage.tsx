import { Target, Heart, Lightbulb, Users } from 'lucide-react';

const AboutPage = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Pragmatisme',
      description: 'Nous croyons en l\'IA qui résout de vrais problèmes, pas en la technologie pour la technologie.',
    },
    {
      icon: Heart,
      title: 'Accompagnement humain',
      description: 'Derrière chaque solution, une équipe locale qui comprend votre contexte et vos défis.',
    },
    {
      icon: Target,
      title: 'Résultats mesurables',
      description: 'Chaque projet doit apporter un retour sur investissement clair et quantifiable.',
    },
    {
      icon: Users,
      title: 'Transfert de compétences',
      description: 'Nous formons vos équipes pour qu\'elles deviennent autonomes avec les outils IA.',
    },
  ];

  return (
    <div className="bg-[#0f172a]">
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#0a1628] to-[#1e293b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Équipe professionnelle"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            À propos de Label Agency
          </h1>
          <p className="text-xl text-gray-300">
            Votre partenaire local pour une transformation digitale réussie
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Notre vision</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              Label Agency est né d'un constat simple : l'intelligence artificielle peut transformer les entreprises africaines, mais seulement si elle est adaptée à leurs réalités.
            </p>
            <p>
              Trop souvent, les solutions technologiques sont conçues pour d'autres marchés, avec d'autres infrastructures, d'autres moyens. Résultat : elles ne fonctionnent pas ici, ou coûtent trop cher.
            </p>
            <p>
              <strong className="text-pink-500">Notre mission est différente.</strong> Nous créons des solutions IA qui s'intègrent dans votre quotidien, qui utilisent les outils que vous connaissez déjà comme WhatsApp, et qui apportent des résultats concrets dès les premières semaines.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Pourquoi l'IA doit être pragmatique en RDC
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Le contexte congolais est unique</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">•</span>
                  <span>Connectivité parfois limitée</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">•</span>
                  <span>Budgets maîtrisés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">•</span>
                  <span>Besoin de solutions rapides à déployer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">•</span>
                  <span>Équipes peu familières avec l'IA</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Notre approche adaptée</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">•</span>
                  <span>Solutions légères et rapides</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">•</span>
                  <span>Tarifs transparents et accessibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">•</span>
                  <span>Déploiement progressif et sécurisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pink-500 font-bold">•</span>
                  <span>Formation continue de vos équipes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1e293b]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-500/20 rounded-full mb-4">
                  <value.icon className="h-8 w-8 text-pink-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Plus qu'un prestataire, un partenaire
          </h2>
          <div className="text-lg space-y-4 text-center max-w-3xl mx-auto">
            <p>
              Chez Label Agency, nous ne vendons pas simplement des logiciels. Nous construisons avec vous une stratégie de transformation qui respecte vos contraintes, s'adapte à votre rythme, et génère des résultats concrets.
            </p>
            <p className="font-semibold text-xl mt-8">
              Votre succès est notre meilleure référence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

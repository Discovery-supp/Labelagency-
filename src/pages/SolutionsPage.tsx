import { Store, Building2, Radio, ArrowRight } from 'lucide-react';

const SolutionsPage = () => {
  const sectors = [
    {
      icon: Store,
      name: 'PME locales',
      subtitle: 'Commerce, distribution, services',
      problems: [
        'Gestion manuelle des commandes clients',
        'Difficulté à suivre les stocks',
        'Service client débordé',
        'Pas de temps pour analyser les ventes',
      ],
      solutions: [
        {
          title: 'Assistant WhatsApp pour commandes',
          description: 'Vos clients commandent directement par WhatsApp. L\'IA enregistre, confirme et transmet.',
        },
        {
          title: 'Suivi intelligent des stocks',
          description: 'Alertes automatiques quand un produit est en rupture ou à réapprovisionner.',
        },
        {
          title: 'Analyse des ventes',
          description: 'Rapports automatiques sur vos meilleures ventes et périodes creuses.',
        },
      ],
      results: [
        'Augmentation de 40% de la vitesse de traitement des commandes',
        'Réduction des ruptures de stock',
        'Plus de temps pour développer l\'activité',
      ],
    },
    {
      icon: Building2,
      name: 'ONG & Institutions',
      subtitle: 'Organisations à but non lucratif, projets de développement',
      problems: [
        'Collecte et traitement de données terrain complexe',
        'Communication difficile avec les bénéficiaires',
        'Rapports longs à produire',
        'Coordination entre équipes dispersées',
      ],
      solutions: [
        {
          title: 'Collecte de données via WhatsApp',
          description: 'Les agents terrain envoient leurs rapports par WhatsApp. L\'IA structure et compile automatiquement.',
        },
        {
          title: 'Assistant multilingue',
          description: 'Communication avec les bénéficiaires dans plusieurs langues locales.',
        },
        {
          title: 'Génération automatique de rapports',
          description: 'Vos rapports mensuels et trimestriels créés en quelques clics.',
        },
      ],
      results: [
        'Gain de 70% du temps sur la production de rapports',
        'Meilleure qualité et cohérence des données',
        'Impact plus important sur le terrain',
      ],
    },
    {
      icon: Radio,
      name: 'Télécoms & Industrie',
      subtitle: 'Entreprises structurées, grands comptes',
      problems: [
        'Volume élevé de demandes clients',
        'Besoin d\'analyser de grandes quantités de données',
        'Processus internes longs et répétitifs',
        'Support technique sollicité en permanence',
      ],
      solutions: [
        {
          title: 'Centre d\'assistance IA',
          description: 'Résolution automatique des demandes récurrentes. Escalade intelligente vers les experts.',
        },
        {
          title: 'Analyse prédictive',
          description: 'Anticipation des pannes et maintenance préventive grâce à l\'analyse de données.',
        },
        {
          title: 'Assistant pour équipes techniques',
          description: 'Accès instantané aux procédures, documentations techniques et historiques.',
        },
      ],
      results: [
        'Réduction de 60% du volume de tickets support niveau 1',
        'Détection précoce des incidents',
        'Équipes techniques plus productives',
      ],
    },
  ];

  return (
    <div className="bg-[#0f172a]">
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#0a1628] to-[#1e293b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Solutions sectorielles"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Solutions par secteur
          </h1>
          <p className="text-xl text-gray-300">
            Des réponses IA adaptées aux défis spécifiques de votre industrie
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto space-y-20">
          {sectors.map((sector, index) => (
            <div key={index} className="scroll-mt-8">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <sector.icon className="h-7 w-7 text-pink-500" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">{sector.name}</h2>
                    <p className="text-gray-300 text-lg">{sector.subtitle}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#1e293b] rounded-2xl p-8 mb-8 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Défis typiques du secteur</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {sector.problems.map((problem, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-[#0a1628] p-4 rounded-lg">
                      <span className="text-red-500 font-bold flex-shrink-0">×</span>
                      <p className="text-gray-300">{problem}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-6">Nos solutions IA adaptées</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {sector.solutions.map((solution, idx) => (
                    <div key={idx} className="bg-[#1e293b] border-2 border-pink-500/30 rounded-xl p-6 hover:border-pink-500 transition-colors">
                      <h4 className="font-bold text-white mb-3">{solution.title}</h4>
                      <p className="text-gray-300 text-sm">{solution.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Résultats attendus</h3>
                <ul className="space-y-3">
                  {sector.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="h-5 w-5 text-white/80 flex-shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Votre secteur n'est pas listé ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Nous adaptons nos solutions à tous les secteurs d'activité. Parlez-nous de votre entreprise.
          </p>
          <a
            href="https://wa.me/243998187951?text=Bonjour%20Label%20Congo,%20je%20travaille%20dans%20le%20secteur..."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
          >
            Discutons de votre secteur
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;

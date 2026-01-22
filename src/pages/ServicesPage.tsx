import { MessageSquare, FileText, BarChart3, GraduationCap, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: MessageSquare,
      title: 'Automatisation WhatsApp intelligente',
      problem: 'Votre équipe passe des heures à répondre aux mêmes questions sur WhatsApp',
      solution: 'Un assistant IA qui répond automatiquement à vos clients 24h/24',
      benefits: [
        'Réponses instantanées jour et nuit',
        'Qualification automatique des demandes',
        'Transfert vers un humain si nécessaire',
        'Suivi et historique des conversations',
      ],
      results: 'Économie de 60% du temps de votre équipe client',
    },
    {
      icon: FileText,
      title: 'Assistants IA pour documents internes',
      problem: 'Vos employés perdent du temps à chercher des informations dans vos procédures et documents',
      solution: 'Un assistant IA qui connaît tous vos documents et répond aux questions de vos équipes',
      benefits: [
        'Recherche instantanée dans toute votre documentation',
        'Réponses précises basées sur vos procédures',
        'Accessible à toute l\'équipe',
        'Gain de temps considérable',
      ],
      results: 'Division par 5 du temps de recherche d\'information',
    },
    {
      icon: BarChart3,
      title: 'Outils d\'aide à la décision',
      problem: 'Vous avez des données mais pas le temps de les analyser pour prendre les bonnes décisions',
      solution: 'Des tableaux de bord IA qui analysent vos données et vous alertent sur les points importants',
      benefits: [
        'Analyse automatique de vos données de vente',
        'Alertes sur les tendances importantes',
        'Prévisions et recommandations',
        'Rapports clairs et actionnables',
      ],
      results: 'Décisions plus rapides et mieux informées',
    },
    {
      icon: GraduationCap,
      title: 'Formation et accompagnement IA',
      problem: 'Vos équipes ne savent pas comment utiliser l\'IA dans leur travail quotidien',
      solution: 'Formation pratique adaptée à votre secteur et à vos besoins spécifiques',
      benefits: [
        'Sessions de formation sur mesure',
        'Cas pratiques liés à votre activité',
        'Support continu après la formation',
        'Rendez vos équipes autonomes',
      ],
      results: 'Équipes formées et opérationnelles en quelques semaines',
    },
  ];

  return (
    <div className="bg-[#0f172a]">
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#0a1628] to-[#1e293b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Services IA"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nos services
          </h1>
          <p className="text-xl text-gray-300">
            Des solutions IA concrètes qui répondent à vos défis quotidiens
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto space-y-16">
          {services.map((service, index) => (
            <div key={index} className={`${index % 2 === 1 ? 'bg-[#1e293b]' : 'bg-[#0a1628]'} rounded-2xl p-8 md:p-12 border border-gray-700`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center">
                  <service.icon className="h-8 w-8 text-pink-500" />
                </div>
                <h2 className="text-3xl font-bold text-white">{service.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-red-500/10 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-red-500">×</span> Le problème
                  </h3>
                  <p className="text-gray-300">{service.problem}</p>
                </div>

                <div className="bg-pink-500/10 border-l-4 border-pink-400 p-6 rounded-r-lg">
                  <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                    <span className="text-pink-500">✓</span> Notre solution
                  </h3>
                  <p className="text-gray-300">{service.solution}</p>
                </div>
              </div>

              <div className="bg-[#1e293b] border-2 border-pink-500/30 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-white mb-4 text-lg">Bénéfices concrets</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl p-6">
                <h3 className="font-bold mb-2 text-lg">Résultat attendu</h3>
                <p className="text-lg">{service.results}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0a1628] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Besoin d'une solution sur mesure ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Chaque entreprise est unique. Parlons de vos défis spécifiques.
          </p>
          <a
            href="https://wa.me/243998187951?text=Bonjour%20Label%20Congo,%20j'aimerais%20discuter%20d'une%20solution%20sur%20mesure"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
          >
            Contactez-nous sur WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;

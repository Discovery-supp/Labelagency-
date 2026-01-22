import { Briefcase, Users as Team, Shield, CheckCircle, Clock, Target } from 'lucide-react';

const TrainingPage = () => {
  const programs = [
    {
      icon: Briefcase,
      title: 'Formation dirigeants',
      subtitle: 'Comprendre les opportunités de l\'IA',
      target: 'Directeurs, managers, décideurs',
      duration: '1/2 journée',
      format: 'Présentiel ou visio',
      objectives: [
        'Démystifier l\'IA et ses applications concrètes',
        'Identifier les opportunités pour votre entreprise',
        'Comprendre le ROI et les coûts',
        'Savoir piloter un projet IA',
      ],
      content: [
        'Qu\'est-ce que l\'IA peut vraiment faire aujourd\'hui',
        'Cas d\'usage réussis en Afrique',
        'Comment évaluer une opportunité IA',
        'Questions à se poser avant de démarrer',
      ],
    },
    {
      icon: Team,
      title: 'Formation équipes opérationnelles',
      subtitle: 'Utiliser l\'IA dans le travail quotidien',
      target: 'Employés, agents, coordinateurs',
      duration: '1 à 2 jours',
      format: 'Sessions pratiques en petit groupe',
      objectives: [
        'Savoir utiliser les outils IA déployés',
        'Gagner du temps sur les tâches répétitives',
        'Améliorer la qualité du travail',
        'Devenir autonome avec les assistants IA',
      ],
      content: [
        'Prise en main des outils spécifiques',
        'Exercices pratiques sur cas réels',
        'Astuces et bonnes pratiques',
        'Résolution de problèmes courants',
      ],
    },
    {
      icon: Shield,
      title: 'Sensibilisation IA responsable',
      subtitle: 'Utiliser l\'IA de manière éthique et sécurisée',
      target: 'Toutes les équipes',
      duration: '2 heures',
      format: 'Atelier interactif',
      objectives: [
        'Comprendre les limites de l\'IA',
        'Protéger les données sensibles',
        'Éviter les biais et erreurs',
        'Utiliser l\'IA de manière responsable',
      ],
      content: [
        'Ce que l\'IA ne sait pas faire',
        'Bonnes pratiques de sécurité',
        'Respect de la vie privée',
        'Quand faire confiance à l\'IA, quand la vérifier',
      ],
    },
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Formations sur mesure',
      description: 'Adaptées à votre secteur, vos outils et votre niveau',
    },
    {
      icon: Team,
      title: 'Approche pratique',
      description: 'Cas concrets, exercices réels, pas de théorie abstraite',
    },
    {
      icon: Clock,
      title: 'Sessions courtes',
      description: 'Formats condensés qui respectent votre temps',
    },
    {
      icon: CheckCircle,
      title: 'Support post-formation',
      description: 'Accompagnement continu après les sessions',
    },
  ];

  return (
    <div className="bg-[#0f172a]">
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#0a1628] to-[#1e293b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Formation professionnelle"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Formation IA
          </h1>
          <p className="text-xl text-gray-300">
            Rendez vos équipes autonomes et performantes avec l'intelligence artificielle
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pourquoi former vos équipes ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Les meilleurs outils ne servent à rien si personne ne sait les utiliser.
            Notre objectif : que vos collaborateurs soient à l'aise, confiants et efficaces avec l'IA.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-[#0a1628] p-6 rounded-xl text-center border border-gray-700">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-full mb-4">
                <benefit.icon className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0f172a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Nos programmes de formation
          </h2>

          <div className="space-y-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-[#1e293b] rounded-2xl shadow-lg overflow-hidden border border-gray-700">
                <div className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center">
                      <program.icon className="h-8 w-8 text-pink-500" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                      <p className="text-lg text-pink-500 font-semibold mb-4">{program.subtitle}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                        <span className="bg-[#0a1628] px-3 py-1 rounded-full">
                          <strong>Public :</strong> {program.target}
                        </span>
                        <span className="bg-[#0a1628] px-3 py-1 rounded-full">
                          <strong>Durée :</strong> {program.duration}
                        </span>
                        <span className="bg-[#0a1628] px-3 py-1 rounded-full">
                          <strong>Format :</strong> {program.format}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-white mb-3">Objectifs</h4>
                      <ul className="space-y-2">
                        {program.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-bold text-white mb-3">Contenu</h4>
                      <ul className="space-y-2">
                        {program.content.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <span className="text-pink-500 font-bold flex-shrink-0">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1e293b]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-pink-500/10 border-l-4 border-pink-500 rounded-r-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Formation continue et support
            </h3>
            <p className="text-gray-300 mb-4">
              Au-delà des sessions initiales, nous restons disponibles pour :
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Répondre aux questions via WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Organiser des sessions de rappel</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Former les nouveaux arrivants</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-pink-500 flex-shrink-0 mt-0.5" />
                <span>Introduire de nouvelles fonctionnalités</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0a1628] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Planifions une formation pour vos équipes
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Programmes personnalisables selon vos besoins et votre emploi du temps
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/243998187951?text=Bonjour%20Label%20Congo,%20je%20souhaite%20organiser%20une%20formation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              Contactez-nous sur WhatsApp
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-colors border-2 border-pink-500"
            >
              En savoir plus
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingPage;

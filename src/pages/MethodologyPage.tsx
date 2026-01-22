import { Search, Rocket, Users, TrendingUp } from 'lucide-react';

const MethodologyPage = () => {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Analyse des besoins',
      subtitle: 'Comprendre vos défis réels',
      description: 'Nous commençons par écouter. Pas de solution toute faite. Nous prenons le temps de comprendre vos processus, vos difficultés quotidiennes et vos objectifs.',
      activities: [
        'Entretiens avec vos équipes',
        'Observation de vos processus actuels',
        'Identification des tâches à automatiser en priorité',
        'Définition d\'objectifs mesurables',
      ],
      duration: '1 à 2 semaines',
    },
    {
      number: '02',
      icon: Rocket,
      title: 'Déploiement progressif',
      subtitle: 'Avancer pas à pas, sans risque',
      description: 'Nous ne bouleversons pas tout d\'un coup. Nous déployons par étapes, en testant et en ajustant pour garantir que chaque fonctionnalité apporte la valeur attendue.',
      activities: [
        'Création d\'une première version simplifiée',
        'Test avec un groupe restreint',
        'Ajustements basés sur les retours',
        'Déploiement progressif à toute l\'équipe',
      ],
      duration: '2 à 4 semaines',
    },
    {
      number: '03',
      icon: Users,
      title: 'Accompagnement humain',
      subtitle: 'Former et rassurer vos équipes',
      description: 'La technologie ne suffit pas. Nous formons vos collaborateurs, répondons à leurs questions, et nous assurons qu\'ils sont à l\'aise avec les nouveaux outils.',
      activities: [
        'Sessions de formation pratiques',
        'Documentation claire en français',
        'Support direct par WhatsApp',
        'Suivi régulier des utilisateurs',
      ],
      duration: 'Tout au long du projet',
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Support et amélioration continue',
      subtitle: 'Grandir avec vous',
      description: 'Notre relation ne s\'arrête pas au déploiement. Nous restons disponibles, surveillons les performances, et proposons des améliorations au fur et à mesure.',
      activities: [
        'Suivi des indicateurs de performance',
        'Maintenance et mises à jour',
        'Optimisations basées sur l\'usage réel',
        'Évolution selon vos nouveaux besoins',
      ],
      duration: 'Aussi longtemps que nécessaire',
    },
  ];

  return (
    <div className="bg-[#0f172a]">
      <section className="relative py-16 px-4 bg-gradient-to-br from-[#0a1628] to-[#1e293b] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Méthodologie"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Notre méthodologie
          </h1>
          <p className="text-xl text-gray-300">
            Une approche éprouvée pour garantir votre réussite
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0f172a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              4 étapes pour une transformation réussie
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Nous avançons avec vous, étape par étape, pour construire des solutions qui fonctionnent vraiment
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-20 top-32 w-0.5 h-24 bg-pink-500/30"></div>
                )}

                <div className="bg-[#1e293b] border-2 border-gray-700 rounded-2xl p-8 hover:border-pink-500 transition-colors">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-40 h-40 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center">
                          <step.icon className="h-16 w-16 text-white" />
                        </div>
                        <div className="absolute -top-3 -left-3 w-16 h-16 bg-[#1e293b] border-4 border-pink-500 rounded-xl flex items-center justify-center">
                          <span className="text-2xl font-bold text-pink-500">{step.number}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-pink-500 font-semibold mb-4">{step.subtitle}</p>
                      <p className="text-gray-300 mb-6 text-lg">{step.description}</p>

                      <div className="bg-[#0a1628] rounded-xl p-6 mb-4">
                        <h4 className="font-bold text-white mb-3">Activités clés</h4>
                        <ul className="space-y-2">
                          {step.activities.map((activity, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300">
                              <span className="text-pink-500 font-bold">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="inline-block bg-pink-500/20 text-pink-400 px-4 py-2 rounded-lg font-semibold text-sm">
                        Durée : {step.duration}
                      </div>
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
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Pourquoi cette approche fonctionne
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0a1628] p-8 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Minimise les risques</h3>
              <p className="text-gray-300">
                Le déploiement progressif permet de détecter et corriger les problèmes rapidement, avant qu'ils n'impactent toute l'organisation.
              </p>
            </div>
            <div className="bg-[#0a1628] p-8 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Résultats rapides</h3>
              <p className="text-gray-300">
                En priorisant les actions à fort impact, vous voyez des résultats concrets dès les premières semaines.
              </p>
            </div>
            <div className="bg-[#0a1628] p-8 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Adoption facilitée</h3>
              <p className="text-gray-300">
                L'accompagnement humain et la formation continue garantissent que vos équipes adoptent vraiment les nouveaux outils.
              </p>
            </div>
            <div className="bg-[#0a1628] p-8 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-xl font-bold text-white mb-4">Évolution continue</h3>
              <p className="text-gray-300">
                Les solutions évoluent avec vous, s'adaptent à vos nouveaux besoins et continuent de créer de la valeur dans le temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0a1628] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            La première étape est un simple échange. Sans engagement.
          </p>
          <a
            href="https://wa.me/243998187951?text=Bonjour%20Label%20Congo,%20je%20souhaite%20discuter%20d'un%20projet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
          >
            Commençons la conversation
          </a>
        </div>
      </section>
    </div>
  );
};

export default MethodologyPage;

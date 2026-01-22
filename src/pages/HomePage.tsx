import { ArrowRight, CheckCircle, Zap, Shield, Users, TrendingUp, Clock, DollarSign } from 'lucide-react';
import { PageType } from '../App';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const problems = [
    {
      icon: Clock,
      title: 'Équipes surchargées',
      description: 'Vos collaborateurs perdent du temps sur des tâches répétitives',
    },
    {
      icon: DollarSign,
      title: 'Coûts opérationnels élevés',
      description: 'Les processus manuels coûtent cher et ralentissent la croissance',
    },
    {
      icon: Users,
      title: 'Service client débordé',
      description: 'Difficile de répondre rapidement à tous vos clients et partenaires',
    },
  ];

  const solutions = [
    {
      icon: Zap,
      title: 'Automatisation intelligente',
      description: 'Libérez vos équipes des tâches répétitives grâce à des assistants IA simples et efficaces',
    },
    {
      icon: TrendingUp,
      title: 'Gains mesurables',
      description: 'Économisez du temps et de l\'argent avec des résultats concrets et rapides',
    },
    {
      icon: Shield,
      title: 'Accompagnement humain',
      description: 'Une équipe locale qui vous guide à chaque étape, sans jargon technique',
    },
  ];

  const benefits = [
    'Réduction jusqu\'à 70% du temps sur les tâches répétitives',
    'Réponses instantanées 24h/24 sur WhatsApp',
    'Amélioration de la satisfaction client',
    'Décisions plus rapides grâce à l\'analyse de données',
    'Formation et transfert de compétences',
    'Solutions adaptées au contexte congolais',
  ];

  return (
    <div className="bg-[#0f172a]">
      <section className="relative bg-gradient-to-br from-[#0a1628] to-[#1e293b] text-white py-32 px-4 overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Technologie et IA"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#1e293b]/85 to-[#0a1628]/90"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Transformez votre entreprise avec l'intelligence artificielle
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                Des solutions IA pratiques et rentables, conçues pour les entreprises en RDC.
                Sans complexité technique.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://wa.me/243998187951?text=Bonjour%20Label%20Agence,%20je%20souhaite%20parler%20avec%20un%20expert"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-pink-500/50 hover:scale-105 transform"
                >
                  Parler à un expert sur WhatsApp
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-all border-2 border-pink-500 hover:scale-105 transform"
                >
                  Demander une démonstration
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Intelligence artificielle et technologie"
                className="rounded-2xl shadow-2xl border-2 border-pink-500/30 hover:scale-105 transition-transform duration-500 hover:border-pink-500/50"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Vous reconnaissez ces défis ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Chaque jour, votre entreprise fait face à des obstacles qui freinent sa croissance
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-[#0a1628] p-8 rounded-xl shadow-lg border border-gray-700">
                <problem.icon className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{problem.title}</h3>
                <p className="text-gray-300">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Label Agency apporte les solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              L'intelligence artificielle au service de vos résultats
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-[#1e293b] p-8 rounded-xl shadow-lg border-2 border-pink-500/30 hover:border-pink-500 transition-colors">
                <solution.icon className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1e293b]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Des avantages concrets pour votre entreprise
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des résultats mesurables dès les premières semaines
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-[#0a1628] p-6 rounded-lg shadow-lg border border-gray-700">
                <CheckCircle className="h-6 w-6 text-pink-500 flex-shrink-0 mt-1" />
                <p className="text-gray-200 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#0a1628] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à faire passer votre entreprise au niveau supérieur ?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Discutons de vos défis. Sans engagement, sans jargon technique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/243998187951?text=Bonjour%20Label%20Agence,%20je%20souhaite%20en%20savoir%20plus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all"
            >
              Réponse rapide sur WhatsApp
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg hover:bg-white/10 transition-colors border-2 border-pink-500"
            >
              Remplir le formulaire
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function HomePage() {
  const { t } = useTranslation();
  
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Cosmic Background Orbs */}
      <div className="floating-orb w-96 h-96 bg-cosmic-400 top-20 -left-20" />
      <div className="floating-orb w-80 h-80 bg-aurora-400 top-40 right-10 animation-delay-2000" />
      <div className="floating-orb w-72 h-72 bg-harmony-400 bottom-20 left-1/3 animation-delay-4000" />
      
      {/* Navigation */}
      <header className="relative z-10 glass">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gradient">✨ MeetConnect</h1>
            <div className="flex items-center space-x-4">
              <Link to="/activities" className="text-slate-700 dark:text-slate-300 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors font-medium hidden sm:inline">
                {t('activities')}
              </Link>
              <Link to="/messages" className="text-slate-700 dark:text-slate-300 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors font-medium hidden sm:inline">
                {t('messages')}
              </Link>
              <Link to="/profile" className="text-slate-700 dark:text-slate-300 hover:text-cosmic-600 dark:hover:text-cosmic-400 transition-colors font-medium hidden sm:inline">
                {t('profile')}
              </Link>
              <LanguageSwitcher />
              <Link to="/login" className="btn-cosmic">
                {t('getStarted')}
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-8xl font-bold mb-6 text-gradient leading-tight">
              {t('welcome')}
            </h2>
            <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 mb-8 font-light">
              {t('subtitle')}
            </p>
            <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-12">
              {t('description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/activities" className="btn-cosmic text-lg px-8 py-4">
                🌍 {t('startConnecting')}
              </Link>
              <Link to="/activities" className="btn-harmony text-lg px-8 py-4">
                ✨ {t('discoverActivities')}
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Global Connection */}
            <div className="cosmic-card p-8 text-center group">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                🌏
              </div>
              <h3 className="text-2xl font-bold mb-3 text-cosmic-700 dark:text-cosmic-300">
                {t('globalUnity')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('globalUnityDesc')}
              </p>
            </div>

            {/* Safe Spaces */}
            <div className="cosmic-card p-8 text-center group">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                🕊️
              </div>
              <h3 className="text-2xl font-bold mb-3 text-aurora-700 dark:text-aurora-300">
                {t('harmoniousSpaces')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('harmoniousSpacesDesc')}
              </p>
            </div>

            {/* Shared Experiences */}
            <div className="cosmic-card p-8 text-center group">
              <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                🎭
              </div>
              <h3 className="text-2xl font-bold mb-3 text-harmony-700 dark:text-harmony-300">
                {t('sharedJourneys')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('sharedJourneysDesc')}
              </p>
            </div>
          </div>

          {/* Cultural Diversity Showcase */}
          <div className="cosmic-card p-12 text-center">
            <div className="text-5xl mb-6 space-x-2">
              🌸 🎋 🪔 🎪 🎨 🎵 ☯️ 🌿
            </div>
            <h3 className="text-4xl font-bold mb-4 text-gradient">
              {t('celebratingHumanity')}
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8">
              {t('humanityDesc')}
            </p>
            <div className="connection-line my-8" />
            <p className="text-lg text-slate-500 dark:text-slate-500 italic">
              "{t('quote')}"
            </p>
          </div>

          {/* Activity Categories Preview */}
          <div className="mt-20">
            <h3 className="text-4xl font-bold text-center mb-12 text-gradient">
              {t('infiniteWays')}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { icon: '⛷️', label: 'Adventure' },
                { icon: '🎨', label: 'Arts' },
                { icon: '🍜', label: 'Culinary' },
                { icon: '🎭', label: 'Culture' },
                { icon: '💪', label: 'Fitness' },
                { icon: '🎵', label: 'Music' },
                { icon: '📚', label: 'Learning' },
                { icon: '🌿', label: 'Nature' },
                { icon: '🎮', label: 'Gaming' },
                { icon: '☕', label: 'Social' },
                { icon: '🧘', label: 'Wellness' },
                { icon: '✈️', label: 'Travel' },
              ].map((category, index) => (
                <div
                  key={index}
                  className="cosmic-card p-6 text-center cursor-pointer"
                >
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {category.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Instagram, Mail, MessageCircle, Youtube, Music } from 'lucide-react';
import Button from './components/Button';
import EventModal from './components/EventModal';
import Footer from './components/Footer';
import BackgroundSlideshow from './components/BackgroundSlideshow';
import { EventType } from './types';

import { SpotifyIcon } from './components/CustomIcons';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Parallax effect: slide background up slower than the scroll
  const parallaxTranslateY = -scrollY * 0.3;

  return (
    <div className="min-h-screen bg-nude-50">

      {/* Sticky Background Section with Parallax */}
      <div
        className="sticky top-0 w-full h-[65vh] md:h-[75vh] overflow-hidden -z-0"
        style={{
          transform: `translateY(${parallaxTranslateY}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <BackgroundSlideshow />
        {/* Inner Shadow / Bottom Light Fade for Depth using #FCFAF8 */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(252, 250, 248, 0.8) 10%, rgba(252, 250, 248, 0) 100%)'
          }}
        />
      </div>

      {/* Scrolling Content Overlay */}
      <div className="relative z-10 mt-29 flex flex-col items-center">
        {/* The "Filler" - Restored height to provide a buffer for scroll/parallax */}
        <div
          className="absolute top-0 left-0 w-full h-[300px] -translate-y-full pointer-events-none"
          style={{
            background: `linear-gradient(to top, 
              rgba(252, 250, 248, 1) 0%,
              rgba(252, 250, 248, 0.95) 5%,
              rgba(252, 250, 248, 0.9) 10%,
              rgba(252, 250, 248, 0.8) 35%,
              rgba(252, 250, 248, 0.6) 45%,
              rgba(252, 250, 248, 0.4) 65%,
              rgba(252, 250, 248, 0) 100%
            )`
          }}
        />

        {/* Content Section - Deeper overlap to eliminate the gap during scroll */}
        <div className="relative -mt-64 w-full flex flex-col items-center z-20">

          {/* Profile Info - Lowered by increasing padding-top. Added z-30 to stay above shadow. */}
          <div className="relative z-30 pt-32 pb-8 text-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-stone-800 tracking-tight">
              Patricia Porto
            </h1>

            <div className="flex justify-center gap-6 md:gap-10 mt-4 md:mt-6">
              <a
                href="https://www.instagram.com/patriciapoorto/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Instagram size={20} className="md:w-6 md:h-6" />
                <span className="text-sm md:text-base font-medium font-sans">Instagram</span>
              </a>
              <a
                href="mailto:patriciaporto.contato@gmail.com"
                className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
              >
                <Mail size={20} className="md:w-6 md:h-6" />
                <span className="text-sm md:text-base font-medium font-sans">Email</span>
              </a>
            </div>
          </div>

          {/* Main Content Area - Solid background starts here with a very condensed upward shadow */}
          <div className="w-full bg-nude-50 flex flex-col items-center shadow-[0_-60px_80px_20px_rgba(252,250,248,1)]">
            <main className="w-full max-w-md md:max-w-xl px-6 flex flex-col gap-4 md:gap-6 items-center pb-12">

              <Button
                onClick={() => handleOpenModal()}
                icon={<MessageCircle size={20} />}
              >
                Contato / Agendas
              </Button>

              <Button
                href="https://open.spotify.com/intl-pt/artist/0PmxWsaxll61rsUfOjlqBa"
                icon={<SpotifyIcon size={20} />}
              >
                Spotify
              </Button>

              <Button
                href="https://www.youtube.com/c/Patr%C3%ADciaPorto"
                icon={<Youtube size={20} />}
              >
                YouTube
              </Button>

              <div className="w-full mt-2 rounded-xl overflow-hidden shadow-md border border-stone-200 bg-white">
                <iframe
                  data-testid="embed-iframe"
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/artist/0PmxWsaxll61rsUfOjlqBa?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  title="Spotify Player"
                  className="md:h-[450px]"
                ></iframe>
              </div>

            </main>

            <Footer />

            <EventModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
import React, { useState } from 'react';
import { Instagram, Mail, MessageCircle, Youtube, Music } from 'lucide-react';
import Button from './components/Button';
import EventModal from './components/EventModal';
import Footer from './components/Footer';
import BackgroundSlideshow from './components/BackgroundSlideshow';
import { EventType } from './types';

import { SpotifyIcon } from './components/CustomIcons';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-nude-50">

      {/* Header Image Section */}
      <div className="w-full relative">
        <div className="relative w-full aspect-[3/4] md:aspect-[21/9] overflow-hidden shadow-none">
          <BackgroundSlideshow />
        </div>

        {/* Profile Info - Overlaying the bottom of the image slightly */}
        <div className="relative -mt-16 md:-mt-24 text-center z-10 px-4">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-stone-800 tracking-tight">
            Patricia Porto
          </h1>

          <div className="flex justify-center gap-6 md:gap-10 mt-4 md:mt-6 mb-8 md:mb-12">
            <a
              href="https://www.instagram.com/patriciapoorto/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <Instagram size={20} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-medium">Instagram</span>
            </a>
            <a
              href="mailto:patriciaporto.contato@gmail.com" // Update with real email
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <Mail size={20} className="md:w-6 md:h-6" />
              <span className="text-sm md:text-base font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content / Buttons */}
      <main className="w-full max-w-md md:max-w-xl px-6 flex flex-col gap-4 md:gap-6 items-center z-10 pb-12">

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
            height="352" // Updated height
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
  );
};

export default App;
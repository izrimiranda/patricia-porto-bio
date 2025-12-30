import React, { useState } from 'react';
import { Instagram, Mail, MessageCircle, Youtube, Music } from 'lucide-react';
import Button from './components/Button';
import EventModal from './components/EventModal';
import Footer from './components/Footer';
import BackgroundSlideshow from './components/BackgroundSlideshow';
import { EventType } from './types';

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
      <div className="w-full max-w-md relative">
        <div className="relative w-full aspect-[3/4] sm:rounded-b-[3rem] overflow-hidden shadow-none sm:mt-0">
          <BackgroundSlideshow />
        </div>

        {/* Profile Info - Overlaying the bottom of the image slightly */}
        <div className="relative -mt-16 text-center z-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-800 tracking-tight">
            Patricia Porto
          </h1>

          <div className="flex justify-center gap-6 mt-4 mb-8">
            <a
              href="https://www.instagram.com/patriciapoorto/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <Instagram size={20} />
              <span className="text-sm font-medium">Instagram</span>
            </a>
            <a
              href="mailto:contato@patriciaporto.com" // Update with real email
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content / Buttons */}
      <main className="w-full max-w-md px-6 flex flex-col gap-4 items-center z-10">

        <Button
          onClick={() => handleOpenModal()}
          icon={<MessageCircle size={20} />}
        >
          Contato / Agendas
        </Button>

        <Button
          href="https://open.spotify.com/intl-pt/artist/0PmxWsaxll61rsUfOjlqBa"
          icon={<Music size={20} />}
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
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/3TVXtAsR1Inumwj472S9r4?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Player"
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
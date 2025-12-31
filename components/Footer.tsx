import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-12 mb-6 text-center space-y-3 pt-4 border-t border-stone-200">
      <p className="text-stone-500 font-medium text-sm">© 2025 Patricia Porto</p>
      <div className="flex items-center justify-center gap-2 text-xs text-stone-400">
        <a href="https://codigo1615.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-stone-600 transition-colors tracking-wider font-semibold">Código 1615</a>
        <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
        <span className="bg-gradient-to-r from-stone-400 via-stone-600 to-stone-400 bg-clip-text text-transparent font-medium bg-[length:200%_auto] hover:bg-right transition-all duration-500">Desenvolvido com Excelência</span>
      </div>
    </footer>
  );
};

export default Footer;
export const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/351966931401"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contactar via WhatsApp"
    >
      <div className="relative">
        {/* Pulsing rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-50 animate-pulse" />
        
        {/* Main button - WhatsApp official style */}
        <div
          className="relative h-16 w-16 rounded-full bg-[#25D366]
                     shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(37,211,102,0.6)]
                     transform hover:scale-110 transition-all duration-300
                     flex items-center justify-center
                     group-hover:rotate-6 cursor-pointer"
        >
          {/* WhatsApp SVG Icon - Official style */}
          <svg 
            viewBox="0 0 32 32" 
            className="h-9 w-9 fill-white drop-shadow-lg"
          >
            <path d="M16 0C7.164 0 0 7.163 0 16c0 2.826.737 5.48 2.022 7.78L0 32l8.448-2.217A15.96 15.96 0 0 0 16 32c8.836 0 16-7.163 16-16S24.836 0 16 0zm0 29.455c-2.516 0-4.956-.7-7.08-2.031l-.507-.307-5.26 1.38 1.405-5.134-.337-.525a13.398 13.398 0 0 1-2.13-7.293c0-7.426 6.03-13.455 13.455-13.455S29.455 8.12 29.455 15.545 23.426 29 16 29z"/>
            <path d="M23.525 19.617c-.41-.205-2.414-1.19-2.789-1.326-.374-.137-.646-.205-.918.205-.272.41-1.054 1.326-1.292 1.598-.237.272-.475.306-.885.102-.41-.205-1.73-.638-3.297-2.033-1.22-1.087-2.043-2.43-2.282-2.84-.238-.41-.025-.632.18-.836.184-.184.41-.478.614-.717.205-.238.272-.41.41-.682.136-.272.068-.51-.034-.716-.102-.205-.918-2.213-1.258-3.03-.33-.796-.666-.688-.918-.7-.237-.012-.51-.015-.782-.015s-.714.102-1.087.51c-.374.41-1.428 1.395-1.428 3.402 0 2.007 1.462 3.947 1.666 4.22.205.27 2.892 4.418 7.007 6.194.978.422 1.742.674 2.337.862.982.312 1.876.268 2.582.162.788-.117 2.414-.986 2.754-1.938.34-.952.34-1.768.238-1.938-.102-.17-.374-.272-.782-.477z"/>
          </svg>
          
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 bg-gradient-to-br from-accent to-red-600 text-white 
                         rounded-full h-7 w-7 flex items-center justify-center text-xs font-bold 
                         shadow-lg border-2 border-white animate-bounce">
            1
          </span>
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl text-sm font-medium">
            Fale connosco agora!
            <div className="absolute top-full right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 
                          border-transparent border-t-gray-900" />
          </div>
        </div>
      </div>
    </a>
  );
};
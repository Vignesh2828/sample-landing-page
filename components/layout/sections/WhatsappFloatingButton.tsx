import React from "react";

const WhatsAppFloatingButton = () => {
  // Your WhatsApp phone number (international format without + sign)
  const phoneNumber = "919344518635";

  // WhatsApp URL to open chat directly
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed 
        bottom-6 
        left-6 
        z-50 
        bg-green-600 
        hover:bg-green-700 
        text-white 
        rounded-full 
        p-4 
        shadow-lg 
        flex 
        items-center 
        justify-center
        transition-colors
        duration-300
      "
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.58-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.263.488 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982 1-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.89 9.884m8.413-18.297A11.815 11.815 0 0012.05.003C5.495 0 .162 5.332.16 11.888c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.86 11.86 0 005.674 1.445h.005c6.554 0 11.887-5.332 11.89-11.888a11.84 11.84 0 00-3.491-8.418" />
      </svg>
    </a>
  );
};

export default WhatsAppFloatingButton;

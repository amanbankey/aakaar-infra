import { MessageCircle } from 'lucide-react'
import { business } from '../../constants/business.js'

export default function WhatsAppButton() {
  return (
    <a
      href={business.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Aakaar Infra on WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366]/90 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:scale-110 transition-transform duration-300 animate-pulse-glow"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
    </a>
  )
}

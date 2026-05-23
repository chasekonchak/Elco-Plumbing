export default function AnnouncementBar() {
  return (
    <div className="bg-[#111D2B] text-white text-sm font-body py-2.5 px-4 text-center flex items-center justify-center gap-2.5">
      <span
        className="inline-block w-2 h-2 rounded-full bg-[#B5311A] flex-shrink-0"
        style={{ animation: 'pulse 1.8s ease-in-out infinite' }}
      />
      <span className="text-[#C8C2B8] text-xs font-medium tracking-wide">
        Pipe burst?{' '}
        <a
          href="tel:6787721218"
          className="text-white font-semibold hover:text-[#B5311A] transition-colors duration-200"
        >
          We answer 24/7 &rarr; (678) 772-1218
        </a>
      </span>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-lg font-bold gradient-text">Revera</span>
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Revera. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-300 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-slate-300 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

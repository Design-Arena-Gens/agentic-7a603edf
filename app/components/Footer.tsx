export function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-6xl px-6 pb-16 text-xs uppercase tracking-[0.28em] text-white/40 sm:px-12 md:px-16">
      <div className="flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} Accrue Flow Vault Intelligence</span>
        <div className="flex flex-col items-start gap-2 text-white/40 sm:flex-row sm:items-center sm:gap-6">
          <span>vault@accrueflow.com</span>
          <span>Geneva · New York · Singapore</span>
        </div>
      </div>
    </footer>
  );
}

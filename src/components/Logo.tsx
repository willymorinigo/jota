export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img src="/logo.svg" alt="Jota Eventos Logo" className="h-16 w-auto" />
    </div>
  );
}

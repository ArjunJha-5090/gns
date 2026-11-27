export default function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] max-w-[160vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(251_146_60/0.22),transparent)] blur-2xl" />
      <div className="absolute top-[40%] -left-40 h-[420px] w-[420px] rounded-full bg-[radial-gradient(closest-side,rgb(139_92_246/0.18),transparent)] blur-2xl" />
      <div className="absolute bottom-0 -right-40 h-[460px] w-[460px] rounded-full bg-[radial-gradient(closest-side,rgb(56_189_248/0.12),transparent)] blur-2xl" />
    </div>
  );
}

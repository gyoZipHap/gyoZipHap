export default function WelcomeMessage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="font-['Noto Sans'] flex flex-col gap-3.5 text-center text-xl font-semibold text-zinc-800">
        {children}
      </div>
    </>
  );
}

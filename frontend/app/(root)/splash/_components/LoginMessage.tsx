export function LoginTitle({ children }: { children: React.ReactNode }) {
  return <p className="mb-3 text-sm font-semibold">{children}</p>;
}

export function LoginSubtitle({ children }: { children: React.ReactNode }) {
  return <p className="mb-24 mt-3 text-xs">{children}</p>;
}

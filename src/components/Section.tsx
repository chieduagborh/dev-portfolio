type Props = {
  id?: string;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
};

export default function Section({ id, className, style, children }: Props) {
  return (
    <section id={id} className={`py-16 ${className}`} style={style}>
      <div className="mx-auto w-full max-w-6xl px-8">{children}</div>
    </section>
  );
}

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-teal-700">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-5xl">
        {title}
      </h1>
      {text ? <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p> : null}
    </div>
  );
}

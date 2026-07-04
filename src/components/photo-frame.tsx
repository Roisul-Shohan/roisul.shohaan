"use client";

interface PhotoFrameProps {
  className?: string;
  loading?: "eager" | "lazy";
}

export default function PhotoFrame({
  className,
  loading = "eager",
}: PhotoFrameProps) {
  return (
    <div className={`relative aspect-[600/520] w-full ${className ?? ""}`}>
      <div
        className="photo-blob-clip photo-blob-shell absolute inset-0"
        aria-hidden
      />

      <div className="photo-blob-clip absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://lh3.googleusercontent.com/d/1TBc8XkF9R9DjfphRCLHv0m9h3589VUOW=w1200"
          alt="Roisul Islam — Full Stack Developer"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: "center 22%", transform: "scale(1.02)" }}
          loading={loading}
        />
      </div>
    </div>
  );
}

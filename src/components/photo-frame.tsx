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
      <svg
        aria-hidden
        className="absolute inset-0 h-full w-full"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <clipPath id="photo-blob-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.297 0.138 C 0.433 0.081 0.590 0.079 0.730 0.119 C 0.857 0.156 0.932 0.264 0.942 0.400 C 0.952 0.558 0.908 0.723 0.820 0.840 C 0.740 0.946 0.610 1.000 0.465 1.000 C 0.323 1.000 0.207 0.940 0.137 0.819 C 0.070 0.702 0.063 0.528 0.088 0.383 C 0.113 0.252 0.177 0.171 0.252 0.140 C 0.267 0.135 0.282 0.133 0.297 0.138 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="photo-blob-shell absolute inset-0"
        style={{ clipPath: "url(#photo-blob-clip)", WebkitClipPath: "url(#photo-blob-clip)" }}
        aria-hidden
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: "url(#photo-blob-clip)", WebkitClipPath: "url(#photo-blob-clip)" }}
      >
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

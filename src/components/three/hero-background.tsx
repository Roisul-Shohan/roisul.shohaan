"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface HeroBackgroundProps {
  className?: string;
}

export default function HeroBackground({ className }: HeroBackgroundProps) {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const parent = canvas.parentElement;
    if (!parent) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let frame = 0;

    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
    } catch {
      // WebGL not supported — render nothing rather than crashing.
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 5.5;

    // Icosahedron with custom wireframe-ish material
    const icoGeometry = new THREE.IcosahedronGeometry(1.5, 1);
    const icoMaterial = new THREE.MeshStandardMaterial({
      color: 0xc067ff,
      emissive: 0x6e00ab,
      emissiveIntensity: 0.4,
      metalness: 0.6,
      roughness: 0.25,
      wireframe: true,
      transparent: true,
      opacity: 0.9,
    });
    const ico = new THREE.Mesh(icoGeometry, icoMaterial);
    scene.add(ico);

    // Inner solid sphere (subtle)
    const innerGeo = new THREE.SphereGeometry(1.0, 32, 32);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x4d007a,
      emissive: 0x2f004c,
      emissiveIntensity: 0.6,
      metalness: 0.85,
      roughness: 0.15,
      transparent: true,
      opacity: 0.25,
    });
    const inner = new THREE.Mesh(innerGeo, innerMat);
    scene.add(inner);

    // Particle field
    const particleCount = 350;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xff96b2,
      size: 0.025,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);
    const keyLight = new THREE.PointLight(0xc067ff, 2.5, 20);
    keyLight.position.set(4, 4, 4);
    scene.add(keyLight);
    const rimLight = new THREE.PointLight(0xff96b2, 2.0, 20);
    rimLight.position.set(-4, -3, 3);
    scene.add(rimLight);

    // Mouse parallax
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 0.4;
      target.y = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleResize = () => {
      const { clientWidth, clientHeight } = parent;
      if (clientWidth === 0 || clientHeight === 0) return;
      renderer!.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();

      current.x += (target.x - current.x) * 0.05;
      current.y += (target.y - current.y) * 0.05;

      ico.rotation.x = t * 0.2 + current.y * 0.5;
      ico.rotation.y = t * 0.3 + current.x * 0.5;
      inner.rotation.x = -t * 0.1;
      inner.rotation.y = -t * 0.2;
      ico.position.y = Math.sin(t * 0.5) * 0.15;
      inner.position.y = ico.position.y;
      particles.rotation.y = t * 0.04;
      particles.rotation.x = t * 0.02;

      renderer!.render(scene, camera);
      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      icoGeometry.dispose();
      icoMaterial.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      pGeo.dispose();
      pMat.dispose();
      renderer?.dispose();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className ?? ""}`}
    />
  );
}
'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, motion } from 'framer-motion';
import * as THREE from 'three';

const InteractiveScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 25, damping: 35 });
  const springY = useSpring(mouseY, { stiffness: 25, damping: 35 });

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });

    renderer.setSize(600, 600);
    containerRef.current.appendChild(renderer.domElement);

    // Create an icosahedron
    const geometry = new THREE.IcosahedronGeometry(1.5, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      wireframe: true,
      wireframeLinewidth: 2,
      transparent: true,
      opacity: 0.8,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 4;

    // Base rotation speed
    const baseRotationSpeed = 0.001;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Gentle constant rotation
      mesh.rotation.x += baseRotationSpeed;
      mesh.rotation.y += baseRotationSpeed * 1.5;

      // Mouse interaction with clamped values
      const mouseXValue = springX.get();
      const mouseYValue = springY.get();
      
      // Clamp the mouse influence
      const maxRotation = 0.0003;
      const clampedX = Math.max(-maxRotation, Math.min(maxRotation, mouseXValue * 0.00001));
      const clampedY = Math.max(-maxRotation, Math.min(maxRotation, mouseYValue * 0.00001));

      mesh.rotation.x += clampedY;
      mesh.rotation.y += clampedX;

      renderer.render(scene, camera);
    };

    animate();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = (e.clientX - centerX) * 2; // Scale factor for sensitivity
        const y = (e.clientY - centerY) * 2;
        mouseX.set(x);
        mouseY.set(y);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [mouseX, mouseY, springX, springY]);

  return (
    <motion.div 
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};

export default InteractiveScene; 
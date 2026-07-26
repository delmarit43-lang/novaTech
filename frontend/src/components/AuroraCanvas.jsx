import React, { useEffect, useRef } from 'react';

export default function AuroraCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Glowing mesh nodes
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2.5 + 1,
      color: Math.random() > 0.5 ? 'rgba(59, 130, 246, ' : 'rgba(56, 189, 248, ',
      alpha: Math.random() * 0.4 + 0.1
    }));

    let time = 0;

    const render = () => {
      time += 0.008;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Gradient background glow points
      const grad1X = width * 0.2 + Math.sin(time) * 100 + (mouse.x - width / 2) * 0.05;
      const grad1Y = height * 0.3 + Math.cos(time * 0.8) * 80 + (mouse.y - height / 2) * 0.05;
      
      const grad2X = width * 0.8 + Math.cos(time * 1.1) * 120 + (mouse.x - width / 2) * 0.08;
      const grad2Y = height * 0.6 + Math.sin(time * 0.9) * 90 + (mouse.y - height / 2) * 0.08;

      // Radial glow 1 - Royal Blue
      const g1 = ctx.createRadialGradient(grad1X, grad1Y, 0, grad1X, grad1Y, width * 0.45);
      g1.addColorStop(0, 'rgba(37, 99, 235, 0.22)');
      g1.addColorStop(0.5, 'rgba(59, 130, 246, 0.08)');
      g1.addColorStop(1, 'rgba(8, 18, 38, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Radial glow 2 - Soft Cyan / Purple Mix
      const g2 = ctx.createRadialGradient(grad2X, grad2Y, 0, grad2X, grad2Y, width * 0.4);
      g2.addColorStop(0, 'rgba(139, 92, 246, 0.18)');
      g2.addColorStop(0.5, 'rgba(56, 189, 248, 0.06)');
      g2.addColorStop(1, 'rgba(8, 18, 38, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // Draw particle mesh
      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ')';
        ctx.fill();

        // Connect nearby particles with subtle lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.12 * (1 - dist / 130)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
}

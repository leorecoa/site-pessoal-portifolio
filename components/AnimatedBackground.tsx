
import React, { useEffect, useRef } from 'react';

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let w: number, h: number;
    
    // Configurações das ondas orgânicas
    const waves = [
      {
        y: 0.5,
        length: 0.002,
        amplitude: 80,
        speed: 0.02,
        phase: 0,
        color: 'rgba(99, 102, 241, 0.15)', // Indigo-500
        lineWidth: 2
      },
      {
        y: 0.52,
        length: 0.0015,
        amplitude: 120,
        speed: -0.015,
        phase: 1,
        color: 'rgba(34, 211, 238, 0.1)', // Cyan-400
        lineWidth: 3
      },
      {
        y: 0.48,
        length: 0.003,
        amplitude: 60,
        speed: 0.03,
        phase: 2,
        color: 'rgba(168, 85, 247, 0.12)', // Purple-500
        lineWidth: 1
      },
      {
        y: 0.5,
        length: 0.001,
        amplitude: 150,
        speed: 0.01,
        phase: 3,
        color: 'rgba(236, 72, 153, 0.08)', // Pink-500
        lineWidth: 2
      }
    ];

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const drawWave = (wave: typeof waves[0]) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.moveTo(0, h * wave.y);

      for (let x = 0; x < w; x++) {
        // Cálculo de senoide composta para movimento orgânico
        const wave1 = Math.sin(x * wave.length + wave.phase);
        const wave2 = Math.sin(x * wave.length * 0.5 + wave.phase * 0.7);
        const yOffset = (wave1 + wave2) * wave.amplitude;
        
        ctx.lineTo(x, h * wave.y + yOffset);
      }

      ctx.strokeStyle = wave.color;
      ctx.lineWidth = wave.lineWidth;
      ctx.lineCap = 'round';
      ctx.stroke();
      
      // Atualiza a fase para o próximo frame
      wave.phase += wave.speed;
    };

    const animate = () => {
      // Limpa o canvas com um leve rastro para suavidade (opcional)
      // Aqui usamos clear total para manter a nitidez das linhas
      ctx.clearRect(0, 0, w, h);
      
      // Desenha cada camada de onda
      waves.forEach(drawWave);
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#050505]">
      {/* Mesh gradient sutil de fundo para profundidade */}
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      
      {/* Canvas com as ondas fluidas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      
      {/* Overlay de vinheta para focar no conteúdo central */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.4)_100%)] pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export function BotaoMagnetico({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pulse, setPulse] = useState({ x: 50, y: 50, active: false });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 }); // 0.2 define a "força" do ímã
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPulse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  };

  const resetPulse = () => setPulse((current) => ({ ...current, active: false }));

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onPointerDown={handlePointerDown}
      onPointerUp={resetPulse}
      onPointerCancel={resetPulse}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`magic-button ${pulse.active ? 'is-pulsing' : ''} ${className ?? ''}`}
      style={{
        '--pulse-x': `${pulse.x}%`,
        '--pulse-y': `${pulse.y}%`,
      } as React.CSSProperties}
    >
      {children}
    </motion.a>
  );
}
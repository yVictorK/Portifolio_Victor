import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { inSphere } from "maath/random";

type StarsCanvasProps = {
  className?: string;
  value?: number;
};

function StarBackground(props: any) {
  const ref: any = useRef(null);
  const [sphere] = useState(() =>
    inSphere(new Float32Array(props.value ?? 5001), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 50;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled classname="text-foreground" {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export const StarsCanvas = ({ className, value }: StarsCanvasProps) => (
  <div className={`fixed inset-0 h-auto w-full ${className}`}>
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground value={value} />
      </Suspense>
    </Canvas>
  </div>
);

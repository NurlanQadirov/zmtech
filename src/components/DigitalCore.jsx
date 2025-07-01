import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, PerspectiveCamera, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const DataParticles = () => {
  const ref = useRef();
  
  // DƏYİŞİKLİK: Zərrəciklərin sayı 5000-dən 15000-ə qaldırıldı
  const sphere = useMemo(() => random.inSphere(new Float32Array(15000), { radius: 1.4 }), []);

  useFrame((state, delta) => {
    if(ref.current) {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00BFFF"
          // DƏYİŞİKLİK: Hər zərrəciyin ölçüsü artırıldı
          size={0.01}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const Core = () => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1.6, 16, 16]}>
      <meshStandardMaterial 
        color="#00BFFF" 
        emissive="#00BFFF" 
        emissiveIntensity={1.2} 
        wireframe 
      />
    </Sphere>
  );
};

const DigitalCore = () => {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={45} />
      <ambientLight intensity={0.5} />
      <Stars radius={150} depth={50} count={5000} factor={5} saturation={0} fade speed={1} />
      
      <group position={[2.2, 0, 0]}>
        <Core />
        <DataParticles />
      </group>
    </Canvas>
  );
};

export default DigitalCore;
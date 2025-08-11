import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const { scene } = useGLTF('public/xrevolution_n.a.i.__points_ii.glb');
  return <primitive object={scene} scale={1.5} />;
}

export default function MarbleBustViewer2() {
  return (
    <Canvas style={{ height: '300px', width: '100%' , borderRadius : '20px' }} camera={{ position: [0, 1, 3] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <Model />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
}

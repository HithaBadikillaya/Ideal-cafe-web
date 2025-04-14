import React, { Suspense } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';


function Model() {
  const { scene } = useGLTF('/assets/scene.gltf');
  useFrame(() => {
    scene.rotation.y -= 0.005;
    
  });
  return <primitive object={scene} scale={2} />;
}

export default function HeroBanner() {
  const heroStyle = {
    backgroundColor: '#7B3F00',
    height: '600px',
    position: 'relative',
    color: '#fff',
  };

  const overlayStyle = {
    position: 'absolute',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  return (
    <section style={heroStyle}>
      <div style={overlayStyle}></div>
      <div className="container h-100 position-relative">
        <div className="row h-100 align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold">Discover Our Award-Winning Ice Creams</h1>
            <p className="lead my-4">
              Indulge in irresistible flavors crafted with premium ingredients. Experience the perfect blend of taste and innovation with every scoop.
            </p>
            <a href="/menu" className="btn btn-primary btn-lg">Explore the Menu</a>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div style={{ width: '640px', height: '480px' }}>
              <Canvas camera={{ position: [0, 1, 4], fov: 50 }}>
                <Suspense fallback={null}>
                  <ambientLight intensity={1} />
                  <directionalLight position={[5, 5, 5]} intensity={5} />
                  <Model />
                  <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

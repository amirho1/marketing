"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, Html } from "@react-three/drei";

const ZOOM = 25;
const X_AXIOS = 25;
const Y_AXIOS = 0;

function PhoneModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} dispose={null} />;
}

export default function IphoneModel() {
  return (
    <div className="w-[500px] h-[606px] xl:h-[700px] max-md:m-auto max-md:w-[300px]">
      <Canvas camera={{ position: [X_AXIOS, Y_AXIOS, ZOOM], fov: 35 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <Suspense fallback={<Html>Loading...</Html>}>
          <PhoneModel url="/iphone_16_-_free.glb" />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls
          enableRotate={false}
          enableDamping={false}
          enableZoom={false}
          enabled={false}
          minDistance={25}
          maxDistance={25}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}

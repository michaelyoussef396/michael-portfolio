import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import { Float, useGLTF, useTexture } from "@react-three/drei";
import { Mesh } from "three";

const Cube = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF("models/cube.glb") as any;
  const texture = useTexture("textures/cube.png");

  // Type the ref as Mesh (or null initially)
  const cubeRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Run GSAP animation only if cubeRef.current exists
  useEffect(() => {
    let tl: gsap.core.Timeline | null = null;
    if (cubeRef.current) {
      tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });
      tl.to(cubeRef.current.rotation, {
        y: hovered ? "+=2" : `+=${Math.PI * 2}`,
        x: hovered ? "+=2" : `-=${Math.PI * 2}`,
        duration: 2.5,
        ease: "tween",
      });
    }
    return () => {
      if (tl) {
        tl.kill();
      }
    };
  }, [hovered]);

  return (
    <Float floatIntensity={2}>
      <group
        position={[9, -4, 0]}
        rotation={[2.6, 0.8, -1.8]}
        scale={0.74}
        dispose={null}
        {...props}
      >
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={nodes.Cube.material}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
        >
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useGLTF.preload("models/cube.glb");

export default Cube;

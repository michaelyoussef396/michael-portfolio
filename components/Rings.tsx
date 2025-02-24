import { useCallback, useRef } from "react";
import { Center, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Mesh, Euler } from "three";

interface RingsProps {
  position: [number, number, number];
}

const Rings: React.FC<RingsProps> = ({ position }) => {
  // Define a ref array for meshes, typed as Mesh[]
  const refList = useRef<Mesh[]>([]);

  // Callback to add a mesh to the ref list if not already included
  const getRef = useCallback((mesh: Mesh | null) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  const texture = useTexture("textures/rings.png");

  useGSAP(
    () => {
      if (refList.current.length === 0) return;

      // Update the position for all rings
      refList.current.forEach((r) => {
        r.position.set(position[0], position[1], position[2]);
      });

      // Create an infinite looping timeline for the rotations
      gsap
        .timeline({
          repeat: -1,
          repeatDelay: 0.5,
        })
        .to(
          refList.current.map((r) => r.rotation as Euler),
          {
            y: `+=${Math.PI * 2}`,
            x: `-=${Math.PI * 2}`,
            duration: 2.5,
            stagger: {
              each: 0.15,
            },
          }
        );
    },
    {
      dependencies: [position],
    }
  );

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;

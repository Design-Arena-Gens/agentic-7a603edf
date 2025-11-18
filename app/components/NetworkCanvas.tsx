"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { SimplexNoise } from "three/examples/jsm/math/SimplexNoise";

const PARTICLE_COUNT = 1800;

function FlowParticles() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, basePositions, velocities, colors } = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const base = new Float32Array(PARTICLE_COUNT * 3);
    const vel = new Float32Array(PARTICLE_COUNT * 3);
    const cols = new Float32Array(PARTICLE_COUNT * 3);

    const colorStart = new THREE.Color("#f6c66e");
    const colorEnd = new THREE.Color("#9beae0");

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = THREE.MathUtils.randFloat(1.2, 3.8);
      const phi = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const theta = THREE.MathUtils.randFloat(0.1, Math.PI - 0.1);

      const x = radius * Math.sin(theta) * Math.cos(phi);
      const y = radius * Math.cos(theta) * 0.65;
      const z = radius * Math.sin(theta) * Math.sin(phi);

      const idx = i * 3;
      pos[idx] = base[idx] = x;
      pos[idx + 1] = base[idx + 1] = y;
      pos[idx + 2] = base[idx + 2] = z;

      const speed = THREE.MathUtils.randFloat(0.2, 0.9);
      vel[idx] = speed * (Math.random() > 0.5 ? 1 : -1);
      vel[idx + 1] = speed * THREE.MathUtils.randFloat(0.2, 0.6);
      vel[idx + 2] = speed * THREE.MathUtils.randFloat(0.3, 0.8);

      const c = colorStart.clone().lerp(colorEnd, Math.random());
      cols[idx] = c.r;
      cols[idx + 1] = c.g;
      cols[idx + 2] = c.b;
    }

    return { positions: pos, basePositions: base, velocities: vel, colors: cols };
  }, []);

  const noise = useMemo(() => new SimplexNoise(), []);

  useFrame((_, delta) => {
    if (!pointsRef.current) return;
    const positionsArray = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const idx = i * 3;
      const time = performance.now() * 0.0003;

      const flow = noise.noise4d(
        basePositions[idx] * 0.3,
        basePositions[idx + 1] * 0.3,
        basePositions[idx + 2] * 0.3,
        time
      );

      positionsArray[idx] += velocities[idx] * flow * delta;
      positionsArray[idx + 1] += velocities[idx + 1] * Math.sin(time * 2) * delta;
      positionsArray[idx + 2] += velocities[idx + 2] * Math.cos(time * 1.4) * delta;

      const radius = Math.sqrt(
        positionsArray[idx] ** 2 + positionsArray[idx + 1] ** 2 + positionsArray[idx + 2] ** 2
      );

      if (radius > 5.2) {
        positionsArray[idx] = basePositions[idx] * 0.8;
        positionsArray[idx + 1] = basePositions[idx + 1] * 0.8;
        positionsArray[idx + 2] = basePositions[idx + 2] * 0.8;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={PARTICLE_COUNT}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={PARTICLE_COUNT}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.85}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function NeuralLinks() {
  const group = useRef<THREE.Group>(null);
  const lines = useMemo(() => {
    const curves: THREE.CatmullRomCurve3[] = [];

    for (let i = 0; i < 18; i++) {
      const points: THREE.Vector3[] = [];
      const segments = THREE.MathUtils.randInt(4, 7);
      for (let s = 0; s < segments; s++) {
        points.push(
          new THREE.Vector3(
            THREE.MathUtils.randFloatSpread(4.5),
            THREE.MathUtils.randFloatSpread(2.2),
            THREE.MathUtils.randFloatSpread(4.5)
          )
        );
      }
      const curve = new THREE.CatmullRomCurve3(points, false, "centripetal");
      curves.push(curve);
    }
    return curves;
  }, []);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.12) * 0.25;
    group.current.rotation.x = Math.cos(clock.getElapsedTime() * 0.08) * 0.08;
  });

  return (
    <group ref={group}>
      {lines.map((curve, index) => {
        const points = curve.getPoints(120);
        const positions = new Float32Array(points.length * 3);
        points.forEach((point, i) => {
          const idx = i * 3;
          positions[idx] = point.x;
          positions[idx + 1] = point.y;
          positions[idx + 2] = point.z;
        });

        return (
          <line key={`curve-${index}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={points.length}
                array={positions}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={index % 2 === 0 ? "#9beae0" : "#f6c66e"}
              linewidth={1}
              transparent
              opacity={0.25}
            />
          </line>
        );
      })}
    </group>
  );
}

export function NetworkCanvas() {
  return (
    <Canvas
      gl={{ antialias: true }}
      dpr={[1, 1.5]}
      className="absolute inset-0"
    >
      <color attach="background" args={["#04070c"]} />
      <fog attach="fog" args={["#04070c", 8, 20]} />
      <PerspectiveCamera makeDefault fov={48} position={[0, 0, 8]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 6]} intensity={2.1} color="#f6c66e" />
      <pointLight position={[-5, -2, -4]} intensity={1.2} color="#9beae0" />
      <NeuralLinks />
      <FlowParticles />
    </Canvas>
  );
}

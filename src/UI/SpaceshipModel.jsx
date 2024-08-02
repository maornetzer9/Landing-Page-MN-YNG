import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { slideAnimation } from '../utilities/motion';
import * as THREE from 'three';
import '../layout/spaceship.css'

const AlienSpaceshipModel = () => {
  const spaceshipRef = useRef();
  const [position, setPosition] = useState([4, 0, 0]); // Start position off-screen
  const [rotation, setRotation] = useState([-2.5, 2, 0]); // Initial rotation
  const [isMoving, setIsMoving] = useState(true);

  // Update position and rotation to move spaceship into view, rotate, and then park
  useFrame(() => {
    if (isMoving) {
      if (position[0] > 0) {
        // Move left
        setPosition([position[0] - 0.1, position[1], position[2]]);
      } else if (rotation[0] < Math.PI) {
        // Rotate
        setRotation([rotation[0], rotation[1] + 0.01, rotation[2]]);
      } else {
        // Stop moving and rotating
        setIsMoving(false);
      }
    }

    spaceshipRef.current.position.set(...position);
    spaceshipRef.current.rotation.set(...rotation);
  });

  // Create a group to hold the parts of the spaceship
  const spaceship = new THREE.Group();

  // Main body of the spaceship
  const bodyGeometry = new THREE.CylinderGeometry(4, 5, 0.5, 64);
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: 'silver', metalness: 0.9, roughness: 0.2 });
  const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
  body.position.set(0, 0, 0);
  spaceship.add(body);

  // Top dome of the spaceship
  const domeGeometry = new THREE.SphereGeometry(1.5, 32, 32, 0, 6);
  const domeMaterial = new THREE.MeshStandardMaterial({ color: 'silver', metalness: 0.5, roughness: 0.5, opacity: 0.7, transparent: true });
  const dome = new THREE.Mesh(domeGeometry, domeMaterial);
  dome.position.set(0, 0, 0);
  dome.rotation.x = Math.PI / 2;
  spaceship.add(dome);

  // Create the ring of lights around the spaceship
  const lightGeometry = new THREE.SphereGeometry(0.3, 16, 16);
  const lightMaterial = new THREE.MeshStandardMaterial({ color: 'yellow', emissive: 'yellow', emissiveIntensity: 1 });

  const numLights = 20;
  for (let i = 0; i < numLights; i++) {
    const angle = (i / numLights) * Math.PI * 2;
    const x = 4.5 * Math.cos(angle);
    const z = 4.5 * Math.sin(angle);
    const light = new THREE.Mesh(lightGeometry, lightMaterial);
    light.position.set(x, -0.3, z);
    spaceship.add(light);
  }

  return <primitive object={spaceship} ref={spaceshipRef} scale={0.3} />;
};

const Spaceship = () => {

  return (
    <div className="spaceship-container">
      <Canvas>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 25, 10]} />
        {/* <OrbitControls /> */}
        <AlienSpaceshipModel />
      </Canvas>
        <span className='popup' {...slideAnimation('right')} >היכונו למסע בין כוכבים</span>
    </div>
  );
};

export default Spaceship;

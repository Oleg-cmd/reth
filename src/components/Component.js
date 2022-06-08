import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, OrbitControls } from '@react-three/drei'

import './component.css'
const Scene = () => {
    const gltf = useLoader(GLTFLoader, './lieutenantHead.gltf')
    return (
        <>
            <primitive object={gltf.scene} scale={3} position={[0, 0, 0]} />
        </>
    )
}

export const Component = () => {
    return (
        <div className="component">
            <div className="container">
                <Canvas>
                    <Suspense fallback={false}>
                        <Scene />
                        <OrbitControls />
                        <Environment preset="park" background />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    )
}

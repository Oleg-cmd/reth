import { Suspense, lazy } from 'react'

import './component.css'

import Loader from '../components/ModelLoader'

const LazyModel = lazy(() => import('./Model'))

export const Component = () => {
    return (
        <div className="component">
            <div className="container">
                {/* <Canvas>
                    <Suspense fallback={false}>
                        <Scene />
                        <OrbitControls />
                        <Environment preset="park" background />
                    </Suspense>
                </Canvas> */}
                <LazyModel />
            </div>
        </div>
    )
}

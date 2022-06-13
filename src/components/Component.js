import { Suspense, lazy } from 'react'

import './component.css'

const LazyModel = lazy(() => import('./Model'))

export const Component = () => {
    return (
        <div className="component">
            <div className="container">
                <LazyModel />
            </div>
        </div>
    )
}

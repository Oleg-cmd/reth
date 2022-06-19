import { Suspense, lazy } from 'react'

import { Module } from './Module'
import './component.css'

const LazyModel = lazy(() => import('./Model'))

export const Component = () => {
    return (
        <div className="component">
            <div className="container">
                <LazyModel />
                <Module />
            </div>
        </div>
    )
}

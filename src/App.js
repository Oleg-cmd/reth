import logo from './logo.svg'
import './App.css'

import { Helmet } from 'react-helmet'

import { Header } from './components/Header'
import { Component } from './components/Component'

function App() {
    return (
        <div className="App">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Reth</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
                <meta
                    name="description"
                    content="A React.js + Three.js example app"
                />
                <meta
                    name="keywords"
                    content="three,js,react,threejs,reactjs,example,app"
                />
                <meta name="author" content="olevegic" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="1 days" />
                <meta name="language" content="en" />
                <meta name="document-class" content="Published" />
            </Helmet>
            <div className="App-header">
                <Header />
                <Component />
            </div>
        </div>
    )
}

export default App

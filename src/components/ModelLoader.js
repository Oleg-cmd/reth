import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'

import './spinner.css'
// 2 one, i finally bought macbook and im fucking proud of my life
export const ModelContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="model"
        position="relative"
        display="flex"
        justifyContent="center"
        alignItems="center">
        {children}
    </Box>
))

const Loader = () => {
    return (
        <ModelContainer>
            <div className="spinner-container">
                <div className="lds-dual-ring"></div>
            </div>
        </ModelContainer>
    )
}

export default Loader

// copyright https://github.com/craftzdog/craftzdog-homepage/tree/master/

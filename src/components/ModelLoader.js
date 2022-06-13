import { forwardRef } from 'react'
import { Box } from '@chakra-ui/react'

import './spinner.css'

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
            <div className="lds-dual-ring"></div>
        </ModelContainer>
    )
}

export default Loader

// copyright https://github.com/craftzdog/craftzdog-homepage/tree/master/

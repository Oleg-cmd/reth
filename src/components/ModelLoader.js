import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => <Spinner size="sm" position="relative" />

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

export const SpinnerContainer = forwardRef(({ children }, ref) => (
    <div ref={ref} className="spinner-container">
        {children}
    </div>
))

const Loader = () => {
    return (
        <SpinnerContainer>
            <ModelSpinner />
        </SpinnerContainer>
    )
}

export default Loader

// copyright https://github.com/craftzdog/craftzdog-homepage/tree/master/

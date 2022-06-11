import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const ModelSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
)

export const ModelContainer = forwardRef(({ children }, ref) => (
    <Box ref={ref} className="model" position="relative">
        {children}
    </Box>
))

const Loader = () => {
    return (
        <ModelContainer>
            <ModelSpinner />
        </ModelContainer>
    )
}

export default Loader

// copyright https://github.com/craftzdog/craftzdog-homepage/tree/master/

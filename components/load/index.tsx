import { Box, Modal, ModalContent, ModalOverlay, useColorMode } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { GridLoader } from "react-spinners";

export const LoadData = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const override: CSSProperties = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
    };

    var color = colorMode === 'light' ? '#10047a' : '#7553ff'


    return (
        <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            textAlign="center"
        >
            <GridLoader
                color={color}
                loading={true}
                cssOverride={override}
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </Box>
    )
}

export const LoadDialog = (props: { isOpen: boolean }) => {
    const { isOpen } = props

    return (
        <Modal onClose={() => { }} isOpen={isOpen} isCentered>
            <ModalOverlay />
            <ModalContent>
                <LoadData />
            </ModalContent>
        </Modal>
    )
}
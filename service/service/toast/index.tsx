import { useColorMode } from "@chakra-ui/react"
import { ToastContainer } from "react-toastify"

export const ToastBar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme={colorMode === 'light' ? "light" : "dark"}
        />
    )
}
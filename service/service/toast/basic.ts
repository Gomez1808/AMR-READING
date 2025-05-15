import { toast } from "react-toastify";

export const basicInfoToast = (text: string, mode: string) => {
    toast.info(text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === 'light' ? "light" : "dark",
    });
}

export const basicSuccessToast = (text: string, mode: string) => {
    toast.success(text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === 'light' ? "light" : "dark",
    });
}

export const basicWarningToast = (text: string, mode: string) => {
    toast.warn(text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === 'light' ? "light" : "dark",
    });
}

export const basicErrorToast = (text: string, mode: string) => {
    toast.error(text, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: mode === 'light' ? "light" : "dark",
    });
}
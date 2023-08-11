import { toast } from "react-toastify";

const ErrorMessage = ({
    error,
    main_part = 'REQUEST FAILED',
    default_message = 'UNKNOWN ERROR OCCOURED',
    custom_message = ''
}) => {

    let message = error?.response?.data?.message[0].message ?? error?.response?.data?.message;
    message = message ? message : main_part + " " + default_message;

    message = custom_message ? custom_message : message;

    toast.error(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

const SuccessMessage = (message = 'REQUEST SUCCESSFUL',) => {

    toast.success(message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export default {
    ErrorMessage,
    SuccessMessage
};
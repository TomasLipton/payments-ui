import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Yup.object().shape({
    email: Yup.string()
        .email('Неправильный email')
        .required('Это поле обязательно для заполнения'),
    name: Yup.string()
        .min(2)
        .max(20)
        .required('Это поле обязательно для заполнения'),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Это поле обязательно для заполнения'),
    agree1: Yup.bool()
        .oneOf([true], "Must choose one")
        .required('Это поле обязательно для заполнения'),
});

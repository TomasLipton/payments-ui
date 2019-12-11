import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export default Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    name: Yup.string()
        .min(2)
        .max(20)
        .required('Required'),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .required('Required'),
    agree1: Yup.bool()
        .oneOf([true], "Must choose one")
        .required('Required'),
});

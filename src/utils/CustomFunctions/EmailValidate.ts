const EmailValidate = (value: any) => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValid = value && mailformat.test(value)
    if (isValid) {
        return false
    }
    return true;
}

export default EmailValidate;
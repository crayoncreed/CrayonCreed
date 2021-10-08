const isNull = (value: any) => {
    if (value === "" || value === null || value === undefined) {
        return true
    }
    return false
};

export default isNull;
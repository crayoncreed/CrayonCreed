const DateFormat = (date: Date) => {
    let d = new Date(date);
    const dt = d.toLocaleDateString().split("/");
    return dt[2] + "-" + dt[1] + "-" + dt[0];
}

export default DateFormat;
const DateFormat2 = (date: Date) => {
    let d = new Date(date);
    const dt = d.toLocaleDateString().split("/");
    return dt[0] + "-" + dt[1] + "-" + dt[2];
}

export default DateFormat2;
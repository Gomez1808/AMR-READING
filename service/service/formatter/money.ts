export const moneyFormantter_1 = (amount : number) => {
    var data = `${amount}`.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    return `IDR ${data}`
}
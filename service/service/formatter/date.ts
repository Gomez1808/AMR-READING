import moment from "moment";

export const dateFormater = (time : Date) => {
    
    return moment(time).format('DD MMMM yyyy')
}

export const dateTimeFormater = (time : Date) => {
    
    return moment(time).format('DD MMMM yyyy  HH:mm')
}

export const dateDayFullFormater = (time: Date) => {
    
    return moment(time).format('dddd, DD MMMM yyyy')
}

export const dateDayFullTimeFormater = (time: Date) => {
    
    return moment(time).format('dddd, DD MMMM yyyy  HH:mm')
}

export const dateDayFormaterHalf = (time: Date) => {
    
    return moment(time).format('dd, DD MMM yyyy')
}

export const monthOnlyFormater = (time: Date) => {
    
    return moment(time).format('MMM yyyy')
}
export const formatDatetime = (dateTime: Date) => {
    return dateTime.toLocaleString('default', { month: 'long', year: 'numeric' })
}

export function convertToK(number) {
    if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M'; // For millions
    } else if (number >= 1000) {
        return (number / 1000).toFixed(1) + 'K'; // For thousands
    }
    return number.toString();
}

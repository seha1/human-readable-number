module.exports = function toReadable (number) {
    if(number === 0) return "zero"; // exception
    let single_digits = ['',    'one',         'two',         'three',         'four',         'five',         'six',         'seven',         'eight',         'nine'];
    let double_digits = ['',    '',            'twenty',      'thirty',        'forty',        'fifty',        'sixty',       'seventy',       'eighty',        'ninety'];
    let triple_digits = ['',    'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    let teens = ['ten','eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']; // exceptions

    let chars = number.toString().split('');  // creating array of chars from given number
    while (chars.length !== 3) chars.unshift('0'); // adding heading zeros if absent ('1' to '001', '2' to '002', ... '21' to '021', etc...)
    let digits = Array.from(chars, Number); // creating array of numbers from array of chars ('1' to 1, etc)

    let digitsArr;
    if (digits[1] === 1) { digitsArr = [ // exception case - using ten, eleven, twelve, etc...
        triple_digits[digits[0]],
        teens[digits[2]]
    ];} else { digitsArr = [ // standard case
        triple_digits[digits[0]],
        double_digits[digits[1]],
        single_digits[digits[2]]
    ];}


    return digitsArr.filter(elem => elem !== "").join(" "); // filtering empty strings from array so zeros won't give us unnecessary separators (for example, returning 'nine hundred' instead of 'nine hundred  ')

}

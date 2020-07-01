export function format_numbers(array, offset = '') {
    return array.length ?
        `\n${offset}<${array[0]}>` + format_numbers(array.slice(1), offset + ' ')  +
        `\n${offset}</${array[0]}>` : '';
}

console.log(format_numbers([1, 2, 3, 4, 5, 6]));


export function parse(text) {
    let regex = new RegExp('(\\w)', 'g');
    let result = text.match(regex);
    let tags = validate(result);

    console.log(format_numbers(tags));
}

function validate(array) {
    let mid = Math.floor(array.length / 2);
    let tags = array.splice(0, mid);
    array.reverse();

    let is_same = (tags.length == array.length)
        && tags.every((element, index) => { return element === array[index]; });

    if (!is_same) {
        throw new Error('Provided string is not valid');
    }

    return tags;
}

parse('<a><b><c><d><e><f></f></e></d></c></b></a>');
const phonix = (number) => {
    let keyboard = {
        "": 1,
        "ABC": 2,
        "DEF": 3,
        "GHI": 4,
        "JKL": 5,
        "MNO": 6,
        "PQRS": 7,
        "TUV": 8,
        "WXYZ": 9,
        "0": 0
    }

    const keyboard_keys = Object.keys(keyboard)
    const keyboard_keys_string = keyboard_keys.join(',')
    let output = ""

    for (const char of number) {
        if (keyboard_keys_string.includes(char)) {
            for (const key in keyboard) {
                if(key.includes(char)) {
                    output += keyboard[key]
                }
            }
        } else {
            output += char
        }
    }
    console.log(output)
}

var text = "1-800-FLOWERS"
var text2 = "1-800-800"
phonix(text)
phonix(text2)
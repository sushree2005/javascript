let name = "vdgufdcio";
let vowel = 0;
let constant = 0;
for (let i = 0; i < name.length; i++) {
    let ch = name[i];
    switch (ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            vowel++;
            break;
        default:
            if (ch >= 'a' && ch <= 'z') {
                constant++;
            }
    }
}
console.log(vowel);
console.log(constant);

var count = 0;
const string = prompt('Enter a string: ');

for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
        count++;
    }
}

if (count > 0) {
    console.log('It is not a palindrome');
}
else {
    console.log('It is a palindrome');
}
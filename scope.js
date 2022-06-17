const value = 'hello';

function myfunction() {
    console.log('myfunction : ');
    console.log(value);
}

function otherFunction() {
    console.log('otherFunction : ');
    const value = 'bye';
    console.log(value);
}

myfunction();
otherFunction();

console.log('global scope : ');
console.log(value);
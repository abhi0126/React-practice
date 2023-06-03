function greet() {
    return 'hello';
}

const msg = greet();
console.log(msg);

function* generatorGreet() {
    yield 'G-Good Morning';
    return 'G-hello';
}

const gen = generatorGreet();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
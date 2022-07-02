function* createIdGenerator() {
    for (let i = 1; i > 0; i++) {
        yield i;
    }
}

const idGenerator = createIdGenerator();

console.log("idGenerator.next().value -> " , idGenerator.next().value);
console.log("idGenerator.next().value -> " , idGenerator.next().value);
console.log("idGenerator.next().value -> " , idGenerator.next().value);


// Advanced

function* newFontGenerator(size) {
    while (typeof size === "number" && size > 0){
        arg = yield size;

        if (arg === "up") {
            size += 2;
        } else if (arg === "down") {
            size -= 2;
        } 
    }
}

const fontGenerator = newFontGenerator(14);

console.log('fontGenerator.next("up").value -> ' , fontGenerator.next("up").value); 
console.log('fontGenerator.next("up").value -> ' , fontGenerator.next("up").value);
console.log('fontGenerator.next("up").value -> ' , fontGenerator.next("up").value);
console.log('fontGenerator.next().value -> ' , fontGenerator.next().value);
console.log('fontGenerator.next("down").value -> ' , fontGenerator.next("down").value);
console.log('fontGenerator.next("down").value -> ' , fontGenerator.next("down").value);
console.log('fontGenerator.next("down").value -> ' , fontGenerator.next("down").value);
console.log('fontGenerator.next().value -> ' , fontGenerator.next().value);
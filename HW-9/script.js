function getRandomInt() {
    return Math.floor(Math.random() * 256);
  }

function generateBlocksInterval () {
    const block = document.createElement("div");
    block.className = "box";
    document.body.append(block);

    for (let el = 0; el < 25; el++) {
        const smallBlock = document.createElement("div");
        smallBlock.className = "smallbox";
        block.append(smallBlock);

        setInterval(() => smallBlock.style.background = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`, 1000);
    }
}

document.body.querySelector("button").onclick = generateBlocksInterval;
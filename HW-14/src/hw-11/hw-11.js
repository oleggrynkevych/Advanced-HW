async function getRandomChinese(length) {
    if(Number.isInteger(length) && length > 0){
        let str = "";

        while (length > 0) {
            const symbolPromise = new Promise (function(resolve) {
                setTimeout (function() {
                    const sign = String(Date.now()).slice(-5);
                    const chineseSymbol = String.fromCharCode(sign);
                    resolve(chineseSymbol)
                }, 50)
            })

            str = str.concat(await symbolPromise);
            length--;
        }
        return str;
    } else {
        return "Wrong!"
    }
}

export default getRandomChinese;
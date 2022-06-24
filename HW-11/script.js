function getRandomChinese(length) {
    const chineseString = new Promise(function(res, rej) {
        setTimeout(function() {
            if(Number.isInteger(length) && length > 0){    
                let str = "";

                while (length > 0){
                    const sign = String(Date.now()).slice(-5);
                    const chineseSymbol = String.fromCharCode(sign);
                    
                    str = str.concat(chineseSymbol); 
                    length--;
                }
                res(str);
            } else {
                rej("Wrong!");            
            }
        }, 50);

    })

    chineseString
        .then((res) => {console.log(res)})
        .catch((rej) => {console.log(rej)});
    
    return chineseString;
}

getRandomChinese(5);
getRandomChinese(-5);

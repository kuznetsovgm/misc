/***  
 * @param container {Node} ссылка на DOM-node, в которую нужно вписать строку ‘str‘  
 * @param str {string} строка, которую необходимо вписать. Максимальная длина равняется 100 символам  
 * @param min {number} минимальный размер шрифта (целое число, min >= 1)  
 * @param max {number} максимальный размер шрифта (целое число, max >= min >= 1)  
 * @return {number | null} искомый размер шрифта (целое число) или null, если текст вписать нельзя  
 */  
function calcFontSize(container, str, min, max) {  
    const containerWidth = parseInt(container.clientWidth);
    const containerHeight = parseInt(container.clientHeight);

    const clone = container.cloneNode(false);
    clone.id += '_clone';
    clone.style.width = 'auto';
    clone.style.height = 'auto';
    clone.style.display = 'inline-block';
    clone.style.fontSize = max + 'px';
    clone.style.border = '1px solid red';
    clone.style.visibility = 'hidden';
    
    clone.innerText = str;
    document.body.append(clone);

    const calc = (l, r) => {
        // debugger;
        let fs = l + Math.round((r - l) / 2);
        clone.style.fontSize = fs + 'px';
        clone.style.maxWidth = 'initial';
        let width = clone.clientWidth;
        let height = clone.clientHeight;
        
        if (width === containerWidth || l === r) {
            return fs;
        }
        
        if (r - l === 1) {
            // fs = calc(l, l);
            let resL = calc(l, l);
            let resR = calc(r, r);
            fs = resL !== null ? resL : resR;
        } else if (width < containerWidth && height < containerHeight) {
            fs = calc(fs, r);
        } else {
            clone.style.maxWidth = containerWidth + 'px';
            if (clone.clientHeight <= containerHeight) {
                fs = calc(fs, r);
            } else {
                fs = calc(l, fs);
            }
        }

        return fs;
    }

    let res = calc(min, max);
    clone.style.fontSize = res + 'px';
    clone.style.maxWidth = containerWidth + 'px';
    if (clone.clientHeight > containerHeight) {
        // console.log(clone.clientWidth, containerWidth);
        res = null;
    }
    // clone.style.display = 'none';
    document.body.removeChild(clone);
    return res;
}

var container = document.getElementById('container');
setTimeout(() => {
    let res = calcFontSize(container, container.innerText, 1, 150);
    console.log(res);
    // mutationObserver.disconnect();
    container.style.fontSize = res + 'px';
}, 0)
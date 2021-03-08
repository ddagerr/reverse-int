module.exports = function reverse (n) {
        if (n<0) n=-n;
        n=String(n)
        n=n.split('')
        let reverseN=[]
        for(let i=0;i<n.length;i++){
        reverseN[i]=n[n.length-i-1]
        }
        return Number(reverseN.join(''))
}

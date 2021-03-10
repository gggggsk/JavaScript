function removeDump(arr){
    let str = [];
    arr.forEach(element => {
        if(!str.includes(element)){
            str.push(element);
        }
    });
   return str;
}

console.log( removeDump([1,0,1,0]));
console.log( removeDump(["The","big","cat"]));
console.log( removeDump(["John","Taylor","John"]));
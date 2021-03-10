let furniture = ["Table", "Chairs", "Couch"];
let i = 0;
while (i < furniture.length) {
    const chars = furniture[i];
    for (let char of chars) {
        console.log(char);
    }
    console.log("");
    i++;
}
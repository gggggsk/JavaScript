let values1 = ["Apple", 1, false];
let values2 = ["Fries", 2, true];
let values3 = ["Mars", 9, "Apple"];

function cal() {
    if (
        typeof values1[0] == typeof values2[0] &&
        typeof values2[0] == typeof values3[0]
    ) {
        console.log(typeof values1[0], typeof values2[0], typeof values3[0], " => true");
    } else {console.log(typeof values1[0], typeof values2[0], typeof values3[0], " => false");}
    if (
        typeof values1[1] == typeof values2[1] &&
        typeof values2[1] == typeof values3[1]
    ) {
        console.log(typeof values1[1], typeof values2[1], typeof values3[1], " => true");
    } else {console.log(typeof values1[1], typeof values2[1], typeof values3[1], " => false");}
        if (
            typeof values1[2] == typeof values2[2] &&
            typeof values2[2] == typeof values3[2]
        ) {
            console.log(typeof values1[2], typeof values2[2], typeof values3[2], " => true");
        } else { console.log(typeof values1[2], typeof values2[2], typeof values3[2], " => false"); }
    }
    cal();
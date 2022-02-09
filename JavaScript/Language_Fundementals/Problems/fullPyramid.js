

for (let row = 1; row <= 6; row++) {
    let str = "";
    for (let space = 6; space > row; space--) {
        str += " ";
    }

    for (let colum = 1; colum <= row; colum++) {
        str += "* ";
    }
    console.log(str);
}
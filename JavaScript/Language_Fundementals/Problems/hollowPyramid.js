


for (let row = 1; row <= 4; row++) {
    let str = "";


    for (let colum = 1; colum <= 7; colum++) {
        if (row == 4 || row + colum == 5 || colum - row == 3) {
            str += "* "
        } else {
            str += " ";
        }
    }
    console.log(str);
}
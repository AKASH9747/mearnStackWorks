
let num = 1;
for (let i = 1; i <= 4; i++) {
    let str = "";
    for (j = 1; j <= i; j++) {
        str += num //str+=i;
    }
    num++;
    console.log(str);
}
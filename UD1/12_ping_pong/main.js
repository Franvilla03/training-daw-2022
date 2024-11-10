function pingPong() {
    for (let i = 1; i <= 100; i++) {
        if (i % 10 === 0) {
            console.log(i + " PONG");
        } else if (i % 5 === 0) {
            console.log(i + " PING");
        } else {
            console.log(i);
        }
    }
}

pingPong();

/*----------Metodo Villa XD----------------
function pingpong() {
    for (let i = 0; i < 100; i++) {
        if (i % 5 ===0 && i % 2 === 0) {
            console.log(i + `pong`)
        }else if (i % 5){
            console.log(i)   
        }else(console.log(i + `ping`))   
    }
}
pingpong()
*/

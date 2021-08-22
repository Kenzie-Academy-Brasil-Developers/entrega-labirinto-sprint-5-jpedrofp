let game = document.getElementById("game");

const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

function createMap() {

    for (i = 0; i < map.length; i++) {

        let block = document.createElement("div");
        block.classList.add("block");
        game.appendChild(block);

        for (j = 0; j < map[i].length; j++) {
            let newDiv = document.createElement("div");
            block.appendChild(newDiv);
            newDiv.setAttribute('id', `d${i}${j}`);

            if (map[i][j] === "S") {
                let hero = document.createElement("div");
                newDiv.appendChild(hero);
                hero.setAttribute('id', "hero");
            }

            if (map[i][j] === 'W') {
                newDiv.classList.add('wall');
            }

            if (map[i][j] === "F") {
                newDiv.classList.add("exit");
            }

            if (map[i][j] === " ") {
                newDiv.classList.add("space");
            }
        }
    }
}
createMap()

function moves() {

    let i = 9;
    let j = 0;
    let lastI = 0;
    let lastJ = 0;

    document.addEventListener('keydown', (event) => {
        const keyName = event.key;
        let position = document.querySelector('#hero');
        let exit = document.getElementById('d820');
        if (keyName === 'ArrowRight') {
            j += 1;
        }
        if (keyName === 'ArrowUp') {
            i -= 1;
        }
        if (keyName === 'ArrowLeft') {
            j -= 1;
        }
        if (keyName === 'ArrowDown') {
            i += 1;
        }
        if (j < 0) { j = 0; }

        let newPosition = document.getElementById(`d${i}${j}`)

        if (newPosition.className == 'space' | newPosition.className == 'exit') {
            newPosition.appendChild(position)
            lastI = i;
            lastJ = j;
        }

        else {
            i = lastI;
            j = lastJ;
        }

        if (exit.childElementCount === 1) {
            win()
            position.style.position = "fixed"
        }

    });

}
moves()

function win() {
    let win = document.createElement('div');
    let h3 = document.createElement('h3');
    win.classList.add('win');
    game.appendChild(win);
    win.appendChild(h3);
    h3.innerText = 'You won!'
}



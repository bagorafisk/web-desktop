let player1x = 110;
let player1y = 110;
let player2x = W - 110;
let player2y = H - 110;
let player1size = 10;
let player2size = 10;
let timer = 0;
let radius = 10;
let x = player1x;
let y = player1y;
let colisiontrigger1 = Array(4);
let colisiontrigger2 = Array(4);
let player1hp = 1;
let player2hp = 1;
let stormcirclex = W;
let stormcircley = H;
let stormcirclegoalx = randomInt(200, W - 200);
let stormcirclegoaly = randomInt(200, H - 200);
let time = 0;
let limit = 0;
let trail1x = 0;
let trail1y = 0;
let trail2x = 0;
let trail2y = 0;
let player1score = 0;
let player2score = 0;
let lastdirection1 = 0;
let lastdirection2 = 0;
let a = new Audio("musik/Mjukjazz.mp3");
a.loop = true;
circle(stormcirclegoalx, stormcirclegoaly, 10, "red");
setUpdate(async () => {
    if(mouse.left) a.play();
    text(player1score, 60, 20, 20, "blue");
    text(player2score, W - 60, 20, 20, "red");
    if (player1hp > 0) {
        circle(trail1x, trail1y, player1size, "green");
        circle(player1x, player1y, player1size, "blue");
    }
    if (player2hp > 0) {
        circle(trail2x, trail2y, player2size, "green");
        circle(player2x, player2y, player2size, "red");
    }
    if (keyboard.w && lastdirection1 != 3) {
        player1y -= player1size;
        trail1y = player1y + player1size;
        trail1x = player1x;
        lastdirection1 = 1;
    }
    else {
        if (keyboard.s && lastdirection1 != 1) {
            player1y += player1size;
            trail1y = player1y - player1size;
            trail1x = player1x;
            lastdirection1 = 3;
        }
        else {
            if (keyboard.a && lastdirection1 != 2) {
                player1x -= player1size;
                trail1x = player1x + player1size;
                trail1y = player1y;
                lastdirection1 = 4;
            }
            else {
                if (keyboard.d && lastdirection1 != 4) {
                    player1x += player1size;
                    trail1x = player1x - player1size;
                    trail1y = player1y;
                    lastdirection1 = 2;
                }
            }
        }
    }
    if (keyboard.up && lastdirection2 != 3) {
        player2y -= player2size;
        trail2y = player2y + player2size;
        trail2x = player2x;
        lastdirection2 = 1;
    }
    else {
        if (keyboard.down && lastdirection2 != 1) {
            player2y += player2size;
            trail2y = player2y - player2size;
            trail2x = player2x;
            lastdirection2 = 3;
        }
        else {
            if (keyboard.left && lastdirection2 != 2) {
                player2x -= player2size;
                trail2x = player2x + player2size;
                trail2y = player2y;
                lastdirection2 = 4;
            }
            else {
                if (keyboard.right && lastdirection2 != 4) {
                    player2x += player2size;
                    trail2x = player2x - player2size;
                    trail2y = player2y;
                    lastdirection2 = 2;
                }
            }
        }
    }
    rectangle(time * distance(stormcirclegoalx, 0, 0, 0) / 10000, time * distance(0, stormcirclegoaly, 0, 0) / 10000, W - (2 * time * distance(stormcirclegoalx, 0, W, 0) / 10000), H - (2 * time * distance(0, stormcirclegoaly, 0, H) / 10000), "orange", radius);
    colisiontrigger1 = getPixel(player1x, player1y);
    colisiontrigger2 = getPixel(player2x, player2y);
    for (let i = 0; i < 2; i += 1) {
        if (colisiontrigger1[i] != 0)
            player1hp = 0;
        text(player1hp);
    }
    for (let i = 2; i > 0; i -= 1) {
        if (colisiontrigger2[i] != 0)
            player2hp = 0;
        text(player2hp);
    }
    if (player1x > W) {
        player1hp = 0;
    }
    if (player1x < 0) {
        player1hp = 0;
    }
    if (player1y > H) {
        player1hp = 0;
    }
    if (player1y < 0) {
        player1hp = 0;
    }
    if (player2x > W) {
        player2hp = 0;
    }
    if (player2x < 0) {
        player2hp = 0;
    }
    if (player2y > H) {
        player2hp = 0;
    }
    if (player2y < 0) {
        player2hp = 0;
    }
    if (player1hp == 0) {
        await (sleep(3000));
        player1x = 100;
        player1y = 100;
        player2x = W - 100;
        player2y = H - 100;
        player1hp = 1;
        player2hp = 1;
        stormcirclex = W;
        stormcircley = H;
        stormcirclegoalx = randomInt(200, W - 200);
        stormcirclegoaly = randomInt(200, H - 200);
        trail1x = 0;
        trail1y = 0;
        trail2x = 0;
        trail2y = 0;
        time = 0;
        player2score += 1;
        clear();
    }
    if (player2hp == 0) {
        await (sleep(3000));
        player1x = 100;
        player1y = 100;
        player2x = W - 100;
        player2y = H - 100;
        player1hp = 1;
        player2hp = 1;
        stormcirclex = W;
        stormcircley = H;
        stormcirclegoalx = randomInt(200, W - 200);
        stormcirclegoaly = randomInt(200, H - 200);
        trail1x = 0;
        trail1y = 0;
        trail2x = 0;
        trail2y = 0;
        time = 0;
        player1score += 1;
        lastdirection1 = null;
        lastdirection2 = null;
        clear();
    }
    time += 5;
    if(keyboard.l){
        window.location.href = ("/");
    }
});
export {};
//# sourceMappingURL=app.js.map

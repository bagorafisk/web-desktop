let charactersx = [];
let charactersy = [];
let characterswaitingtime = [];
let charactersize = [];
let characterdirection = [];
let colour = [];
let dying = [];
let dyingtimer = [];
let timer = 500;
let score = 1000;
let win = false;
let number1x = 0;
let number1y = 0;
let number1direction = 0;
let number1waitingtime = 0;
let number1size = 0;
let ouch = [];
let p2 = false;
let state = "start";
let imposterscore = 0;
let alarmed = [];
let alarms = 2;
for (let i = 0; i < 100; i += 1) {
    charactersx.push(randomInt(100, W - 100));
    charactersy.push(randomInt(100, H - 100));
    characterswaitingtime.push(0);
    charactersize.push(randomInt(30, 50));
    colour.push["white"];
    dying.push(false);
    dyingtimer.push(500);
    alarmed.push(false);
}
colour[1] = "red";
setInterval(() => {
    if (state == "start") {
        clear();
        text("How many Players?", W / 2 - 80, H / 5, 20, "blue");
        rectangle(W / 4, H / 1.5, 100, 50, "blue", 5);
        let hitbox = new Hitbox(W / 4, H / 1.5, 100, 50);
        if (hitbox.contains(mouse.x, mouse.y) && mouse.left == true) {
            p2 = false;
            mouse.left = false;
            state = "begin";
        }
        text("1", W / 4 + 40, H / 1.5 + 30, 30, "green");
        rectangle(W * 3 / 4, H / 1.5, 100, 50, "blue", 5);
        let hitbox2 = new Hitbox(W * 3 / 4, H / 1.5, 100, 50);
        if (hitbox2.contains(mouse.x, mouse.y) && mouse.left == true) {
            p2 = true;
            mouse.left = false;
            state = "spawn";
        }
        text("2", W * 3 / 4 + 40, H / 1.5 + 30, 30, "green", 5);
        rectangle(W / 2 - 50, H / 1.5, 100, 50, "blue", 5);
        text("controls", W / 2 - 45, H / 1.5 + 30, 20, "green");
        let hitbox3 = new Hitbox(W / 2 - 50, H / 1.5, 100, 50);
        if (hitbox3.contains(mouse.x, mouse.y) && mouse.left) {
            state = "controls";
            mouse.left = false;
        }
    }
    else if (state == "spawn") {
        clear();
        text("Player 1, you'll be able to make a NPC into a alarm 2 times, if the alarm is attacked, you will see a text above the mouse and the NPC will turn blue", 0, 0, 20, "green");
        text("Player 1, look away. Player 2, place your character by left clicking with your mouse on your wanted spawnlocation", 0, 50, 20, "red");
        text("After you do so, the game will begin so let player 1 know to look at the screen again (it's recommended to move the mouse after doing so)", 0, 100, 20, "red");
        text("Another tip, the NPC won't stand still, so try to allways be on the move, also I removed the ability to go diagonally", 0, 150, 20, "red");
        text("your objective as an imposter is to kill as many NPC's as possible without getting caught, your score will increase every time a NPC die.", 0, 200, 20, "red");
        text("move by using WASD, and touch NPC's to start their timer, avoid getting caught.", 0, 250, 20, "red");
        if (mouse.left) {
            charactersx[0] = mouse.x;
            charactersy[0] = mouse.y;
            state = "begin";
            mouse.left = false;
        }
    }
    else if (state == "controls") {
        clear();
        rectangle(400, 300, 100, 100, "red", 5);
        text("W", 450, 350, 30, "red");
        rectangle(400, 400, 100, 100, "red", 5);
        text("S", 450, 450, 30, "red");
        rectangle(300, 400, 100, 100, "red", 5);
        text("A", 350, 450, 30, "red");
        rectangle(500, 400, 100, 100, "red", 5);
        text("D", 550, 450, 30, "red");
        text("P2 Move", 450, 550, 30, "red");
        rectangle(W / 1.5, 300, 300, 500, "green", 5);
        rectangle(W / 1.5, 300, 150, 200, "green", 15);
        text("shoot", W / 1.5 + 20, 350, 20, "green");
        text("move (move the mouse)", W / 1.45, 600, 20, "green");
        text("P1 goal is to find the ball that makes other spheres timer go down (and turn pink) and left click it", 100, H - 100, 20, "green");
        rectangle(10, 10, 100, 100, "blue", 5);
        text("go back", 30, 50, 20, "blue");
        let hitbox = new Hitbox(10, 10, 100, 100);
        if (hitbox.contains(mouse.x, mouse.y) && mouse.left == true) {
            mouse.left = false;
            state = "start";
        }
    }
    else if (win == false) {
        clear();
        text(score, W - 100, 20, 10, "green");
        for (let i = 0; i < charactersize.length; i += 1) {
            if (p2 == false || i > 0) {
                if (characterswaitingtime[i] < 1) {
                    characterdirection[i] = randomInt(1, 4);
                    characterswaitingtime[i] = randomInt(0, 400);
                }
                if (characterdirection[i] == 1 && charactersx[i] < W - charactersize[i]) {
                    charactersx[i] += 1;
                }
                else if (characterdirection[i] == 2 && charactersx[i] > 0 + charactersize[i]) {
                    charactersx[i] -= 1;
                }
                else if (characterdirection[i] == 3 && charactersy[i] < H - charactersize[i]) {
                    charactersy[i] += 1;
                }
                else if (characterdirection[i] == 4 && charactersy[i] > 0 + charactersize[i]) {
                    charactersy[i] -= 1;
                }
                else if (characterdirection[i] == 1) {
                    characterdirection[i] = 2;
                }
                else if (characterdirection[i] == 2) {
                    characterdirection[i] = 1;
                }
                else if (characterdirection[i] == 3) {
                    characterdirection[i] = 4;
                }
                else if (characterdirection[i] == 4) {
                    characterdirection[i] = 3;
                }
            }
            if (p2 == true && i == 0) {
                if (keyboard.w) {
                    charactersy[0] -= 1;
                    if (charactersy[0] - charactersize[0] < 0) {
                        charactersy[0] = charactersy[0] + 1;
                    }
                }
                else if (keyboard.s) {
                    charactersy[0] += 1;
                    if (charactersy[0] + charactersize[0] > H) {
                        charactersy[0] = charactersy[0] - 1;
                    }
                }
                else if (keyboard.a) {
                    charactersx[0] -= 1;
                    if (charactersx[0] - charactersize[0] < 0) {
                        charactersx[0] = charactersx[0] + 1;
                    }
                }
                else if (keyboard.d) {
                    charactersx[0] += 1;
                    if (charactersx[0] + charactersize[0] > W) {
                        charactersx[0] = charactersx[0] - 1;
                    }
                }
            }
            characterswaitingtime[i] -= 1;
            circle(charactersx[i], charactersy[i], charactersize[i], colour[i]);
            text(dyingtimer[i], charactersx[i], charactersy[i] + 10, 10, "green");
            let hitbox = new Hitbox(charactersx[i] - charactersize[i] / 2, charactersy[i] - charactersize[i] / 2, charactersize[i], charactersize[i]);
            if (hitbox.contains(charactersx[0], charactersy[0]) || hitbox.contains(charactersx[0] + charactersize[0], charactersy[0] + charactersize[0]) && i != 0) {
                console.log("UwU");
                dying[i] = true;
                if (alarmed[i] == true) {
                    text("your alarm was attacked!", mouse.x, mouse.y - 20, 40, "red");
                    colour[i] = "blue";
                }
            }
            if (hitbox.contains(mouse.x, mouse.y)) {
                if (mouse.left) {
                    if (i == 0) {
                        win = true;
                        colour[0] = "green";
                    }
                    else {
                        score -= 10;
                        imposterscore += 10;
                        ouch[i] = true;
                        text("ouch", charactersx[i], charactersy[i] - 80, 10, "red");
                        colour[i] = "red";
                        dying[i] = true;
                    }
                    mouse.left = false;
                }
                if (mouse.right && alarms > 0) {
                    alarms -= 1;
                    alarmed[i] = true;
                    mouse.right = false;
                }
            }
            if (dying[0] == true) {
                dying[0] = false;
            }
            if (win == true) {
                text("you killed the Imposter", W / 2 - 300, H / 2, 40, "green");
                text("your score is " + score, W / 2 - 150, H / 2 + 100, 40, "green");
                if (p2 == true) {
                    text("imposter score is " + imposterscore, W / 2 - 150, H / 2 + 150, 40, "green");
                    if (imposterscore > score) {
                        text("the imposter wins", W / 2 - 150, H / 2 + 200, 40, "red");
                    }
                    else if (score > imposterscore) {
                        text("the detective wins", W / 2 - 150, H / 2 + 200, 40, "green");
                    }
                    else {
                        text("it's a tie", W / 2 - 150, H / 2 + 200, 40, "blue");
                    }
                }
            }
            if (dying[i] == true) {
                dyingtimer[i] -= 1;
            }
            else
                colour[i] = "white";
            if (alarmed[i] == true && dying[i] == true) {
                colour[i] == "blue";
            }
            text(alarms, 20, 20, 20, "blue");
            if (dyingtimer[i] < 300) {
                colour[i] = "pink";
            }
            number1direction = characterdirection[0];
            number1size = charactersize[0];
            number1waitingtime = characterswaitingtime[0];
            number1x = charactersx[0];
            number1y = charactersy[0];
            if (dyingtimer[i] < 1 && i != 0) {
                dying.splice(i, 1);
                dyingtimer.splice(i, 1);
                charactersx.splice(i, 1);
                charactersy.splice(i, 1);
                characterdirection.splice(i, 1);
                charactersize.splice(i, 1);
                characterswaitingtime.splice(i, 1);
                ouch.splice(i, 1);
                score -= 10;
                imposterscore += 10;
            }
            if (ouch[i] == true) {
                text("ouch", charactersx[i], charactersy[i] - 80, 10, "red");
            }
        }
        if (score < 1) {
            win = true;
            text("you killed too many matecrews", 200, H / 2, 100, "red");
        }
    }
}, 10);
export {};
//# sourceMappingURL=app.js.map
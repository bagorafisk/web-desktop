import {initDesktop} from "./desktop.js";
import {createGameWindow} from "./windowManager.js";
import {loadGame} from "./gameLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    initDesktop();

    setTimeout(() => {
        createGameWindow('Sample Game', (canvas) => {
            loadGame(canvas, '../assets/games/imposter.js');
        });
    }, 1000);
});
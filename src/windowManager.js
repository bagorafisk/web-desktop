import {makeDraggable} from "./dragDrop.js";
import {createWindow} from "./window.js";

export function createGameWindow(title, initCallback) {
    const newWindow = createWindow(title);

    document.getElementById("desktop").appendChild(newWindow);

    makeDraggable(newWindow.querySelector(".titlebar"), newWindow);

    const canvas = newWindow.querySelector("canvas");
    if(initCallback && typeof initCallback === "function") {
        initCallback(canvas);
    }
}
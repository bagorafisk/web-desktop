import {makeDraggable} from "./dragDrop";
import {createWindow} from "./window";

export function createGameWindow(title, initCallback) {
    const newWindow = createWindow(title);

    document.getElementById("desktop").appendChild(newWindow);

    makeDraggable(newWindow.querySelector(".titlebar"), newWindow);

}
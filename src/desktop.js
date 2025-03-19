export function initDesktop() {
    const desktop = document.getElementById("desktop");
    if(!desktop) {
        console.log("Desktop container not found!");
        return;
    }

    console.log("Desktop initialized!");
}
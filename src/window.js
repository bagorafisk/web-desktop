export function createWindow(title) {
    const windowElem = document.createElement('div');
    windowElem.classList.add(window);
    windowElem.innerHTML = `<div class="titlebar">
                         <span class="title">${title}</span>
                         <div class="buttons">
                             <button class="minimize"></button>
                             <button class="maximize"></button>
                             <button class="close"></button>
                         </div>
                     </div>
                     <div class=\"content\">
                         <canvas id=\"canvas\"></canvas>
                     </div>`;

    windowElem.querySelector('.close').addEventListener('click', () => {
        windowElem.remove();
    });

    return windowElem;
}
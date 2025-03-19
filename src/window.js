export function createWindow(title) {
    const windowElem = document.createElement('div');
    windowElem.classList.add('window');
    windowElem.innerHTML = `<div class="titlebar">
                         <span class="title">${title}</span>
                         <div class="buttons">
                             <button class="minimize"></button>
                             <button class="maximize"></button>
                             <button class="close"></button>
                         </div>
                     </div>
                     <div class="content">
                         <iframe 
      src="game.html?game=assets/games/snake-battle.js" 
      frameborder="0" 
      style="width: 100%; height: 100%;"
      allowfullscreen>
    </iframe>
                     </div>`;

    windowElem.querySelector('.close').addEventListener('click', () => {
        windowElem.remove();
    });

    return windowElem;
}
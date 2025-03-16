export function makeDraggable(draghandle, targetElem) {
    let offSetX, offSetY;

    draghandle.addEventListener('mousedown', (e) => {
        offSetX = e.clientX - targetElem.offsetLeft;
        offSetY = e.clientY - targetElem.offsetTop;

        function onMouseMove(e) {
            targetElem.style.left = (e.clientX - offSetX) + 'px';
            targetElem.style.top = (e.clientY - offSetY) + 'px';
        }

        function onMouseUp(e) {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        }

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    })
}
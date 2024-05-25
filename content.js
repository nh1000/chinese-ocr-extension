let isMouseDown = false;
let startX, startY;
const selectionArea = document.createElement('div');
selectionArea.style.position = 'fixed';
selectionArea.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
selectionArea.style.zIndex = '9999';

document.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.clientX;
  startY = e.clientY;
  selectionArea.style.left = `${startX}px`;
  selectionArea.style.top = `${startY}px`;
  selectionArea.style.width = '0';
  selectionArea.style.height = '0';
  document.body.appendChild(selectionArea);
});

document.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  const currentX = e.clientX;
  const currentY = e.clientY;
  const width = Math.abs(currentX - startX);
  const height = Math.abs(currentY - startY);
  const left = Math.min(startX, currentX);
  const top = Math.min(startY, currentY);
  selectionArea.style.left = `${left}px`;
  selectionArea.style.top = `${top}px`;
  selectionArea.style.width = `${width}px`;
  selectionArea.style.height = `${height}px`;
});

document.addEventListener('mouseup', () => {
  isMouseDown = false;
  const selectedText = window.getSelection().toString();
  const selectedElements = document.elementsFromPoint(startX, startY);
  console.log('Selected text:', selectedText);
  console.log('Selected elements:', selectedElements);
  // Perform additional actions with the selected text or elements
  document.body.removeChild(selectionArea);
});
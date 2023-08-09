const input = "Tejashwa Raj";

const inputArea = input.split("");
const historyArea = [];

function undo(inputArea) {
  const undoCharacter = inputArea.pop();
  historyArea.push(undoCharacter);
}

function redo(historyArea) {
  const redoCharacter = historyArea.pop();
  inputArea.push(redoCharacter);
}

undo(inputArea);
undo(inputArea);
redo(historyArea);

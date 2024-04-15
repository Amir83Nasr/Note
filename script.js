let color = document.getElementById('color');
let createBtn = document.getElementById('createBtn');
let list = document.getElementById('list');

createBtn.onclick = () => {
    let newNote = document.createElement('div');
    
    newNote.classList.add('note');
    newNote.innerHTML = `
    <span class="close">x</span>
    <textarea cols="30" rows="10" placeholder="Write Content ..."></textarea>`;
    
    newNote.style.borderColor = color.value;
    list.appendChild(newNote);
}

document.onclick = (event) => {
    if (event.target.classList.contains('close')) {
        event.target.parentNode.remove();
    }
}

// ———————————–––––––––––––––----------------------------------------

let cursor = {
    x: null,
    y: null
}

let note = {
    dom: null,
    x: null,
    y: null
}

document.onmousedown = (event) => {
    if (event.target.classList.contains('note')) {
        cursor = {
            x: event.clientX,
            y: event.clientY
        }

        note = {
            dom: event.target,
            x: event.target.getBoundingClientRect().left,
            y: event.target.getBoundingClientRect().top
        }
    }
}

document.onmousemove = (event) => {
    if (note.dom == null) return;

    let currentCursor = {
        x: event.clientX,
        y: event.clientY
    }

    let distanse = {
        x: currentCursor.x - cursor.x,
        y: currentCursor.y - cursor.y
    }

    note.dom.style.left = (note.x + distanse.x) + 'px';
    note.dom.style.top = (note.y + distanse.y) + 'px';
    note.dom.style.cursor = 'grab';
}

document.onmouseup = (event) => {
    if (note.dom == null) return;

    note.dom.style.cursor = 'auto';
    note.dom = null;
}
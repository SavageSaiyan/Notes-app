const addBtn = document.getElementById('add');



addBtn.addEventListener('click', ()=> addNewNote('Add new note'));

function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note')

    note.innerHTML = `
    <div class="tools">
                <button class="edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>

            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
    `;
   // delete button
   const deleteBtn = note.querySelector('.delete');
   const editBtn = note.querySelector('.edit');
   const main = note.querySelector('.main');
   const textArea = note.querySelector('textarea');


   textArea.value = text
   main.innerHTML = text;

   //delete function
    deleteBtn.addEventListener('click', ()=> {
    note.remove();
})
  
    editBtn.addEventListener('click', ()=> {
    main.classList.toggle('hidden')
    textArea.classList.toggle('hidden')
});

textArea.addEventListener('input', (e)=> {
    // console.log(e)
    const value = e.target.value;
    // console.log(value);
    main.innerHTML = value;
    updateLS()
})

    document.body.appendChild(note);
}


function updateLS() {
    const notesText = document.querySelectorAll('textarea');

    const notes = [];

    notesText.forEach(note => notes.push(note.value))

// console.log(notes, notesText)

    localStorage.setItem('note', JSON.stringify(notes))
}


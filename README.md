### US1: As a user, when I click the add note button, I want to see a new note on the screen

***Ask the class what they should do next***
1. bring the add note button into js
2. Add a click event to the button
3. When the button is clicked:                                      
- create a div with all the styling and tags
- add the note class to include note styling
- use inner html to create the buttons and icons
4. append the div to the body of the document


### US2: As a user, when I click the trash icon, I want to remove the note

1. Bring in the delete button
2. Add an event listener so that on click, it removes .note (which is a div)


### US3: As a user, when I click edit icon, I want to write a note in the note pad

1. Bring in the edit button
2. add an event listener on the button
3. inside of the event listener, toggle between
main and textArea.
    - bring in textArea and .main into js
    - add the toggle() to main and text area
4. Add placeholder text
    - add placeholder text in add new note 
    - set the textArea's and .main's value to text
5. Add eventListener on textArea update the main and toggle input to show the same text


### As a user, when I create a new note, I want to save my note on the page

1. create a function to to update local storage
    - save all the text in the notes
    - for each note created, add it to an empty array
    - save the list of notes to local storage
2. update the local storage whenever a note is created
3. parse the notes from the array
4. If there is a note saved in storage,  for each note in storage, call addNewNote and pass note as an arg
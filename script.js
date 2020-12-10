/**workflow logic for functions
 clicking on +newBook =>
 f toogle invisible items
 clicking submitbut
 f addBookToLibrary
 f which add book from library to table - append
 f which toogle hidens elements again
 f which clears form??
 */


//variables - library for pushing {title, author, pages, status}
let myLibrary = [];


//selectors
//buttons
const newBookB = document.querySelector('[data-button="newBook"]')
const cancelBookB = document.querySelector('[data-button="cancelButton"]')
const submitBookB = document.querySelector('[data-button="submitBook"]')
//library table
const libraryTable = document.querySelector('.libraryTable')
const libraryBody = document.querySelector('tbody')
//formoverlay(for toggle hidden class) +form + inputs
const overlayForm = document.querySelector('.questionOverlay')
const form = document.querySelector('.questionForm')
const inputTitle = document.querySelector('[data-form="title"]')
const inputAuthor = document.querySelector('[data-form="author"]')
const inputPages = document.querySelector('[data-form="pages"]')


class Book {
    constructor(title, author, pages, status) {
        this.title = title
        this.author = author
        this.pages = pages
        this.status = status
    }
}

function addBookToLibrary(){
    let title = inputTitle.value 
    let author = inputAuthor.value
    let pages = inputPages.value
    let status = getStatusValue()
    let newBookToLibrary = new Book(title, author, pages, status)
    myLibrary.push(newBookToLibrary)
    console.log(myLibrary)
}

//function for status - read not read reading
function getStatusValue(){
    if(form.querySelector('input[name="read"]:checked').value =='yes'){
        return read = 'read'
    }else if (form.querySelector('input[name="read"]:checked').value =='no'){
        return read = 'not read'
    } else {return read = 'reading'}
}

//function to append from library to table
/*appendToTable(){

}*/


//function to change status
//function to remove from table
//function to clear form??if not autocleared by submit??
function clearForm(){
    inputTitle.value = ''
    inputAuthor.value = ''
    inputPages.value = ''
}
//function for invisibility - +newbook e.listener
function toogleInvisibility (){
    overlayForm.classList.toggle('invisible')
    form.classList.toggle('invisible')
} 

//event listeners
newBookB.addEventListener('click', () =>{
    toogleInvisibility()
})
cancelBookB.addEventListener('click', () =>{
    toogleInvisibility()
    //clearForm()
})
submitBookB.addEventListener('click', () =>{
    addBookToLibrary();
})

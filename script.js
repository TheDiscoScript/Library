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
    addBookToLibrary(){
        this.title = inputTitle.value
        this.author = inputAuthor.value
        this.pages = inputPages.value
        this.status = getStatusValue()
        let newBookToLibrary = new Book(title, author, pages, read)
        myLibrary.push(newBookToLibrary)
    }
    //function for status - read not read reading
    getStatusValue(){
        if(form.querySelector('input[name="read"]:checked').value =='yes'){
            return 'read'
        }else if (form.querySelector('input[name="read"]').value =='no'){
            return 'not read'
        } else {return 'reading'}
    }
    //function to append from library to table
    /*appendToTable(){

    }*/
    

    //function to change status
    //function to remove from table
    //function to clear form??if not autocleared by submit??

    //function for invisibility - +newbook e.listener
    toogleInvisibility(){
        overlayForm.classList.toggle('invisible')
        form.classList.toggle('invisible')
    } 
}
//event listeners
newBookB.addEventListener('click', () =>{
    toogleInvisibility()
})





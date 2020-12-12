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
//form radiobutons
const yesOption = document.querySelector('#yes')
//totalpages
const total = document.querySelector('[data-counter="sum"]')

//function for storage
function populateStorage(){
    localStorage.setItem('library', JSON.stringify(myLibrary));
  }
function getStorage(){
    myLibrary = JSON.parse(localStorage.getItem('library'));
}

class Book {
    constructor(title, author, pages, status) {
        this.title = title
        this.author = author
        this.pages = parseInt(pages)
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
function appendToTable(){
    myLibrary.forEach((book, index) =>{
        let tbodyTR = document.createElement('tr')
        libraryBody.appendChild(tbodyTR)
        tbodyTR.setAttribute('data-book', index) //sets 'data-book: 0, 1, 2...) - removing tr removes all child TDs
        for (let content in book){
            let tbodyTD = document.createElement('td')
            tbodyTD.textContent = book[content]
            tbodyTR.appendChild(tbodyTD)
        }
        let tbodyTDchanB = document.createElement('td')
        let TDchangeButton = document.createElement('button')
        TDchangeButton.textContent = 'change status'
        tbodyTR.appendChild(tbodyTDchanB)
        tbodyTDchanB.appendChild(TDchangeButton)
        let tbodyTDremB = document.createElement('td')
        let TDremoveButton = document.createElement('button')
        TDremoveButton.textContent = 'remove'
        tbodyTR.appendChild(tbodyTDremB)
        tbodyTDremB.appendChild(TDremoveButton)
    })    
}

//function to change status
function changeStatus(){
    let number = event.target.parentElement.parentElement.getAttribute('data-book')
    if(myLibrary[number]['status'] === 'read'){
        myLibrary[number]['status'] = 'not read'
        a()
    } else if(myLibrary[number]['status'] === 'not read'){
        myLibrary[number]['status'] = 'reading'
        a()
    } else if(myLibrary[number]['status'] === 'reading'){
        myLibrary[number]['status'] = 'read'
        a()
    }
}
//function to remove from table (actually remove from library + update table)
function removeFromTable(){
    myLibrary.splice(
        event.target.parentElement.parentElement.getAttribute('data-book'),
        1
    )
    a()

}
//function to clear form??if not autocleared by submit??
function clearForm(){
    inputTitle.value = ''
    inputAuthor.value = ''
    inputPages.value = ''
    yesOption.checked = true;

}
//function for invisibility - +newbook e.listener
function toogleInvisibility (){
    overlayForm.classList.toggle('invisible')
    form.classList.toggle('invisible')
} 
function sum(){
    let sum = 0
    myLibrary.forEach(book => {
        if(book['status'] === 'read'){
            sum += book['pages']
        }
        total.textContent = sum
    })
}
function a(){
    libraryBody.textContent = ''
    appendToTable();
}

//event listeners
newBookB.addEventListener('click', () =>{
    toogleInvisibility()
})
cancelBookB.addEventListener('click', () =>{
    toogleInvisibility()
    clearForm()
})
submitBookB.addEventListener('click', () =>{
    addBookToLibrary();
    toogleInvisibility();  
    clearForm();
    sum()
    a()
    populateStorage()
})
document.addEventListener('click', (event)=>{
    if(event.target.textContent === 'remove'){
        removeFromTable()
        sum()
        populateStorage()
    }
    if(event.target.textContent ==='change status'){
        changeStatus()
        sum()
        populateStorage()
    }
})
window.addEventListener('load', () =>{
    getStorage()
    sum()
    appendToTable()
})


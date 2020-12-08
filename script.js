
class book {
    constructor(title, author, pages, status) {
        this.title = title
        this.author = author
        this.pages = pages
        this.status = status
        this.info = function () {
            return(title + ' by ' + author + ', ' + pages + ' pages' +', ' + status)
        }
    }
}
const book1 = new book('Pán Prstenu', 'Tolkien', 300, 'nečteno')
console.log(book1.info())

/**
function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function () {
        return(title + ' by ' + author + ', ' + pages + ' pages' +', ' + status)
    }
}
 */
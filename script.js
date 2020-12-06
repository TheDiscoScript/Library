
function book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function () {
            console.log(title + ' by ' + author + ', ' + pages + ' pages' +', ' + status)
    }
}
const book1 = new book('Pán Prstenu', 'Tolkien', 300, 'nečteno')
book1.info()
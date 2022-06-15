console.log("This is tutorial 32 - solution")
// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
    constructor(bookList){
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList(){
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookname, user){
        if (this.issuedBooks[bookname] ==undefined){
        this.issuedBooks[bookname] =  user;
        console.log(`book is issued by ${user}`)
        }
        else{
            console.log("This book is already issued!");
        }
    }

    returnBook(bookname){
        delete this.issuedBooks[bookname];
    }

    addBook(bookname){
        // this.bookList=bookname;
        // this.issuedBooks = {};
    //    this.bookList.addBook(bookname);
        this.bookList.push(bookname);
        console.log("book is been added");
}
}




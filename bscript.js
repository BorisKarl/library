const container = document.getElementById('container')
const addButton = document.getElementById('add_book')
const flexContainer = document.getElementById('flex_container')
const submitButton = document.getElementById('submit') 
const input_author = document.getElementById('input_author')
const input_title = document.getElementById('input_title')
const input_pages = document.getElementById('input_pages')
const input_read = document.getElementById('input_read')


function displayCard() {
        flexContainer.classList.toggle('show');
}

addButton.addEventListener('click', () => {
    flexContainer.classList.toggle('show')})
    
submitButton.addEventListener('click', displayCard);
submitButton.addEventListener('click', addToLibrary);
submitButton.addEventListener('click', reset);


class Book {
    constructor(titel, autor, seiten, gelesen) {
        this.titel = titel;
        this.autor = autor;
        this.seiten = seiten;
        this.gelesen = gelesen;
   }
};


let myLibrary = [];
let newBook;

function addToLibrary() {
    newBook = new Book(input_title.value, input_author.value, input_pages.value, checkRead(input_read));
    myLibrary.push(newBook);
    console.log(myLibrary);
    addBook();
}

function render() {
    for (let i = 1; i < myLibrary.length; i++) {
        addBook(myLibrary[i]);
    }
}

function addBook(book) {

    const user_div = document.createElement('div');
    const user_UL = document.createElement('ul');
    const user_autor = document.createElement('li');
    const user_titel = document.createElement('li');
    const user_seiten = document.createElement('li');
    const user_read = document.createElement('li');
    const remove_button = document.createElement('button');
    const reddit_button = document.createElement('button')
    user_div.classList.add('book');
    user_div.setAttribute('id', myLibrary.indexOf(book));

    reddit_button.setAttribute('id', 'reddit_button');
    reddit_button.innerHTML = 'Read';
    reddit_button.addEventListener('click', toggleRead)
    remove_button.setAttribute('id', 'remove_button');
    remove_button.innerHTML = "remove book";
    remove_button.addEventListener('click', removeList);
    remove_button.addEventListener('click', removeFromArray);

    container.append(user_div)
    user_div.append(user_UL)
    user_UL.append(user_autor, user_titel, user_seiten, user_read, remove_button, reddit_button)
    user_div.classList.add('custom-card')

    user_titel.textContent = input_title.value;
    user_autor.textContent = input_author.value;
    user_seiten.textContent = input_pages.value;
    user_read.textContent = checkRead(input_read);
    //addToLibrary();

    function toggleRead() {
        if (user_read.textContent = "You read this book") {
            user_read.textContent = "You did not read this book"
        }
        if(user_read.textContent = "You did not read this book")
        {
            user_read.textContent = "You read this book";
        }
    };

    reset();
    function removeList() {
        user_div.parentNode.removeChild(user_div);
    }
    function removeFromArray() {
        myLibrary.splice(myLibrary.indexOf(book), 1);
    }

}

function reset() {
    input_title.value = "";
    input_author.value = "";
    input_pages.value = "";
    input_read.checked = false;
}



function checkRead(x) {
    let y = "";
    if (x.checked === true) {
        y = "You read this book"

    } else if (x.checked === false) {
        y = "You did not read this book"
    }
    return y;
}

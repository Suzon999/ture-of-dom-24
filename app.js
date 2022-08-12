console.log('hello from javascript');
console.log();
const liTotal = document.getElementsByTagName('li');
// console.log(liTotal)
for (const li of liTotal) {
    //     console.log(li.innerText);
}

const bookId = document.getElementById("book-title").innerText;
// console.log(bookId);

const bookName = document.getElementsByClassName("book-name").innerText;
console.log(bookName);
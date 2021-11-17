let books = [
    {
        name: 'Sariq devni minib',
        author: "X.To'xtaboyev",
        genre: 'sarguzasht',
        published: 1968
    },
    {
        name: 'Romeo va Juletta',
        author: "William Shakespeare",
        genre: 'tragediya',
        published: 1597
    },
    {
        name: 'Война и миръ',
        author: "Leo Tolstoy",
        genre: 'tarixiy roman',
        published: 1869
    },
    {
        name: "O'tgan kunlar",
        author: "Abdulla Qodiriy",
        genre: 'badiiy asar',
        published: 1926
    }
];

function getBookList() {
    document.getElementById('name').innerHTML = books[0].name;
    document.getElementById('author').innerHTML = books[0].author;
    document.getElementById('genre').innerHTML = books[0].genre;
    document.getElementById('published').innerHTML = books[0].published;

    document.getElementById('name2').innerHTML = books[1].name;
    document.getElementById('author2').innerHTML = books[1].author;
    document.getElementById('genre2').innerHTML = books[1].genre;
    document.getElementById('published2').innerHTML = books[1].published;

    document.getElementById('name3').innerHTML = books[2].name;
    document.getElementById('author3').innerHTML = books[2].author;
    document.getElementById('genre3').innerHTML = books[2].genre;
    document.getElementById('published3').innerHTML = books[2].published;

    document.getElementById('name4').innerHTML = books[3].name;
    document.getElementById('author4').innerHTML = books[3].author;
    document.getElementById('genre4').innerHTML = books[3].genre;
    document.getElementById('published4').innerHTML = books[3].published;
}
getBookList();
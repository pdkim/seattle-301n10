//let's do this!

//how to call this https://server-wuvttyijde.now.sh/books and get books?

//const response = $.getJSON('https://server-wuvttyijde.now.sh/books');

//imagine you pay for a burger and you get a ticket for your order.  The ticket is the promise for the burger

//this is the promise
//response.then(books => console.log(books));

const url = 'https://server-wuvttyijde.now.sh/books';

const template = $('#book-template').text();
const render = Handlebars.compile(template); //the "buddy"

$('form').on('submit', () => {
  event.preventDefault();
  //failure to do this will cause refresh
  const bookName = $('#book-name').val();
  const bookAuthor = $('#book-author').val();
  // console.log(bookName, bookAuthor);
  //post will add to API.  needs API and data needed (key value pairs).
  $.post(url, {name: bookName, author: bookAuthor});
});

$.getJSON('https://server-wuvttyijde.now.sh/books').then(books => {
  books.forEach(book => {
    //no need to add template here since the template is fixed.  Why bother doing it over and over again?
    const bookHtml = render(book);
    $('ul').append(bookHtml);
  });
});
//separation of concern

//get asynchronous data from pre-existing path with JSON data (currently not in here)
$.getJSON('data/local-data.json').then(results => {
  console.log(results);
});

//use catch to find errors for JSON files.
$.getJSON('data/invalid-data.json').then(results => {
  console.log(results);
}).catch(err => console.error('Error', err));

var Quotes = [
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde",
    },
    {
        quote:"“So many books, so little time.”",
        author:"― Frank Zappa",
    },
    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West",
    },
    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi",
    },
    {
        quote:"“If you tell the truth, you don't have to remember anything.”",
        author:"― Mark Twain",
    },
    {
        quote:"“A friend is someone who knows all about you and still loves you.”",
        author:"― Elbert Hubbard",
    }
  ];
var lastNumber;
var x;
function changequote(){
    do {
        x=Math.floor(Math.random() * Quotes.length)
    } while ( x == lastNumber);
    document.getElementById('quote').innerHTML=Quotes[x].quote
    document.getElementById('author').innerHTML=Quotes[x].author

}
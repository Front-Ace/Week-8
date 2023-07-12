var wholeQuote=[ 
    {
        quote: " “Be yourself; everyone else is already taken.” ",
        author: " ― Oscar Wilde "
    },
    {
        quote: " “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.” ",
        author: " ― Marilyn Monroe "
    },
    {
        quote: " “Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
        author: " ― Albert Einstein "
    },
    {
        quote: " “A room without books is like a body without a soul.” ",
        author: " ― Marcus Tullius Cicero "
    },
    {
        quote: " “Be the change that you wish to see in the world.” ",
        author: " ― Mahatma Gandhi "
    },
    {
        quote: " “I have not failed. I've just found 10,000 ways that won't work.” ",
        author: " ― Thomas A. Edison "
    },
    {
        quote: " “It is not a lack of love, but a lack of friendship that makes unhappy marriages.” ",
        author: " ― Friedrich Nietzsche "
    },
    {
        quote: " “The man who does not read has no advantage over the man who cannot read.” ",
        author: " ― Mark Twain "
    },
    {
        quote: " “I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.” ",
        author: " ― Dr. Seuss "
    },
    {
        quote: " “A day without sunshine is like, you know, night.” ",
        author: " ― Steve Martin "
    },
    {
        quote: " “That which does not kill us makes us stronger.” ",
        author: " ― Friedrich Nietzsche "
    },
    {
        quote: " “It is never too late to be what you might have been.” ",
        author: " ― George Eliot "
    },
    {
        quote: " “For every minute you are angry you lose sixty seconds of happiness.” ",
        author: " ― Ralph Waldo Emerson "
    },
    {
        quote: " “I love deadlines. I love the whooshing noise they make as they go by.” ",
        author: " ― Douglas Adams, The Salmon of Doubt "
    },
    {
        quote: " “I'm not upset that you lied to me, I'm upset that from now on I can't believe you.” ",
        author: " ― Friedrich Nietzsche "
    },
    {
        quote: " “If you can't explain it to a six year old, you don't understand it yourself.” ",
        author: " ― Albert Einstein "
    }
]

var randomNum = Math.trunc(Math.random() * 15);

function revealQuote(){
    do{
        var randomNum = Math.trunc(Math.random() * 15);
        document.getElementById("quote").innerHTML = wholeQuote[randomNum].quote;
        document.getElementById("author").innerHTML = wholeQuote[randomNum].author;
    }while(randomNum > 15);
};
const quotes = [
  {
    quote: "누구세용",
    author: "새대갈",
    image: "새대갈.jpeg",
  },
  {
    quote: "찌발러마",
    author: "땅땅이",
    image: "땅땅이.jpeg",
  },
  {
    quote: "찐따쉑",
    author: "현식이",
    image: "현식이.jpeg",
  },
  {
    quote: "야이 쉬벌럼들아",
    author: "새대갈",
    image: "새대갈.jpeg",
  },
  {
    quote: "살려주세용",
    author: "새대갈",
    image: "새대갈.jpeg",
  },
  {
    quote: "누구세용",
    author: "오동욱",
    image: "오.jpeg",
  },
  {
    quote: "역사적으로도 몽둥이가 답이었다",
    author: "정동현",
    image: "이게약이다.jpeg",
  },
  {
    quote: "시끄러!",
    author: "상여자",
    image: "상여자.jpeg",
  },
];
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
// const image = document.createElement("img");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;

// image.src = `img/${todayQuote.image}`;
// document.body.appendChild(image);

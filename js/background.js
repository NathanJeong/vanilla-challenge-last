const images = [
  "https://images.pexels.com/photos/1471294/pexels-photo-1471294.jpeg?cs=srgb&dl=pexels-a-k-1471294.jpg&fm=jpg",
  "https://t1.daumcdn.net/cfile/tistory/1159C8524D6C365821",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1b8BFnWESu9CyFQEN6bxFMuwBUyXmRyGjJ7S7IlG1TRrXUjpFNJaSkA9CtjXq6rmK2Qo&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIx8IIClulXdoSrUpF5WVcoDa6CNMpmrxB3A&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT92HZZQ5n_2TxW2oaUMB5as1RR5v50udYIKw&usqp=CAU",
  "https://s2.best-wallpaper.net/wallpaper/2560x1440/1808/Your-Name-beautiful-meteor_2560x1440.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGvgwboHDVP36TV1e8y57sy7PfnWwvtOIMA&usqp=CAU",
  "https://i.imgur.com/wGuOb93.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq48gtCYyzMG7X_9nIYQmhurNHTmBq8V-9cA&usqp=CAU",
];
const randomImages = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
const body = document.querySelector("body");

function selectBg() {
  bgImage.src = `${randomImages}`;
  bgImage.classList.add("bgImg");
  body.appendChild(bgImage);
}

selectBg();

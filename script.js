var button = document.getElementById('button');

var quotes = [
  "This is the fight of our lives. We are going to win. Whatever it takes.",
  "I don't judge people by their worst mistakes.",
  "I love you 3000.",
  "I am inevitable.",
  "As far as I'm concerned, that's America's *ss.",
  "Because before, you didn't have me.",
  "We're going to be okay. You can rest now.",
  "We won, Mr. Stark. We won, and you did it, sir. You did it."
]
var images = [
  "http://freshwallpapers.net/download/21961/1024x768/download/captain-america-in-avengers-infinity-war-new-poster.jpg",
  "https://img1.looper.com/img/gallery/how-avengers-endgame-sets-up-the-black-widow-movie/intro-1558035201.jpg",
  "https://www.mpaa.org/wp-content/uploads/2018/04/Iron-Man-Poster-copy-1.jpg",
  "https://cdn3.movieweb.com/i/article/IX30RUBDq3kBk6Xs06JUxy6rJo1p0R/798:50/Avengers-Endgame-Preview-Video-Thanos.jpg",
  "https://img.cinemablend.com/filter:scale/quill/b/1/2/f/4/a/b12f4ab9f9b751c698527afc0fc172cc4f1e5998.jpg?mw=600",
  "https://images.wallpapersden.com/image/download/captain-marvel-avengers-endgame_64410_2932x2932.jpg",
  "http://depor.com/files/article_main/uploads/2019/02/22/5c7095ff5edc6.jpeg",
  "https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/14/1522871602-aif4.jpg"
]
var characters =[
  "Steve Rogers (Captain America)",
  "Natasha Romanova (Black Widow)",
  "Tony Stark (Iron Man)",
  "Thanos",
  "Scott Lang (Ant Man)",
  "Carol Danvers (Captain Marvel)",
  "Pepper Potts",
  "Spider Man (Peter Parker)"
]


button.addEventListener("click", function(){
  var number = randNum(quotes);
  changeQuote(number);
  changeCharacter(number);
  changeImage(number);
})

function randNum(array){
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random = Math.floor(randBig);
  return random;
}
randNum(quotes);

function changeQuote(someNum){
  var quote = document.getElementById('blank');
  quote.innerHTML = quotes[someNum];
}

function changeImage(someNum){
  var image = document.getElementById('firstimage');
  image.src = images[someNum];
}

function changeCharacter(someNum){
  var character = document.getElementById('people');
  character.innerHTML = characters[someNum];
}

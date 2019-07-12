var quotes = [
  "This is the fight of our lives. We are going to win. Whatever it takes.",
  "I don't jusdge people by their worst mistakes.",
  "I love you 3000.",
  "I am inevitable.",
  "As far as I'm concerned, that's America's *ss.",
  "Because before, you didn't have me.",
  "We're going to be okay. You can rest now."
]
var images = [
  "http://freshwallpapers.net/download/21961/1024x768/download/captain-america-in-avengers-infinity-war-new-poster.jpg",
  "https://img1.looper.com/img/gallery/how-avengers-endgame-sets-up-the-black-widow-movie/intro-1558035201.jpg",
  "https://www.mpaa.org/wp-content/uploads/2018/04/Iron-Man-Poster-copy-1.jpg",
  "https://i1.wp.com/media.criticalhit.net//2019/04/Hot-Toys-Thanos-2-1.jpg?fit=850%2C477&ssl=1",
  "https://img.cinemablend.com/filter:scale/quill/b/1/2/f/4/a/b12f4ab9f9b751c698527afc0fc172cc4f1e5998.jpg?mw=600",
  "https://images.wallpapersden.com/image/download/captain-marvel-avengers-endgame_64410_2932x2932.jpg",
]
var characters =[
  "Steve Rogers (Captain America)",
  "Natasha Romanova (Black Widow)",
  "Tony Stark (Iron Man)",
  "Thanos",
  "Scott Lang (Ant Man)",
  "Carol Danvers (Captain Marvel)",
  "Pepper Potts"
]

var button = document.getElementById('button');

button.addEventListener("click", function(){
  var number = randNum(quotes);
  changeImg(number);
})

function randNum(array){
  var randDeci = Math.random();
  var randBig = randDeci * array.length;
  var random = Math.floor(randBig);
  return random;
}

function changeImg(someNum){
  var quote = document.getElementById('blank');
  quote.src = quotes[someNum];
}

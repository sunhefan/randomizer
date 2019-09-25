let roster = [{
    firstName: "xiaowei",
    lastName: "zheng",
    color: " green",
    anmial: "babies",
    book: "the little girl at the window",
    movie: "eat drink man woman",
    game: "none",
    superHero: "none",
    randomFact: "don't drink coke"
  },
  {
    firstName: "Andy",
    lastName: "Wu",
    color: "Red",
    anmial: "Kiwi",
    book: "Romance of the Three Kingdoms",
    movie: "Shrek 2",
    game: "Super Mario 64",
    superHero: "Static Shock",
    randomFact: "I've had jaw correction surgery"
  },
  {
    firstName: "Chris",
    lastName: "Weber",
    color: "green",
    anmial: "cat",
    book: "Hitchhiker's Guide to the Galaxy",
    movie: "Spiderman Into The Spiderverse",
    game: "The Legend of Zelda Breath of the Wild",
    superHero: "Iron Man",
    randomFact: "I'm vegetarian"
  },
  {
    firstName: "Sumedh",
    lastName: "Vedanthi",
    color: "Blue",
    animal: "Crow",
    book: "Of Mice and Men",
    movie: "American Psycho",
    game: "Fruit Ninja",
    superHero: "Batman",
    randomFact: "im a black belt",
  },
  {
    firstname: "Kaicong",
    lastname: "Tang",
    color: "black",
    animal: "dog",
    movie: "iron man123",
    game: "csgo",
    superHero: "iron man",
    randomFact: "love gaming"
  },
  {
    firstName: "Hao",
    lastName: "Rong",
    color: "hex(#4285F4)",
    animal: "otter",
    book: "A Brief History of Time",
    movie: "Angry Birds 2",
    game: "Final Fantasy XIV",
    superHero: "Tony Stark",
    randomFact: "I like cats.",
  },
  {
    firstName: "Sierra",
    lastName: "Roe",
    color: "purple",
    animal: "dog",
    book: "phantom tollbooth",
    movie: "Naussica of the Valley of the Wind",
    game: "pokemon heartgold",
    superHero: "captain marvel",
  },
  {
    firstName: "Leon",
    lastName: "Quach",
    color: "silver",
    animal: "penguins",
    book: "Letters to a Young Poet",
    movie: "Kung fu Hustle",
    game: "Pokemon Crystal Version",
    superHero: "Batman",
    randomFact: "I have two pet guinea pigs"
  },
  {
    firstName: "Chi",
    lastName: "Nguyen",
    color: "purple",
    animal: "bird",
    book: "Math Curse",
    movie: "Big Hero 6",
    game: "Checkers",
    superHero: "Big Hero 6 (team)",
    randomFact: "Lately this year, monsters have especially"
  },
  {
    firstName: "Lydia",
    lastName: "Lim",
    color: "blue",
    favoriteAnimal: "dog",
    book: "No",
    movie: "me before you",
    game: "No",
    superHero: "Thor",
    randomFact: " birds are tetrapods even though they only walk on two legs"
  },
  {
    firstName: "Eddson",
    lastName: "Jose",
    color: "midnight blue",
    animal: "pig",
    book: "The Dark Forest",
    movie: "The Fountain",
    game: "Halo Reach",
    superHero: "Superman",
    randomFact: "I am made up of stardust"
  },
  {
    firstName: "Camila",
    lastName: "Avina Garcia",
    color: "Green",
    animal: "Dog",
    book: "Match",
    movie: "Lady and the Tramp",
    game: "Guitar Hero",
    superHero: "Spiderman",
    randomFact: "I have a twin"
  },
  {
    firstName: "Zainib",
    lastName: "Ahmed",
    color: "Blue",
    animal: "Giraffe",
    book: "The Book Thief",
    movie: "Amelie",
    game: "none",
    superHero: "The Hulk",
    randomFact: "I love to eat olives"
  },
  {
    firstName: "Matteo",
    lastName: "Leva",
    color: "Black",
    animal: "Cat",
    book: "Pillars of the earth",
    movie: "The Godfather",
    game: "Witcher 3 ",
    superHero: "spider man",
    randomFact: "I'm disappointed in GOT season 8"
  },
  {
    firstName: "Hector",
    lastName: "Flores",
    color: "Blue",
    animal: "Dog",
    book: "Captain Underpants",
    movie: "Ace Ventura pet detective",
    game: "Smash Brothers",
    superHero: "Flash",
    randomFact: "I am a Libra"
  },
  {
    firstName: "Vanessa",
    lastName: "Blacow-Berggen",
    color: "pink",
    animal: "cat",
    book: "The Heartstriker series",
    movie: "Cats Don't Dance",
    game: "Spyro Reignited Trilogy",
    superHero: "Spiderman",
    randomFact: "I really like cats, especially my cat"
  },
  {
    firstName: "Kevin",
    lastName: "Sagara",
    color: "yellow",
    animal: "cat",
    book: "sherlock holmes",
    movie: "Shaun of the Dead",
    game: "osu!",
    superHero: "batman",
    randomFact: "learning japanese"
  },
  {
    firstName: "Anthony",
    lastName: "Valdovinos",
    color: "purple",
    animal: "eagle",
    book: "Hatchet",
    movie: "Titanic",
    game: "Starfox Adventures",
    superHero: "none",
    randomFact: "I studied Japanese for 4 years"
  },
  {
    firstName: "Rachel",
    lastName: "Centinaje",
    color: "green",
    animal: "dogs",
    book: "none",
    movie: "Drive",
    game: "Dishonored",
    superHero: "Deadpool",
    randomFact: "I went camping this weekend"
  },
  {
    firstName: "Alicia",
    lastName: "Breinke",
    color: "purple",
    animal: "dog",
    book: "The Art of Racing in the Rain",
    movie: "Spirited Away",
    superHero: "Wonder Woman",
    randomFact: "I want to live in another country someday"
  },
  {
    firstName: "asra",
    lastName: "siddiqui",
    color: "idk",
    animal: "chameleons",
    book: "codex 1962",
    movie: "pulp fiction",
    game: "idk",
    superHero: "hate em all",
    randomFact: "im grumpy"
  }
];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);

  // //console.log (roster.length);
  // randomIndex = int(random(roster.length));
  // //console.log (roster[randomIndex].firstName);
  // text(roster[randomIndex].firstName, 50, 50);
  //
  // roster.splice(randomIndex, 1);
  // //console.log(random);
}

function draw() {


  //text("this is Lydia", 70, 70);
  // text("HALOA, this is Wei", 70, 100);

}

function mousePressed() {
  background(random (200,250));
  randomIndex = int(random(roster.length));
  text(roster[randomIndex].firstName, 50, 50);
  roster.splice(randomIndex, 1);

}

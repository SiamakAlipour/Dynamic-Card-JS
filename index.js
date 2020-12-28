const reviews = [
  {
    id: 1,
    name: "Siamak",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    text: `The spot was perfect for camouflage. At least that's what she thought when she picked the spot. She couldn't imagine that anyone would ever be able to see her in these surroundings. So there she sat, confident that she was hidden from the world and safe from danger. Unfortunately, she had not anticipated that others may be looking upon her from other angles, and now they were stealthily descending toward her hiding spot.`,
  },
  {
    id: 2,
    name: "John",
    img:
      "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_view_of_the_sun2/22133123-1-eng-GB/Solar_Orbiter_s_first_view_of_the_Sun_pillars.png",
    text: `Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.`,
  },
  {
    id: 3,
    name: "Marry",
    img:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    text: `The lone lamp post of the one-street town flickered, not quite dead but definitely on its way out. Suitcase by her side, she paid no heed to the light, the street or the town. A car was coming down the street and with her arm outstretched and thumb in the air, she had a plan.`,
  },
];
let author = document.getElementById("name");
let image = document.getElementById("img");
let expAuthor = document.getElementById("explain");

let nextBtn = document.getElementById("nextBtn");
let prevBtn = document.getElementById("prevBtn");
let randBtn = document.getElementById("random");
let currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  image.src = item.img;
  author.textContent = item.name;
  expAuthor.textContent = item.text;
}

nextBtn.addEventListener("click", () => {
  currentItem =
    currentItem > reviews.length - 2 ? (currentItem = 0) : currentItem + 1;

  showPerson();
});
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }

  showPerson();
});
randBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * 3);
  showPerson();
});

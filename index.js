const reviews = [
  {
    id: 1,
    name: "Siamak",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    text: `1: Siamak Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reprehenderit ullam possimus vitae id esse alias necessitatibus
          laborum corporis quo labore aperiam harum corrupti laudantium suscipit
          eos, praesentium sunt eaque minus!`,
  },
  {
    id: 2,
    name: "asma",
    img:
      "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/07/solar_orbiter_s_first_view_of_the_sun2/22133123-1-eng-GB/Solar_Orbiter_s_first_view_of_the_Sun_pillars.png",
    text: `2: asma asma asma asma asma asma asma asma asma asma asma asma asma asma 
    asma asma asma asma asma asma asma asma asma asma asma asma asma asma asma asma
    asma asma asma asma asma asma asma asma asma asma asma asma asma asma asma asma`,
  },
  {
    id: 3,
    name: "Farzam",
    img:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    text: `3: Farzam Lorem ipsum dolor sit amet Farzam Lorem ipsum dolor sit amet Farzam Lorem ipsum dolor sit amet 
    Farzam Lorem ipsum dolor sit amet
    Farzam Lorem ipsum dolor sit amet Farzam Lorem ipsum dolor sit amet `,
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

const recipeList = [
  {
    name: "Veggie Delight",
    imageSrc: "https://source.unsplash.com/random?veggie-salad",
    time: "30 min",
    type: "veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Chicken Grill",
    imageSrc: "https://source.unsplash.com/random?chicken-grill",
    time: "45 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Cheese Pizza",
    imageSrc: "https://source.unsplash.com/random?cheese-pizza",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.1,
  },
  {
    name: "Steak",
    imageSrc: "https://source.unsplash.com/random?steak",
    time: "60 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.7,
  },
  {
    name: "Grilled Salmon",
    imageSrc: "https://source.unsplash.com/random?grilled-salmon",
    time: "50 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Tomato Pasta",
    imageSrc: "https://source.unsplash.com/random?tomato-pasta",
    time: "35 min",
    type: "veg",
    isLiked: false,
    rating: 4.0,
  },
  {
    name: "Vegan Salad",
    imageSrc: "https://source.unsplash.com/random?vegan-salad",
    time: "20 min",
    type: "veg",
    isLiked: false,
    rating: 3.9,
  },
  {
    name: "Fried Chicken",
    imageSrc: "https://source.unsplash.com/random?fried-chicken",
    time: "55 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Mushroom Risotto",
    imageSrc: "https://source.unsplash.com/random?mushroom-risotto",
    time: "45 min",
    type: "veg",
    isLiked: false,
    rating: 4.5,
  },
  {
    name: "Burger",
    imageSrc: "https://source.unsplash.com/random?burger",
    time: "30 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.2,
  },
  {
    name: "Paneer Tikka",
    imageSrc: "https://source.unsplash.com/random?paneer-tikka-curry",
    time: "40 min",
    type: "veg",
    isLiked: false,
    rating: 4.4,
  },
  {
    name: "BBQ Ribs",
    imageSrc: "https://source.unsplash.com/random?bbq-ribs",
    time: "70 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.6,
  },
  {
    name: "Caesar Salad",
    imageSrc: "https://source.unsplash.com/random?caesarSalad",
    time: "25 min",
    type: "veg",
    isLiked: false,
    rating: 3.8,
  },
  {
    name: "Fish Tacos",
    imageSrc: "https://source.unsplash.com/random?fish-tacos-food",
    time: "35 min",
    type: "non-veg",
    isLiked: false,
    rating: 4.3,
  },
  {
    name: "Chocolate Cake",
    imageSrc: "https://source.unsplash.com/random?chocolateCake",
    time: "90 min",
    type: "veg",
    isLiked: false,
    rating: 4.9,
  },
];

const allRecipe = document.getElementById("all-recepie");
const vegRecipe = document.getElementById("veg-recepie");
const nonVegRecipe = document.getElementById("non-veg-recepie");

const recipes = document.getElementsByClassName("receipies")[0];

const searchInput = document.getElementById("search");

const ratingAbove4 = document.getElementById("above4rating");
const ratingBelow4 = document.getElementById("below4rating");

//filters

//All Recipes list
allRecipe.addEventListener("click", () => {
  clearCurrentState();
  loadRecipes(recipeList);
});

//Veg Recipes list
vegRecipe.addEventListener("click", () => {
  const vegRecipeList = recipeList.filter((recipe) => recipe.type === "veg");
  console.log(vegRecipeList);
  clearCurrentState();
  loadRecipes(vegRecipeList);
});

//Non Veg Recipes list
nonVegRecipe.addEventListener("click", () => {
  const nonVegRecipeList = recipeList.filter(
    (recipe) => recipe.type === "non-veg"
  );
  console.log(nonVegRecipeList);
  clearCurrentState();
  loadRecipes(nonVegRecipeList);
});

searchInput.addEventListener("click", () => {
  searchInput.innerText = "";
});

//search in the list
searchInput.addEventListener("input", () => {
  const vegRecipeList = recipeList.filter((recipe) =>
    recipe.name
      .toLocaleLowerCase()
      .includes(searchInput.innerText.toLocaleLowerCase())
  );

  clearCurrentState();
  loadRecipes(vegRecipeList);
});

//This will reload the page
function clearCurrentState() {
  console.log(recipes.children);
  const clearRecipe = recipes.children;
  const length = clearRecipe.length;
  for (let i = 0; i < length; i++) {
    clearRecipe[0].remove();
  }
}

//Filter on rating

//rating above 4
ratingAbove4.addEventListener("click", () => {
  if (ratingAbove4.checked === true) {
    ratingBelow4.checked = false;
    const vegRecipeList = recipeList.filter((recipe) => recipe.rating >= 4);
    clearCurrentState();
    loadRecipes(vegRecipeList);
  } else {
    clearCurrentState();
    loadRecipes(recipeList);
  }
});

//rating below 4
ratingBelow4.addEventListener("click", () => {
  if (ratingBelow4.checked === true) {
    ratingAbove4.checked = false;
    const vegRecipeList = recipeList.filter((recipe) => recipe.rating < 4);
    clearCurrentState();
    loadRecipes(vegRecipeList);
  } else {
    clearCurrentState();
    loadRecipes(recipeList);
  }
});

function loadRecipes(recipeList) {
  let i = 0;
  while (i < recipeList.length) {
    let count = 0;
    const recipeDiv = document.createElement("div");
    recipeDiv.className = "d-flex gap-3 pb-5 custom-coloum-div";
    for (let j = i; j < recipeList.length; j++) {
      const recipeInnerDiv = document.createElement("div");
      recipeInnerDiv.className = "divcustom";
      recipeInnerDiv.id = j;
      recipeInnerDiv.innerHTML = `
    <img src="${recipeList[j].imageSrc}" alt="" />
    <p>${recipeList[j].type}</p>
    <div class="recipe-name">
      <p>${recipeList[j].name}</p>
      <span
        ><svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Star">
            <path
              id="Star_2"
              d="M10.7901 8.54675C10.6174 8.71408 10.5381 8.95608 10.5774 9.19341L11.1701 12.4734C11.2201 12.7514 11.1027 13.0327 10.8701 13.1934C10.6421 13.3601 10.3387 13.3801 10.0901 13.2467L7.13741 11.7067C7.03474 11.6521 6.92074 11.6227 6.80407 11.6194H6.62341C6.56074 11.6287 6.49941 11.6487 6.44341 11.6794L3.49007 13.2267C3.34407 13.3001 3.17874 13.3261 3.01674 13.3001C2.62207 13.2254 2.35874 12.8494 2.42341 12.4527L3.01674 9.17275C3.05607 8.93341 2.97674 8.69008 2.80407 8.52008L0.396741 6.18675C0.195407 5.99141 0.125407 5.69808 0.217407 5.43341C0.306741 5.16941 0.534741 4.97675 0.810074 4.93341L4.12341 4.45275C4.37541 4.42675 4.59674 4.27341 4.71007 4.04675L6.17007 1.05341C6.20474 0.986748 6.24941 0.925415 6.30341 0.873415L6.36341 0.826748C6.39474 0.792081 6.43074 0.763415 6.47074 0.740081L6.54341 0.713415L6.65674 0.666748H6.93741C7.18807 0.692748 7.40874 0.842748 7.52407 1.06675L9.00341 4.04675C9.11007 4.26475 9.31741 4.41608 9.55674 4.45275L12.8701 4.93341C13.1501 4.97341 13.3841 5.16675 13.4767 5.43341C13.5641 5.70075 13.4887 5.99408 13.2834 6.18675L10.7901 8.54675Z"
              fill="#FDC040"
            />
          </g>
        </svg>
        ${recipeList[j].rating}
      </span>
    </div>

    <div class="TimeAndLike">
      <p>${recipeList[j].time}</p>
      <span
        >
        <svg
xmlns="http://www.w3.org/2000/svg"
width="22"
height="22"
viewBox="0 0 22 22"
fill="none"
onClick = likeButton(this)
>
<rect width="22" height="22" fill="white" />
<path
  d="M15.3927 3.57866C16.5976 3.64527 17.7273 4.18541 18.5357 5.08136C19.344 5.97731 19.7656 7.15645 19.7083 8.36183C19.7083 11.1778 17.2773 12.9076 14.9444 14.982C12.6417 17.0381 11.4015 18.1619 11 18.4213C10.5627 18.1381 9.03557 16.7502 7.05557 14.982C4.71257 12.8993 2.29166 11.1531 2.29166 8.36183C2.23443 7.15645 2.65593 5.97731 3.46431 5.08136C4.27269 4.18541 5.40243 3.64527 6.60732 3.57866C7.27479 3.55843 7.93608 3.71175 8.52656 4.02361C9.11703 4.33548 9.61648 4.79523 9.97607 5.35791C10.7461 6.435 10.8744 6.97399 11.0027 6.97399C11.1311 6.97399 11.2576 6.435 12.0202 5.35516C12.3778 4.78987 12.8774 4.3283 13.4692 4.01657C14.061 3.70483 14.7242 3.55383 15.3927 3.57866ZM15.3927 1.74533C14.5603 1.71868 13.7326 1.88015 12.9712 2.21773C12.2099 2.55531 11.5345 3.0603 10.9954 3.69508C10.4567 3.06214 9.78276 2.55833 9.02324 2.22085C8.26372 1.88338 7.43808 1.72087 6.60732 1.74533C4.91595 1.81147 3.31959 2.54465 2.1673 3.78454C1.01501 5.02443 0.400567 6.67015 0.458322 8.36183C0.458322 11.671 2.79582 13.7032 5.05541 15.6677C5.31482 15.8932 5.57699 16.1205 5.83732 16.3524L6.77874 17.1939C7.80544 18.1709 8.88182 19.0943 10.0036 19.9604C10.3004 20.1526 10.6464 20.2548 11 20.2548C11.3536 20.2548 11.6996 20.1526 11.9964 19.9604C13.1539 19.0678 14.2634 18.1147 15.3202 17.105L16.1654 16.3497C16.434 16.1113 16.7062 15.8739 16.9767 15.6402C19.1162 13.7839 21.5417 11.6802 21.5417 8.36183C21.5994 6.67015 20.985 5.02443 19.8327 3.78454C18.6804 2.54465 17.084 1.81147 15.3927 1.74533Z"
  fill="${recipeList[j].isLiked ? "#FF0000" : "#252525"}"
/>
</svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <g clip-path="url(#clip0_2205_140)">
            <path
              d="M18.9347 15.5907C20.0485 13.6639 20.4228 11.3976 19.9877 9.21499C19.5526 7.03241 18.3377 5.08289 16.5701 3.73063C14.8025 2.37837 12.6031 1.71587 10.3827 1.86689C8.16225 2.01791 6.07277 2.97212 4.50454 4.55127C2.93632 6.13041 1.99663 8.22647 1.86103 10.4479C1.72542 12.6693 2.40317 14.8641 3.76766 16.6222C5.13215 18.3804 7.09006 19.5817 9.27561 20.0017C11.4612 20.4217 13.7249 20.0316 15.6438 18.9044L20.1667 20.1667L18.9347 15.5907Z"
              stroke="#252525"
              stroke-width="2"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2205_140">
              <rect width="22" height="22" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
    </div>
  `;

      recipeDiv.appendChild(recipeInnerDiv);
      if (count === 2) {
        i = j;
        break;
      }
      count++;
    }

    i++;
    recipes.appendChild(recipeDiv);
  }
}

function likeButton(event) {
  event.children[1].setAttribute(
    "fill",
    recipeList[event.parentNode.parentNode.parentNode.id]
      ? "#FF0000"
      : "#252525"
  );
  recipeList[event.parentNode.parentNode.parentNode.id] =
    !recipeList[event.parentNode.parentNode.parentNode.id];
}

document.addEventListener("DOMContentLoaded", () => {
  loadRecipes(recipeList);
});

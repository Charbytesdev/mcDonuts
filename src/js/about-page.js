const ABOUT_POEM = `
In the land of sweet delight, so grand,
Where donuts spin and coffee's hand in hand,
There's a place called McDonuts, hear our tale,
In simple words, we'll set our sail.

We're a friendly spot where smiles abound,
With donuts in every flavor, all around.
From chocolate glaze to cinnamon swirl,
We've got a donut for every boy and girl.

But McDonuts is more than just a treat,
It's a cozy place where friends can meet.
With tables and chairs, and Wi-Fi too,
It's the perfect spot to sit and chew.

Our coffee's brewed to perfection's art,
For that morning wake-up or a break in the heart.
With lattes, mochas, and cappuccinos too,
You'll find the right brew, just for you.

Our team is kind, our service is bright,
We're here to make your day just right.
So, when you're in need of a tasty delight,
Come to McDonuts, from morning 'til night.

In simple words, we're here to say,
At McDonuts, it's a brighter day.
With donuts, coffee, and a warm embrace,
We're your happy place, in any case.`;

import "../css/about-page.css";
const aboutPage = (() => {
  const create = () => {
    let pageContainer = document.createElement("div");

    let about = document.createElement("div");

    let aboutHeader = document.createElement("div");
    let aboutText = document.createElement("div");

    pageContainer.classList.add("about-page");
    aboutHeader.classList.add("about-header");
    aboutText.classList.add("about-text");
    about.classList.add("about-container");
    aboutHeader.textContent = "ABOUT US";
    aboutText.textContent = ABOUT_POEM;
    about.append(aboutHeader, aboutText);
    pageContainer.appendChild(about);
    return pageContainer;
  };
  return { create };
})();
export default aboutPage;

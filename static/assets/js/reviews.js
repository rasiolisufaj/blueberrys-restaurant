const test = async () => {
  const response = await fetch("http://localhost:8080/reviews", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data;

  if (response.status === 200) {
    data = await response.json();
    data = data.reviews;
  } else {
    data = [
      {
        name: "Albana B.",
        description:
          "Perfect for brunch! They have something like 6-7 different kinds of mimosas. Not to mention their Blast French Toast is sooo good!! Definitely a must if you are in the area!",
        date: "15/01/2023",
      },
      {
        name: "Marinela M.",
        description:
          "I went here for my birthday brunch and it was fantastic!!! food was soo delicious that ididn't mind the wait!",
        date: "25/09/2022",
      },
      {
        name: "Kleandra D.",
        description:
          "I went here for my birthday brunch and it was fantastic!!! food was soo delicious that ididn't mind the wait!",
        date: "24/11/2012",
      },
      {
        name: "Adrea D.",
        description:
          "I went here for my birthday brunch and it was fantastic!!! food was soo delicious that ididn't mind the wait!",
        date: "24/11/2012",
      },
    ];
  }

  let counter = 0;
  let htmlData = "";
  let theReviewEl = document.getElementById("the-review");

  data.forEach((el) => {
    counter++;

    htmlData += `<div class="reviewCard swiper-slide">
                                      <div class="reviewLogo">
                                          <img src="./assets/img/reviews/reviewLogo.png" alt="">
                                      </div>
                                      <div class="reviewBy"> '${el.name}'</div>
                                      <div class="review-stars-block"><i class="review-star">★</i></div>
                                      <div class="reviewDescription"> ${el.description}
                                      </div>
                                      <div class="reviewDate">${el.updatedAt}</div>
                                  </div>`;
  });
  theReviewEl.innerHTML = htmlData;
};

test();

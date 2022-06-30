import Review from "../types/reviews.type";

class Reviews {
  protected API_URL = "http://localhost:8080/api/reviews/";

  async getAll() {
    const res: Review[] = [{
      id: undefined,
      rank: 5,
      name: "Michaela M.",
      comment: "Perfect for brunch! They have something like 6-7 different\n" +
      "                kinds of mimosas. Not to mention their Blast French Toast is sooo good!!\n" +
      "                Definitely a must if you are in the area!",
      user: undefined,
      date: undefined
    },
      {
        id: undefined,
        rank: 5,
        name: "Lauren M.",
        comment: "I went here for my birthday brunch and it was fantastic!!!\n" +
        "                food was soo delicious that ididn't mind the wait!",
        user: undefined,
        date: undefined
      },
      {
        id: undefined,
        rank: 1,
        name: "Dejah D.",
        comment: " Stopped in at Blueberry Grill my first day back in town and to my expectation, I am never disappointed!\n" +
        "                The mahimahi tacos were to die for and the mimosa are always a hit- This place is a must try!",
        user: undefined,
        date: undefined
      },
      // {
      //   id: undefined,
      //   rank: 4,
      //   name: "Ermal A.",
      //   comment: "Great Service!",
      //   user: undefined,
      //   date: undefined
      // }
    ];
    return res;
  }
}

const reviews = new Reviews()
export {reviews as default}



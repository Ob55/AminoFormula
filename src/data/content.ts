export const reviewStats = {
  count: 3144,
  average: 4.1,
  recommend: 81,
};

export interface Review {
  name: string;
  location: string;
  date: string;
  title: string;
  text: string;
}

export const reviews: Review[] = [
  {
    name: "Angel N.",
    location: "Jackson Heights, NY",
    date: "July 22, 2026",
    title: "Excellent",
    text: "Yes felt a difference right away, I take it everyday, although I might miss a day sometimes. Great product keeps me healthy.",
  },
  {
    name: "Carlos S.",
    location: "Passaic, NJ",
    date: "July 19, 2026",
    title: "I love this product; and I highly recommend this supplement",
    text: "Yes. I have been using this supplement for over two years. And with minimal strength training workout, I have regained muscle mass at age 69. People have noticed it. I appear younger than my age and people do not believe I'm 69 years old.",
  },
  {
    name: "Cheryl K.",
    location: "Port St Lucie, FL",
    date: "July 16, 2026",
    title: "Amazing results",
    text: "I've been using advanced amino formula for a year, and my muscle tone has gotten better and less saggy skin. Honestly, I'll take it forever.",
  },
  {
    name: "Patricia W.",
    location: "Loxahatchee, FL",
    date: "July 10, 2026",
    title: "My muscles feels stronger!",
    text: "I have been taking Advanced Amino for years and felt strong then I took a break to try another brand of supplement. Then I noticed that I was not as strong as I was while using Advanced Amino, so I went right back and now I'm feeling strong again.",
  },
  {
    name: "Ferris K.",
    location: "Charleston, SC",
    date: "July 8, 2026",
    title: "Great for being active!",
    text: "I've taken five of the Advanced Amino Formula pills every day for three years. I'm 70 and work out with weights, swim, bike, and play table tennis. They replace the amino acids I've spent and then the excess is just flushed out. Maintains muscle mass and gives me more energy.",
  },
  {
    name: "Lorraine T.",
    location: "Eau Claire, WI",
    date: "July 8, 2026",
    title: "We All Need This",
    text: "This has many reliable, safe ingredients that are not in daily meals, plus they are very beneficial to our health!",
  },
];

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "What's the difference between Advanced Amino Formula and other Amino Products?",
    a: "Advanced Amino Formula delivers all 8 essential amino acids in the precise ratio your body can actually use — so almost none is wasted. Most other amino products contain only a few amino acids, or an unbalanced blend your body converts into sugar or flushes away instead of turning into muscle.",
  },
  {
    q: "Is Advanced Amino Formula safe to use?",
    a: "Yes. Advanced Amino Formula is made from pure, essential amino acids with no fat, sodium, sugar, yeast, or preservatives. As with any supplement, if you have a medical condition or take medication, we recommend checking with your doctor first.",
  },
  {
    q: "Does Advanced Amino Formula contain any allergens or GMOs?",
    a: "No. It contains no dairy, gluten, soy, corn, wheat, rice, or GMOs, and no animal products. It is free from the most common allergens.",
  },
  {
    q: "Is Advanced Amino Formula vegan?",
    a: "Yes. Advanced Amino Formula is 100% vegan and contains no animal-derived ingredients.",
  },
  {
    q: "Why does Advanced Amino Formula contain only 8 of the 9 essential amino acids, omitting histidine?",
    a: "Advanced Amino Formula is built around the 8 essential amino acids your body most needs to build and repair muscle in the ideal ratio for maximum utilization. This precise balance is what allows the body to use nearly all of it with very little waste.",
  },
  {
    q: "Is Advanced Amino Formula a good post-workout recovery supplement?",
    a: "Absolutely. It supplies the exact building blocks your body needs to recover faster, rebuild stronger muscle, and repair damaged ligaments after exercise — making it an excellent post-workout choice.",
  },
  {
    q: "How can I know for sure that Advanced Amino Formula will work for me?",
    a: "Try it risk-free. Every purchase is protected by our ABN™ 100% Satisfaction Guarantee — if you're not satisfied for any reason, return it within 90 days for a full refund. You only pay return shipping.",
  },
];

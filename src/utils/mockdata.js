const data = [
  {
    title: "Dune",
    description:
      "A science fiction epic about a desert planet and its political intrigue.",
    category: "sciFi",
    image: "https://example.com/images/dune.jpg",
  },
  {
    title: "The Catcher in the Rye",
    description: "A novel about teenage angst and alienation.",
    category: "fiction",
    image: "https://example.com/images/catcher-in-the-rye.jpg",
  },
  {
    title: "Sapiens",
    description:
      "A brief history of humankind, exploring the evolution of Homo sapiens.",
    category: "nonFiction",
    image: "https://example.com/images/sapiens.jpg",
  },
  {
    title: "It",
    description:
      "A horror novel about a group of friends confronting a malevolent entity.",
    category: "horror",
    image: "https://example.com/images/it.jpg",
  },
  {
    title: "The Hobbit",
    description: "A fantasy adventure story about a hobbit's quest.",
    category: "fiction",
    image: "https://example.com/images/the-hobbit.jpg",
  },
  {
    title: "1984",
    description: "A dystopian novel about totalitarianism and surveillance.",
    category: "sciFi",
    image: "https://example.com/images/1984.jpg",
  },
  {
    title: "Becoming",
    description:
      "A memoir by Michelle Obama, reflecting on her life and experiences.",
    category: "nonFiction",
    image: "https://example.com/images/becoming.jpg",
  },
  {
    title: "The Shining",
    description:
      "A horror novel about a haunted hotel and the madness it induces.",
    category: "horror",
    image: "https://example.com/images/the-shining.jpg",
  },
  {
    title: "Neuromancer",
    description:
      "A cyberpunk classic involving hackers and artificial intelligence.",
    category: "sciFi",
    image: "https://example.com/images/neuromancer.jpg",
  },
  {
    title: "Pride and Prejudice",
    description: "A classic novel about love, class, and social expectations.",
    category: "fiction",
    image: "https://example.com/images/pride-and-prejudice.jpg",
  },
  {
    title: "Educated",
    description:
      "A memoir about a woman's quest for knowledge despite a troubled upbringing.",
    category: "nonFiction",
    image: "https://example.com/images/educated.jpg",
  },
  {
    title: "Dracula",
    description: "A classic horror novel about the vampire count Dracula.",
    category: "horror",
    image: "https://example.com/images/dracula.jpg",
  },
  {
    title: "Foundation",
    description:
      "A science fiction saga about the fall and rise of civilizations.",
    category: "sciFi",
    image: "https://example.com/images/foundation.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    description: "A novel about racial injustice and moral growth.",
    category: "fiction",
    image: "https://example.com/images/to-kill-a-mockingbird.jpg",
  },
  {
    title: "The Immortal Life of Henrietta Lacks",
    description:
      "The story of Henrietta Lacks and the immortal cells taken from her.",
    category: "nonFiction",
    image: "https://example.com/images/the-immortal-life.jpg",
  },
  {
    title: "The Exorcist",
    description:
      "A horror novel about a young girl possessed by a demonic entity.",
    category: "horror",
    image: "https://example.com/images/the-exorcist.jpg",
  },
  {
    title: "The Left Hand of Darkness",
    description:
      "A science fiction novel exploring gender and politics on a distant planet.",
    category: "sciFi",
    image: "https://example.com/images/left-hand-of-darkness.jpg",
  },
  {
    title: "The Great Gatsby",
    description:
      "A classic novel about wealth and the American Dream in the 1920s.",
    category: "fiction",
    image: "https://example.com/images/great-gatsby.jpg",
  },
  {
    title: "Thinking, Fast and Slow",
    description: "A book on the dual systems of thought and decision-making.",
    category: "nonFiction",
    image: "https://example.com/images/thinking-fast-and-slow.jpg",
  },
  {
    title: "American Psycho",
    description:
      "A psychological thriller and horror novel about a wealthy New York City businessman.",
    category: "horror",
    image: "https://example.com/images/american-psycho.jpg",
  },
  {
    title: "Snow Crash",
    description:
      "A cyberpunk novel set in a future America with a dangerous virtual reality.",
    category: "sciFi",
    image: "https://example.com/images/snow-crash.jpg",
  },
  {
    title: "One Hundred Years of Solitude",
    description:
      "A novel about the Buendía family and the magical town of Macondo.",
    category: "fiction",
    image: "https://example.com/images/one-hundred-years-of-solitude.jpg",
  },
  {
    title: "The Wright Brothers",
    description:
      "A biography of the Wright brothers and their invention of the airplane.",
    category: "nonFiction",
    image: "https://example.com/images/the-wright-brothers.jpg",
  },
  {
    title: "The Haunting of Hill House",
    description:
      "A horror novel about a group of people staying in a supposedly haunted house.",
    category: "horror",
    image: "https://example.com/images/the-haunting-of-hill-house.jpg",
  },
  {
    title: "The Martian",
    description: "A science fiction novel about an astronaut stranded on Mars.",
    category: "sciFi",
    image: "https://example.com/images/the-martian.jpg",
  },
  {
    title: "Little Women",
    description:
      "A classic novel about the lives and struggles of the March sisters.",
    category: "fiction",
    image: "https://example.com/images/little-women.jpg",
  },
  {
    title: "The Gene: An Intimate History",
    description: "A book exploring the history and science of genetics.",
    category: "nonFiction",
    image: "https://example.com/images/the-gene.jpg",
  },
  {
    title: "The Silence of the Lambs",
    description:
      "A psychological horror novel about an FBI agent and a cannibalistic serial killer.",
    category: "horror",
    image: "https://example.com/images/silence-of-the-lambs.jpg",
  },
  {
    title: "Hyperion",
    description:
      "A science fiction novel featuring a group of pilgrims on a journey in a distant future.",
    category: "sciFi",
    image: "https://example.com/images/hyperion.jpg",
  },
  {
    title: "Brave New World",
    description:
      "A dystopian novel about a future society driven by technology and consumerism.",
    category: "sciFi",
    image: "https://example.com/images/brave-new-world.jpg",
  },
  {
    title: "Gone with the Wind",
    description:
      "A historical novel set during the American Civil War and Reconstruction era.",
    category: "fiction",
    image: "https://example.com/images/gone-with-the-wind.jpg",
  },
  {
    title: "The Power of Habit",
    description:
      "A book exploring the science of habits and how they can be changed.",
    category: "nonFiction",
    image: "https://example.com/images/the-power-of-habit.jpg",
  },
  {
    title: "Bird Box",
    description:
      "A horror novel about a mother and her children trying to survive in a world where seeing an unknown entity drives people to madness.",
    category: "horror",
    image: "https://example.com/images/bird-box.jpg",
  },
];

export default data;

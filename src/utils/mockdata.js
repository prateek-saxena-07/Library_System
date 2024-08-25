const data = [
  {
    title: "Dune",
    description:
      "A science fiction epic about a desert planet and its political intrigue.",
    category: "sciFi",
    image: "https://picsum.photos/200/300?random=1",
    rating: 5,
  },
  {
    title: "The Catcher in the Rye",
    description: "A novel about teenage angst and alienation.",
    category: "fiction",
    image: "https://picsum.photos/200/300?random=2",
    rating: 4,
  },
  {
    title: "Sapiens",
    description:
      "A brief history of humankind, exploring the evolution of Homo sapiens.",
    category: "nonFiction",
    image: "https://picsum.photos/200/300?random=3",
    rating: 5,
  },
  {
    title: "It",
    description:
      "A horror novel about a group of friends confronting a malevolent entity.",
    category: "horror",
    image: "https://picsum.photos/200/300?random=4",
    rating: 4,
  },
  {
    title: "The Hobbit",
    description: "A fantasy adventure story about a hobbit's quest.",
    category: "fiction",
    image: "https://picsum.photos/200/300?random=5",
    rating: 5,
  },
  {
    title: "1984",
    description: "A dystopian novel about totalitarianism and surveillance.",
    category: "sciFi",
    image: "https://picsum.photos/200/300?random=6",
    rating: 5,
  },
  {
    title: "Becoming",
    description:
      "A memoir by Michelle Obama, reflecting on her life and experiences.",
    category: "nonFiction",
    image: "https://picsum.photos/200/300?random=7",
    rating: 4,
  },
  {
    title: "The Shining",
    description:
      "A horror novel about a haunted hotel and the madness it induces.",
    category: "horror",
    image: "https://picsum.photos/200/300?random=8",
    rating: 5,
  },
  {
    title: "Neuromancer",
    description:
      "A cyberpunk classic involving hackers and artificial intelligence.",
    category: "sciFi",
    image: "https://picsum.photos/200/300?random=9",
    rating: 4,
  },
  {
    title: "Pride and Prejudice",
    description: "A classic novel about love, class, and social expectations.",
    category: "fiction",
    image: "https://picsum.photos/200/300?random=10",
    rating: 5,
  },
  {
    title: "Educated",
    description:
      "A memoir about a woman's quest for knowledge despite a troubled upbringing.",
    category: "nonFiction",
    image: "https://picsum.photos/200/300?random=11",
    rating: 4,
  },
  {
    title: "Dracula",
    description: "A classic horror novel about the vampire count Dracula.",
    category: "horror",
    image: "https://picsum.photos/200/300?random=12",
    rating: 5,
  },
  {
    title: "Foundation",
    description:
      "A science fiction saga about the fall and rise of civilizations.",
    category: "sciFi",
    image: "https://picsum.photos/200/300?random=13",
    rating: 4,
  },
  {
    title: "To Kill a Mockingbird",
    description: "A novel about racial injustice and moral growth.",
    category: "fiction",
    image: "https://picsum.photos/200/300?random=14",
    rating: 5,
  },
  {
    title: "The Immortal Life of Henrietta Lacks",
    description:
      "The story of Henrietta Lacks and the immortal cells taken from her.",
    category: "nonFiction",
    image: "https://picsum.photos/200/300?random=15",
    rating: 4,
  },
  {
    title: "The Exorcist",
    description:
      "A horror novel about a young girl possessed by a demonic entity.",
    category: "horror",
    image: "https://picsum.photos/200/300?random=16",
    rating: 5,
  },
  {
    title: "The Left Hand of Darkness",
    description:
      "A science fiction novel exploring gender and politics on a distant planet.",
    category: "sciFi",
    image: "https://picsum.photos/200/300?random=17",
    rating: 4,
  },
  {
    title: "The Great Gatsby",
    description:
      "A classic novel about wealth and the American Dream in the 1920s.",
    category: "fiction",
    image: "https://picsum.photos/200/300?random=18",
    rating: 5,
  },
  {
    title: "Thinking, Fast and Slow",
    description: "A book on the dual systems of thought and decision-making.",
    category: "nonFiction",
    image: "https://picsum.photos/200/300?random=19",
    rating: 5,
  },
  {
    title: "American Psycho",
    description:
      "A psychological thriller and horror novel about a wealthy New York City businessman.",
    category: "horror",
    image: "https://picsum.photos/200/300?random=20",
    rating: 4,
  },
  {
    title: "Snow Crash",
    description:
      "A cyberpunk novel set in a future America with a dangerous virtual reality.",
    category: "sciFi",
    image: "https://picsum.photos/200/300?random=21",
    rating: 5,
  },
  {
    title: "One Hundred Years of Solitude",
    description:
      "A novel about the Buendía family and the magical town of Macondo.",
    category: "fiction",
    image: "https://picsum.photos/200/300?random=22",
    rating: 4,
  },
  {
    title: "The Wright Brothers",
    description:
      "A biography of the Wright brothers and their invention of the airplane.",
    category: "nonFiction",
    image: "https://picsum.photos/200/300?random=23",
    rating: 4,
  },
  {
    title: "The Haunting of Hill House",
    description:
      "A horror novel about a group of people staying in a supposedly haunted house.",
    category: "horror",
    image: "https://picsum.photos/200/300?random=24",
    rating: 5,
  },
  {
    title: "The Martian",
    description: "A science fiction novel about an astronaut stranded on Mars.",
    category: "sciFi",
    image: "https://picsum.photos/200/300?random=25",
    rating: 5,
  },
  {
    title: "Little Women",
    description:
      "A classic novel about the lives and struggles of the March sisters.",
    category: "fiction",
    image: "https://picsum.photos/200/300?random=26",
    rating: 5,
  },
  {
    title: "The Gene: An Intimate History",
    description: "A book exploring the history and science of genetics.",
    category: "nonFiction",
    image: "https://picsum.photos/200/300?random=27",
    rating: 4,
  },
  {
    title: "The Silence of the Lambs",
    description:
      "A psychological horror novel about an FBI agent and a cannibalistic serial killer.",
    category: "horror",
    image: "https://picsum.photos/200/300?random=28",
    rating: 5,
  },
  {
    title: "Hyperion",
    description:
      "A science fiction novel featuring a group of pilgrims on a journey in a distant future.",
    category: "sciFi",
    image: "https://picsum.photos/200/300?random=29",
    rating: 4,
  },
  {
    title: "Brave New World",
    description:
      "A dystopian novel about a future society driven by technology and consumerism.",
    category: "sciFi",
    image: "https://picsum.photos/200/300?random=30",
    rating: 5,
  },
  {
    title: "Gone with the Wind",
    description:
      "A historical novel set during the American Civil War and Reconstruction era.",
    category: "fiction",
    image: "https://picsum.photos/200/300?random=31",
    rating: 4,
  },
  {
    title: "The Power of Habit",
    description:
      "A book exploring the science of habits and how they can be changed.",
    category: "nonFiction",
    image: "https://picsum.photos/200/300?random=32",
    rating: 4,
  },
  {
    title: "Bird Box",
    description:
      "A horror novel about a mother and her children trying to survive in a world where seeing an unknown entity drives people to madness.",
    category: "horror",
    image: "https://picsum.photos/200/300?random=33",
    rating: 5,
  },
];

export default data;



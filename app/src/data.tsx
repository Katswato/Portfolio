import smartGlassesVideo from "./../videos/smartGlasses.mp4"

export interface SectionBoxData {
  name: string;
  className: string;
  tags: string[];
}

export interface SectionBoxDataCollection {
  collection: SectionBoxData[];
}

export interface YoutubeData {
  link: string;
}

export interface VideoData {
  video: string;
  type: string;
}

export interface ProjectSectionData {
  name: string;
  date: string;
  description: string;
  youtubeData?: YoutubeData;
  videoData?: VideoData;
  tags: string[];
}

export interface ProjectSectionDataCollection {
  collection: ProjectSectionData[];
}

export const allTags = [
    "Game",
    "Embedded",
    "Web",
]

export const PersonalSectionBoxDataCollection : SectionBoxDataCollection = {
  collection: [
    {  
	  name: "All", 
	  className: "default-section-box", 
	  tags: ["Game", "Embedded", "Web"]
	},
    {
	  name: "Game Projects", 
	  className: "default-section-box", 
	  tags: ["Game"]
	},
    {
	  name: "Embedded System Projects", 
	  className: "default-section-box", 
	  tags: ["Embedded"]
	},
    {
	  name: "Web Projects", 
	  className: "default-section-box", 
	  tags: ["Web"]
	}
  ]
  
};

export const PersonalProjectSectionDataCollection : ProjectSectionDataCollection = {
  collection: [
    {
	  name: "WarSim", 
	  description: 
	    "A RTS game that allows you to control hand-programmed behavioural AI units to defeat your enemies. \
		 In this game, I wanted to simulate military technology. As I was prototyping, I found myself dissatisfied \
		 with Unity's navigation mesh when creating flying units so I created my own behavioural system for aircraft. \
		 This game was built using C# programming and utilizes parallelism to increase performance. \
		",
	  date: "2025 October - Present",
      youtubeData: 
      { 
        link: "https://www.youtube.com/embed/iC2aBLneca8",
      },
	  tags: ["Game"]
	},
	{
	  name: "Total Knee Replacement", 
	  description: 
	    "A singleplayer 3D game that tests the user's skill in performing knee surgery. I wanted to create a game that was \
		 in the field of healthcare and followed a Halloween theme since it was that time of year. The game was built in gamejam-like \
		 like conditions. This game was built in Unity with the C# programming language. \
		",
	  date: "2025 November",
	  youtubeData: 
      {
        link: "https://www.youtube.com/embed/plvDetf4lO4",
      },
	  tags: ["Game"]
	},
    {
	  name: "Smart Glasses", 
	  description: 
	    " \
         A device that uses multiple trained AI models to interpret live audio and translate it into text, \
		 translate American Sign Language, and detect color to help Americans with disabilities. This project was made with \
		 in collaboration with 3 other students in our embedded systems class. This device was built using a raspberry pi, \
		 an led screen, camera, microphone, and the implementation of several pytorch trained AI models. \
		",
	  date: "2025 January - 2025 March",
	  videoData: {
        video: smartGlassesVideo,
        type: "video/mp4",
      },
	  tags: ["Embedded"]
	},
	{
	  name: "Rhythm Aimer",
	  description: 
	    "Rhythm Aimer is a 1-2 player rhythm game built to challenge the timing and aim of players. When coming up with a project in my \
		embedded systems class, I wanted to make a game similar to osu! because I'm a big fan of the game. osu! is a rhythm \
		game where you aim for the circles and click them to the rhythm. In Rhythm Aimer, you aim for circles vertically and \
		use a button to click. This game was built using arduino, led matrices, various electrical components, and C AVR libraries. \
		",
	  date: "2024 April - 2024 May",
	  youtubeData: {
        link: "https://www.youtube.com/embed/edhRERpTr1E",
      },
	  tags: ["Game", "Embedded"]
	},
    {
	  name: "Chopping Game", 
	  description: 
	    "Chopping Game is a 2D singleplayer game where the goal is to cut down a bean stalk without getting hit by obstacles. \
		 I wanted to make a game that was similar to a minigame I saw one of my friends playing. I built a similar game \
		 with some creative twists. This game was built in Unity with the C# programming language. \
		",
	  date: "2024 September",
	  youtubeData: {
          link: "https://www.youtube.com/embed/-FYqe8N6vAg",
      },
	  tags: ["Game"]
	},
    {
	  name: "Goblino Mode", 
	  description: 
	    "Goblino Mode is a 2D singleplay game where the goal is to defeat a boss without dying. Goblino Mode is my first game made \
		 in Unity. I planned on making a metroidvania game with Terraria-like mechanics but I ended \
		 up making a single incomplete boss fight. This game was built in Unity with the C# programming language. \
		",
	  date: "2024 June - 2024 August",
	  youtubeData: {
          link: "https://www.youtube.com/embed/I3CVhHuohG8",
      },
	  tags: ["Game"]
	}
  ]
};

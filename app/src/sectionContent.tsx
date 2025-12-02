import { ProjectSection } from "./projectSection";
import { SectionBox } from "./sectionBox";
import React from "react";
import { 
  useState,
  useEffect
} from "react";

import smartGlassesVideo from "./../videos/smartGlasses.mp4"
import totalKneeReplacementVideo from "./../videos/totalKneeReplacement.mp4"

interface SectionBoxData {
  name: string;
  className: string;
  tags: string[];
}

interface ProjectSectionData {
  name: string;
  description: string;
  youtubeLink?: string;
  tags: string[];
}

interface SectionBoxDataCollection {
  collection: SectionBoxData[];
}

interface ProjectSectionDataCollection {
  collection: ProjectSectionData[];
}


const PersonalSectionBoxDataCollection : SectionBoxDataCollection = {
  collection: [
    {  
	  name: "All", 
	  className: "default-section-box", 
	  tag: "All"
	},
    {
	  name: "Game Projects", 
	  className: "default-section-box", 
	  tag: "Game"
	},
    {
	  name: "Embedded System Projects", 
	  className: "default-section-box", 
	  tag: "Embedded"
	},
    {
	  name: "Web Projects", 
	  className: "default-section-box", 
	  tag: "Web"
	}
  ]
  
};

const generateSectionBoxDataDivs = (collection: SectionBoxData[], tags, setTags) => {
  let length = collection.length;
  let resultDivs = [];
  for (let i = 0; i < length; ++i) {
    let data = collection[i];
	let isActivated = false;
	if (tags?.includes(data.tag)) {
	  isActivated = true;
	}
    resultDivs.push({
	  id: i, 
	  div: <SectionBox
	    sectionName={data.name}
		isActive={isActivated}
		tag={data.tag}
		tags={tags}
		setTags={setTags}
	  />
	});
  }
  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      { 
	    resultDivs.map(item => (
	      <div key={item.id}>
	        {item.div}
	      </div>
	    ))
	  }
	</div>
  )
}

const hasTags = (tags: string[], heldTags: string[]) => {
  let length = heldTags.length;
  for (let i = 0; i < length; ++i) {
    if (tags.includes(heldTags[i])) {
      return true;
    }
  }
  return false;
}

const getWithTags = (unfilteredCollection: ProjectSectionData[], heldTags: string[]) => {
  let filteredCollection = unfilteredCollection.filter(data => hasTags(data.tags, heldTags));

  return filteredCollection;
}

const generateProjectSectionDataDivs = (unfilteredCollection: ProjectSectionDataCollection, tags: string[], setTags) => {
  let filteredCollection: ProjectSectionData[] = getWithTags(unfilteredCollection, tags);
  let filteredCollectionLength: int = filteredCollection.length;

  let resultDivs = [];
  for (let i = 0; i < filteredCollectionLength; ++i)
  {
    let data = filteredCollection[i];
    resultDivs.push(
	  {
	    id: i,
        div: <ProjectSection
  	      name={data.name}
  	      description={data.description}
		  date={data.date}
  	      youtubeLink={data.youtubeLink}
		  video={data.video}
		  videoType={data.videoType}
  	    />
	  }
    );
  }

  return (
    <div>
    { 
	  resultDivs.map(item => (
        <div key={item.id}>
          {item.div}
  	    </div>
	  ))
	}
	</div>
  );
}

const PersonalProjectSectionDataCollection : ProjectSectionDataCollection = {
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
	  youtubeLink: "https://www.youtube.com/embed/iC2aBLneca8",
	  tags: ["All", "Game"]
	},
	{
	  name: "Total Knee Replacement", 
	  description: 
	    "A singleplayer 3D game that tests the user's skill in performing knee surgery. I wanted to create a game that was \
		 in the field of healthcare and followed a Halloween theme since it was that time of year. The game was built in gamejam-like \
		 like conditions. This game was built in Unity with the C# programming language. \
		",
	  date: "2025 November",
	  youtubeLink: "https://www.youtube.com/embed/plvDetf4lO4",
	  tags: ["All", "Game"]
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
	  video: smartGlassesVideo,
	  videoType: "video/mp4",
	  tags: ["All", "Embedded"]
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
	  youtubeLink: "https://www.youtube.com/embed/edhRERpTr1E",
	  tags: ["All", "Game", "Embedded"]
	},
    {
	  name: "Chopping Game", 
	  description: 
	    "Chopping Game is a 2D singleplayer game where the goal is to cut down a bean stalk without getting hit by obstacles. \
		 I wanted to make a game that was similar to a minigame I saw one of my friends playing. I built a similar game \
		 with some creative twists. This game was built in Unity with the C# programming language. \
		",
	  date: "2025 November",
	  youtubeLink: "https://www.youtube.com/embed/-FYqe8N6vAg",
	  tags: ["All", "Game"]
	},
    {
	  name: "Goblino Mode", 
	  description: 
	    "Goblino Mode is a 2D singleplay game where the goal is to defeat a boss without dying. Goblino Mode is my first game made \
		 in Unity. I planned on making a metroidvania game with Terraria-like mechanics but I ended \
		 up making a single incomplete boss fight. This game was built in Unity with the C# programming language. \
		",
	  date: "2025 November",
	  youtubeLink: "https://www.youtube.com/embed/I3CVhHuohG8",
	  tags: ["All", "Game"]
	}
  ]
};

export function SectionContent({})
{
  console.log("SectionContent rendered.");
  const [tags, setTags] = useState(["All"]);

  console.log("Before Tags: ", tags);
  let sectionDivs = generateSectionBoxDataDivs(PersonalSectionBoxDataCollection.collection, tags, setTags);
  let projectDivs = generateProjectSectionDataDivs(PersonalProjectSectionDataCollection.collection, tags, setTags);
  console.log("After Tags: ", tags);

  useEffect(() => {
    console.log("PostUseEffect Tags: ", tags);
    projectDivs = generateProjectSectionDataDivs(PersonalProjectSectionDataCollection.collection, tags, setTags);
  }, [tags]);

  return(
    <div>
	  <div style={{display: "flex", "justify-content": "center"}}>
	    {sectionDivs}
	  </div>
	  {projectDivs}
	</div>
  )
}

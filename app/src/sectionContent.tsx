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
	    "A RTS styled game that allows you to control hand-programmed behavioural AI units that reference \
         real life military vehicles.\
		",
	  date: "2025 October - Present",
	  youtubeLink: "https://www.youtube.com/embed/edhRERpTr1E",
	  tags: ["All", "Game"]
	},
	{
	  name: "Total Knee Replacement", 
	  description: 
	    "A game made in game-jam like constraints (1 day) that simulates the surgery of a knee. \
		",
	  date: "2025 November",
	  video: totalKneeReplacementVideo,
	  videoType: "video/mp4",
	  tags: ["All", "Game"]
	},
    {
	  name: "Smart Glasses", 
	  description: 
	    " \
         real life military vehicles. \
		",
	  date: "2025 October - Present",
	  video: smartGlassesVideo,
	  videoType: "video/mp4",
	  tags: ["All", "Embedded"]
	},
	{
	  name: "Rhythm Aimer",
	  description: 
	    "A rhythm game built using an arduino, LED matrices, various electrical components, and AVR libraries. \
		",
	  date: "2024 April - 2024 May",
	  youtubeLink: "https://www.youtube.com/embed/edhRERpTr1E",
	  tags: ["All", "Game", "Embedded"]
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

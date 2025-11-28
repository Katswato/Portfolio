import { ProjectSection } from "./projectSection";
import { SectionBox } from "./sectionBox";
import React from "react";
import { useState } from "react";

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
	  tags: ["All"]
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

const generateSectionBoxDataDivs = (collection: SectionBoxData[]) => {
  let length = collection.length;
  let resultDivs = [];
  for (let i = 0; i < length; ++i) {
    let data = collection[i];
    resultDivs.push({
	  id: i, 
	  div: <SectionBox
	    sectionName={data.name}
	    className={data.className}
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
  let unfilteredCollectionLength: int = unfilteredCollection.length;
  let heldTagsLength: int = heldTags.length;

  let filteredCollection: ProjectSectionData[] = [];
  for (let i = 0; i < unfilteredCollectionLength; ++i) {
    let indexTags = unfilteredCollection[i].tags;

    if (hasTags(indexTags, heldTags)) {
      filteredCollection.push(unfilteredCollection[i]);
    }
  }
  return filteredCollection;
}

const generateProjectSectionDataDivs = (unfilteredCollection: ProjectSectionDataCollection, heldTags: string[]) => {
  let filteredCollection: ProjectSectionData[] = getWithTags(unfilteredCollection, heldTags);
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
	  description: "A RTS styled game that allows you to control hand-programmed behavioural AI units that reference...",
	  date: "2025 October - Present",
	  youtubeLink: "https://www.youtube.com/embed/edhRERpTr1E",
	  tags: ["All", "Game"]
	},
	{
	  name: "Rhythm Aimer",
	  description: "A rhythm game built using an arduino, LED matrices, various electrical components, and AVR libraries.",
	  date: "2024 April - 2024 May",
	  youtubeLink: "https://www.youtube.com/embed/edhRERpTr1E",
	  tags: ["All", "Game", "Embedded"]
	}
  ]
};

export function SectionContent({})
{
  const [tags, setTags] = useState([]);

  const sectionDivs = generateSectionBoxDataDivs(PersonalSectionBoxDataCollection.collection);
  const projectDivs = generateProjectSectionDataDivs(PersonalProjectSectionDataCollection.collection, ["All"]);
  return(
    <div>
	  <div style={{display: "flex", "justify-content": "center"}}>
	    {sectionDivs}
	  </div>
	  {projectDivs}
	</div>
  )
}

      //<div style={{display: "flex", "justify-content": "center"}}>
      //  <SectionBox sectionName="All" className="default-section-box" />
	  //  <SectionBox sectionName="Game Projects" className="default-section-box" />
	  //  <SectionBox sectionName="Embedded System Projects" className="default-section-box" />
      //  <SectionBox sectionName="Web Projects" className="default-section-box" />
	  //</div>

	  //<div>
	  //  <ProjectSection 
	  //    name="WarSim"
	  //    description="A RTS styled game that allows you to control hand-programmed behavioural AI units that reference..."
	  //    youtubeLink="https://www.youtube.com/embed/edhRERpTr1E" 
	  //  />
	  //</div>


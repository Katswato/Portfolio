import { ProjectSection } from "./projectSection";
import { SectionBox } from "./sectionBox";
import { 
  useState,
  useEffect,
} from "react";
import {
  isArrayContentsEqual,
  isArraySubset,
  isArrayPartial,
} from "./util";
import { 
  type SectionBoxData,
  type ProjectSectionData,
  allTags,
  PersonalSectionBoxDataCollection,
  PersonalProjectSectionDataCollection
} from "./data";
import "./sectionContent.css"

export function SectionContent({}) {
  console.log("SectionContent rendered.");
  const [tags, setTags] = useState(allTags);
  const [allActive, setAllActive] = useState(true);
  const [sections, setSections] = useState(PersonalSectionBoxDataCollection.collection);
  const [projects, setProjects] = useState(PersonalProjectSectionDataCollection.collection);

  useEffect(() => {
    setAllActive(isArrayContentsEqual(tags, allTags));
    //console.log("[SectionContent] tags: ", tags);
    //console.log("[SectionContent] allActive: ", isArrayContentsEqual(tags, allTags))
  }, [tags]);

  return(
    <div id="section-page">
	  <div id="section-header">
	    {sections.length == 0 
          ? <div></div>
          : sections.map((data: SectionBoxData) => (
            <SectionBox
              key={data.name}
              sectionName={data.name}
              allActive={allActive}
              isActive={(data.name == "All" || !allActive) && isArraySubset(tags, data.tags)}
              sectionTags={data.tags}
              selectedTags={tags}
              setTags={setTags}
            />    
          ))
        }
	  </div>
      <div id="section-projects">
	    {projects.length == 0 
          ? <div></div>
          : projects.map((data: ProjectSectionData) => (
            <ProjectSection
              key={data.name}
              name={data.name}
              description={data.description}
              date={data.date}
              youtubeData={data.youtubeData}
              videoData={data.videoData}
              tags={data.tags}
              isActive={isArrayPartial(tags, data.tags)}
            />
          ))
        }
      </div>
	</div>
  )
}

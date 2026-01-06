import {
    isArrayContentsEqual,
    isArraySubset,
} from "./util";
import { 
    allTags,
} from "./data";
import { 
  useEffect,
} from "react";

import "./sectionBox.css";

interface SectionBoxProps {
  sectionName: string;
  allActive: boolean;
  isActive: boolean;
  sectionTags: string[];
  selectedTags: string[];
  setTags: (arg0: string[]) => void;
}

export function SectionBox({sectionName, allActive, isActive, sectionTags, selectedTags, setTags} : SectionBoxProps) {
  console.log("SectionBox rendered.");
  const determinedClassName = isActive ? "default-section-box-active" : "default-section-box";

  useEffect(() => {
    //console.log("[SectionBox] sectionName: ", sectionName)
    //console.log("[SectionBox] sectionTags: ", sectionTags)
    //console.log("[SectionBox] selectedTags: ", selectedTags)
    //console.log("[SectionBox] isArrayContentsEqual(allTags, sectionTags): ", isArrayContentsEqual(allTags, sectionTags))
    //console.log("[SectionBox] isArraySubset(selectedTags, sectionTags): ", isArraySubset(allTags, sectionTags))
  });

  const updateTags = () => {
    if (allActive) {
        if (isArrayContentsEqual(allTags, sectionTags)) { setTags([]); }
        else { setTags(sectionTags); }
        return;
    }

	if (isArraySubset(selectedTags, sectionTags)) {
      let tags = [];
      for (let i = 0; i < selectedTags.length; ++i) {
        const value = selectedTags[i];
        if (!sectionTags.includes(value)) {
            tags.push(value);
        }
        setTags(tags);
      }
	} else {
      let tags = [...new Set([...selectedTags, ...sectionTags])];
	  setTags(tags);
	}
  }

  return (
    <div>
	    <button onClick={()=>{updateTags()}}>
	      <div className={determinedClassName}>
	          {sectionName}
	      </div>
	    </button>
	</div>
  );
}


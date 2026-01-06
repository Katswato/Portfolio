import "./sectionBox.css";
import {
    isArrayContentsEqual,
    isArraySubset,
} from "./util";
import { 
  useState,
  useEffect
} from "react";


interface SectionBoxProps {
  sectionName: string;
  isActive: boolean;
  //className: string;
  sectionTags: string[];
  selectedTags: string[];
  setTags: (arg0: string[]) => void;
}

export function SectionBox({sectionName, isActive, sectionTags, selectedTags, setTags} : SectionBoxProps)
{
  console.log("SectionBox rendered.");
  const determinedClassName = isActive ? "default-section-box-active" : "default-section-box";

  const updateTags = () => {
	//if (isArrayContentsEqual(sectionTags, selectedTags) && isActive == false) {
	//  return;
	//}

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

  useEffect(() => {
  })
  
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


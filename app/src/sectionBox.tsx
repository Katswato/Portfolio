import "./sectionBox.css";

import React from "react";
import { 
  useState,
  useEffect
} from "react";


interface SectionBoxProps {
  sectionName: string;
  className: string;
  tag: string;
  tags: string[];
  setTags: () => void;
}

export function SectionBox({sectionName, isActive, tag, tags, setTags} : SectionBoxProps)
{
  console.log("SectionBox rendered.");
  const determinedClassName = isActive ? "default-section-box-active" : "default-section-box";

  const updateTags = () => {
	if (tag === "All" && isActive == false) {
	  setTags(prevTags => ["All"]);
	  return;
	}

    setTags(prevTags => prevTags.filter(heldTag => heldTag !== "All"));
	if (tags?.includes(tag)) {
	  setTags(prevTags => prevTags.filter(heldTag => heldTag !== tag));
	}
	else {
	  setTags(prevTags => [...prevTags, tag]);
	}
  }

  useEffect(() => {
    console.log("SectionBox UseEffect.");
    console.log("tags.length:", tags.length);
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


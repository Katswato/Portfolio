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
  //const [isActive, setIsActive] = useState(tags?.includes(tag));
  const determinedClassName = isActive ? "default-section-box-active" : "default-section-box";

  const updateTags = () => {
    //setIsActive(value => !value);
    //if (isActive) {
    //  setTags(prevTags => ([...prevTags, tag]));
    //}
    //else {
    //  setTags(prevTags => prevTags.filter(heldTag => heldTag !== tag));
    //}
	
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

	//if (tags?.length > 1) {
	//  if (tag === "All") {
	//  }
	//}
    //if (tag === "All" && tags.length > 1) {
	//  if (!tags?.includes("All")) {
	//	setIsActive(value => false);
	//  }
	//  return;
	//}
    
	//setIsActive(!tags?.includes(tag));

    //if (tags.length === 1 && tags?.includes("All") && tag !== "All") {
    //  setIsActive(value => false);
	//  return;
	//}

    //if (tags.length > 1) {
    //  setTags(prevTags => prevTags.filter(heldTag => heldTag !== "All"));
	//  if (tag === "All") {
	//    setIsActive(value => false);
	//  }
	//  return;
	//}
	
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


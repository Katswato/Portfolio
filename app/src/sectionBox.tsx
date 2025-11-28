import "./sectionBox.css";

import React from "react";
import { useState } from "react";

export function SectionBox({sectionName, className})
{
  const [isActive, setIsActive] = useState(false);
  const determinedClassName = isActive ? "default-section-box-active" : "default-section-box";
  return (
    <div>
	  <button onClick={()=>{setIsActive(!isActive)}}>
	    <div className={determinedClassName}>
	      {sectionName}
	    </div>
	  </button>
	</div>
  );
}


import "./sectionBox.css";

export function SectionBox({sectionName, className})
{
  return (
    <div>
	  <button onClick={()=>{console.log("SectionBoxLog");}}>
	    <div className={className}>
	      {sectionName}
	    </div>
	  </button>
	</div>
  );
}


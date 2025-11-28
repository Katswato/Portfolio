import "./projectSection.css";


export function ProjectSection({name, description, date, youtubeLink, githubLink, downloadLink})
{
  return(
    <div styles={{ "display":"flex", "justify-content":"center", "align-items":"center"}}>
	  <div className="project-section">
	    <div className="project-box-1">
	      <ProjectName name={name}/>
		</div>
		<div className="project-box-2">
		  <ProjectData date={date}/>
		</div>
        <div className="project-box-3">
	      <ProjectDescription description={description}/>
		  <ProjectGitHubLink githubLink={githubLink}/>
	      <ProjectDownloadLink downloadLink={downloadLink}/>
		</div>
	    <div className="project-box-4">
	      <ProjectYouTubeLink youtubeLink={youtubeLink}/>
		</div>
	  </div>
	</div>
  );
}

export function ProjectName({name})
{
  return(
    <div className="project-name">
      {name}
	</div>
  );
}

export function ProjectData({date})
{
  return(
    <div className="project-date">
      {date}
	</div>
  );
}

export function ProjectDescription({description})
{
  return(
    <div>
      {description}
	</div>
  );
}

export function ProjectYouTubeLink({youtubeLink})
{
  return(
    <div>
	  <iframe
	    width="560"
		height="315"
		src={youtubeLink} 
		frameBorder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen
		title="WarSim Demo"
	  />
	</div>
  );
}

export function ProjectGitHubLink({githubLink})
{
  return(
    <div>
      {githubLink}
	</div>
  );
}

export function ProjectDownloadLink({downloadLink})
{
  return(
    <div>
      {downloadLink}
	</div>
  );
}

import "./projectSection.css";

export function ProjectSection({name, description, youtubeLink, githubLink, downloadLink})
{
  return(
    <div>
	  <div className="project-section">
	    <div className="project-box-1">
	      <ProjectName name={name}/>
		</div>
	    <div className="project-box-2">
	      <ProjectYouTubeLink youtubeLink={youtubeLink}/>
		</div>
		<div className="project-box-3">
	      <ProjectDescription description={description}/>
		  <ProjectGitHubLink githubLink={githubLink}/>
	      <ProjectDownloadLink downloadLink={downloadLink}/>
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

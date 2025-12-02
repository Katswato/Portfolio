import "./projectSection.css";

import testVideo from "./../videos/smartGlasses.mp4"
export function ProjectSection({name, description, date, youtubeLink, video, videoType, githubLink, downloadLink})
{
  console.log("ProjectSection rendered.");
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
		  { youtubeLink === undefined ?
		    <ProjectVideo video={video} videoType={videoType}/> :
	        <ProjectYouTubeLink youtubeLink={youtubeLink}/>
		  }
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
    <div className="project-description">
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
		title="Youtube Video"
	  />
	</div>
  );
}

export function ProjectVideo({video, videoType}) {
  console.log("Video: ", {video});
  console.log("TestVideo: ", {testVideo});

  return(
    <div>
	  <video controls 
	    width="560" 
		height="315"
		controlsList="nodownload"
	  >
	    <source src={video} type={videoType} />  
	  </video>
	</div>
  )
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

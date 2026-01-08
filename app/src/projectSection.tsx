import { 
    type YoutubeData,
    type VideoData,
} from "./data";
import {
    useEffect
} from "react";
import "./projectSection.css";
import { generateDescriptionDiv } from "./util";

interface ProjectSectionProps {
    name: string,
    description: string,
    date: string,
    youtubeData?: YoutubeData,
    videoData?: VideoData,
    githubLink?: string,
    downloadLink?: string,
    tags: string[],
    isActive: boolean,
}

export function ProjectSection({name, description, date, youtubeData, videoData, githubLink, downloadLink, tags, isActive}: ProjectSectionProps) {
  console.log("ProjectSection rendered.");

  useEffect(() => {
    console.log("[ProjectSection] name: ", name)
    console.log("[ProjectSection] isActive: ", isActive)
    console.log("[ProjectSection] tags: ", tags)
  });
  if (!isActive) {
      return (
          <></>
      )
  }
  return(
    <div className="project-section-container">
      <div className="project-section-left">
        <ProjectName name={name}/>
        <ProjectData date={date}/>
        <ProjectDescription description={description}/>
        { githubLink 
          ? <ProjectGitHub githubLink={githubLink}/>
          : <></>
        }
        { downloadLink
          ? <ProjectDownload downloadLink={downloadLink}/>
          : <></>
        }
      </div>
      <div className="project-section-right">
        { youtubeData 
          ? <ProjectYouTube youtubeLink={youtubeData.link}/>
          : videoData
            ? <ProjectVideo video={videoData.video} videoType={videoData.type}/>
            : <></> 
        }
      </div>
    </div>
  );
}

export function ProjectName({name}: {name: string}) {
  return(
    <div className="project-name">
      {name}
    </div>
  );
}

export function ProjectData({date}: {date: string}) {
  return(
    <div className="project-date">
      {date}
    </div>
  );
}

export function ProjectDescription({description}: {description: string}) {
  return(
    <div className="project-description">
        {generateDescriptionDiv(description)}
    </div>
  );
}

export function ProjectYouTube({youtubeLink}: {youtubeLink: string}) {
  return(
    <div>
      <iframe
        className={"project-video"}
        src={youtubeLink} 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Youtube Video"
      />
    </div>
  );
}

export function ProjectVideo({video, videoType}: {video: string, videoType: string}) {
  return(
    <div>
      <video controls 
        className={"project-video"}
        controlsList="nodownload"
      >
        <source src={video} type={videoType} />  
      </video>
    </div>
  )
}

export function ProjectGitHub({githubLink}: {githubLink: string}) {
  return(
    <div>
      {githubLink}
    </div>
  );
}

export function ProjectDownload({downloadLink}: {downloadLink: string}) {
  return(
    <div>
      {downloadLink}
    </div>
  );
}

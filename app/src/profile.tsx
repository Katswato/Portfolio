import './profile.css';
import pizzaLogo from './../images/pizza-on-paper-plate.jpg';
import gitHubLogo from './../favicons/github-mark-white.png';
import linkedInLogo from './../favicons/InBug-White.png';
import mailLogo from './../favicons/MailFavicon.png';

export function Profile() {
  return (
	<div className="profile">
	  <ProfileName 
	    name="Raffe Manzanilla"
	  />
	  <ProfileImage 
	    imageName="Profile Picture"
		image={pizzaLogo}
	  />
	  
	  <div className="profile-contacts">
	    <div className="profile-favicon">
          <ProfileContactImageLink
	        imageName="Github Page"
	        image={gitHubLogo} 
	        link="https://github.com/Katswato"
	      />
	    </div>
        <div className="profile-favicon">
          <ProfileContactImageLink
	        imageName="LinkedIn Page"
	        image={linkedInLogo} 
	        link="https://www.linkedin.com/in/raffe-manzanilla"
	      />
	    </div>
        <div className="profile-favicon">
          <ProfileContactImageLink
	        imageName="Mail Page"
	        image={mailLogo} 
	        link="mailto:raffemanzanilla@gmail.com"
	      />
	    </div>

	  </div>

    </div>
  );
}

interface ProfileNameProps {
  name: string;
}

export function ProfileName({name}: ProfileNameProps)
{
  return (
    <div className="profile" id="profile-name">
	  {name} 
	</div>
  );
}

export function ProfileImage({imageName, image})
{
  return (
    <div className="profile-picture-wrap">
	  <div className="profile-picture">
	    <img src={image} alt={imageName} />  
	  </div>
	</div>
  );
}


interface ProfileContactsProps {
  email?: string;
  linkedIn?: string;
  phoneNumber?: string;
  gitHub?: string;
}

export function ProfileContacts({email, linkedIn, phoneNumber, gitHub}: ProfileContactsProps )
{
  const validDivs = [];

  const emailDiv = (
  	<ProfileContact contactLabel="Email" contact={email}/>
  );

  const linkedInDiv = (
	<ProfileContactLink contactLabel="LinkedIn" contact={linkedIn}/>
  );

  const phoneNumberDiv = (
	<ProfileContact contactLabel="PhoneNumber" contact={phoneNumber}/>
  );

  const gitHubDiv = (
    <ProfileContactLink contactLabel="Github" contact={gitHub}/>
  );

  //console.log("Hello this is a console log.");
  //console.log("Email: ", email);
  //console.log("LinkedInDiv: linkedInDiv);
  //console.log(phoneNumberDiv);
  if (email)
  {
    validDivs.push(emailDiv);
  }
  if (linkedIn)
  {
  	validDivs.push(linkedInDiv);
  }
  if (phoneNumber)
  {
  	validDivs.push(phoneNumberDiv);
  }
  if (gitHub)
  {
    validDivs.push(gitHubDiv);
  }

  return (
    <div className="profile-contacts">
	  {validDivs}
	</div>
  );
}

export function ProfileContactImageLink({imageName, image, link})
{
  return (
  	<div className="profile-github-favicon">
	  <a href={link} target="_blank">
	    <img src={image} alt={imageName}/>
	  </a>
	</div>
  );
}

export function ProfileContact({contactLabel, contact})
{
  return (
  	<div>
	  <div className="profile-contacts-label">{contactLabel}: </div>
	  <div className="profile-contacts-description">{contact}</div>
	</div>
  );
}

export function ProfileContactLink({contactLabel, contact})
{
  return (
  	<div>
	  <div className="profile-contacts-label">{contactLabel}: </div>
	  <div className="profile-contacts-link">
		  <a href={contact}>{contact}</a>
	  </div>
	</div>
  );
}

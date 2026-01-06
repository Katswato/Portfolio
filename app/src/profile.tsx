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
        name="Profile Picture"
        image={pizzaLogo}
      />
      <div className="profile-contacts">
        <div className="profile-favicon">
          <ProfileContact
            name="Github Page"
            image={gitHubLogo} 
            link="https://github.com/Katswato"
          />
        </div>
        <div className="profile-favicon">
          <ProfileContact
            name="LinkedIn Page"
            image={linkedInLogo} 
            link="https://www.linkedin.com/in/raffe-manzanilla"
          />
        </div>
        <div className="profile-favicon">
          <ProfileContact
            name="Mail Page"
            image={mailLogo} 
            link="mailto:raffemanzanilla@gmail.com"
          />
        </div>
      </div>
    </div>
  );
}

export function ProfileName({name}: {name: string})
{
  return (
    <div className="profile" id="profile-name">
      {name} 
    </div>
  );
}

export function ProfileImage({name, image}: {name: string, image: string})
{
  return (
    <div className="profile-picture-wrap">
      <div className="profile-picture">
        <img src={image} alt={name} />  
      </div>
    </div>
  );
}


interface ProfileContactsProps {
  email?: string;
  linkedIn?: string;
  phoneNumber?: string;
  github?: string;
}

export function ProfileContacts({email, linkedIn, phoneNumber, github}: ProfileContactsProps ) {
  const emailDiv = (
    <ProfileContact name="Email" link={email}/>
  );
  const linkedInDiv = (
    <ProfileContact name="LinkedIn" link={linkedIn}/>
  );
  const phoneNumberDiv = (
    <ProfileContact name="PhoneNumber" link={phoneNumber}/>
  );
  const githubDiv = (
    <ProfileContact name="Github" link={github}/>
  );
  
  return (
    <div className="profile-contacts">
      {email ? <></> : emailDiv}
      {linkedIn ? <></> : linkedInDiv}
      {phoneNumber ? <></> : phoneNumberDiv}
      {github ? <></> : githubDiv}
    </div>
  );
}

interface ProfileContactProps {
    name?: string;
    image?: string;
    link?: string;
};

export function ProfileContact({name, image, link}: ProfileContactProps) {
  return (
    <div className="profile-github-favicon">
      <a href={link} target="_blank">
        <img src={image} alt={name}/>
      </a>
    </div>
  );
}

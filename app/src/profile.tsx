import './profile.css';
import pizzaLogo from './../images/pizza-on-paper-plate.jpg';

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
	  <ProfileContacts
	    email="raffemanzanilla@gmail.com"
        linkedIn="https://www.linkedin.com/in/raffe-manzanilla"
		phoneNumber="000-000-0000"
	  />
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
  email: string;
  linkedIn?: string;
  phoneNumber?: string;
}

export function ProfileContacts({email, linkedIn, phoneNumber}: ProfileContactsProps )
{
  return (
    <div className="profile-contacts">
	  <ProfileContact contactLabel="Email" contact={email}/>
	  <ProfileContactLink contactLabel="LinkedIn" contact={linkedIn}/>
	  <ProfileContact contactLabel="PhoneNumber" contact={phoneNumber}/>
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

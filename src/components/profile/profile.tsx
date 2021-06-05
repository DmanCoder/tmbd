import React from 'react';

// Assets
import femalePlaceholder from '../../assets/icons/female-placeholder.svg';
import malePlaceholder from '../../assets/icons/male-placeholder.svg';

// Axios / INIT
import { imgURL } from '../../api/init';
import allUtils from '../../utils/allUtils';

interface ProfileProps {
  keyID: number;
  name: string;
  profile: string;
  gender: number;
  character: string;
}

const Profile: React.FC<ProfileProps> = ({
  keyID,
  name,
  profile,
  gender,
  character,
}) => {
  const width: string = 'w185';
  const url: string = `${imgURL}/${width}/${profile}`;
  let src: string = url;

  if (allUtils.isEmptyUTL(profile)) {
    if (gender === 0) {
      // Male
      src = malePlaceholder;
    } else if (gender === 1) {
      // Female
      src = femalePlaceholder;
    }
  }

  return (
    <div key={keyID} className="profile">
      <figure>
        <img src={src} alt={name} />
        <figcaption>
          <strong>{name}</strong>
          <p>{character}</p>
        </figcaption>
      </figure>
    </div>
  );
};
export default Profile;

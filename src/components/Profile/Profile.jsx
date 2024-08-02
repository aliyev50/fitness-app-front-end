import { useContext, useState, useEffect } from 'react';
import { AuthedUserContext } from '../../App';
import * as profileService from '../../services/profileService';


const Profile = () => {
  const user = useContext(AuthedUserContext);
  const [profile, setProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ profilePicture: '', fitnessGoals: '' });
  const [progressPictures, setProgressPictures] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await profileService.show(user._id);
        setProfile(profileData);
        console.log(profileData)
      } catch (err) {
        console.error(err);
      }
    };

    fetchProfile();
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = {
        ...profile,
        profilePicture: editData.profilePicture,
        fitnessGoals: editData.fitnessGoals.split(',').map(goal => goal.trim())
      };
      await profileService.update(user._id, updatedProfile);
      setProfile(updatedProfile);
      setIsEditing(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    
    <main>
      <section className="profile">
      <h1>{user.username}'s Profile</h1>
      {profile ? (
        <div>
          {!isEditing ? (
            <>
              <p>Profile Picture: {profile.profilePicture || 'No picture available'}</p>
              <p>Fitness Goals: {profile.fitnessGoals ? profile.fitnessGoals.join(', ') : 'No goals set'}</p>
              <button onClick={() => setIsEditing(true)}>Edit Profile</button>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="profilePicture">Profile Picture URL:</label>
                <input
                  type="text"
                  id="profilePicture"
                  name="profilePicture"
                  value={editData.profilePicture}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="fitnessGoals">Fitness Goals (comma separated):</label>
                <input
                  type="text"
                  id="fitnessGoals"
                  name="fitnessGoals"
                  value={editData.fitnessGoals}
                  onChange={handleChange}
                />
              </div>
              <button className="upload-btn" type="submit">Save</button>
              <button className="upload-btn" type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      </section>
      <div className="text-wrapper">
    <p className="p2">
          Make fitness your basic. Bee Avci Gym you have been sporting since
          $29,99 every 4 weeks and you get a free sports bag. Go for it!
          
          Make fitness your basic. Bee Avci Gym you have been sporting since
          $29,99 every 4 weeks and you get a free sports bag. Go for it!
        </p>
  </div>
    </main>
   
  );
};

export default Profile;
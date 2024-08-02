import Profile from "../components/Profile/Profile";

const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/profiles`;

const show = async (userId) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const update = async (userId, profileData) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(profileData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const uploadPhoto = async (profileData) => {
    try {
        const res = await fetch(`${BASE_URL}/profiles`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(profileData),
        });
        return res.json();
      } catch (error) {
        console.log(error);
      }
};

const uploadProgressPicture = async (formData) => {
  const PROGRESS_PICTURE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/progress-pictures`;
  try {
    const res = await fetch(PROGRESS_PICTURE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: formData,
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { uploadPhoto,show, update, uploadProgressPicture };

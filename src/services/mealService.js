const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/meals`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const create = async (mealFormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mealFormData),
    });
    console.log(res)
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const update = async (mealId, mealFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${mealId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mealFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteMeal = async (mealId) => {
  try {
    const res = await fetch(`${BASE_URL}/${mealId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export {
  index,
  create,
  update,
  deleteMeal,
};
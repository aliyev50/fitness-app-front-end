import { useContext, useState, useEffect } from 'react';
import { AuthedUserContext } from '../../App';
import * as mealService from '../../services/mealService'; 

const Meals = () => {
  const user = useContext(AuthedUserContext);
  const [meals, setMeals] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    foodItems: [{ name: '', carbs: '', fats: '', protein: '' }],
  });

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const mealsData = await mealService.index(user._id);
        setMeals(mealsData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMeals();
  }, [user]);

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;
    if (dataset.index !== undefined) {
      const newFoodItems = formData.foodItems.slice();
      newFoodItems[dataset.index][name] = value;
      setFormData({ ...formData, foodItems: newFoodItems });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const mealData = {
        date: formData.date,
        foodItems: formData.foodItems.map(item => ({
          name: item.name,
          carbs: parseInt(item.carbs, 10),
          fats: parseInt(item.fats, 10),
          protein: parseInt(item.protein, 10),
        })),
      };
      const newMeal = await mealService.create(mealData);
      setMeals([...meals, newMeal]);
      resetForm();
    } catch (err) {
      console.error(err);
    }
  };

  const addFoodItem = () => {
    setFormData({
      ...formData,
      foodItems: [...formData.foodItems, { name: '', carbs: '', fats: '', protein: '' }],
    });
  };

  const removeFoodItem = (index) => {
    const newFoodItems = formData.foodItems.slice();
    newFoodItems.splice(index, 1);
    setFormData({ ...formData, foodItems: newFoodItems });
  };

  const deleteMeal = async (mealId) => {
    try {
      await mealService.deleteMeal(mealId);
      setMeals(meals.filter(meal => meal._id !== mealId));
    } catch (err) {
      console.error(err);
    }
  };

  const resetForm = () => {
    setFormData({ date: '', foodItems: [{ name: '', carbs: '', fats: '', protein: '' }] });
    setIsAdding(false);
  };

  const calculateTotalCalories = (foodItems) => {
    return foodItems.reduce((total, item) => {
      return total + (item.carbs * 4) + (item.protein * 4) + (item.fats * 9);
    }, 0);
  };

  return (
    
    <main>
         <section className="profile">
      {!isAdding ? (
        <div>
          <h1>Meals</h1>
          <ul>
            {meals.map((meal) => (
              <li key={meal._id}>
                <p><strong>Date:</strong> {new Date(meal.date).toLocaleDateString()}</p>
                <div>
                  {meal.foodItems.map((item, index) => (
                    <div key={index}>
                      <p><strong>Food Item:</strong> {item.name}</p>
                      <p><strong>Carbs:</strong> {item.carbs}g</p>
                      <p><strong>Fats:</strong> {item.fats}g</p>
                      <p><strong>Protein:</strong> {item.protein}g</p>
                    </div>
                  ))}
                  <p><strong>Total Calories:</strong> {calculateTotalCalories(meal.foodItems)}</p>
                  <button className="upload-btn" onClick={() => deleteMeal(meal._id)}>Delete Meal</button>
                </div>
              </li>
            ))}
          </ul>
          <button onClick={() => setIsAdding(true)}>Add New Meal</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h1>Log Meal</h1>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          {formData.foodItems.map((item, index) => (
            <div key={index}>
              <label htmlFor={`name-${index}`}>Food Item</label>
              <input
                type="text"
                name="name"
                id={`name-${index}`}
                value={item.name}
                data-index={index}
                onChange={handleChange}
                required
              />
              <label htmlFor={`carbs-${index}`}>Carbs (g)</label>
              <input
                type="number"
                name="carbs"
                id={`carbs-${index}`}
                value={item.carbs}
                data-index={index}
                onChange={handleChange}
                min="0"
                required
              />
              <label htmlFor={`fats-${index}`}>Fats (g)</label>
              <input
                type="number"
                name="fats"
                id={`fats-${index}`}
                value={item.fats}
                data-index={index}
                onChange={handleChange}
                min="0"
                required
              />
              <label htmlFor={`protein-${index}`}>Protein (g)</label>
              <input
                type="number"
                name="protein"
                id={`protein-${index}`}
                value={item.protein}
                data-index={index}
                onChange={handleChange}
                min="0"
                required
              />
              <button className="upload-btn" type="button" onClick={() => removeFoodItem(index)}>Remove Food Item</button>
            </div>
          ))}
          <button className="upload-btn" type="button" onClick={addFoodItem}>Add Food Item</button>
          <button className="upload-btn" type="submit">Log Meal</button>
          <button className="upload-btn" type="button" onClick={resetForm}>Cancel</button>
        </form>
      )}
      </section>
  
    </main>



  );
};

export default Meals;
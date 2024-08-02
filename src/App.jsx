import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Landing from './components/Landing/Landing';
import Dashboard from './components/Dashboard/Dashboard';
import SignupForm from './components/SignupForm/SignupForm';
import SigninForm from './components/SigninForm/SigninForm';
import Meals from './components/Meals/Meals';
import Profile from './components/Profile/Profile';
import Workouts from './components/Workouts/Workouts';
import './App.css';


export const AuthedUserContext = createContext(null);

const App = () => {
  const [user, setUser] = useState(null);

  const handleSignout = () => {
    setUser(null);
  };

  return (
    <AuthedUserContext.Provider value={user}>
      <NavBar handleSignout={handleSignout} />
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/workouts" element={<Workouts />} />
          </>
        ) : (
          <>
          
            <Route path="/" element={<Landing />} />
            
            <Route path="/signup" element={<SignupForm setUser={setUser} />} />
            <Route path="/signin" element={<SigninForm setUser={setUser} />} />
          
          </>
        )}
      </Routes>
    </AuthedUserContext.Provider>
  );
};

export default App;

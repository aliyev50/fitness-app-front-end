import { AuthedUserContext } from '../../App';
import { useContext } from 'react';


const Dashboard = () => {
  const user = useContext(AuthedUserContext);
  return (
  <main>
       <div id="training">
    <h3>
       thank you for signing up and sharing your fitness journey with us.
      </h3>
    <main>
    <div className="help">
      <h1>To help you get the most out of your membership:</h1>
      <li>Check out our range of popular classes</li>
      <li>Join our free  gym app  to connected with like-minded members and track your workouts.</li>
      <li>Schedule in your complementary assessment and training programme.</li>
      </div>
    </main>
    <div className="text-wrapper">
    <p className="p2">
          Make fitness your basic. Bee Avci Gym you have been sporting since
          $29,99 every 4 weeks and you get a free sports bag. Go for it!
          
          Make fitness your basic. Bee Avci Gym you have been sporting since
          $29,99 every 4 weeks and you get a free sports bag. Go for it!
        </p>
      </div>
      </div>
      </main>
  );
};

export default Dashboard;

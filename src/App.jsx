import { useState } from "react";
import Login from "./components/Login";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Weather from "./components/Weather";
import "./styles/App.css"; 
import "./styles/Login.css";


function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    setUser(username); // Save the logged-in user
  };
  

  return (
    <div>
      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="todo-container">
          
          <h2>Welcome, {user}!</h2>
          <TaskInput />
          <TaskList />
          <Weather />
          <div className="logout">
          <button className="logout-btn" onClick={() => setUser(null)}>
            Logout
          </button>

          </div>

        </div>
      )}
    </div>
  );
}

export default App;


import React, {useState} from 'react';
import './App.css';

const PersonalView = ({onClick}) => (
  <div>
    <h2>About me</h2>
  </div>
);

const ProfessionalView = ({onClick}) => (
  <div>
    <h2>Skills</h2>
  </div>
);
function App() {
   const [currentView, setCurrentView] = useState('homePage');
  
  return (
    <div>
      {
        <div>
          <h1>Dylan McGrann</h1>
          <PersonalView onClick={page => setCurrentView(page)} />
        </div>
      }
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';
import Questionnaire from './components/Questionnaire';
import Results from './components/Results';

import questionData from './questions.json';

function App() {
  const [showResults, setShowResults] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData(e.target);
    setShowResults(true);
  }

  return (
    <div>
      {
        showResults ?
          <Results formData={formData} questionData={questionData} />
          :
          <Questionnaire data={questionData} handleSubmit={handleSubmit} />
      }
    </div>
  );
}

export default App;
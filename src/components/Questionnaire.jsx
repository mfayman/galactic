import React from 'react';
import Question from './Question';
import './Questionnaire.css';

const Questionnaire = ({ data, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>Insurance Assessment</h1>
      <div className='container'>
        <div className='inputBox'>
          <label htmlFor='clientName'>Client Name:</label>
          <input type='text' name='clientName' id='clientName' />
        </div>
        <div className='inputBox'>
          <label htmlFor='dateConducted'>Conducted On:</label>
          <input type='date' name='dateConducted' id='dateConducted' />
        </div>
        <div className='inputBox'>
          <label htmlFor='dateAccepted'>Date Accepted:</label>
          <input type='date' name='dateAccepted' id='dateAccepted' />
        </div>
        <div className='inputBox'>
          <label htmlFor='reviewerName'>Reviewer Name:</label>
          <input type='text' name='reviewerName' id='reviewerName' />
        </div>
      </div>

      {
        data?.map((section, sectionNum) => (
          <div className="section" key={`section-${sectionNum + 1}`}>
            <h3>{section.sectionTitle}</h3>
            {
              section.questions?.map((question, questionNum) => (
                <Question key={`section-${sectionNum + 1}-question-${questionNum}`} sectionNum={sectionNum} questionNum={questionNum} question={question} />
              ))
            }
          </div>
        ))
      }
      <div className='button-container'>
        <input type='submit' value='submit' className='button' />
        <input type='reset' value='reset' className='button' />
      </div>
    </form>
  );
}

export default Questionnaire;
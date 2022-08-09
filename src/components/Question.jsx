import React from 'react';

import './Question.css';

const Question = ({ sectionNum, questionNum, question }) => {
  const questionName = `section-${sectionNum}-question-${questionNum}`;

  return (
    <div className='questionRow'>
      <div className='radioButtons'>
        <div>
          <label htmlFor={questionName + '-yes'}>Yes</label>
          <input type='radio' name={questionName} id={questionName + '-yes'} value='yes' />
        </div>
        <div>
          <label htmlFor={questionName + '-no'}>No</label>
          <input type='radio' name={questionName} id={questionName + '-no'} value='no' />
        </div>
      </div>
      <div className='question'>
        <p>{question}</p>
        <input type='text' name={`${questionName}-comments`} id={`${questionName}-comments`} placeholder='Comments' />
      </div>
    </div>
  );
}

export default Question;
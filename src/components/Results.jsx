import React from 'react';
import Logo from '../assets/logo.png';

import './Results.css';

const Results = ({ formData, questionData }) => {
  let totalQuestions = 0;
  let answeredYes = 0;

  for (let sectionNum in questionData) {
    for (let questionNum in questionData[sectionNum].questions) {
      if (formData[`section-${sectionNum}-question-${questionNum}`].value === 'yes'){
        answeredYes++;
      }
      totalQuestions++;
    }
  }
  const calculatedScore = Math.round((answeredYes / totalQuestions) * 100);

  return (
    <div className='results'>
      <h1>INSURANCE ASSESSMENT</h1>
      <h2>{formData.clientName.value}</h2>
      <img src={Logo} alt='Galactic Advisors' className='logo' />
      <div className='info-fields'>
        <div>
          <span>Conducted On: </span>
          <span>{formData.dateConducted.value ? formData.dateConducted.value : 'Date'}</span>
        </div>
        <div>
          <span>Date Accepted: </span>
          <span>{formData.dateAccepted.value ? formData.dateAccepted.value : 'Date'}</span>
        </div>
        <div>
          <span>Reviewer Name: </span>
          <span>{formData.reviewerName.value ? formData.reviewerName.value : 'Name'}</span>
        </div>
      </div>

      <div className='score-container'>
        <span className={'score-box ' + (calculatedScore > 69 ? '' : 'low')}>{calculatedScore}%</span>
        <span className='score-text'><span className='bold'>Overall Cyber Insurability Score:</span> {calculatedScore}% - {calculatedScore > 69 ? 'Good' : 'Low'}</span>
      </div>

      {
        questionData?.map((section, sectionNum) => (
          <div className="result-section" key={`section-${sectionNum + 1}`}>
            <h3>{section.sectionTitle}</h3>
            {
              section.questions?.map((question, questionNum) => (
                <div className='result-question-container'>
                  <span className={'answer ' + formData[`section-${sectionNum}-question-${questionNum}`].value}>
                    {formData[`section-${sectionNum}-question-${questionNum}`].value ? formData[`section-${sectionNum}-question-${questionNum}`].value : 'No Answer'}
                  </span>
                  <span className='question-container'>
                    <p>{question}</p>
                    {
                      formData[`section-${sectionNum}-question-${questionNum}-comments`].value ?
                        <p className='question-comments'>{formData[`section-${sectionNum}-question-${questionNum}-comments`].value}</p>
                        :
                        ''
                    }
                  </span>
                </div>
              ))
            }
          </div>
        ))
      }

      <div className='score-container'>
        <span className={'score-box ' + (calculatedScore > 69 ? '' : 'low')}>{calculatedScore}%</span>
        <span className='score-text'><span className='bold'>Overall Cyber Insurability Score:</span> {calculatedScore}% - {calculatedScore > 69 ? 'Good' : 'Low'}</span>
      </div>
    </div>
  );
}

export default Results;
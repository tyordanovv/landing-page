import React, { useState } from 'react';
import {
//   getQuestions,
  getQuestionsAndAnswers,
//   getStudyFields,
  getJsonRegex,
} from '../utils.js';

import OrientationSurvey from '../components/survey-page/OrientationSurvey.jsx';
import StudyField from '../components/survey-page/StudyField.jsx';

import { Toaster } from '../components/ui/Toaster.jsx';
import { Separator } from '../components/ui/Separator.jsx';
import { Loader2 } from 'lucide-react';
 
function SurveyPage() {
    const [loading, setLoading] = useState(false); 
    const [disabled, setDisabled] = useState(false);
    const [surveyAnswers, setSurveyAnswers] = useState({
      careerInterests: '',
      workEnvironment: '',
      problemSolving: '',
      skillsDevelopment: '',
      taskPreference: '',
      learningPreference: '',
      careerGoals: '',
      careerMotivation: '',
      adversityHandling: '',
      workLifeBalance: '',
    });
    const [recommendations, setRecommendations] = useState(null);

    const generateRecommendations = async (surveyAnswers) => {
        setLoading(true);

        const prompt = `TODO add msg`;
  
        const options = {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer TODO SERVER TOKEN`,
            },
            body: JSON.stringify({
                content: prompt,
            }),
        };
    
        try {
          const response = await fetch("http://localhost:3000", options); // TODO add backend url and move to env 
          const json = await response.json();
    
          const data = json.choices[0].message.content;
          console.log('Data: ', data);
          const dataFormatted = data.replace(getJsonRegex(), '');
          console.log('Data Formatted:', dataFormatted);
          const dataParsed = JSON.parse(dataFormatted);
          console.log('Data Parsed:', dataParsed);
    
          setRecommendations(dataParsed);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
      };
    
    return(
        <>
            <header>
                <img
                    className='absolute -top-5'
                    src='../../images/Accademium_Logo.svg'
                    width={240}
                ></img>
            </header>
                <main>
                    <Separator className='absolute top-24 left-32 w-[85%]' />
                    {recommendations && !loading ? (
                        <>
                        <StudyField
                            surveyAnswers={surveyAnswers}
                            recommendations={recommendations.recommendations}
                            disabled={disabled}
                            setSurveyAnswers={setSurveyAnswers}
                            setRecommendations={setRecommendations}
                            setLoading={setLoading}
                            setDisabled={setDisabled}
                        />
                        </>
                    ) : loading ? (
                        <div className='flex justify-center items-center h-screen w-screen'>
                        <Loader2 className='w-24 h-24 animate-spin' />
                        </div>
                    ) : (
                        <OrientationSurvey
                        questionsAndAnswers={getQuestionsAndAnswers()}
                        generateRecommendations={generateRecommendations}
                        surveyAnswers={surveyAnswers}
                        setSurveyAnswers={setSurveyAnswers}
                        />
                    )}
                    <Separator className='absolute bottom-10 left-32 w-[85%]' />
            </main>
        </>
    )
}

export default SurveyPage;
import React, { useState } from 'react';
import { getJsonRegex } from '../../utils.js';
import { Progress } from '../ui/Progress.jsx';
import { useToast } from '../ui/use-toast.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Tooltip from './Tooltip.jsx';

const studyFieldToImage = new Map([
  ['Language and Communication', '../../images/language-and-communication.png'],
  ['Behaviour and Society', '../../images/behaviour-and-society.png'],
  ['Business and Economics', '../../images/business-and-economics.png'],
  ['Exact and Information Sciences', '../../images/exact-and-information-sciences.png'],
  ['Sports and Health', '../../images/sports-and-health.png'],
  ['Science and Engineering', '../../images/science-and-engineering.png'],
  ['Arts and Culture', '../../images/arts-and-culture.png'],
]);

const StudyField = ({
  surveyAnswers,
  recommendations,
  disabled,
  setSurveyAnswers,
  setRecommendations,
  setLoading,
  setDisabled,
}) => {
  const { toast } = useToast();

  const [selected, setSelected] = useState(-1);
  const [progress, setProgress] = useState(0);

  const handleNext = () => {
    toast({
      description: 'Unfortunately, at this moment, you cannot proceed any further.',
    });
  };

  const handleRetry = () => {
    setSurveyAnswers({
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
    setRecommendations(null);
  };

  const handleRandomize = () => {
    setDisabled(true);
    generateRandomRecommendations(
      recommendations,
      surveyAnswers,
      setRecommendations
    );
  };

  const generateRandomRecommendations = async (
    recommendations,
    surveyAnswers,
    setRecommendations
  ) => {
    setLoading(true);

    const prompt = `[TODO add answers here and send to BE]`;

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
      const response = await fetch(
        'http://localhost:3000',
        options
      );

      const json = await response.json();
      const data = json.choices[0].message.content;
      const dataFormatted = data.replace(getJsonRegex(), '');
      const dataParsed = JSON.parse(dataFormatted);

      setRecommendations(dataParsed);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getImage = (study_field) => {
    return studyFieldToImage.get(study_field);
  };

  return (
    <>
      {/* Main Wrapper */}
      <div className='flex flex-col justify-center items-center gap-y-6 h-screen pt-[4rem] relative'>
        <button
          disabled={disabled}
          className={`absolute top-[7.5rem] right-[10.5rem] ${disabled ? 'opacity-25' : ''}`}
          onClick={handleRandomize}
        >
          <img src='../../images/randomize-icon.png' width={35} height={35} alt='Randomize' />
        </button>
        <button
          className='absolute top-[7.5rem] right-[7.5rem]'
          onClick={handleRetry}
        >
          <img src='../../images/retry-icon.png' width={35} height={35} alt='Retry' />
        </button>
        <Progress
          value={progress}
          className='absolute top-[7.5rem] w-[28rem] h-[20px]'
        />
        <pre className='font-coolvetica text-3xl mt-8 font-bold'>
          The study fields that align the best {'\n'} with your interests and
          strengths
        </pre>
        {/* Recommendations Wrapper */}
        <div className='flex flex-row gap-x-8'>
          {recommendations.map((recommendation, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-center'
            >
              <button
                className={`border-2 rounded-xl w-[13.5rem] h-[16rem] hover:border-black ${selected === index ? 'border-black' : ''} flex justify-center items-center relative`}
                onClick={() => setSelected(index)}
              >
                <Tooltip text={recommendation.reason}>
                  <img
                    className='absolute top-3 right-3'
                    src='../../images/info-icon.png'
                    width={22}
                    height={22}
                    alt='Info'
                  />
                </Tooltip>
                <img
                  src={getImage(recommendation.study_field)}
                  width={150}
                  height={150}
                  alt={recommendation.study_field}
                />
              </button>
              <h3 className='font-coolvetica font-normal text-lg'>
                {recommendation.study_field}
              </h3>
            </div>
          ))}
        </div>
        <button
          className='bg-black rounded-2xl w-[20rem] h-[2.25rem] mt-6'
          onClick={handleNext}
        >
          <h3 className='font-coolvetica font-normal text-md text-white'>
            Next{' '}
            <FontAwesomeIcon icon={faArrowRight} className='text-sm ml-1' />
          </h3>
        </button>
      </div>
    </>
  );
};

export default StudyField;
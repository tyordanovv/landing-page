import OrientationSurvey from '../components/landing-page/OrientationSurvey.jsx';
import Services from '../components/landing-page/Services.jsx';
import UniversityList from '../components/landing-page/UniversityList.jsx';
import ApplicationInfo from '../components/landing-page/ApplicationInfo.jsx';
import Stories from '../components/landing-page/Stories.jsx';
import Resources from '../components/landing-page/Resources.jsx';
import Questions from '../components/landing-page/Questions.jsx';
import SignUp from '../components/landing-page/SignUp.jsx';

const LandingPage = () => {
  return (
    <div className='LandingPage'>
      <OrientationSurvey />
      <Services />
      <UniversityList />
      <ApplicationInfo />
      <Stories />
      <Resources />
      <Questions />
      <SignUp />
    </div>
  );
}

export default LandingPage;
import './App.css';
import WeatherMap from './Components/WeatherMap/weatherMap'
import Community from './Components/Community/community'
import ChangingBanner from './Components/ChangingBanner/changingBanner'
import Specifications from './Components/Specifications/specifiations'
import OutdoorEnvironment from './Components/OutdoorEnvironment/outdoorEnvironment'
import Alert from './Components/Alert/alert'
import Analyze from './Components/Analyze/analyze'
import TestimonialBanner from './Components/TestimonialBanner/testimonialB'
import SalesInfo from './Components/SalesInfo/salesInfo'
import Footer from './Components/Footer/footer'

function App() {

  return (
    <div className="App">
      <div className="main">
        <WeatherMap />
        <Community />
        <ChangingBanner />
        <Specifications />
        <OutdoorEnvironment />
        <Alert />
        <Analyze />
        <TestimonialBanner />
        <SalesInfo />
        <Footer />
      </div>
    </div>
  );
}

export default App;

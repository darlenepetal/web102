import './App.css';
import Calendar from './components/Calendar';

const App = () => {

  return (
    <div className="App">
      <h1>Itinerary for 7 Days in Chicago 🌆</h1>
      <h2>Welcome to Chicago! 😊 Below is your 7-day calendar:</h2>
      <Calendar />
    </div>
  )
}

export default App
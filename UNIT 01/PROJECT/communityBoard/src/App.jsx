import './App.css';
import RecipeList from './components/RecipeList';

const App = () => {
  return (
    <div className="App">
      <h1>Mexican Food Recipes</h1>
      <h2>For culinary students, home cooks, cooking content creators, and lovers of Mexican cuisine!</h2>
      <RecipeList />
    </div>
  )
}

export default App;

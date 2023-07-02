import './App.css';
import { useState } from 'react'
import Ideas from '../Ideas/Ideas'
import Form from '../Form/Form'

function App() {
  let fillerIdeas = [
    {id:1, title: 'Hug your Dog', description: 'fun activity'},
    {id:1, title: 'Walk your Dog', description: 'exercise activity'},
    {id:1, title: 'Play with your Dog', description: 'stimulating activity'}
  ]
  const [ideas, setIdeas] = useState([])
  
  function addIdea(newIdea) {
  setIdeas([...ideas, newIdea])
  }
  
    return (
      <main className="App">
      <h1>IdeaBox</h1>
      <Form addIdea={addIdea}/>
      {!ideas.length && <h2>No ideas yet -- add some!</h2>}
      <Ideas ideas={ideas}/>
      </main>
    )
  }
  
  export default App;

import './Ideas.css'
import Card from '../Card/Card'


function Ideas({ideas}) {
  const ideaCards = ideas.map(idea => {
  return (
      <Card 
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
      />
  )
})
return (
  <div className='ideas-container'>
    {ideaCards}
  </div>
)
}

export default Ideas
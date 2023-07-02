import './Ideas.css'
import Card from '../Card/Card'


const Ideas = (props) => {
  const ideaCards = props.ideas.map(idea => {
    return (
      <Card
        title={idea.title}
        description={idea.description}
        id={idea.id}
        key={idea.id}
        deleteIdea= {props.deleteIdea}
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
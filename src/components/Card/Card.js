import './Card.css'

function Card(props) {
  return (
    <section className='card'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <button>🗑</button>
    </section>
  )
}

export default Card
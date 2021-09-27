import '../styles/memoryCard.css'

export default function MemoryCard({data, index, handleClick, ...props}) {
  return (
    <div className={`memory-card ${/*data.wasClicked && "clicked"*/ ""}`} onClick={() => handleClick(data.name)}>
      <img width="180" height="240" src={data.src} alt={data.name}/>
      <p>{data.name}</p>
    </div>
  )
}
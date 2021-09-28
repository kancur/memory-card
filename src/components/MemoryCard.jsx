import { useEffect, useState } from 'react';
import '../styles/memoryCard.css'

export default function MemoryCard({ data, index, ...props }) {
  const [isClicked, setIsClicked] = useState(false);

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  const handleClick = async (name) => {
    setIsClicked(true);
    await timeout(100)
    props.handleClick(data.name);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClicked(false)
    }, 100)

    return () => {
      clearTimeout(timer)
    }
  }, [isClicked])

  return (
    <div className={`memory-card ${isClicked ? 'clicked' : ''}`} onClick={() => handleClick(data.name)}>
      <img className={props.isGrayscale ? "grayscale" : null} width="180" height="240" src={data.src} alt={data.name} />
      {props.showNames && <p>{data.name}</p>}
    </div>
  )
}
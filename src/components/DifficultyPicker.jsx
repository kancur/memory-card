import { useState } from "react";
import images from "../images/images";
import '../styles/difficulty.css';

export default function DifficultyPicker() {
  const [imageCount, setImageCount] = useState(8)

  const handleChange = (e) => {
    setImageCount(e.target.value)
  }


  return (
    <div className="difficulty-picker">
      <span className="heading">Difficulty</span>
      <input 
        onChange={handleChange}
        type="range"
        id="volume"
        name="volume"
        min={2}
        max={images.length}
        value={imageCount}
      />
      <label for="volume">{imageCount} images</label>
    </div>
  )
}
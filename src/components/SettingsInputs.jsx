import { useState } from "react";
import images from "../images/images";
import '../styles/settingsInput.css';

export default function DifficultyPicker(props) {
  const [imageCount, setImageCount] = useState(8)

  const handleDifficultyChange = (e) => {
    setImageCount(e.target.value)
    props.setImageCount(e.target.value)
  }

  const handleShowNamesChange = (e) => {
    props.setShowNames(e.target.checked)
  }

  return (
    <div className="settings-picker">
      <div className="part">
        <span className="heading">Difficulty</span>
        <input
          onChange={handleDifficultyChange}
          type="range"
          id="count"
          name="count"
          min={4}
          max={images.length}
          value={imageCount}
        />
        <label htmlFor="count">{imageCount} images</label>

      </div>
      <div className="part checkboxes">
        <div className="checkbox-input">
          <label htmlFor="showNames">Show flower names</label>
          <input
            type="checkbox"
            name="showNames"
            onChange={handleShowNamesChange}
            checked={props.showNames}
          />
        </div>

        <div className="checkbox-input">
          <label htmlFor="grayscale">Grayscale images</label>
          <input
            type="checkbox"
            name="grayscale"
            onChange={(e) => props.setIsGrayscale(e.target.checked)}
            checked={props.isGrayscale}
          />
        </div>
      </div>
    </div>
  )
}
import { useState } from 'react'
import './App.scss'
import { Button } from './components/Button'
import { generateEmojiString } from './utils/emojiGenerator'
import { NumberInput } from './components/NumberInput'
import { CategoryList } from './components/CategoryList'
import { emojiCategories } from './utils/emojiData'

function App() {
  const [value, setInputValue] = useState<string>("10");
  const [emojiString, setEmojiString] = useState<string>("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleButtonClick = () => {
    setEmojiString(generateEmojiString({ count: Number(value), categories: selectedCategories }))
  }

  return (
    <>
      <div className="card">
        <div className="input-group">
          <NumberInput placeholder="Number" value={value} onValueChange={setInputValue} />
          <Button onTrigger={handleButtonClick} className="button-generate" />
        </div>
        <div className="category-group">
          <CategoryList onChange={(categories) => { setSelectedCategories(categories); }} options={emojiCategories} />
        </div>
        <div className="emoji-group">
          <p className="emoji-display">{emojiString}</p>
        </div>
      </div >
    </>
  )
}

export default App

import './App.css'
import Button from './components/Button'
import { ShareIcon, PlusIcon } from './assets'

function App() {
  return (
    <div>
      <Button text='Type here' variant='primary' startIcon={ShareIcon}></Button>
      <Button text='Type here' variant='secondary' startIcon={PlusIcon}></Button>
    </div>
  )
}

export default App

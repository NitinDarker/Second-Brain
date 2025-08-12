import './App.css'
import Button from './components/personal/Button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'

function App () {
  return (
    <div className=''>
      <Button
        variant="primary"
        className='bg-violet-700 text-white antialiased rounded-md hover:bg-violet-500 hover:text-white hover:cursor-pointer hover:scale-105'
        text='Hey there'
      >
        Hey there
      </Button>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App

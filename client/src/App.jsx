import './App.css'
import { Button } from '@material-tailwind/react'
import { ListDefault } from './components/ListGroup'

export default function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline shadow-2xl text-orange-500">
      Zagreus
      </h1>
      <Button>Button</Button>
      <ListDefault />
    </div>
  )
}
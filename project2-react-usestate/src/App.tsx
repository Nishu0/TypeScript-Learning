
import './App.css'
import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
import List from './components/List'
import { useState } from 'react'
function App() {

  const [count, setCount]=useState<number>(0)

  return (
    <>
    <Heading title="Hello World" />
    <Section title='Different'>This is my subheading</Section>
    <Counter setCount={setCount} >
      Count is {count}
    </Counter>
    <List items={["🍵 Tea","🎌 Anime","📚 Manga"]} 
    render={(item:string)=><span>{item}</span>} />      
    </>
  )
}

export default App

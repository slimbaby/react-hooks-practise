import { useEffect, useState } from 'react'

async function queryData() {
  const data = await new Promise<number>((resolve) => {
    setTimeout(() => {
      resolve(666)
    }, 2000)
  })
  return data
}

function App() {
  const [num, setNum] = useState(0)

  useEffect(() => {
    console.log('xxx')
    const timer = setInterval(() => {
      console.log(num)
    }, 1000)

    return () => {
      console.log('clean up')
      clearInterval(timer)
    }
  }, [Date.now()])

  return <div onClick={() => setNum((prevNum) => prevNum + 1)}>{num}</div>
}

export default App

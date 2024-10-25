import { useEffect, useRef, useImperativeHandle } from 'react'

// function App() {
//   const inputRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     inputRef.current?.focus()
//   })

//   return (
//     <div>
//       <input ref={inputRef}></input>
//     </div>
//   )
// }
import React from 'react'
interface RefProps {
  aaa: () => void
}
const Guang: React.ForwardRefRenderFunction<RefProps> = (props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(
    ref,
    () => {
      return {
        aaa() {
          inputRef.current?.focus()
        },
      }
    },
    [inputRef]
  )

  return (
    <div>
      <input ref={inputRef}></input>
    </div>
  )
}

const WrapedGuang = React.forwardRef(Guang)

function App() {
  const ref = useRef<RefProps>(null)

  useEffect(() => {
    console.log('ref', ref.current)
    ref.current?.aaa()
  }, [])

  return (
    <div>
      <WrapedGuang ref={ref} />
    </div>
  )
}

export default App

import { Reducer, useReducer } from 'react'
import { produce } from 'immer'
// 定义一个数据类型
interface Data {
  result: number
}

// 定义一个事件触发类型
interface Action {
  type: 'add' | 'sub'
  num: number
}
// 定义一个触发后需要操作的动作
function reducer(state: Data, action: Action) {
  switch (action.type) {
    case 'add':
      // return { result: state.result + action.num }
      return produce(state, (state) => {
        state.result += action.num
      })
    case 'sub':
      return { result: state.result - action.num }
  }
}

function App() {
  const [res, resHandle] = useReducer<Reducer<Data, Action>, string>(
    reducer,
    '666',
    (param) => {
      return { result: param === '666' ? 1 : 2 }
    }
  )
  return (
    <div>
      <div
        onClick={() => {
          resHandle({ type: 'add', num: 1 })
        }}
      >
        加
      </div>
      <div
        onClick={() => {
          resHandle({ type: 'sub', num: 2 })
        }}
      >
        减
      </div>
      <div>{res.result}</div>
    </div>
  )
}

export default App

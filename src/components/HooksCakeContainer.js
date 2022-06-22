import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../redux'


function HooksCakeContainer() {
  const numofCakes = useSelector(state => state.cake.numofCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h2>Num of cakes - {numofCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer
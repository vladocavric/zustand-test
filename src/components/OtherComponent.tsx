import { Button } from "./ui/button"
import {useCountStore} from "../stores/count"

export const OtherComponent = () => {
    // this is also valid, but less performant
    // const {count} = useCountStore(state => state)
    const count = useCountStore(state => state.count)
    const increase = useCountStore(state => state.asyncIncrease)
    const decrease = useCountStore(state => state.decrease)

  return (
    <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">{count}</h1>
        <div className="mt-4 flex gap-2">
            <Button variant="destructive" onClick={decrease}>decrease</Button>
            <Button variant="outline" onClick={increase}>increase</Button>
        </div>
        </div>
  )
}


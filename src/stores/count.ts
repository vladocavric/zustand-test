import { create } from "zustand"

interface CountState {
    count: number
    increase: () => void
    decrease: () => void
    asyncIncrease: () => Promise<void>
}


export const useCountStore = create<CountState>((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    asyncIncrease: async () => {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })
        set((state) => ({ count: state.count + 1 }))
    }
}))
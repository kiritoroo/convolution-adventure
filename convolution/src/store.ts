import { proxy } from 'valtio'
import { useProxy } from 'valtio/utils'
import Resources from './addons/Resources'

interface IStore {
  open: boolean
}

interface IRes {
  resources: Resources | null
}

const store = proxy<IStore>({ 
  open: false
})
export const useStore = () => useProxy(store)

const res = proxy<IRes>({
  resources: null
})
export const useRes = () => useProxy(res)
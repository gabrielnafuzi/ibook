import { Store } from 'vuex'
import { initializeStores } from '@/utils/store-accessors'

const initializer = (store: Store<any>) => initializeStores(store)

export const plugins = [initializer]
export * from '@/utils/store-accessors'

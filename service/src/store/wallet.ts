import { create } from 'zustand'

interface WalletState {
  address: string,
  loadAddress: ({ address }: { address: string }) => void,
  resetAddress: () => void
}

export const useWalletStore = create<WalletState>()((set) => ({
    address: "",
    loadAddress: ({ address }: { address: string }) => set({ address }),
    resetAddress: () => set({ address: "" }),
}))
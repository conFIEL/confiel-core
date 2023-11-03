import { Channel } from "pusher-js";
import { create } from 'zustand'

interface PusherState {
  instance: { channel: Channel, id: string },
  loadChannel: ({ channel, id }: { channel: Channel, id: string }) => void,
  resetChannel: () => void
}

export const useChannelStore = create<PusherState>()((set) => ({
  instance: null,
  loadChannel: ({ channel, id }: { channel: Channel, id: string }) => set({ instance: { channel, id } }),
  resetChannel: () => set({ instance: null }),
}))
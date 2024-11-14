import {create} from 'zustand';

type CandyStore = {
    candies: number;
    addCandy: () => void;
    removeCandy: () => void;
  };
export const useCandyStore = create<CandyStore>((set)  => ({
    candies: 0, // Nombre initial de bonbons
    addCandy: () => set((state: { candies: number; }) => ({ candies: state.candies + 1 })), // Ajoute un bonbon
    removeCandy: () => set((state: { candies: number; }) => ({ candies: state.candies - 1 })), // Retire un bonbon
  }));
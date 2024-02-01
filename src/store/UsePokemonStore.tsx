import { create } from "zustand";

import { Move, Pokemon } from "../types";

export type PokemonNames = "pikachu" | "eevee";
export type PokemonMoves = {
  [K in PokemonNames]?: Move[];
};
export const UsePokemonStore = create<{
  pokemonName: PokemonNames | null;
  frontUrl: string | null;
  backUrl: string | null;
  status: Pick<Pokemon, "stats"> | null;
  moves: PokemonMoves;
  setPokemonName: (pokemonName: PokemonNames) => void;
  setFrontUrl: (frontUrl: string | null) => void;
  setBackUrl: (backUrl: string | null) => void;
  setStatus: (v: Pick<Pokemon, "stats">) => void;
  setMoves: (v: PokemonMoves) => void;
  filterMoves: (pokemonName: PokemonNames, moveId: number) => void;
}>((set) => ({
  pokemonName: null,
  frontUrl: null,
  backUrl: null,
  status: null,
  moves: [],
  setPokemonName: (pokemonName) => set(() => ({ pokemonName })),
  setFrontUrl: (frontUrl) => set(() => ({ frontUrl })),
  setBackUrl: (backUrl) => set(() => ({ backUrl })),
  setStatus: (status) => set(() => ({ status })),
  setMoves: (moves) => set(() => ({ moves })),
  filterMoves: (pokemonName, moveId) =>
    set((state) => {
      const currentMoves = state.moves?.[pokemonName] || [];
      const newMoves = currentMoves.filter((move) => move.id !== moveId);
      return {
        moves: {
          ...state.moves,
          [pokemonName]: newMoves,
        },
      };
    }),
}));

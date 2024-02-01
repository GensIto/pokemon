export type Pokemon = {
  id: number;
  is_default: boolean;
  moves: {
    move: {
      name: string;
      url: string;
    };
    version_group_details: {
      level_learned_at: number;
      move_learn_method: {
        name: string;
        url: string;
      };
      version_group: {
        name: string;
        url: string;
      };
    }[];
  }[];
  name: string;
  species: {
    name: string;
    url: string;
  };
  sprites: {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_female: string | null;
    front_shiny: string | null;
    front_shiny_female: string | null;
  };
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};

export type Move = {
  id: number;
  accuracy: number;
  effect_chance: number | null;
  flavor_text_entries: Array<{
    language: {
      name: string;
      url: string;
    };
    name: string;
  }>;
  names: Array<{
    language: {
      name: string;
      url: string;
    };
    name: string;
  }>;
  power: number;
  pp: number;
  stat_changes: Array<{
    change: number;
    stat: {
      name: string;
      url: string;
    };
  }>;
  type: {
    name: string;
    url: string;
  };
};

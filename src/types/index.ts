export type CateDetailsType = {
  height: number;
  id: string;
  url: string;
  width: number;
  breeds: Breeds[];
};

export type Breeds = {
  name: string;
  url: string;
  id: string;
  life_span: string;
  origin: string;
  dog_friendly: number;
  energy_level: number;
  temperament: string;
  description: string;
  weight: {
    metric: string;
  };
};

export type CateListType = CateDetailsType[];

type SpeakersIcons = {
   id: number;
   icon: string;
};

type ButtonMore = {
   label: string;
   icon: string;
};

export type SpeakersItem = {
   id: number;
   title: string;
   subtitle: string;
   buttonUp: string;
   buttonMore: ButtonMore;
   icons: Array<SpeakersIcons>;
};

export type SpeakersItems = Array<SpeakersItem>;

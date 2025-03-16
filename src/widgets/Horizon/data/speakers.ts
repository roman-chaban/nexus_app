import { SpeakersItems } from "../types/speakers";

export const speakers: SpeakersItems = [
   {
      id: 1,
      title: "Speakers",
      subtitle:
         "Hear from global AI leaders, researchers, and entrepreneurs who are defining the future of artificial intelligence.",
      buttonUp: "/icons/speakers/arrow-up.svg",
      buttonMore: {
         label: "And more",
         icon: "/icons/speakers/arrow-up-white.svg",
      },
      icons: [
         {
            id: 1,
            icon: "/icons/speakers/first.svg",
         },
         {
            id: 2,
            icon: "/icons/speakers/second.svg",
         },
         {
            id: 3,
            icon: "/icons/speakers/third.svg",
         },
         {
            id: 4,
            icon: "/icons/speakers/fourth.svg",
         },
      ],
   },
];

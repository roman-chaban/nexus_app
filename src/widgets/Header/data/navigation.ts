import { PATHS } from "@/shared/enums/paths";

import { NavigationItems } from "../types/navigation";

export const navigation: NavigationItems = [
  {
    id: 1,
    label: "Home",
    href: PATHS.HOME,
  },
  {
    id: 2,
    label: "Schedule",
    href: PATHS.SCHEDULE,
  },
  {
    id: 3,
    label: "Speakers",
    href: PATHS.SPEAKERS,
  },
  {
    id: 4,
    label: "Tickets",
    href: PATHS.TICKETS,
  },
  {
    id: 5,
    label: "Venue",
    href: PATHS.VENUE,
  },
  {
    id: 6,
    label: "Sponsors",
    href: PATHS.SPONSORS,
  },
];

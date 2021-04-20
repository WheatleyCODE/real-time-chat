import Chat from "../components/Chat/Chat";
import Landing from "../components/Landing/Landing";
import Registration from "../components/Registration/Registration";
import { routes } from "../utils/consts";

export const publickRoutes = [
  {
    path: routes.REGISTRATION_ROUTE,
    Component: Registration
  },
  {
    path: routes.MAIN_PAGE_ROUTE,
    Component: Landing
  },
]

export const privateRoutes = [
  {
    path: routes.CHAT_ROUTE,
    Component: Chat,
  },
  {
    path: routes.MAIN_PAGE_ROUTE,
    Component: Landing
  },
]
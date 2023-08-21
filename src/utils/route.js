import Live from "./../Pages/Live";
import Device from "./../Pages/Device";
import Appliance from "./../Pages/Device/Appliance";
import SearchEntry from "./../Pages/SearchEntry";
import SearchQuery from "../Pages/SearchQuery";
import Insight from "./../Pages/Insight";
import CreateWidgetPage from "../Pages/CreateWidget";
import AddAppliance from "../Pages/AddAppliance";
import AddCamera from "../Pages/AddCamera";
import Settings from "../Pages/Settings";
import AddUser from "../Pages/AddUser";
import UserManage from "../Pages/UserManage";
import EditAppliance from "../Pages/EditAppliance";

import Story from "../Pages/Story";
import Case from "../Pages/Case";
import Alert from "../Pages/Alert";
import CreateAlert from "../Pages/CreateAlert";
import EditAlert from "../Pages/EditAlert";

const routes = {
  type1: [
    {
      path: "/live/:id",
      element: <Live />,
    },
    {
      path: "/device",
      element: <Device />,
    },
    {
      path: "/device/appliance",
      element: <Appliance />,
    },
    {
      path: "/search/entry",
      element: <SearchEntry />,
    },
    {
      path: "/search/query",
      element: <SearchQuery />,
    },
    {
      path: "/insight",
      element: <Insight />,
    },
    {
      path: "/registerAppliance",
      element: <AddAppliance />,
    },
    {
      path: "/addCamera",
      element: <AddCamera />,
    },
    {
      path: "/settings",
      element: <Settings />,
    },
    {
      path: "/addUser",
      element: <AddUser />,
    },
    {
      path: "/userManage",
      element: <UserManage />,
    },
    {
      path: "/editAppliance/:id",
      element: <EditAppliance />,
    },
    {
      path: "/createWidget",
      element: <CreateWidgetPage />,
    },
  ],
  type2: [
    {
      path: "/story",
      element: <Story />,
    },
    {
      path: "/case",
      element: <Case />,
    },
    {
      path: "/alert",
      element: <Alert />,
    },
    {
      path: "/createAlert",
      element: <CreateAlert />,
    },
    {
      path: "/editAlert/:id",
      element: <EditAlert />,
    },
  ],
  type3: [],
};

export default routes;

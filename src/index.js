import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./Store/Store";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import StudentPortal from "./Pages/StudentPortal";
import TeacherPortal from "./Pages/TeachersPortal";
import ParentPortal from "./Pages/ParentPortal";
import { Auth0Provider } from "@auth0/auth0-react";
import GetStarted from "./Pages/GetStarted";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import GetStartLayout from "./Components-Auth0/GetStartLayout";
import ShowProject from "./Pages/ShowProject";
import QueeryData from "./Componets-Queery/QueeryData";
import Fetched from "./Componets-Queery/Fetched";
import Product from "./Componets-Queery/Product";
const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();
const Router = createBrowserRouter([
  {
    path: "/",
    element: <ShowProject />,
  },
  {
    path: "/Auth0",
    element: <App />,
  },
  {
    path: "/React-queery",
    element: <QueeryData />,
    children: [
      {
        path: "/React-queery",
        element: <Fetched />,
      },
      {
        path: "/React-queery/:Productid",
        element: <Product />,
      },
    ],
  },

  {
    path: "/get-start",
    element: <GetStartLayout />,
    children: [
      {
        path: "/get-start/",
        element: <GetStarted />,
      },
    ],
  },
  {
    path: "/student",
    element: <StudentPortal />,
  },
  {
    path: "/teacher",
    element: <TeacherPortal />,
  },
  {
    path: "/parent",
    element: <ParentPortal />,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-xlh6twbv44bh6lfu.us.auth0.com"
        clientId="Xl24014zJnp4z8CO92o56VCCq3XXXhFh"
        authorizationParams={{
          redirect_uri: "http://localhost:3000/get-start",
        }}
      >
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Router} />
        </QueryClientProvider>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

// children: [
//   {
//     path: "/",
//     element: <App />,
//   },

// {
//   path: "/get-start",
//   element: <GetStartLayout />,
//   children: [
//     {
//       path: "/get-start/",
//       element: <GetStarted />,
//     },
//   ],
// },
// {
//   path: "/student",
//   element: <StudentPortal />,
// },
// {
//   path: "/teacher",
//   element: <TeacherPortal />,
// },
// {
//   path: "/parent",
//   element: <ParentPortal />,
// },
// ],

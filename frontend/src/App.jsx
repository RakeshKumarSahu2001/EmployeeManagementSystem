import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import RegisterPage from "./Pages/AuthPages/RegisterPage.jsx";
import { Provider } from "react-redux"
import EmployeeStore from "./Store/EmployeeStore.js"
import LoginPage from "./Pages/AuthPages/LoginPage.jsx";
import EmpRegPage from "./Pages/Employee/EmpRegPage.jsx";
import AllEmpPage from "./Pages/Employee/AllEmpPage.jsx";
import EditEmpPage from "./Pages/Employee/EditEmpPage.jsx";
import ProtectedRoutes from "./Utils/ProtectedRoutes.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <RegisterPage />
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/deshboard",
          element: <DashboardPage />
        },
        {
          path: "/employee/registration",
          element: (<ProtectedRoutes>
            <ProtectedRoutes>
              <EmpRegPage />
            </ProtectedRoutes>
          </ProtectedRoutes>)
        },
        {
          path: "/employee/all-employee",
          element: <ProtectedRoutes>
            <AllEmpPage />
          </ProtectedRoutes>
        },
        {
          path: "/employee/edit-employee/:id",
          element: <ProtectedRoutes>
            <EditEmpPage />
          </ProtectedRoutes>


        }
      ]
    }
  ])

  return (
    <>
      <Provider store={EmployeeStore}>
        <RouterProvider router={router} />
      </Provider>
    </>
  )
}

export default App

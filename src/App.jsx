import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ProgramPage from "./pages/ProgramPage"
import BlogPage from "./pages/BlogPage"
import CommunityPage from "./pages/CommunityPage"
import RouteLayout from "./components/layouts/RouteNavigation"
import { communitySignupForm } from "./components/communityForm/AirtableForm"

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RouteLayout/>}>
      <Route path="home" element={<HomePage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      <Route path="program" element={<ProgramPage/>}/>
      <Route path="blog" element={<BlogPage/>}/>
      <Route path="community" element={<CommunityPage/>} action={communitySignupForm}/>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

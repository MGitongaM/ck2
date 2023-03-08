import { NavLink, Outlet } from "react-router-dom"
import AirtableForm from "../communityForm/AirtableForm"

const RouteLayout = () => {
  return (
    <>
        <div className="">
            <nav className=" bg-communitybg border-gray-200 px-2 sm:px-4 py-2.5 ">
              <div className="container flex flex-wrap items-center justify-between mx-auto">
                <NavLink to="/" className="flex items-center">
                    <img src="/assets/Kinetic V2 purple with tagline 2.svg" className="h-auto  mr-3 sm:h-9" alt="kinetic Logo" />
                </NavLink>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
                    <li>
                      <NavLink to="home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="about" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" >About</NavLink>
                    </li>
                    <li>
                      <NavLink to="program" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Program</NavLink>
                    </li>
                    <li>
                      <NavLink to="blog" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Blog</NavLink>
                    </li>
                    <li>
                      <NavLink to="community" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Community</NavLink>
                    </li>
                    <li>
                      <NavLink to="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                        <AirtableForm/>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <main>
              <Outlet/>
            </main>
      </div>
    </>
  )
}

export default RouteLayout
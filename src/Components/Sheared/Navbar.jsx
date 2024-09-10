import { FaBookOpen } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "/bookHeaven.svg";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const links = (
    <div className="gap-2 justify-center items-center flex">
      <li>
        <Link
          to={"/addBook"}
          className="btn btn-outline border-deepGreen text-deepGreen hover:text-themeColor font-bold hover:bg-deepGreen"
        >
          Add Book
        </Link>
      </li>
      <li>
        <Link
          to={"/allBooks"}
          className="btn btn-outline border- text-deepGreen hover:text-themeColor font-bold hover:bg-deepGreen"
        >
          All Books
        </Link>
      </li>
      <li>
        <Link
          to={`/borrowedBook/${user?.email}`}
          className="btn btn-outline border-deepGreen text-deepGreen hover:text-themeColor font-bold hover:bg-deepGreen"
        >
          Borrowed Books
        </Link>
      </li>
    </div>
  );

  return (
    <div className="navbar relative bg-themeColor lg:pr-12">
      <div className=" navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost z-[30] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to={"/"}
          className="top-0 bottom-0 left-0 h-full border-2 flex items-center gap-3 px-4 rounded-md rounded-tr-3xl lg:rounded-tr-[42px] absolute  bg-deepGreen text-themeColor text-xl"
        >
          <img className="h-12 w-16 bg-deepGreen" src={logo} alt="" />{" "}
          <span className="font-merriWeather">BookHeaven</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="flex items-center gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-[10] mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[10] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button onClick={logoutUser}>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        )}
        {!user && (
          <div>
            <Link
              to={"/login"}
              className="btn btn-outline border-deepGreen text-deepGreen hover:text-themeColor font-bold hover:bg-deepGreen"
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

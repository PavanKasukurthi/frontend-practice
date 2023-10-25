import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer p-16 flex flex-col">
      <h1 className="text-5xl font-semibold">Ableton</h1>
      <main className="">
        {/* COLUMN 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* 1 */}
          <div className="social ">
            {/* ABOUT LINKS */}
            <ul className="text-lg  mb-6">
              <li>
                <Link to="/live">Register Live or Push </Link>
              </li>
              <li>
                <Link to="/about">About Ableton</Link>
              </li>
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
            </ul>
            {/* SOCIAL ICONS */}
          </div>

          {/* 2 */}
          <div className="mb-6">
            <h3 className="text-lg font-bold">Education</h3>
            <ul className="text-lg">
              <li>
                <Link>Offers for Students and Teachers</Link>
              </li>
              <li>
                <Link>Ableton for the classroom</Link>
              </li>
              <li>
                <Link>Ableton for Colleges and Universities</Link>
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h3 className="text-lg font-bold">Sign up to our newsletter</h3>
            <p className="text-lg">
              Enter your email address to stay up to date with the latest
              offers, tutorials, downloads, surveys and more.
            </p>

            <label htmlFor="email">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full lg:px-2 py-4 mt-2 bg-slate-100"
                placeholder="Enter email address"
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 w-full">
          {/*1*/}
          <div className="community">
            <h3 className="text-lg font-bold mt-6">Community</h3>
            <ul className="text-lg">
              <li>
                <Link>Find Ableton User Groups</Link>
              </li>
              <li>
                <Link>Find Certified Training</Link>
              </li>
              <li>
                <Link>Become a Certified Trainer</Link>
              </li>
            </ul>
          </div>

          {/* 2 */}
          <div className="col-span-2">
            <h3 className="text-lg font-bold mt-6">Language and Location</h3>
          </div>

          {/* 3 */}
          <div></div>
        </div>
      </main>
    </footer>
  )
}
export default Footer

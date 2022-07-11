import Link from 'next/link'

export default function login() {
  return (
    <section className="h-screen">
      <div className="h-full px-6 text-gray-800">
        <div className="flex flex-wrap items-center justify-center h-full xl:justify-center lg:justify-between g-6">
          <div className="mb-12 grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 md:mb-0">
            {/* <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            /> */}
          </div>
          <div className="mb-12 xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 md:mb-0">
            <form>
              <div className="mb-6">
                <input
                  type="text"
                  className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded-lg form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-6">
                <input
                  type="password"
                  className="block w-full px-4 py-2 m-0 text-xl font-normal text-gray-700 transition ease-in-out bg-white border border-gray-300 border-solid rounded-lg form-control bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleFormControlInput2"
                  placeholder="Password"
                />
              </div>

              <div className="flex items-center justify-between mb-6">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="float-left w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-gray-700 checked:border-blue-600 focus:outline-none"
                    id="exampleCheck2"
                  />
                  <label className="inline-block text-gray-800 form-check-label">
                    Remember me
                  </label>
                </div>
                <Link href="/reset-password">
                  <span className="text-red-600 cursor-pointer">
                    Forgot password?
                  </span>
                </Link>
              </div>

              <div className="text-center lg:text-left">
                <button
                  type="button"
                  className="inline-block py-3 text-sm font-medium leading-snug text-white uppercase transition duration-150 ease-in-out bg-gray-700 rounded-lg shadow-md px-7 hover:bg-gray-800 hover:shadow-lg focus:bg-gray-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg">
                  Login
                </button>
                <p className="pt-1 mt-2 mb-0 text-sm font-semibold">
                  Dont have an account? &nbsp;
                  <Link href="/signup">
                    <span className="text-red-600 transition duration-200 ease-in-out cursor-pointer hover:text-red-700 focus:text-red-700">
                      Register
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

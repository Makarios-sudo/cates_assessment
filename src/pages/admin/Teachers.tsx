// import React from 'react'

import { Link } from "react-router-dom"

const Teachers = () => {
  return (
    <div className="teachers_container">

      <div className="onboarding_teachers">
        <h1>All Teachers (1000)</h1>
        <div className="searchField">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full max-w-xs searchInput"
          />
          <button className="btn btn-outline btn-success">
            <Link to={"/admin/onboard_teachers"} className="onboarding_teacher_link">Onboard New Teacher</Link>
          </button>
        </div>

      </div> <hr />

      <div className=" overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Name</th>
              <th>Class(es)</th>
              <th>arm(s)</th>
              <th>subject(s)</th>

              <th></th>
            </tr>
          </thead>
          <tbody>

            <tr>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component" className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Primary 1 <br />
                Junior School 3
                <br />
              </td>
              <td>Alpha</td>
              <th>
                <span className="btn btn-ghost btn-xs">Maths,<br /> English <br /> Basic Science</span>
              </th>
              <td>
                <Link to={"/admin/teacher"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component" className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Primary 6

              </td>
              <td>Beta</td>
              <th>
                <span className="btn btn-ghost btn-xs">Agriculture</span>
              </th>
              <td>
                <button className="btn btn-outline btn-success">details</button>
              </td>
            </tr>

            <tr>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component" className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td> Senior School 1 <br /> Senior School 2 <br /> Senior School 3 </td>
              <td>Physic</td>
              <td>Alpha <br /> Beta</td>
              <td>
                <button className="btn btn-outline btn-success">details</button>
              </td>
            </tr>

            <tr>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component" className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td> Junior School 1 <br /> Senior School 2 </td>
              <td>Alpha <br /> Beta</td>
              <td>Biology</td>
              <td>
                <button className="btn btn-outline btn-success">details</button>
              </td>
            </tr>

            <tr>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component" className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td> Primary 5 </td>
              <td>Alpha <br /> Beta</td>
              <td>Social Studies</td>
              <td>
                <button className="btn btn-outline btn-success">details</button>
              </td>
            </tr>

            <tr>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component" 
                        className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Primary 1 <br />
                Junior School 3
                <br />
              </td>
              <td>Alpha</td>
              <th>
                <span className="btn btn-ghost btn-xs">Maths,<br /> English <br /> Basic Science</span>
              </th>
              <td>
                <button className="btn btn-outline btn-success">details</button>
              </td>
            </tr>

            <tr>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component" className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Primary 6

              </td>
              <td>Beta</td>
              <th>
                <span className="btn btn-ghost btn-xs">Agriculture</span>
              </th>
              <td>
                <button className="btn btn-outline btn-success">details</button>
              </td>
            </tr>

            <tr>

              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component" className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td> Senior School 1 <br /> Senior School 2 <br /> Senior School 3 </td>
              <td>Physic</td>
              <td>Alpha <br /> Beta</td>
              <td>
                <button className="btn btn-outline btn-success">details</button>
              </td>
            </tr>

          </tbody>


        </table>
      </div>

    </div>
  )
}

export default Teachers
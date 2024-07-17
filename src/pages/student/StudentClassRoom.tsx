// import React from 'react'

import { Link } from "react-router-dom"

const StudentClassRoom = () => {
  return (
    <div className="teachers_container">

      <div className="onboarding_teachers">
        <h1>ClassRoom Subjects (15)</h1>
        <div className="searchField">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full max-w-xs searchInput"
          />
     
        </div>

      </div> <hr />

      <div className=" overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Name</th>
              <th>Assigned Teacher</th>
              <th>Code</th>
              <th>Topic Count</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td> Mathematics </td>
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
                  </div>
                </div>
              </td>
              <td> Math 101</td>
              <td> 20</td>
              <td>
                <Link to={"/student/subject_topics"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> English </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                        className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td> Eng 102</td>
              <td> 15</td>
              <td>
                <Link to={"/student/subject_topics"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Chemistry </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
                        className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Chem 101</td>
              <td> 10</td>
              <td>
                <Link to={"/student/subject_topics"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Physics </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                        className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td> Phy 101</td>
              <td>16</td>
              <td>
                <Link to={"/student/subject_topics"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Political Science </td>
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
                  </div>
                </div>
              </td>
              <td> Pol 101</td>
              <td>12</td>
              <td>
                <Link to={"/student/subject_topics"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Mathematics </td>
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
                  </div>
                </div>
              </td>
              <td> Math 101</td>
              <td> 20</td>
              <td>
                <Link to={"/student/subject_topics"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> English </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                        className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td> Eng 102</td>
              <td> 15</td>
              <td>
                <Link to={"/student/subject_topics"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Chemistry </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
                        className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>Chem 101</td>
              <td> 10</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Physics </td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                        className="image_profile"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td> Phy 101</td>
              <td>16</td>
              <td>
                <Link to={"/student/subject_topics"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Political Science </td>
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
                  </div>
                </div>
              </td>
              <td> Pol 101</td>
              <td>12</td>
              <td>
                <Link to={"/student/subject_topics"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

          </tbody>


        </table>
      </div>

    </div>
  )
}

export default StudentClassRoom

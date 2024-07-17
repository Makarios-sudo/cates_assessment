// import React from 'react'

import { Link } from "react-router-dom"

const ClassRooms = () => {
  return (
    <div className="teachers_container">

      <div className="onboarding_teachers">
        <h1>All ClassRooms (50)</h1>
        <div className="searchField">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full max-w-xs searchInput"
          />
          <button className="btn btn-outline btn-success">
            <Link to={"/admin/onboard_teachers"} className="onboarding_teacher_link">Create New Classroom</Link>
          </button>
        </div>

      </div> <hr />

      <div className=" overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Name</th>
              <th>Level</th>
              <th>arm</th>
              <th>Assigned Teacher</th>
              <th>Students Count</th>
              <th>Subjects Count</th>
              <th>Average Performance</th>

              <th></th>
            </tr>
          </thead>
          <tbody>

            <tr> 
              <td> Nusery 1 </td>
              <td>Nusery School</td>
              <td> Alpha</td>
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
              <td> 35</td>
              <td>15</td>
              <td>45%</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Nusery 1 </td>
              <td>Nusery School</td>
              <td> Beta</td>
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
              <td> 50</td>
              <td>35</td>
              <td>75%</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Nusery 2 </td>
              <td>Nusery School</td>
              <td> Alpha</td>
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
              <td> 35</td>
              <td>15</td>
              <td>45%</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Nusery 2 </td>
              <td>Nusery School</td>
              <td> Beta</td>
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
              <td> 25</td>
              <td>10</td>
              <td>95%</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Primary 1 </td>
              <td>Primary School</td>
              <td> Alpha</td>
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
              <td> 35</td>
              <td>15</td>
              <td>45%</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Primary 2 </td>
              <td>Primary School</td>
              <td> Alpha</td>
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
              <td> 50</td>
              <td>15</td>
              <td>60%</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Primary 3 </td>
              <td>Primary School</td>
              <td> Alpha</td>
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
              <td> 55</td>
              <td>25</td>
              <td>85%</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Primary 4 </td>
              <td>Primary School</td>
              <td> Alpha</td>
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
              <td> 76</td>
              <td>40</td>
              <td>95%</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Primary 5 </td>
              <td>Primary School</td>
              <td> Alpha</td>
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
              <td> 35</td>
              <td>15</td>
              <td>45%</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Primary 6 </td>
              <td>Primary School</td>
              <td> Alpha</td>
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
              <td> 50</td>
              <td>15</td>
              <td>60%</td>
              <td>
                <Link to={"/admin/classroom"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>



          </tbody>


        </table>
      </div>

    </div>
  )
}

export default ClassRooms
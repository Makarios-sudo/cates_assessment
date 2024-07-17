// import React from 'react'

import { Link } from "react-router-dom"

const Subjects = () => {
  return (
    <div className="teachers_container">

      <div className="onboarding_teachers">
        <h1>All Subjects (70)</h1>
        <div className="searchField">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full max-w-xs searchInput"
          />
          <button className="btn btn-outline btn-success">
            <Link to={"/admin/onboard_teachers"} className="onboarding_teacher_link">Create New Subject</Link>
          </button>
        </div>

      </div> <hr />

      <div className=" overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>

              <th>Subject Name</th>
              <th>Subject Code</th>
              <th>Level</th>
              <th>Assigned Teacher</th>
              <th>Topics Count</th>

              <th></th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td> Mathematics </td>
              <td>Maths 001</td>
              <td> Nusery School</td>
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
              <td>
                <Link to={"/admin/subject"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Mathematics </td>
              <td>Maths 101</td>
              <td> Primary School</td>
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
             
              <td>
                <Link to={"/admin/subject"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> English Language </td>
              <td>Eng 001</td>
              <td> Nusery School</td>
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
              <td> 15</td>
              <td>
                <Link to={"/admin/subject"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> English Language </td>
              <td>Eng 101</td>
              <td> Primary School</td>
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
              <td> 12</td>
              
              <td>
                <Link to={"/admin/subject"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Verbal Reasoning </td>
              <td>verbal 001</td>
              <td> Nusery School</td>
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
              <td> 20</td>
              
              <td>
                <Link to={"/admin/subject"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td>Quantitative Reasoning </td>
              <td>Quan 001</td>
              <td> Nusery School</td>
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
              <td> 20</td>
             
              <td>
                <Link to={"/admin/subject"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Elementary Sciences </td>
              <td> Elem 110</td>
              <td> Primary School</td>
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
              <td>
                <Link to={"/admin/subject"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Agricultural Science </td>
              <td>Agric 101</td>
              <td> Primary School</td>
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
              <td> 16</td>
              
              <td>
                <Link to={"/admin/subject"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Food and Nutrition</td>
              <td>Food 101</td>
              <td> Primary School</td>
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
              <td> 19</td>
              <td>
                <Link to={"/admin/subject"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>

            <tr>
              <td> Health Education </td>
              <td>Health 101</td>
              <td> Primary School</td>
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
              <td> 15</td>
              
              <td>
                <Link to={"/admin/subject"}  > <button className="btn btn-outline btn-success">details</button> </Link>
              </td>
            </tr>



          </tbody>


        </table>
      </div>

    </div>
  )
}

export default Subjects
// import React from 'react'

import { Link } from "react-router-dom"

const TeacherGetAssignment = () => {
  return (
    <div className="teachers_container">

      <div className="teacher_assignment">

        <div className="teacher_assignment_details">
          <h1>Biology </h1>
          <div className="teacher_assignment_detail">
            <h6><b>Respiratory System</b> || </h6>
            <h6><b>Start Time: 02-02-2024</b> || <b> End Time: 12-02-2024</b></h6>
          </div>
        </div>

        <div className="teacher_assignments_actions">
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
              <th>Picture</th>
              <th>Full Name</th>
              <th>class</th>
              <th>arm</th>
              <th>Submitted at</th>
              <th>Average Performance</th>

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
                        alt="Avatar Tailwind CSS Component"
                        className="image_profile"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td> Harry Potter </td>
              <td> Junior School 1</td>
              <td> Alpha</td>
              <td> 05-12-2024</td>
              <td>---</td>
              <td>
                <Link to={"/teacher/grade_assignment"}  > <button className="btn btn-outline btn-success">Grade</button> </Link>
              </td>
            </tr>

            <tr>
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
                </div>
              </td>
              <td> Harry Potter </td>
              <td> Junior School 1</td>
              <td> Alpha</td>
              <td> 05-12-2024</td>
              <td>---</td>
              <td>
                <Link to={"/teacher/grade_assignment"}  > <button className="btn btn-outline btn-success">Grade</button> </Link>
              </td>
            </tr>

            <tr>
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
                </div>
              </td>
              <td> Harry Potter </td>
              <td> Junior School 1</td>
              <td> Alpha</td>
              <td> 05-12-2024</td>
              <td>---</td>
              <td>
                <Link to={"/teacher/grade_assignment"}  > <button className="btn btn-outline btn-success">Grade</button> </Link>
              </td>
            </tr>

            <tr>

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
                </div>
              </td>
              <td> Harry Potter </td>
              <td> Junior School 1</td>
              <td> Alpha</td>
              <td> 05-12-2024</td>
              <td>---</td>
              <td>
                <Link to={"/teacher/grade_assignment"}  > <button className="btn btn-outline btn-success">Grade</button> </Link>
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
                </div>
              </td>
              <td> Harry Potter </td>
              <td> Junior School 1</td>
              <td> Alpha</td>
              <td> 05-12-2024</td>
              <td>---</td>
              <td>
                <Link to={"/teacher/grade_assignment"}  > <button className="btn btn-outline btn-success">Grade</button> </Link>
              </td>
            </tr>

            <tr>
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
                </div>
              </td>
              <td> Harry Potter </td>
              <td> Junior School 1</td>
              <td> Alpha</td>
              <td> 05-12-2024</td>
              <td>---</td>
              <td>
                <Link to={"/teacher/grade_assignment"}  > <button className="btn btn-outline btn-success">Grade</button> </Link>
              </td>
            </tr>

            <tr>
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
                </div>
              </td>
              <td> Harry Potter </td>
              <td> Junior School 1</td>
              <td> Alpha</td>
              <td> 05-12-2024</td>
              <td>---</td>
              <td>
                <Link to={"/teacher/grade_assignment"}  > <button className="btn btn-outline btn-success">Grade</button> </Link>
              </td>
            </tr>

            <tr>
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
                </div>
              </td>
              <td> Harry Potter </td>
              <td> Junior School 1</td>
              <td> Alpha</td>
              <td> 05-12-2024</td>
              <td>---</td>
              <td>
                <Link to={"/teacher/grade_assignment"}  > <button className="btn btn-outline btn-success">Grade</button> </Link>
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
                </div>
              </td>
              <td> Harry Potter </td>
              <td> Junior School 1</td>
              <td> Alpha</td>
              <td> 05-12-2024</td>
              <td>---</td>
              <td>
                <Link to={"/teacher/grade_assignment"}  > <button className="btn btn-outline btn-success">Grade</button> </Link>
              </td>
            </tr>

            <tr>
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
                </div>
              </td>
              <td> Harry Potter </td>
              <td> Junior School 1</td>
              <td> Alpha</td>
              <td> 05-12-2024</td>
              <td>---</td>
              <td>
                <Link to={"/teacher/grade_assignment"}  > <button className="btn btn-outline btn-success">Grade</button> </Link>
              </td>
            </tr>



          </tbody>


        </table>
      </div>

    </div>
  )
}

export default TeacherGetAssignment

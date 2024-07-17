// import React from 'react'

// import { Link } from "react-router-dom"

const Classroom = () => {
  return (
    <div className="classroom_details">

      <div className="classroom_details_header">
        <h1>Nusery 1</h1>
        <h6>  <b>Level:</b> Nusery School Level</h6>
        <h6> <b>Arm:</b> Alpha</h6>
        <h6> <b>Assigned Teacher:</b> Hart Hagerty
        </h6>
      </div>

      <div className="classroom_student_details">

        <div className="classroom_student">
          <h5><b>Students(45)</b></h5>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full max-w-xs searchInput"
          />
        </div>

        <div className=" overflow-x-auto">
          <table className="table">

            <thead>
              <tr>

                <th>Name</th>
                <th>avatar</th>
                <th>Gender</th>
                <th>Average Performance</th>

                <th></th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td> Michael Cole </td>
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

                    </div>
                  </div>
                </td>
                <td> Male</td>
                <td>45%</td>

              </tr>

              <tr>
                <td> Hercules Finsland </td>
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

                    </div>
                  </div>
                </td>
                <td> Female</td>
                <td>45%</td>

              </tr>

              <tr>
                <td> Esther Price </td>
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

                    </div>
                  </div>
                </td>
                <td> Female</td>
                <td>45%</td>

              </tr>

              <tr>
                <td> Dorris Henry </td>
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

                    </div>
                  </div>
                </td>
                <td> Femaale</td>
                <td>45%</td>

              </tr>






            </tbody>

          </table>
        </div>



      </div>


      <div className="classroom_student_details">

        <div className="classroom_student">
          <h5><b>Subjects(20)</b></h5>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full max-w-xs searchInput"
          />
        </div>

        <div className=" overflow-x-auto">
          <table className="table">

            <thead>
              <tr>

                <th>Name</th>
                <th>Assigned Teacher</th>
                <th>Code</th>
                <th>Topic Counts</th>

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

                    </div>
                  </div>
                </td>
                <td> Maths 102</td>
                <td>12</td>

              </tr>

              <tr>
                <td> English Language </td>
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

                    </div>
                  </div>
                </td>
                <td> Eng 101</td>
                <td>15</td>

              </tr>

              <tr>
                <td> Social Science </td>
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

                    </div>
                  </div>
                </td>
                <td> Soc 001</td>
                <td>12</td>

              </tr>

              <tr>
                <td> Political Science </td>
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

                    </div>
                  </div>
                </td>
                <td> Pol 105</td>
                <td>15</td>

              </tr>






            </tbody>

          </table>
        </div>



      </div>



    </div>
  )
}

export default Classroom
// import React from 'react'

const Teacher = () => {
  return (
    <div className="teacher_container">

      <div className=" teacher_heading">
        <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
          alt="Avatar Tailwind CSS Component"
          className="teacher_image"
        />
        <h1>Mr Hart Hagerty</h1>

      </div>

      <div className="teacher_class_assigned">

        <div>
          <h1> Class Assigned</h1>
          <h5> Primary4 </h5>
        </div>

        <div>
          <button className="btn btn-outline btn-success">Edit</button>
        </div>
      </div>

      <div>
        <h1>Total Number of Students in Class</h1>
        <h5> 35</h5>
      </div>

      <div>
        <h1>Average Class Performances</h1>
        <h5>50%</h5>
      </div>

      <div>
        <h1>Subjects Assigned</h1>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Arms</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Mathematics</td>
                <td>Primary 1</td>
                <td> <button className="btn btn-outline btn-success">Edit</button></td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>English</td>
                <td>Primary 2</td>
                <td><button className="btn btn-outline btn-success">Edit</button></td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Basic Science</td>
                <td>Primary 3</td>
                <td><button className="btn btn-outline btn-success">Edit</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default Teacher
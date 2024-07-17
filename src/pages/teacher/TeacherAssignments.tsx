// import React from 'react'

import { Link } from "react-router-dom"

const TeacherAssignments = () => {
  return (

    <div className="teacher_assignments_container">

      <div className="teacher_assignments">

        <h2><b>All Assignments(200)</b></h2>
        <div className="teacher_assignments_actions">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full max-w-xs searchInput"
          />
          <button className="btn btn-outline btn-success">
            <Link to={"/teacher/new_assignment"} className="teacher_create_new">New Assignment</Link>
          </button>
        </div>
      </div>

      <div className=" overflow-x-auto">
        <table className="table">

          <thead>
            <tr>

              <th>Subjects</th>
              <th>Topic</th>
              <th> Question Count</th>
              <th>Class</th>
              <th> Duration </th>
              <th>Start Date</th>
              <th>End Date</th>

              <th></th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td> Biology </td>
              <td> Respiratory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Force and Power</td>
              <td>20</td>
              <td> Senior School 2 Beta </td>
              <td>1hr</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Reproductory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Skeleton</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Osmosic</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Respiratory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Force and Power</td>
              <td>20</td>
              <td> Senior School 2 Beta </td>
              <td>1hr</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Reproductory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Skeleton</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Osmosic</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>


            <tr>
              <td> Biology </td>
              <td> Respiratory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Force and Power</td>
              <td>20</td>
              <td> Senior School 2 Beta </td>
              <td>1hr</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Reproductory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Skeleton</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Osmosic</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-07-2024 </td>
              <td> 15-07-2024 </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
    
  )
}

export default TeacherAssignments

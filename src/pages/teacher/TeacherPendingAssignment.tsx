// import React from 'react'

import { Link } from "react-router-dom"

const TeacherPendingAssignment = () => {
  return (

    <div className="teacher_assignments_container">

      <div className="teacher_assignments">

        <h2><b>Pending Assignments(10)</b></h2>
        <div className="teacher_assignments_actions">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-accent w-full max-w-xs searchInput"
          />

        </div>
      </div>

      <div className=" overflow-x-auto">
        <table className="table">

          <thead>
            <tr>

              <th>Subjects</th>
              <th>Topic</th>
              <th> Question Count</th>
              <th> Question Type</th>
              <th>Class</th>
              <th> Duration </th>
              <th>Start Date</th>
              <th></th>

              <th></th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td> Biology </td>
              <td> Respiratory System</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Force and Power</td>
              <td>20</td>
              <td>German</td>
              <td> Senior School 2 Beta </td>
              <td>1hr</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Reproductory System</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>

              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Skeleton</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Osmosic</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Respiratory System</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Force and Power</td>
              <td>20</td>
              <td>German</td>
              <td> Senior School 2 Beta </td>
              <td>1hr</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Reproductory System</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>

              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Skeleton</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Osmosic</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Respiratory System</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Force and Power</td>
              <td>20</td>
              <td>German</td>
              <td> Senior School 2 Beta </td>
              <td>1hr</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Reproductory System</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>

              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Skeleton</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>

              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Osmosic</td>
              <td>25</td>
              <td>German</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-10-2024 </td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/teacher/assignment_questions"} className="teacher_create_new">Edit</Link>
                </button>
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  )
  
}

export default TeacherPendingAssignment

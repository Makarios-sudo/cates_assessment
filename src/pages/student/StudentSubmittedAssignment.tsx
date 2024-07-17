// import React from 'react'

import { Link } from "react-router-dom"

const StudentSubmittedAssignment = () => {
  return (
    <div className="teacher_assignments_container">

      <div className="teacher_assignments">

        <h2><b>Submitted Assignments(120)</b></h2>
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
              <th>Class</th>
              <th> Duration </th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Score</th>
              <th></th>

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
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>45/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Force and Power</td>
              <td>20</td>
              <td> Senior School 2 Beta </td>
              <td>1hr</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>45/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Reproductory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>45/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Skeleton</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>45/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Osmosic</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>75/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Respiratory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>75/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Force and Power</td>
              <td>20</td>
              <td> Senior School 2 Beta </td>
              <td>1hr</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>75/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Reproductory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>75/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Skeleton</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>45/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Osmosic</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>45/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Respiratory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>45/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Force and Power</td>
              <td>20</td>
              <td> Senior School 2 Beta </td>
              <td>1hr</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>45/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Reproductory System</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>45/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Biology </td>
              <td> Skeleton</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>45/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

            <tr>
              <td> Physic </td>
              <td> Osmosic</td>
              <td>25</td>
              <td> Junior School 1 alpha </td>
              <td>1:30min</td>
              <td> 12-02-2024 </td>
              <td> 15-03-2024 </td>
              <td>75/100%</td>
              <td>
                <button className="btn btn-outline btn-success">
                  <Link to={"/student/assignment_report"} className="teacher_create_new">Details</Link>
                </button>
              </td>
            </tr>

          </tbody>

        </table>
      </div>

    </div>
  )
}

export default StudentSubmittedAssignment

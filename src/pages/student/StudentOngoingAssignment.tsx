// import React from 'react'

import { Link } from "react-router-dom"

const StudentOngoingAssignment = () => {
  return (
    <div className="teacher_assignments_container">

    <div className="teacher_assignments">

      <h2><b>Ongoing Assignments(20)</b></h2>
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
            <th> Duration </th>
            <th>Start Date</th>
            <th>End Date</th>
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
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Physic </td>
            <td> Force and Power</td>
            <td>20</td>
            <td>German</td>
            
            <td>1hr</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Biology </td>
            <td> Reproductory System</td>
            <td>25</td>
            <td>German</td>
           
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Biology </td>
            <td> Skeleton</td>
            <td>25</td>
            <td>German</td>
            
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Physic </td>
            <td> Osmosic</td>
            <td>25</td>
            <td>German</td>
            
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Biology </td>
            <td> Respiratory System</td>
            <td>25</td>
            <td>German</td>
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Physic </td>
            <td> Force and Power</td>
            <td>20</td>
            <td>German</td>
            <td>1hr</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Biology </td>
            <td> Reproductory System</td>
            <td>25</td>
            <td>German</td>
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Biology </td>
            <td> Skeleton</td>
            <td>25</td>
            <td>German</td>
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Physic </td>
            <td> Osmosic</td>
            <td>25</td>
            <td>German</td>
            
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Biology </td>
            <td> Respiratory System</td>
            <td>25</td>
            <td>German</td>
            
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Physic </td>
            <td> Force and Power</td>
            <td>20</td>
            <td>German</td>
           
            <td>1hr</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Biology </td>
            <td> Reproductory System</td>
            <td>25</td>
            <td>German</td>
            
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Biology </td>
            <td> Skeleton</td>
            <td>25</td>
            <td>German</td>
           
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>

            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

          <tr>
            <td> Physic </td>
            <td> Osmosic</td>
            <td>25</td>
            <td>German</td>
            <td>1:30min</td>
            <td> 12-02-2024 </td>
            <td> 15-03-2024 </td>
            
            <td>
              <button className="btn btn-outline btn-success">
                <Link to={"/student/start_assignment"} className="teacher_create_new">Start</Link>
              </button>
            </td>
          </tr>

        </tbody>

      </table>
    </div>

  </div>
  )
}

export default StudentOngoingAssignment

// import React from 'react'
import React from "react"
import { Route, Routes } from "react-router-dom"
import StudentAssignments from "./student/StudentAssignments"
import StudentClassRoom from "./student/StudentClassRoom"
import StudentDashboard from "./student/StudentDashboard"
import StudentGetAssignment from "./student/StudentGetAssignment"
import StudentMissedAssignment from "./student/StudentMissedAssignment"
import StudentOngoingAssignment from "./student/StudentOngoingAssignment"
import StudentPendingAssignment from "./student/StudentPendingAssignment"
import StudentSubmittedAssignment from "./student/StudentSubmittedAssignment"
import StudentStartAssignment from "./student/StudentStartAssignment"
import StudentClassMate from "./student/StudentClassMate"
import StudentSubjectTopics from "./student/StudentSubjectTopics"
import StudentAssignmentReport from "./student/StudentAssignmentReport"


const StudentRegisteredPages = () => {
    return (
        <React.Fragment>

            <Routes>
                <Route path='/student/dashboard' element={<StudentDashboard />} />
                <Route path='/student/assignments' element={<StudentAssignments />} />
                <Route path='/student/submitted_assignments' element={<StudentSubmittedAssignment />} />
                <Route path='/student/grade_assignment' element={<StudentClassRoom />} />
                <Route path='/student/ongoing_assignments' element={<StudentOngoingAssignment />} />
                <Route path='/student/pending_assignments' element={<StudentPendingAssignment />} />
                <Route path='/student/start_assignment' element={<StudentStartAssignment />} />
                <Route path='/student/get_assignment' element={<StudentGetAssignment />} />
                <Route path='/student/missed_assignment' element={<StudentMissedAssignment />} />
                <Route path='/student/classroom' element={<StudentClassRoom />} />
                <Route path='/student/class_mates' element={<StudentClassMate />} />
                <Route path='/student/subject_topics' element={<StudentSubjectTopics />} />
                <Route path='/student/assignment_report' element={<StudentAssignmentReport />} />
            </Routes>

        </React.Fragment>
    )
}

export default StudentRegisteredPages

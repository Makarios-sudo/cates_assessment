import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TeacherDashboard from './teacher/TeacherDashboard'
import TeacherAssignments from './teacher/TeacherAssignments'
import TeacherGradeAssignment from './teacher/TeacherGradeAssignment'
import TeacherOngoingAssignment from './teacher/TeacherOngoingAssignment'
import TeacherPendingAssignment from './teacher/TeacherPendingAssignment'
import TeacherSetAssignment from './teacher/TeacherSetAssignment'
import TeacherGetAssignment from './teacher/TeacherGetAssignment'
import TeacherEditAssignment from './teacher/TeacherEditAssignment'
import TeacherSubmittedAssignment from './teacher/TeacherSubmittedAssignment'
import TeacherQuestions from './teacher/TeacherQuestions'
import TeacherReports from './teacher/TeacherReports'
import TeacherAnalytics from './teacher/TeacherAnalytics'

const TeacherRegisteredPages = () => {
  return (
    <React.Fragment>

      <Routes>
        <Route path='/teacher/dashboard' element={<TeacherDashboard />} />
        <Route path='/teacher/assignments' element={<TeacherAssignments />} />
        <Route path='/teacher/submitted_assignments' element={<TeacherSubmittedAssignment />} />
        <Route path='/teacher/grade_assignment' element={<TeacherGradeAssignment />} />
        <Route path='/teacher/ongoing_assignments' element={<TeacherOngoingAssignment />} />
        <Route path='/teacher/pending_assignments' element={<TeacherPendingAssignment />} />
        <Route path='/teacher/new_assignment' element={<TeacherSetAssignment />} />
        <Route path='/teacher/edit_assignment' element={<TeacherEditAssignment />} />
        <Route path='/teacher/get_assignment' element={<TeacherGetAssignment />} />
        <Route path='/teacher/assignment_questions' element={<TeacherQuestions />} />
        <Route path='/teacher/teacher_reports' element={<TeacherReports />} />
        <Route path='/teacher/teacher_analytics' element={<TeacherAnalytics />} />
      </Routes>

    </React.Fragment>
  )
}

export default TeacherRegisteredPages

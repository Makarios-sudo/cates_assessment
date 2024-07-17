import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AdminDashboard from './admin/AdminDashboard'
import Teachers from './admin/Teachers'
import Teacher from './admin/Teacher'
import Students from './admin/Students'
import Student from './admin/Student'
import ClassRooms from './admin/ClassRooms'
import Classroom from './admin/Classroom'
import Subjects from './admin/Subjects'
import Subject from './admin/Subject'
import Topics from './admin/Topics'
import Analytics from './admin/Analytics'
import Complaints from './admin/Complaints'


const RegisteredPages = () => {
  return (
    <React.Fragment>
        <Routes>
            {/* For School Admins */}
            <Route path='/admin/dashboard' element={<AdminDashboard/>} />
            <Route path='admin/teachers' element={<Teachers/>} />
            <Route path='/admin/teacher' element={<Teacher/>} />
            <Route path='/admin/students' element={<Students/>} />
            <Route path='/admin/student' element={<Student/>} />
            <Route path='/admin/classrooms' element={<ClassRooms/>} />
            <Route path='/admin/classroom' element={<Classroom/>} />
            <Route path='/admin/subjects' element={<Subjects/>} />
            <Route path='/admin/subject' element={<Subject/>} />
            <Route path='/admin/topics' element={<Topics/>} />
            <Route path='/admin/analytics' element={<Analytics/>} />
            <Route path='/admin/complaint' element={<Complaints/>} />

            
        </Routes>
    </React.Fragment>
  )
}

export default RegisteredPages
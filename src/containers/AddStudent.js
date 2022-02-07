import React ,{useEffect, useState} from 'react';
import Menu from '../components/Menu';
import { addStudent, getStudents,deleteStudent,updateStudent, getStudentId } from '../service/StudentAPI';
import { Navigate, useNavigate,useParams } from 'react-router';
export function StudentAdd() {
 const [items,setItems] = useState([]);
 let { recordId } = useParams();
 const navigate = useNavigate();
    const [student,setStudent] = useState({
        id:0, 
        name: '',
        className: '',
        parentName: '',
        schoolName: '',
        subjects: ''
    });
    const loadStudent = async (recordId) =>{
      let tempStudent = await getStudentId(recordId);
      setStudent({...tempStudent});
      console.log("tempStudent:",tempStudent);
    }
    useEffect(()=>{
      if(recordId){
        loadStudent(recordId);
        setBLabel('Update');
      }
    },[]);
    const [bLabel,setBLabel] = useState('Add')

    const handleCancel = () =>{
        setStudent({
            id:0,
            name: '',
            className: '',
            parentName: '',
            schoolName: '',
            subjects: ''
          });
      }
    const handleChange = (e) => {
        setStudent({...student, [e.target.name]: e.target.value });
      }
    const handleSubmit = async (e) => {
        console.log("handleSubmit:",student.id);
        e.preventDefault();
        if (!student.name.length) {
          return;
        }
        if(student.id == 0){ //add
            student.id = Date.now();
            await addStudent(student);
        }else{//update
            await updateStudent(student);
        }
        navigate('/student');
      }
    return (
      <div>
        <Menu/>
        <h3>Add Student</h3>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder='Name'
            onChange={handleChange}
            value={student.name}
          /><br/><br/>
          <input
            name="className"
            placeholder='Class Name'
            onChange={handleChange}
            value={student.className}
          /><br/><br/>
          <input
            name="parentName"
            placeholder='Parent Name'
            onChange={handleChange}
            value={student.parentName}
          /><br/><br/>
            <input
            name="schoolName"
            placeholder='School Name'
            onChange={handleChange}
            value={student.schoolName}
          /><br/><br/>
          <input
            name="subjects"
            placeholder='subjects'
            onChange={handleChange}
            value={student.subjects}
          /><br/><br/>
          <button >{bLabel}</button> &nbsp;&nbsp;
          <input onClick={handleCancel} type='button' value="Cancel" /> 
        </form>
      </div>
    );
}
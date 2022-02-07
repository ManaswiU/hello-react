import React ,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router';
import Menu from '../components/Menu';
import { addStudent, getStudents,deleteStudent,updateStudent } from '../service/StudentAPI';
import { Button } from '@mui/material';
export function Students() {
 const [items,setItems] = useState([]);
    const navigate = useNavigate();
    const [student,setStudent] = useState({
        id:0, 
        name: '',
        className: '',
        parentName: '',
        schoolName: '',
        subjects: ''
    });
    const loadStudent = async () =>{
      let tempStudents = await getStudents();
      setItems(tempStudents);
    }
    useEffect(()=>{
      loadStudent();
    },[]);
    const [bLabel,setBLabel] = useState('Add')
    const handleDelete = async (recordId) => {
        console.log(">>handleDelete "+recordId)
        await deleteStudent({id:recordId});
        loadStudent();
        }

    const handleUpdate = (recordId) => {
        navigate('/student/edit/'+recordId);
        }
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
        loadStudent();
        setStudent({
          id:0,
          name: '',
          className: '',
          parentName: '',
          schoolName: '',
          subjects: ''
        });
        setBLabel('Add');
      }

    return (
      <div>
        <Menu/>
        <h3>Students </h3>
        <Button variant="contained" color="primary" onClick={()=>{navigate('/student/add');}}>Add</Button>
        {/* <button onClick={()=>{
            navigate('/student/add');
        }} >Add</button> <br/><br/> */}
        <TodoList 
        items={items}
        doDelete={handleDelete}
        doUpdate={handleUpdate}
        />
      </div>
    );
}

function TodoList ({items,doDelete,doUpdate}) {
    return (
        <div>
        <table class="mui-table">
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Class Name</th>
                <th>Parent Name</th>
                <th>School Name</th>
                <th>subjects</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => (
            <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.className}</td>
                <td>{item.parentName}</td>
                <td>{item.schoolName}</td>
                <td>{item.subjects}</td>
                <td><button onClick={()=>doUpdate(item.id)}>Update</button></td>
                <td><button onClick={()=>doDelete(item.id)}>Delete</button></td>
            </tr>)
            )}
            </tbody>
            </table>
      </div>
    );
}

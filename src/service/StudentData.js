let students =[
    {"id":"bd7acbea-c1b1-46c2-aed5-3ad53abb28ba","name":"Bob","className":"Computer Science","parentName":"Christian","schoolName":"MIT","subjects":["Maths","Science","AI"]},
    {"id":"abcdcbea-c1b1-46c2-aed5-3ad53abb28ba","name":"Alex","className":"Art","parentName":"Irie","schoolName":"North California University","subjects":["Design","English","Event Design"]},
    {"id":"cugfcbea-c1b1-46c2-aed5-3ad53abb28ba","name":"Vivek","className":"Economics","parentName":"Amar","schoolName":"IIT","subjects":["Maths","English","Science"]}
  ];

if(localStorage.getItem('_students') != null){
    try{
        students= JSON.parse(localStorage.getItem('_students'));
    }catch(e){
    }
}

let saveLocalStorage = () =>{
    localStorage.setItem('_students',JSON.stringify(students));
}
export const getStudents = () =>(students);

export const addStudent = (record) =>{
    students.push(record);
    saveLocalStorage();
}
export const updateStudent = (record) =>{
    let tempList = students.filter((item)=>(item.id==record.id));
    if(tempList.length > 0){
        tempList[0].name = record.name;
        tempList[0].className = record.className;
        tempList[0].parentName = record.parentName;
        tempList[0].schoolName = record.schoolName;
        tempList[0].subjects = record.subjects;
    }
    saveLocalStorage()

}
export const deleteStudent = (id) =>{
    students = students.filter((item)=>(item.id!=id));
    saveLocalStorage();
}

export const getStudentId = (id) =>{
    let tempList = students.filter((item)=>(item.id==id));
    if(tempList.length > 0){
        return tempList[0];
    }else{
        return {};
    }
}

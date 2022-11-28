import { ref } from "vue";
import axios from 'axios';

export default function useStudent() {
    const url = "http://localhost:3000/students/";
    const studentData = ref([]);
    const error = ref(null);
    const statusCode = ref([]);
    const delError = ref(null);
    const getAllStudent = async () => {
        try {
            const res = await axios(url)
            console.log(res) 
            studentData.value = res.data;
        } catch (err) {
            console.log(err) 
            error.value = err;
        }
    }
    const getSingleStudent = async (id) => {
        studentData.value = [];
        error.value = null;
        try {
            const res = await axios(url +id);
            studentData.value = res.data;
       } catch (err) {
          error.value=err
       }    
     }
    const createStudent = async (formData) => {
        studentData.value = [];
        error.value = null;
        try {
            const config = {
                method: 'POST',
                url: url,
                headers: {
                    'Content-Type':'application/json'
                },
                data:JSON.stringify(formData)
            }
            const res = await axios(config)
            studentData.value = res.data;
            statusCode.value = res.status;
        } catch (err) {
           error.value=err            
        }
    }
    const updateStudent = async (id,data) => {
        studentData.value = [];
        statusCode.value=null
        error.value = null;
         try {
             const config = {
                 method: 'PUT',
                 url: url + id,
                 headers: {
                   'Content-Type':'application/json'  
                 },
                 data:JSON.stringify(data)
             }
             const res = await axios(config)
             studentData.value = res.data;
             statusCode.value = res.status;
         } catch (err) {
             error.value = err;
        }
    }
    const delete_student = async (id) => {
        studentData.value = [];
        error.value = null;
        delError.value=null
        try {
            const config = {
                method: 'Delete',
                url: url + id,
                headers: {
                    'Content-type':'application/json'
                },  
            }     
            const res = await axios(config)
            statusCode.value = res.status;
        } catch (err) {
            delError.value=err;
        }
    }
    return {
        statusCode,
        studentData,
        error,
        delError,
        getAllStudent,
        getSingleStudent,
        createStudent,
        updateStudent,
       delete_student
    }
}

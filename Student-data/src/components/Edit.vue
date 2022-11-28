<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import useStudent from '../composable/studentapi'
const { studentData, error, getSingleStudent,updateStudent,statusCode} = useStudent();
const { params } = useRoute();
onMounted(() => {
   getSingleStudent(params.id)
})
 function editStudent() {
updateStudent(params.id,studentData.value)   
}
</script>
<template>
   <div class="shadow-md pb-6">
      <div class="bg-indigo-600 p-4">
         <h1 class="text-3xl font-bold text-center text-white">Edit Student</h1>
      </div>
      <form @submit.prevent="editStudent">
         <div class="flex items-center m-6">
            <div class="w-1/5">
               <label class="font-medium" for="stuid"> ID : </label>
            </div>
            <div class="w-4/5">
               <input type="text" id="stuid" class="border-2 border-gray-400 w-full py-2 px-4" readonly disabled
                  v-model.trim="studentData.id" />
            </div>
         </div>
         <div class="flex items-center m-6">
            <div class="w-1/5">
               <label for="stuname" class="font-medium">Name:</label>
            </div>
            <div class="w-4/5">
               <input type="text" id="stuname" class="border-2 border-gray-400 w-full py-2 px-4" required
                  v-model.trim="studentData.stuname">
            </div>
         </div>
         <div class="flex items-center m-6">
            <div class="w-1/5">
               <label for="email" class="font-medium">Email:</label>
            </div>
            <div class="w-4/5">
               <input type="text" id="email" class="border-2 border-gray-400 w-full py-2 px-4"
                  v-model.trim="studentData.email">
            </div>
         </div>
         <div class="flex justify-center">
            <button type="submit"
               class="bg-purple-700 text-white font-medium py-2 px-6 rounded-md hover:bg-purple-800 mr-5">
               Update
            </button>
            <RouterLink :to="{ name: 'home' }">
               <button type="button" class="bg-emerald-700 text-white font-medium p-2 rounded-md hover:bg-emerald-800">
                  Back to Home
               </button>
            </RouterLink>
         </div>
      </form>
      <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-md font-medium" role="alert" v-if="statusCode===200">
         Student Updated Successfully.
      </div>
      <div class="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-md font-medium" role="alert" v-if="error">
        Oops! Error encountered:{{error.message}}
        </div>
   </div>
</template>

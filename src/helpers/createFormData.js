const createFormData = (obj) => {
   const formData = new FormData()

   Object.keys(obj).forEach((k) => formData.append(k, obj[k]))

   return formData
}

export default createFormData

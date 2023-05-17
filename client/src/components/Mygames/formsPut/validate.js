const validate = (put) => {
    let errors={}
   
if(!put.id){
    errors.image= 'Se requiere que este lleno el campo'
   }
   if(put.name.length ===''){
    errors.name= 'Se requiere que este lleno el campo'
   }
  
   if(put.name.length < 6 ){
    errors.name= 'Debe ser mayor a 6 digitos'
 }
 if(put.name.length > 10) {
     errors.name= 'Debe ser menor a 10 digitos'
 }

 if(put.description.length ===''){
    errors.description= 'Se requiere que este lleno el campo'
   }
  
   if(put.description.length < 6 ){
    errors.description= 'Debe ser mayor a 6 digitos'
 }
 if(put.description.length > 150) {
     errors.description= 'Debe ser menor a 150 digitos'
 }



  if(put.genres.length ===''){
    errors.genres= 'Se requiere que este lleno el campo'
   }
  


 if(put.plataformas.length ===''){
    errors.plataformas= 'Se requiere que este lleno el campo'
   }
  
   if(put.plataformas.length < 2 ){
    errors.plataformas= 'Debe ser mayor a 2 digitos'
 }
 if(put.plataformas.length > 10) {
     errors.plataformas= 'Debe ser menor a 10 digitos'
 }


 if(put.rating.length ===''){
    errors.rating= 'Se requiere que este lleno el campo'
   }


if(put.image.length ===''){
    errors.image= 'Se requiere que este lleno el campo'
   }
  

  


    return errors
}
export default validate
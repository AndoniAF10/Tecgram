import Dropzone from 'dropzone';
Dropzone.autoDiscover = false;

const dropzone = new Dropzone('#dropzone',
{
    dictDefaultMessage: 'Da clic para subir fotografía', 
    acceptedFiles: '.png,.jpg,.jpeg,.gif',
    addRemoveLinks: true,
    dictRemoveFile: 'Borrar fotografia',
    maxFiles:1,
    uploadMultiple:false,

});

dropzone.on('success', function(file,response)
{
    console.log(response);
//alert("la imagen se cargo correctamente");
});
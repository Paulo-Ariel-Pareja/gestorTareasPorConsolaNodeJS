Programa de NodeJS por consola.
Genera un "to-do" utilizando un archivo JSON como base de datos.
COMANDOS:

#GENERAR UNA TAREA, 2 ALTERNATIVAS
node app crear -descripcion "TAREA A REALIZAR" 
node app crear -d "OTRA TAREA A REALIZAR" 

#MOSTRAR POR CONSOLA LISTADO DE TAREAS
node app listar

#ACTUALIZAR UNA TAREA, 2 ALTERNATIVAS
node app actualizar -descripcion "TAREA A REALIZAR" -completado true
node app actualizar -d "TAREA A REALIZAR" -c true

#ELIMINAR UNA TAREA, 2 ALTERNATIVAS
node app borrar -descripcion "TAREA A BORRAR"
node app borrar -d "TAREA A BORRAR"
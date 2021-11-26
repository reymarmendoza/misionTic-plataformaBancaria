# misionTic-plataformaBancaria

En la consola del navegador copiar y pegar:
const lista = [
	{ email: 'admin@banagrario.com', pwd: 'Abcd/123', log:false },
	{ email: 'user@banagrario.com', pwd: 'Mintic1.', log:false },
	{ email: 'empleado@banagrario.com', pwd: 'Grupo1..', log:false },
];

En la misma consola usar el siguiente comando para almacenar la informacion en la memoria del navegador(por ahora):
localStorage.setItem("GRUPO1_V1", JSON.stringify(lista));

Finalmente verificar que se guardo(debe obtener los datos que se ingresaron en el primer comando):
localStorage.getItem("GRUPO1_V1");
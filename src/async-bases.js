//Los lenguajes de programacion son sincronos, es decir que se ejecuta tarea por tareas
//JS solo tiene un subproceso o hilo en el que trabaja
//JS es Single-Threaded. Solo se pueden ejecutar tareas en un solo hilo
//JS es no bloqueante. La tarea se devuelve inmediatamente independientemente del resultado. Si se completo devuelve los datos, si no se completo devuelve un error
//Bloqueante: Una tarea no devuelve el control hasta que se ha completado. En JS esto se puede dar al usar alert o similares
//Sincrono: Las tareas que se ejecutan de forma sencuencial se deben realizar en orden
//Asincrono: Las tareas se pueden realizar mas tarde por lo que las respuestas pueden ser diferidas, avanzar, hacer otras tareas y despues obtener el resultado de las tareas para usar en el programa
//Concurrencia en JS
//EventLoop es un patron de diseño que espera y distribuye los eventos segun sea el caso
//Callbacks son funciones pasadas como argumento de otra funcion y que sera invocada segun sea la necesidad. Asi se puede manejar la asincronia en JS
//En ES6 se implementaron las promesas que son funciones no bloqueantes que trabajan con asincronia y cumplen una promesa que se puede retornar un valor ahora, despues o nunca
//En ES2017 se implementa async y await que permite estructurar una funcion asincrona y sin bloqueo de una manera similar a una funcion ordinaria


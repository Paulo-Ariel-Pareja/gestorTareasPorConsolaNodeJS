const fs = require('fs');


let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('./../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar la info');
    });
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }
    return false;
}

const borrar = (descripcion) => {
    cargarDB();
    let listadoFiltrado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (listadoPorHacer.length === listadoFiltrado.length) {
        return false;
    }
    listadoPorHacer = listadoFiltrado;
    guardarDB();
    return true;
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}
const fs = require('fs');

let items = [];

const guardarDB = () => {
    let data = JSON.stringify(items);

    fs.writeFile('database/data.json', data, (error) => {
        if (error) throw new Error('No se pudo guardar', error)
    })
}

const cargarDB = () => {

    try {
        items = require('../database/data.json');      
    } catch (error) {
        items = [];
    }
    
}

const getLista = () => {
    cargarDB();
    return items;
}

const crear = (descripcion) => {
    
    cargarDB();
    
    let nuevoItem = {
        descripcion,
        completado: false
    };
    items.push(nuevoItem);
    
    guardarDB();
    
    return nuevoItem;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = items.findIndex(item => item.descripcion === descripcion);

    if (index >= 0){
       items[index].completado = completado;
       guardarDB();
       return true;
    }
    else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let newList = items.filter(item => item.descripcion !== descripcion);
    
    if (items.length === newList.length) {
        return false;
    }
    else {
        items = newList;
        guardarDB();
        return true;
    }

}

module.exports = {
    crear,
    getLista,
    actualizar,
    borrar
}
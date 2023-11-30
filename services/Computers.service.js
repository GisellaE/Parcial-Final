const {models} = require('../libs/sequelize')

//Funcion para listar todos los eventos
async function index() {
    const computers = await models.computer.findAll();
    return computers;
}

//Funcion para crear un nuevo evento
async function store(body) {
    const computer = await models.computer.create(body);
    return computer;
}

//Funcion para mostrar un evento
async function show(id) {
    const computer = await models.computer.findByPk(id);
    return computer;
}

//Funcion para actualizar un evento
async function update(id, body) {
    const [affectedRows, [updatedComputer]] = await models.computer.update(body, {
        where: {
            id
        },
        returning: true
    });
    return updatedComputer;
}

//Funcion para eliminar un evento
async function destroy(id) {
    const computer = await models.computer.findByPk(id);
    const deletedComputer = await models.computer.destroy({
        where: {
            id
        },
        returning: true
    });
    if(deletedComputer){
        return computer;
    }
    return null;
}

//Exportar las funciones del controlador
module.exports = {
    index,
    store,
    show,
    update,
    destroy
}
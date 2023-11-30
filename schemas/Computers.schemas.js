const Joi = require("joi");

//const id = Joi.string().uuid();-
const id = Joi.number().integer();

const Marca = Joi.string().min(1).max(100).not("");
const Modelo = Joi.string().min(1).max(100).not("");
const sn = Joi.string().min(1).max(100).not("");
const cpu = Joi.string().min(1).max(50).not("");
const ram = Joi.string().min(1).max(100).not("");
const almacenamiento = /* Joi.array().items( */Joi.string()/* ) */.min(1).max(100).not("");
const año = Joi.date().not("").not(null);
const precio = Joi.number().precision(2).min(0).not("");
const correoElectronico = Joi.string().min(1).max(50).not("");

//Crear un computador.
const createComputerSchema = Joi.object({
    Marca: Marca.required(),
    Model: Modelo.required(),
    sn: sn.required(),
    cpu: cpu.optional(),
    ram: ram.optional(),
    almacenamiento: almacenamiento.required(),
    año: año.required(),
    precio: precio.required(),
    correoElectronico: correoElectronico.required(),
});

  //Actualizar un computador
const updateComputerSchema = Joi.object({ 
    Marca: Marca.optional(),
    Model: Modelo.optional(),
    sn: sn.optional(),
    cpu: cpu.optional(),
    ram: ram.optional(),
    almacenamiento: almacenamiento.optional(),
    año: año.optional(),
    precio: precio.optional(),

});
  
  const getComputerSchema = Joi.object({
    id: id.required(),
  });
  
  module.exports = {
    createComputerSchema,
    updateComputerSchema,
    getComputerSchema,
  }
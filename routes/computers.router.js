//Crear un enrutador de express en el que todas las rutas inician con api
const router = require('express').Router();
const {validatorHandler} = require('../middlewares/validator.handler');
const {LogsPeticiones} = require('../middlewares/registro');
const {EnviarCorreo} = require('../services/EnviarCorreo');

const { getComputerSchema, createComputerSchema, updateComputerSchema } = require('../schemas/Computers.schemas');

//Importar el controlador de eventos
const service = require('../services/Computers.service');


//Definir las rutas de la aplicación
router.get('/', async (req,res)=>{
    const computers = await service.index()
    res.json(computers);
    LogsPeticiones('GET /api/computer/')
});

router.get('/:id',
validatorHandler(getComputerSchema, 'params'),
    async (req,res)=>{
        const id = req.params.id
        const computer = await service.show(id)
        res.json(computer)
        LogsPeticiones('GET /api/computer/'+id)
    }
);

  

router.post('/', 
validatorHandler(createComputerSchema, 'body'),
    async (req,res)=>{
        const body = req.body
        const computer = await service.store(body)
        res.status(201).json(computer)
        LogsPeticiones('POST /api/computer/')
        EnviarCorreo(req.body.correoElectronico)
    }
);

router.put('/:id', 
validatorHandler(getComputerSchema, 'params'),
validatorHandler(updateComputerSchema, 'body'),
    async (req,res)=>{
        const id = req.params.id
        const body = req.body
        const computer = await service.update(id, body)
        res.json(computer)

        LogsPeticiones('PUT /api/computer/')
    }
);

router.delete('/:id', 
validatorHandler(getComputerSchema, 'params'),
    async (req,res)=>{
        const id = req.params.id
        const computer = await service.destroy(id)
        res.json(computer)

        LogsPeticiones('DELETE /api/computer/')
    }
);

//Exportar el enrutador
module.exports = router;
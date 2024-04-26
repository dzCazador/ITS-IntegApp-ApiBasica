const  express = require('express');
const  morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(morgan());
app.use(express.json());

app.get('/',(req,res)=>
    res.status(200).json({
        ok:true,
        msg:"Hola estas accediendo a la Super API"
    })
)
const listUser=[
    {
      "id": 1,
      "username": "usuario1",
      "email": "usuario1@example.com",
      "nombre": "Juan",
      "apellido": "Pérez"
    },
    {
      "id": 2,
      "username": "usuario2",
      "email": "usuario2@example.com",
      "nombre": "María",
      "apellido": "González"
    },
    {
      "id": 3,
      "username": "usuario3",
      "email": "usuario3@example.com",
      "nombre": "Carlos",
      "apellido": "Martínez"
    }
  ]


app.get('/users',(req,res)=>
    res.status(200).json({
        ok:true,
        listUser
    })
)

app.get('/users/find',(req,res)=>{
    const {query}=req;
    const {name,lastname}=query; //es lo mismo que name = query.name; DESECTRUCTURACION
    const result = listUser.find((user)=>user.nombre===name && user.apellido===lastname);
    if (result)
        res.status(200).json({
            ok:true,
            result
        })
    else
        res.status(404).json({
            ok:false,
            msg:"No se Encontro"
        })

        
}
)


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

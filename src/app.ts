import express from 'express'
import bodyParser from 'body-parser'
import { Request, Response } from 'express-serve-static-core';


const PORT: number = 3000

const app: express.Application = express();
app.use(bodyParser.json())
app.use(express.json())


let users = [
{id: 1, username: "Onose Enaholo", password: '123'},
{id: 2, username: "Emmanuel Onugha", password: '234'},
{id: 3, username: "Idemumia Enaholo", password: '3545' }
]

app.get('/data/get', (req: Request, res: Response)=>{
   try {
    console.log('This is my first server!! Welcome')
    res.status(200).send({
        message: 'Api has been found',
        status: 'Active',
        data: users   
    })
   } catch (error) {
       res.status(404)
       res.json({message: `check the server`})
   }

})
app.post('/data/post', (req: Request, res: Response)=>{

    if(!req.body.password) {
        res.status(400);
        res.send({ error: "Password Required"})
    }

    let user = { 
        id: users.length + 1,
        username: req.body.username,
        password: req.body.password
    }

    users.push(user)
    res.status(200).json(user)


   try {
    console.log('This is my first server!! Welcome')
    res.status(200).json({
     message: 'Api has been found',
     status: 'Active',
     data: users

    })
   } catch (error) {
       res.status(404)
       res.json({message: `check the server`})
   }

})
app.put("/", (req: Request, res: Response) => {
    try {

        res.status(200).json({
            message: 'Api has been updated',
            status: 'Active',
            data: users
       
           })
    } catch (error) {
        res.status(404)
        res.json({messsage: 'Item has not been updated'})  
    }
})
app.delete("/", (req: Request, res: Response) => {
    try {

        res.status(200).json({
            message: 'Api has been deleted',
            status: 'Active',
            data: users
       
           })
    } catch (error) {
        res.status(404)
        res.json({messsage: 'Item has not been deleted'})  
    }
})




app.listen(PORT, ()=>{
    console.log(`app is listening at ${PORT} number`)
})

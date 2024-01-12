//import json server library
const jsonServer=require('json-server')
const cors=require('cors')

//create server
const videoServer=jsonServer.create()

//create a router to connect the json file
const router=jsonServer.router('data.json')

//create middleware(json to js)
const middleware=jsonServer.defaults()

//connect with client
videoServer.use(cors())
videoServer.use(middleware)
videoServer.use(router)

const PORT=4000
videoServer.listen(PORT,()=>{
    console.log(`____video servervstarted at port ${PORT}__`);

})
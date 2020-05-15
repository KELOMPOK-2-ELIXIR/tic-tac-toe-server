"use strict"

const {User} = require("../models");
class ControllerUser{
    
    static signup(req, res, next){
        const row=''
        const column =''
        User.count()
        .then(result=>{
            console.log('Count',result);   
            let diva = Math.floor(result/2)+1    
            console.log('DiVAAA',diva);
            let {username} = req.body;
            User.create({
                username,
                room:diva,
                row,
                column,
            })
            .then(data => {
                res.status(201).json({
                    username: data.username,
                    room: data.room
                })

            })
            .catch(err => {
                return next({
                    name: "InternalServerError",
                    errors: [{message: err}]
                });
            })
                
        })
        .catch(err=>{
            console.log('Count',err);
        })

        
    }

    static findall(req,res,next){
        
        User.findAll({
            where:{
                room:req.body.room
            },
            order: [
                ['id', 'ASC']
            ]
        })
        .then(result=>{

            res.status(200).json({
               users:result
            })      
        })
        .catch(err=>{
            console.log('Count',err);
        })
    }
     static updatedata (req,res,next){
         const {room,username} = req.headers
         User.findOne({
             where:{
                 room,
                 username
             }
         })
         .then(result =>{
             let rowlama
             if(result.row.length > 0){
                rowlama = result.row +','+ req.body.chose
             }else{
                rowlama = req.body.chose
             }
            console.log('lamaaa',rowlama); 
            User.update({
                row: rowlama 
            },{
                where:{
                    room,
                    username
                }
            })
            .then(result=>{
                res.status(200).json({
                    users:result
                 }) 
            })
            .catch(err=>{
                console.log(err);
                
            })           
         })
         .catch(err=>{
             console.log(err)
         })
         
     }
}
module.exports = ControllerUser;
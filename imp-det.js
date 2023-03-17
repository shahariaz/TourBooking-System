const fs = require('fs');
const mongoose = require('mongoose');
const Tour = require('./model/tourModel');
const connectDB = require('../starter/server');

const importData = async ()=>{
    try{
        const data = fs.readFileSync('./dev-data/data/tours-simple.json');
        const tours = JSON.parse(data);
        await connectDB();
        await Tour.deleteMany();
        
        await Tour.create(tours);
    }catch(err){
console.log(err);
    }
    
}
// importData()
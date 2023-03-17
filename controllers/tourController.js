const fs = require('fs');
const Tour = require('./../model/tourModel')
// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`));


exports.getAllTours =async (req, res) => {
   try{

       const tours = await Tour.find()
       res.status(200).json({
           status: 'Success',
           data: {
               tours,
           },
       });
   }catch(err){
    res.status(500).json({
        status: 'fail',
        data: err,
    });
   }
};
exports.createTour = async (req,res) => {
    // const newTour = new Tour({});
  
    // newTour.save();
try{
    const newTour = await Tour.create(req.body);


    res.status(200).json({
        status:'success',
        data: {
            tour: newTour,
        },
    })
} catch(err){
    res.status(500).json({
        status: 'fail',
        data: err,
    });
}
    
}
exports.inputTours = (req, res) => {
    // const newId = tours[tours.length - 1].id + 1;
    // const newTour = { id: newId, ...req.body };
    // tours.push(newTour);
    // fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), (err) => {
    //     res.status(201).json({
    //         status: 'success',
    //         data: {
    //             tour: newTour,
    //         },
    //     });
    // });
};
exports.findById = async (req, res) => {
  try{
   const tour = await Tour.findById(req.params.id);
   
    res.status(200).json({
        status:'success',
        data: {
            tour
        },
    })
   
  }catch(err){
    res.status(500).json({
        status: 'fail',
        data: err,
    })
  }
    // const tour = tours.find((el) => el.id === id);
    // if (!tour) {
    //     return res.status(404).json({
    //         status: 'fail',
    //     });
    // }

    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         tour,
    //     },
    // });
};
exports.updateById = async(req, res) => {
 try{
    const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators: true,
    })
    res.status(200).json({
        staus: 'success',
        data: {
            tour
        },
    });
   }catch(err){
    res.status(500).json({
        status: 'fail',
        data: err,
    });
   }
  
};
exports.deleteTour = async (req, res) => {
    try{
        Tour.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:'success',
            data: null,
        });
    }catch{
        res.status(500).json({
            status: 'fail',
            data: err,
        });

    }
}
    

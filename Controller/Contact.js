const contact = require("../Model/Singup")


// exports.getAdmin=async(req,res)=>{
//     const {name,password} = req.body;
//     const data = await admin.findOne({name,password})
   
//    try {
//     if (data!=null) {
//         res.status(200).json({
//             success:true,
//             data:data,
//             message:"login data"
//         })
        
//     }
//     else{
//         res.status(200).json({
//             data:data,
//             message:"failded no user found"
//         })
//     }

//    } catch (error) {
//             console.log(error);       
//    }
// }
exports.postContact=async(req,res)=>{
    // const {name,password} = req.body;
    // const data = await admin.findOne({name,password})
   
    const data = await contact.create(req.body)
    res.status(200).json({
        success:true,
        message:"form added successfully"
    })

}
exports.getContact=async(req,res)=>{
    // const {name,password} = req.body;
    // const data = await admin.findOne({name,password})
   
    const data = await contact.find()
    res.status(200).json({
        success:true,
        data:data,
        message:"data fetched"
    })

}

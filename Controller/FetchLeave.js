import UserModel from "../model/user.js"

class LeaveController {
    static getLeave = async (req, res) => {
      try {
        

     const result=   UserModel.findById(req.params.id)
    .select( "leavetype")
    .exec(function(err,doc) {
        if(err){
            console.log(err)
        }
        else{
            res.send(doc)
        }
        

    })
       


      } catch (error) {
        console.log(error)
      }
    }
  }

  export default LeaveController
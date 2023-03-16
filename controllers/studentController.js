const {con}=require ("../configuration/db");
const getStudents= async(request,response) =>{
    try{
        con.connect(function(err){
            if(err) throw err;
            con.query("SELECT * FROM user",function(err,result,fields){
                if(err) throw err;
                console.log(result);
                response.status(200).json({user:result});
            });


        });

    }catch(error){
        response.status(500).json({msg:"error in getting students"})
    }

};
module.exports={getStudents}

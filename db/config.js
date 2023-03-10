const { mongoose } = require("mongoose");

mongoose.set('strictQuery', true);

const dbConnection = async() => {
    try {   
 
        await mongoose.connect( process.env.MongoBD );
        console.log('DB Online')
 
    } catch (error) {
        console.log(error)
        throw new Error('Error a la hora de inicializar DB')
    }
}


module.exports={
    dbConnection
}
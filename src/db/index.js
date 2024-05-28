import mongoose from "mongoose";
import { DB_NAME } from './constants';

const connect_DB = async  () =>{
    try {
      const connectionInstance = await mongoose.connect
      (`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`\n MongoDB connected !! DB HOST ${connectionInstance.connection.host}`);
      console.log(connectionInstance);
    } catch (error) {
        console.log("MPONGODB connection error ", error);
        process.exit(1)
    }
}

export default connect_DB



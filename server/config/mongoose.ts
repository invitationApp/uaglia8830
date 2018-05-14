import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
(mongoose as any).Promise = global.Promise;
console.log(process.env.MONGODB_URI)
export default async function () {
    if (process.env.MONGODB_URI) {
        return mongoose.connect(
            <string> (process.env.MONGODB_URI)
        )
    } else {
        throw new Error('cannot connect to the database no MONGODB_URI defined');
    }
}

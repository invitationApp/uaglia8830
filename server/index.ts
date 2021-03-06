import * as http from 'http';
import * as dotenv from 'dotenv';
import setAPIRoutes from './app/routes/apiRoutes';
import expressService from './config/express';
import initHBS from './config/handlebars';
import mailService from './config/mail';
import mongoService from './config/mongoose';
import initPassport from './config/passport';
dotenv.config({ path: '.env' });
console.log(process.env.PORT);
(async () => {
    await mongoService();
    const app = await expressService();
    const passport = initPassport();
    const transporter = mailService();
    initHBS();
    setAPIRoutes(app, passport, transporter);
    console.log('Starting Express Server'); http.createServer(app)
        .listen(app.get('port'), () => {
            console.log('Express listening on port ' + app.get('port'));
        });
})()
.catch(console.error);

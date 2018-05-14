import * as bodyParser from 'body-parser';
import * as compress from 'compression';
import * as express from 'express';
import * as session from 'express-session';
import * as morgan from 'morgan';
import * as passport from 'passport';
import * as path from 'path';
const hbs = require('express-hbs');
const flash = require('connect-flash');

export default async function () {
    try {
        const app = express();
        if (process.env.NODE_ENV === 'development') {
            app.use(morgan('dev'));
        } else if (process.env.NODE_ENV === 'production') {
            app.use(compress());
        }

        app.set('port', (process.env.NODE_PORT || 8000));

        // configure the view engine
        app.engine('hbs', hbs.express4({
            // defaultLayout: path.join(__dirname, 'views', 'layouts', 'default.hbs'),
            layoutsDir: path.join(__dirname, '..', 'public', 'views', 'layouts'),
            partialsDir: path.join(__dirname, '..', 'public', 'views', 'partials'),
        }));

        // set the view engine
        app.set('view engine', 'hbs');

        // configure views path
        app.set('views', path.join(__dirname, '..', 'public', 'views'));

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());

        app.use(session({
            resave: true,
            saveUninitialized: true,
            secret: 'config.sessionSecret',
        }));
        app.use(flash());
        app.use(passport.initialize());
        app.use(passport.session());

        return app;
    } catch {
        throw new Error('error in the Express configuration');
    }
}

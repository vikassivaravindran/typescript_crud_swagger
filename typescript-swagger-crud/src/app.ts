var express = require('express');
var cors = require('cors');
var bodyparser = require('body-parser');
var swaggerui = require('swagger-ui-express');
import './author.controller';
import {RegisterRoutes} from './routes';

const app = express();
app.use(cors());
app.use(bodyparser.json());
RegisterRoutes(app);

try{
    const swaggerDocument = require('../swagger.json');
    app.use('/docs', swaggerui.serve, swaggerui.setup(swaggerDocument));
}catch(err){
    console.log('Unable to read swagger.json file', err);
}

export {app};

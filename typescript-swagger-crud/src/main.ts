import { app } from './app';
import * as http from 'http';
var mongoose = require('mongoose');

const PORT = 8082;
const MONGO_URI = 'mongodb://localhost:27017/author';
const server = http.createServer(app);
server.listen(PORT);
server.on('listening', async () => {
	console.info(`Listening on port ${PORT}`);
	mongoose.connect(MONGO_URI, { useNewUrlParser: true, useFindAndModify: false});
	mongoose.connection.on('open', () => {
		console.info('Connected to Mongo.');
	});
	mongoose.connection.on('error', (err: any) => {
		console.error(err);
	});
});
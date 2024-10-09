import 'dotenv/config.js';

import cors from 'cors';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import routerAddress from './routes/address.js';
import routerCategory from './routes/category.js';
import routerCustomer from './routes/customer.js';
import routerImageProduct from './routes/imageProduct.js';
import orderRoute from './routes/orderRoute.js';
import routerProduct from './routes/product.js';
import routerRole from './routes/role.js';
import routerSize from './routes/size.js';
import routerUser from './routes/user.js';
import routerWarehose from './routes/warehose.js';

//config
const app = express();
const API_DB = process.env.API_DB;
// middleware
app.use(cors());
app.use(express.json());
// router
app.use('/api', routerCategory);
app.use('/api', routerAddress);
app.use('/api', routerRole);
app.use('/api', orderRoute);
app.use('/api', routerImageProduct);
app.use('/api', routerProduct);
app.use('/api', routerUser);
app.use('/api', routerSize);
app.use('/api', routerCustomer);
app.use('/api', routerWarehose);
// database config
mongoose
	.connect(API_DB)
	.then(() => {
		console.log('Database connected');
	})
	.catch(() => {
		console.log('Database connect failed');
	});
export const server = http.createServer(app);
// export const viteNodeApp = app;
server.listen(8080, (req, res) => {
	try {
		console.log('User Agent:');
	} catch (error) {
		console.log(error);
	}
	console.log(`Server is running on 8080 ${8080} `);
});
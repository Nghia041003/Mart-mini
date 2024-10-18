import {
	createFavoriteProduct,
	removeFavoriteProduct,
} from '../controllers/favoriteProduct.js';

import express from 'express';

const router = express.Router();

router.post('/favoriteProducts', createFavoriteProduct);
router.delete('/favoriteProducts', removeFavoriteProduct);
export default router;

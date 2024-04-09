const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewsController')

router.get('/getReviews/:id', reviewController.getReviews );

router.get('/getReview/:id/reviews/:reviewId', reviewController.getReview );

router.post('/addReview/:id', reviewController.addReviews );

router.patch('/editReview/:id/reviews/:reviewId', reviewController.patchReview );

router.delete('/deleteReview/:id/reviews/:reviewId', reviewController.deleteReview );

module.exports = router;
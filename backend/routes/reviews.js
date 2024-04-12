const express = require('express');
const router = express.Router();
const reviewController = require('../controller/reviewsController')

router.get('/getUserReviews/:id', reviewController.getUserReviews);

router.get('/getDestinationReviews/:id', reviewController.getDestinationReviews );

router.get('/getReview/:id/reviews/:reviewId', reviewController.getReview );

router.post('/addReview/:travelId/reviews/:userId', reviewController.addDestinationReviews );

router.patch('/editReview/:id/reviews/:reviewId', reviewController.patchReview );

router.delete('/deleteReview/:id/reviews/:reviewId', reviewController.deleteReview );

module.exports = router;
const summerDestModel = require('../models/summerDestination');


exports.getDestinations = async (request, response) => {
    const {page = 1, pageSize = 5} = request.query;
    try {
        const destinations = await summerDestModel
          .find()
          .limit(pageSize)
          .skip((page - 1) * pageSize)
          .sort({travel_location: 1});

          const totalDestination = await summerDestModel.countDocuments();

          response.status(200).send({
            currentPage: page,
            pageSize,
            totalPages: Math.ceil(totalDestination / pageSize),
            totalDestination: (totalDestination),
            destinations
          });
    } catch (error) {
        response.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        });
    };
};


exports.getDestination = async (request, response) => {
    const {id} = request.params;
    try {
        const destination = await summerDestModel.findById(id);

        if (!destination) {
            return response.status(404).send({
                statusCode: 404,
                message: 'Destination not found'
            });
        };
        response.status(200).send(destination);
    } catch (error) {
        response.status(500).send({
            message: 'Internal Server Error'
        });
    };
};

exports.addDestination = async (request, response) => {
    const newDestination = new summerDestModel({
        travel_location: request.body.travel_location,
        price: request.body.price,
        image_location: request.body.image_location,
        description: request.body.description,
        main_attractions: request.body.main_attractions
    });

    try {
        const destinationToSave = await newDestination.save();
        response.status(201).send({
            statusCode: 201,
            payload: destinationToSave
        });
    } catch (error) {
        response.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        });
    };
};

exports.patchDestination = async (request, response) => {
    const {id} = request.params;

    try {
        const destination = await summerDestModel.findById(id);

        if (!destination) {
            return response.status(404).send({
                statusCode: 404,
                message: 'Destination not found'
            });
        };

        const updateData = request.body;
        const options = {new: true};

        const results = await summerDestModel.findByIdAndUpdate(id, updateData, options);

        response.status(200).send(results);
    } catch (error) {
     response.status(500).send({
        statusCode: 500,
        message: 'Internal Server Error'
     });   
    };
};

exports.deleteDestination = async (request, response) => {
    const {id} = request.params;

    try {
        const destination = await summerDestModel.findByIdAndDelete(id);

        if (!destination) {
            return response.status(404).send({
                statusCode: 404,
                message: 'Destination not found'
            });
        };

        response.status(200).send('Destination has been removed');
    } catch (error) {
        response.status(500).send({
            statusCode: 500,
            message: 'Internal Server Error'
        });
    };
};

const validateUser = (request, response, next) => {
    const errors = [];

    const {
        name,
        email,
        password,
        birthday,
        avatar
    } = request.body

    if (typeof name !== 'string') {
        errors.push('Name must be a string')
    }
    if (typeof email !== 'string') {
        errors.push('Email must be a string')
    }
    if (typeof password !== 'string' || password.length < 5) {
        errors.push('Password must be a string with min 5 char')
    }
    if (typeof birthday !== 'string') {
        errors.push('Birthday must be a string')
    }
    if (typeof avatar !== 'string') {
        errors.push('Avatar must be a string')
    }

    if (errors.length > 0) {
        response.status(400).send({errors})
    } else {
        next()
    }
}

module.exports = validateUser;
const errorHandler = (err, req, res, next) => { 
    // Get the status code
    const statusCode = res.statusCode ? res.statusCode : 500
    // Update status in res header
    res.status(statusCode)
    // Send json response
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null: err.stack
    })    
}

module.exports = {
    errorHandler
}

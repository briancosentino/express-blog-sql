function serverError (err, req, res, next){
    console.error(err.stack)
    res.status(500)
    res.json({
        error : '500 internal server error',
        message : err.message
    })
    
}
module.exports = serverError
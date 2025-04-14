function notFound (req, res, next){
    res.status(404);
    res.json({
        error : '404 not found',
        message : 'pagina non trovata'
    })
}
module.exports = notFound
function logger (req, res, next){
    const currentHour = new Date().getHours()
    console.log(currentHour);
    
    if (currentHour > 18){
        return res.send('Troppo tardi')
    }
    next()
}

module.exports = logger
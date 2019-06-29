module.exports = {
    parks: (req, res, next) => {

        const db = req.app.get('db');

        const {park_name, park_address, city, park_state, zipcode, descriptions} = req.body;

        db.dog_park.findOne({park_name})
            .then((park) =>{
                if(park){
                    throw(`Ru-ro, looks like this park exists alreay. Please add a new park.`)
                }
                else{
                    return db.dog_park.insert({park_name, park_address, city, park_state, zipcode, descriptions})
                }
            })
    },
    getAll: (req, res, next) => {
        const db = req.app.get('db');
        db.dog_park.find()
            .then((parksObj) => {
                res.send({success:true, parksObj})
            })
            .catch((err) =>{
                res.send({success:false, err})
            })
    },
    updatePrk: (req, res, next) => {
        const db = req.app.get('db');
        const id = req.params
        const {park_name, park_address, city, park_state, zipcode, descriptions} = req.body; 

        park.forEach(park => {
            
        })
        res.status(200).send(park) 
    },
    deletePrk: (req, res, next) =>{
        const db = req.app.get('db');
    }
}

const router = require('express').Router();
const db = require('../../Database/contact_model')

router.get('/', (req, res) => {
    db
    .find()
    .then(contacts => {
        res.status(200).json(contacts)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ message: 'The contacts information could not be retrieved.' })
    })
})

router.post('/',  (req, res) => {
    const conactInfo = req.body
    db.add(conactInfo)
        .then(conactInfo => res.status(201).json(conactInfo))
        .catch(error => {
                console.log(error)
                res.status(500).json({ message: 'Error processing request' })
    })
});

router.delete('/:id', (req, res) => {
    const id = req.params.id
    db.remove(id)
        .then(deleted => res.status(200).json(deleted))
        .catch(error => {
            res.status(500).json({ message: 'the contact info couldnot be deleted' })
        })

});

module.exports = router
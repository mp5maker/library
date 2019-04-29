const express = require('express');
const router = express.Router();
const members = require('../../members')

/* Fetch All  */
router.get('/', (request, response) => {
    response.json(members);
})

/* Fetch */
router.get('/:id', (request, response) => {
    const found = members.some((member) => member.id === parseInt(request.params.id));
    if (found) {
        response.json(members.filter((member) => member.id === parseInt(request.params.id)));
        return;
    }
    response.status(400).json({msg: `No member with the id of ${request.params.id}`});
})

module.exports = router;
const express = require('express');
const router = express.Router();
const members = require('../../members')
const uuid = require('uuid')

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

/* Create */
router.post('/', (request, response) => {
    const newMember = {
        id: uuid.v4(),
        name: request.body.name,
        email: request.body.email,
        status: 'active'
    }
    if (!newMember.name || !newMember.email) {
        response.status(400).json({ message: `Please include a name and an email`})
    }
    var showMembers = [...members];
    showMembers.push(newMember)
    response.json(showMembers)
    response.redirect('/')
})

/* Update */
router.put('/:id', (request, response) => {
    const found = members.some((member) => member.id === parseInt(request.params.id));
    if (found) {
        const updatedMember = request.body;
        response.json(members.map((member) => {
            if (member.id === parseInt(request.params.id)) {
                return {
                    ...member,
                    name: updatedMember.name ? updatedMember.name : member.name,
                    email: updatedMember.email ? updatedMember.email : member.email,
                }
            }
            return member;
        }))
    }
    return response.status(400).json({message: `No member with the id of ${request.params.id}`});
})

/* Delete */
router.delete('/:id', (request, response) => {
    const found = members.some((member) => member.id === parseInt(request.params.id));
    if (found) {
        return response.json(members.filter((member) => member.id !== parseInt(request.params.id)))
    }
    return reponse.state(400).json({message: `No member with the id of ${request.params.id}`});
})

module.exports = router;
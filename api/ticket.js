const router = require('express').Router();
  
// Ticket Model
const Ticket = require('../models/ticket.model');

// Fetch Tickets
router.get('/',(req, res) => {
	Ticket.find()
		.then(tickets => res.json(tickets))
		.catch(err => res.status(400).json('Error: ' + err));
});


// CREATE
router.post('/create',async (req, res) => {
    const title = 'INC'+Math.floor(1000 + Math.random() * 9000);    
    const description = req.body.description;
    const projectName = req.body.projectName;
    const assigneeId = req.body.assigneeId;
    const priorityId = req.body.priorityId;
    const statusId = req.body.statusId;
    const typeId=req.body.typeId

    const newTicket = new Ticket({
    	title,
    	description,
    	projectName,
        assigneeId,
    	priorityId,
    	statusId,
        typeId	
    });
    newTicket.save()
     	.then((newTicket) =>
         { res.json(newTicket) })
        .catch(err => res.status(400).json('Error: ' + err));
});

// READ
router.route('/:id').get((req,res) => {
    Ticket.findById(req.params.id)
        .then(ticket => res.json(ticket))
        .catch(err => res.status(400).json('Error: ' + err));
});

// UPDATE
router.route('/update/:id').post((req,res) => {
    Ticket.findById(req.params.id)
        .then(ticket => {
            if(ticket!=null)
            {
	    	ticket.title = ticket.title;
	    	ticket.description = req.body.description;
	    	ticket.projectName = req.body.projectName;
            ticket.assigneeId = req.body.assigneeId;
	    	ticket.priorityId = req.body.priorityId;
	    	ticket.statusId = req.body.statusId;
	    	ticket.typeId = req.body.typeId;

            ticket.save()
                .then(() => { res.json(ticket) })
                .catch(err => res.status(400).json('Error: ' + err));
            }else{
                res.status(200).json('Ticket Not found')
            }
    	})
        .catch(err => res.status(400).json('Error: ' + err));
});

// DELETE
router.route('/:id').delete((req,res) => {
    Ticket.findByIdAndDelete(req.params.id)
        .then(ticket => res.json('Ticket deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
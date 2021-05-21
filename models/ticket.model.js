const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ticketSchema = new Schema({	
    title: { type: String, required:true },
    description: { type: String, required: true },
    projectName: { type: String, required: true },
    assigneeId: { type: String, required:true },
    priorityId: { type: Number, required: true },
    typeId: {type:Number, required:true},
    statusId: { type: Number, required: true },    
}, 
{
    timestamps: true,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;

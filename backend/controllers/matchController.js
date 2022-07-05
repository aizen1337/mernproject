const mongoose = require('mongoose')
const matchModel = require('../models/Match');
//get all
const getMatches = async (req,res) => {
    const allMatches = await matchModel.find({}).sort({createdAt: -1})
    res.status(200).json(allMatches)
}
//get a single
const getSingleMatch = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Match not found"})
    }
    const singleMatch = await matchModel.findById(id)
    if (!singleMatch) {
        return (
        res.status(400).json({error: "Match not found"})
        )
    }
    else { 
    res.status(200).json(singleMatch)
    }
}
//create a new match
const createNewMatch = async (req,res) => {
    const { title , rounds, boxer, boxer1 } = req.body
    try {
        const newMatch = await matchModel.create({title, rounds ,boxer, boxer1 })
        res.status(200).json(newMatch)
    }
    catch (err) {
        res.status(400).json({err: err.message})
    }
}
//delete the match 
const deleteMatch = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Match not found"})
    }
    const singleMatch = await matchModel.findOneAndDelete({_id: id})
    if (!singleMatch) {
        return (
        res.status(400).json({error: "Match not found"})
        )
    }
    else { 
    res.status(200).json(singleMatch)
    }
}
//update the match 
const updateMatch = async (req,res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Match not found"})
    }
    const singleMatch = await matchModel.findOneAndUpdate({_id:id}, {
        ...req.body
    })
    if (!singleMatch) {
        return (
        res.status(404).json({error: "Match not found"})
        )
    }
    else { 
    res.status(200).json(singleMatch)
    }
}
module.exports = {
    createNewMatch,
    getMatches,
    getSingleMatch,
    deleteMatch,
    updateMatch
}
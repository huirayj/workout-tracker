const router = require('express').Router();
const db = require("../../models/Workout");

// get all workouts, sorted and the total duration
router.get('/workouts', async (req, res) => {
    try {
        const totDur = { totalDuration: { $sum: '$exercises.duration' } };
        const pipeline = [
            { $set: totDur },
            { $sort: { "day": 1 } }
        ];
        const allWorkoutData = await db.aggregate(pipeline);

        res.status(200).json(allWorkoutData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// create a workout 
router.post('/workouts', async ({ body }, res) => {
    try {
        const newWorkoutData = await db.create(body);

        res.status(200).json(newWorkoutData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// updates a workout
router.put('/workouts/:id', async ({ body, params }, res) => {
    try {
        const updWorkoutData = await db.findOneAndUpdate(
            { _id: params.id },
            { $push: { exercises: body } },
            { new: true }
        );

        res.status(200).json(updWorkoutData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// gets previous 7 workouts, sorted and the total duration
router.get('/workouts/range', async (req, res) => {
    try {
        const totDur = { totalDuration: { $sum: '$exercises.duration' } };
        const pipeline = [
            { $set: totDur },
            { $sort: { 'day': -1 } },
            { $limit: 7 }
        ];
        const rngWorkoutData = await db.aggregate(pipeline);

        res.status(200).json(rngWorkoutData);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
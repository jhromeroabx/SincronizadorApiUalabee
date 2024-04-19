const { Schema, model } = require('mongoose');

const PosteoSchema = Schema({
    speed: {
        type: Schema.Types.Number,
        required: true
    },
    bearing: {
        type: Schema.Types.Number,
        required: true
    },
    latitude: {
        type: Schema.Types.Number,
        required: true
    },
    longitude: {
        type: Schema.Types.Number,
        required: true
    },
    route_id: {
        type: Schema.Types.Number,
        required: true
    },
    start_time: {
        type: Schema.Types.Number,
        required: true
    },
    vehicle_id: {
        type: Schema.Types.String,
        required: true
    },
    direction_id: {
        type: Schema.Types.Number,
        required: true
    },
    agency_id: {
        type: Schema.Types.Number,
        required: true
    }
}, {
    timestamps: true
});

PosteoSchema.method('toJSON', function () {
    const { __v, _id, ...object } = this.toObject();
    return object;

});

module.exports = model('Posteo', PosteoSchema);
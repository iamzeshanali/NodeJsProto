const mongoose = require('mongoose');
const { toJSON, softDelete, paginate } = require('./plugins');

const cakeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            index: true
        },
        details: {
            about: {type: String},
            category: {type: String,required: true},
            flavor: {type: String,required: true},
            weight: {type: String,required: true},
            shape: {type: String,required: true},
            tiers: {type: String,required: true},
            servings: {type: String},
            fillings: {
                outside_fillings: {type: String},
                inside_fillings: {type: String}
            },
            layers: {type: Number},
            ingredients: {type: String},
            allergens: {type: String},
            nutritional_info: {type: String},
        },
        images: {type: String},
        availability: {
            duration: {type: String},
            quantity: {
                min_quantity: {type: Number},
                max_quantity: {type: Number},
            }
        },
        price: {type: String},
        note: {
            storage_info: {type: String},
            allergens_advice: {type: String},
            expiry_info: {type: String}
        },
        delivery: {type: String},
        packaging: {type: String},
        extras: {
            writing: {type: String},
            gifts: {type: String},
            cards: {type: String}
        }
    },
    {
        timestamps: true,
    }
);

cakeSchema.plugin(toJSON);

const Cake = mongoose.model('Cake', cakeSchema);

module.exports = Cake;
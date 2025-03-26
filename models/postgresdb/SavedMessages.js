import { DataTypes } from 'sequelize';
import { sequelizeInstance as sequelize } from '../../db/dbUtils.js';

const SavedMessages = sequelize.define('SavedMessages', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {
    timestamps: false,  // We are manually handling the timestamp if needed
});

export { Prompt };

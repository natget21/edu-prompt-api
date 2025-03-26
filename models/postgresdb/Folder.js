import { DataTypes } from 'sequelize';
import { sequelizeInstance as sequelize } from '../../db/database.js'; // Import the Sequelize instance

const Folder = sequelize.define('Folder', {
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  editable: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

export { Folder };

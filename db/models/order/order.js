'use strict';

require('../associations');
module.exports = function(sequelize, Sequelize) {
    const Order= sequelize.define('orders',{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: Sequelize.INTEGER,
        orderTotal: Sequelize.INTEGER,
    },{
        timestamps:true,
    });

    return Order;
};
 
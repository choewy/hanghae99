'use strict';

const dateFormat = (date) => {
    const dt = new Date(date);
    return [
        dt.getFullYear(), "-",
        `0${dt.getMonth() + 1}`.slice(-2) + "-",
        `0${dt.getDate()}`.slice(-2), " ",
        `0${dt.getHours()}`.slice(-2), ":",
        `0${dt.getMinutes()}`.slice(-2)
    ].join('');
};

const rowDateFormat = (row) => {
    const { createdAt, updatedAt } = row;
    return {
        ...row._doc,
        createdAt: dateFormat(createdAt),
        updatedAt: dateFormat(updatedAt)
    };
};

module.exports = rowDateFormat;
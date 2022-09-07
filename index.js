const addDays = require("date-fns/addDays");
const getDateAfterXDays = (days) => {
  const afterdate = addDays(new Date(2020, 8, 22), days);
  return `${afterdate.getDate()}-${
    afterdate.getMonth() + 1
  }-${afterdate.getFullYear()}`;
};

module.exports = getDateAfterXDays;

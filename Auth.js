const { Conductor } = require("./src/models");
const _ = require("lodash");
async function validate(decoded, request) {
  const {_id} = decoded;
  let usr = await new Conductor({id: _id}).fetch();
  return {isValid: !_.isNull(usr) && !_.isUndefined(usr)};
  }
module.exports = validate;
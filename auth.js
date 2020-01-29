"use strict";
const uuidv4 = require("uuid/v4");

module.exports.auth = (event, context, callback) => {
  const policy = {
    principalId: uuidv4(),
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: "Allow",
          Resource: "arn:aws:execute-api:us-west-1:867137601660:252uf3kwu3/*/*"
        }
      ]
    }
  };
  console.log(event, context);
  return callback(null, policy);
};

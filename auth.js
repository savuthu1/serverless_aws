"use strict";

module.exports.auth = (event, context, callback) => {
  const policy = {
    principalId: "55",
    policyDocument: {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: "Allow",
          Resource: "arn:aws:execute-api:us-west-1:867137601660:bbzthdji19/*/*"
        }
      ]
    }
  };
  console.log(event);
  return callback(null, policy);
};

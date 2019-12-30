"use strict";
var AWS = require("aws-sdk");

var ddb = new AWS.DynamoDB.DocumentClient();

var params = {
  TableName: "usersTable",
  Item: {
    email: "tttfff",
    CUSTOMER_ID: { N: "001" },
    CUSTOMER_NAME: { S: "Richard Roe" }
  }
};

module.exports.hello = async (event, context, callback) => {
  ddb.put(params, function(err, data) {
    if (err) {
      console.log("ggg");
      console.log(event);
      console.log(err);
      return callback({ statusCode: 200, body: JSON.stringify({ err }) });
    } else {
      console.log("ggg");
      console.log(data);
      return { statusCode: 200, body: JSON.stringify({ data }) };
    }
  });

  console.log(event);

  return "fff";

  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: "Go Serverless v1.0! Your function executed successfu",
  //       input: event
  //     }
  //   )
  // };
};

//import { ErrorRequestHandler } from "express";
import status from "http-status";


// https://www.rfc-editor.org/rfc/rfc7807
const defaultResponseBody = (
  status,
  title,
 ) => {
  return JSON.stringify({
    status,
    title,
  });
};

export const errorHandler = (err, req, res, next) => {

  if (err.statusCode) {
    return res
      .contentType("json")
      .status(err.statusCode)
      .send(
        defaultResponseBody({
          status: err.statusCode,
          title: err.message,
        })
      );
  }
  console.log(`Error: `, err);
  return res
    .contentType("json")
    .status(status.INTERNAL_SERVER_ERROR)
    .send(
      defaultResponseBody({
        status: status.INTERNAL_SERVER_ERROR,
        title:
          "Internal server error, please try again",
      })
    );
};
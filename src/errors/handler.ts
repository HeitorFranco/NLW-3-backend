import { ErrorRequestHandler } from "express";
import * as Yup from "yup";

interface ValidationError {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
  console.error(error);

  if (error instanceof Yup.ValidationError) {
    let errors: ValidationError = {};

    error.inner.forEach((err) => {
      errors[err.path] = err.errors;
    });
    return res.status(400).json({ message: "Validations fails", errors });
  }

  return res.status(500).json({ message: "Internal server error" });
};

export default errorHandler;

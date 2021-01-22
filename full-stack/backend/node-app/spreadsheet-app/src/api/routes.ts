/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  Controller,
  ValidationService,
  FieldErrors,
  ValidateError,
  TsoaRoute,
  HttpStatusCodeLiteral,
  TsoaResponse,
} from "tsoa";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SampleController } from "./../sample/controller";
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { SheetController } from "./../sheets/controller";
import * as express from "express";

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  Sample: {
    dataType: "refObject",
    properties: {
      id: { dataType: "double", required: true },
      username: { dataType: "string", required: true },
      firstName: { dataType: "string", required: true },
      lastName: { dataType: "string", required: true },
      email: { dataType: "string", required: true },
      password: { dataType: "string", required: true },
      createdAt: { dataType: "datetime", default: "2020-10-21T09:03:05.431Z" },
      updatedAt: { dataType: "datetime", default: "2020-10-21T09:03:05.431Z" },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const validationService = new ValidationService(models);

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: express.Express) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################
  app.get("/sample", function (request: any, response: any, next: any) {
    const args = {};

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request, response);
    } catch (err) {
      return next(err);
    }

    const controller = new SampleController();

    const promise = controller.getSamples.apply(
      controller,
      validatedArgs as any
    );
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get("/sample/:id", function (request: any, response: any, next: any) {
    const args = {
      id: { in: "path", name: "id", required: true, dataType: "double" },
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request, response);
    } catch (err) {
      return next(err);
    }

    const controller = new SampleController();

    const promise = controller.getSample.apply(
      controller,
      validatedArgs as any
    );
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    "/sample/password/:id",
    function (request: any, response: any, next: any) {
      const args = {
        id: { in: "path", name: "id", required: true, dataType: "double" },
        password: {
          in: "query",
          name: "password",
          required: true,
          dataType: "string",
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = getValidatedArgs(args, request, response);
      } catch (err) {
        return next(err);
      }

      const controller = new SampleController();

      const promise = controller.passwordMatch.apply(
        controller,
        validatedArgs as any
      );
      promiseHandler(controller, promise, response, next);
    }
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.patch("/sample/:id", function (request: any, response: any, next: any) {
    const args = {
      id: { in: "path", name: "id", required: true, dataType: "double" },
      requestBody: {
        in: "body",
        name: "requestBody",
        required: true,
        dataType: "any",
      },
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request, response);
    } catch (err) {
      return next(err);
    }

    const controller = new SampleController();

    const promise = controller.patchSample.apply(
      controller,
      validatedArgs as any
    );
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.delete("/sample/:id", function (request: any, response: any, next: any) {
    const args = {
      id: { in: "path", name: "id", required: true, dataType: "double" },
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request, response);
    } catch (err) {
      return next(err);
    }

    const controller = new SampleController();

    const promise = controller.deleteSample.apply(
      controller,
      validatedArgs as any
    );
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post("/sample", function (request: any, response: any, next: any) {
    const args = {
      requestBody: {
        in: "body",
        name: "requestBody",
        required: true,
        dataType: "any",
      },
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request, response);
    } catch (err) {
      return next(err);
    }

    const controller = new SampleController();

    const promise = controller.createSample.apply(
      controller,
      validatedArgs as any
    );
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get("/sheet", function (request: any, response: any, next: any) {
    const args = {
      student_name: { in: "query", name: "student_name", dataType: "string" },
      gender: { in: "query", name: "gender", dataType: "string" },
      home_state: { in: "query", name: "home_state", dataType: "string" },
      major: { in: "query", name: "major", dataType: "string" },
      order_by: { in: "query", name: "order_by", dataType: "any" },
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request, response);
    } catch (err) {
      return next(err);
    }

    const controller = new SheetController();

    const promise = controller.getSheet.apply(controller, validatedArgs as any);
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post("/sheet", function (request: any, response: any, next: any) {
    const args = {
      requestBody: {
        in: "body",
        name: "requestBody",
        required: true,
        dataType: "any",
      },
    };

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    let validatedArgs: any[] = [];
    try {
      validatedArgs = getValidatedArgs(args, request, response);
    } catch (err) {
      return next(err);
    }

    const controller = new SheetController();

    const promise = controller.createSheet.apply(
      controller,
      validatedArgs as any
    );
    promiseHandler(controller, promise, response, next);
  });
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function isController(object: any): object is Controller {
    return (
      "getHeaders" in object && "getStatus" in object && "setStatus" in object
    );
  }

  function promiseHandler(
    controllerObj: any,
    promise: any,
    response: any,
    next: any
  ) {
    return Promise.resolve(promise)
      .then((data: any) => {
        let statusCode;
        let headers;
        if (isController(controllerObj)) {
          headers = controllerObj.getHeaders();
          statusCode = controllerObj.getStatus();
        }

        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

        returnHandler(response, statusCode, data, headers);
      })
      .catch((error: any) => next(error));
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function returnHandler(
    response: any,
    statusCode?: number,
    data?: any,
    headers: any = {}
  ) {
    Object.keys(headers).forEach((name: string) => {
      response.set(name, headers[name]);
    });
    if (
      data &&
      typeof data.pipe === "function" &&
      data.readable &&
      typeof data._read === "function"
    ) {
      data.pipe(response);
    } else if (data || data === false) {
      // === false allows boolean result
      response.status(statusCode || 200).json(data);
    } else {
      response.status(statusCode || 204).end();
    }
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function responder(
    response: any
  ): TsoaResponse<HttpStatusCodeLiteral, unknown> {
    return function (status, data, headers) {
      returnHandler(response, status, data, headers);
    };
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  function getValidatedArgs(args: any, request: any, response: any): any[] {
    const fieldErrors: FieldErrors = {};
    const values = Object.keys(args).map((key) => {
      const name = args[key].name;
      switch (args[key].in) {
        case "request":
          return request;
        case "query":
          return validationService.ValidateParam(
            args[key],
            request.query[name],
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: "throw-on-extras" }
          );
        case "path":
          return validationService.ValidateParam(
            args[key],
            request.params[name],
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: "throw-on-extras" }
          );
        case "header":
          return validationService.ValidateParam(
            args[key],
            request.header(name),
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: "throw-on-extras" }
          );
        case "body":
          return validationService.ValidateParam(
            args[key],
            request.body,
            name,
            fieldErrors,
            undefined,
            { noImplicitAdditionalProperties: "throw-on-extras" }
          );
        case "body-prop":
          return validationService.ValidateParam(
            args[key],
            request.body[name],
            name,
            fieldErrors,
            "body.",
            { noImplicitAdditionalProperties: "throw-on-extras" }
          );
        case "res":
          return responder(response);
      }
    });

    if (Object.keys(fieldErrors).length > 0) {
      throw new ValidateError(fieldErrors, "");
    }
    return values;
  }

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

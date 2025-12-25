import httpStatus from "http-status-codes";
import mongoose from "mongoose";
import AppError from "../../../helpers/CustomError";

const CreateData = async (model: string, data: any) => {
  try {
    const crudModel = mongoose.model(model);

    return await crudModel.create(data);
  } catch (error) {
    console.log("error", error);
    throw new AppError(401, "Not found");
  }
};
const FindAll = async (model: string) => {
  try {
    const crudModel = mongoose.model(model);

    return await crudModel.find();
  } catch (error) {
    console.log("error", error);
    throw new AppError(401, "Not found");
  }
};
const FindOne = async (id: string, model: string) => {
  try {
    const crudModel = mongoose.model(model);

    return await crudModel.findById(id);
  } catch (error) {
    console.log("error", error);
    throw new AppError(401, "Not found");
  }
};
const UpdateOne = async (id: string, model: string, data: any) => {
  try {
    const crudModel = mongoose.model(model);

    const existingData = crudModel.findById(id);

    if (!existingData) {
      throw new AppError(httpStatus.NOT_FOUND, "Data Not found");
    }
    return await crudModel.findByIdAndUpdate(id, data, {
      runValidators: true,
      new: true,
    });
  } catch (error) {
    console.log("error", error);
    throw new AppError(401, "Not found");
  }
};
const DeleteOne = async (id: string, model: string) => {
  try {
    const crudModel = mongoose.model(model);

    const existingData = crudModel.findById(id);

    if (!existingData) {
      throw new AppError(httpStatus.NOT_FOUND, "Data Not found");
    }
    return await crudModel.findByIdAndDelete(id);
  } catch (error) {
    console.log("error", error);
    throw new AppError(401, "Not found");
  }
};

const FindByClause = async (model: string, body: any) => {
  try {
    const findClause: any = {};

    if (body.where) {
      findClause.where = body.where;
    }


    const crudModel = mongoose.model(model);
    let data = crudModel.find(findClause?.where);

    for (const key in body?.include) {
      if (body?.include[key] === true) {
        data = data.populate(key);
      }
    }

    return await data;
  } catch (error) {
    console.log("error", error);
    throw new AppError(401, "Something Went wrong");
  }
};

export const crudService = {
  FindAll,
  FindOne,
  UpdateOne,
  DeleteOne,
  CreateData,
  FindByClause,
};

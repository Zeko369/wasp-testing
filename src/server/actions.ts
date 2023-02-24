import HttpError from "@wasp/core/HttpError.js";
import { z } from "zod";

import { Context } from "./shared";

const createTaskSchema = z.object({ description: z.string() });
export const createTask = async (args: unknown, context: Context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  return context.entities.Task.create({
    data: {
      ...(createTaskSchema.parse(args) as any),
      user: { connect: { id: context.user.id } },
    },
  });
};

const updateTaskSchema = z.object({ id: z.number(), isDone: z.boolean() });
export const updateTask = async (args: unknown, context: Context) => {
  if (!context.user) {
    throw new HttpError(401);
  }

  const data = updateTaskSchema.parse(args) as any;
  return context.entities.Task.update({
    where: { id: data.id, user: { id: context.user.id } },
    data: { isDone: data.isDone },
  });
};

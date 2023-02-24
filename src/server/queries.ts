import HttpError from "@wasp/core/HttpError.js";
import { Context } from "./shared";

export const getTasks = async (args: unknown, context: Context) => {
  if (!context.user) throw new HttpError(401);

  return context.entities.Task.findMany({
    where: {
      user: {
        id: context.user.id,
      },
    },
  });
};

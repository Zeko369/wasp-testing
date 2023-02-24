import { Prisma, User } from "@prisma/client";

export type Context = {
  user: User;
  entities: {
    Task: Prisma.TaskDelegate<{}>;
    User: Prisma.UserDelegate<{}>;
  };
};

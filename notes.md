# NSFW 😅

- railway as provider -> nice

You guys need to learn typescript and I don't care about your love of JS


-> CRA is a bad idea...
  also from later -> Blocking on TS error in client is super stupid, fucking CRA
-> I'd add a package.json at the root with dev/build scripts

I'd add
-> tsconfig.json at the root and then extend from those / or deploy with wasp to npm

Prisma LSP is soo great and you don't have it 😭😭😭😭

Prisma is outdated, BUT blitz/create-t3-app do the same thing so... I can't really complain?

prisma breaking --create-only migration is not possible
no superjson/similar serialization/deserialization

- No first party migrations

Before you ship vite just add a BROWSER=none to the env that stars CRA

LSP autocomplete
- you could easily narrow down the autocomplete i.e. for entities in query
- Autocomplete things in app pls
- format for prisma LSP would be amazing
-> also the errorwith adding a user to the thing and not being able to run just save to fix it is horrible

IMO same problem with blitz -> POST for gets...
I'd also have some autogenerate thing for queries

Typesafe story is not great

Not sure if the depends thingy is a good idea

Logs... aren't that good, I'd clear everything on error and show that, since I can't see a server error after a couple of saves

Node server crash crashes everything for some reason

You shouldn't be using TSC to compile TS, you should be using SWC/esbuild and then running a separate process for typechecking

WELL THIS WAS A 5MIN OF MY WASTED TIME... because it breaks libraries like zod because they work just fine in the src folder but not in the .wasp folder
```jsonc
// Overriding this until we implement more complete TypeScript support.
    "strict": false,
```

From your repo 😥
```
query getTasks {
  // We specify the JS implementation of our query (which is an async JS function)
  // Even if you use TS and have a queries.ts file, you will still need to import it using the .js extension. 
  // see here for more info: https://wasp-lang.dev/docs/tutorials/todo-app/03-listing-tasks#wasp-declaration
  fn: import { getTasks } from "@server/queries.js",
  // We tell Wasp that this query is doing something with the `Task` entity. With that, Wasp will
  // automatically refresh the results of this query when tasks change.
  entities: [Task]
}
```

Dynamic awaits are amazing, but i'd still prefer what blitz does and I'll talk why
- we had the same problem

isFething in the default example is horrible, pls don't do that


There are erorrs in the default example -> checked going from controller to not controlled

LSPs just don't work correctly in VSFUCKINGCODE

For the fact that you're using express, you guys got it extremely fucking fast, but maybe use fastify?

Don't use pure npm 😥

I wanna talk about pg-boss

Password hashing magic, umm?

Writing custom validations like https://wasp-lang.dev/docs/language/features#username-and-password don't really sound like a good idea?

think about sharing .envs better? (client/server/prefix)

There is a reason for folder based stutcure and evertyuhing, 🤷‍♂️


https://wasp-lang.dev/docs/tutorials/todo-app/06-auth#updating-operations-to-forbid-access-to-non-authenticated-users
umm that's not how to do it? with new prisma you can do it "correctly"

Your compiler and everything specifically for example if you're in a ts file and want to import some of your code it needs to end in .js beacuse of you setup...

Add title login/signup to default pages

Fucking swc.........., I have an example
```json
{
  "build-and-start": "node --loader @swc-node/register/esm ./src/server.ts",
  "watch": "nodemon --exec 'npm run build-and-start || exit 1'",
}
```
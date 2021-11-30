## next-graphql-simple-todo-app

Create a simple TODO App using a combination of the following libraries
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [Apollo GraphQL](https://www.apollographql.com/)
- [GraphQL Nexus](https://nexusjs.org/)

![out2](https://user-images.githubusercontent.com/20487308/144064779-c5b69158-b150-44e2-8c9a-9cc701ec0608.gif)

## setup

```sh
git clone https://github.com/youichiro/next-graphql-simple-todo-app
cd next-graphql-simple-todo-app
npm install

# create postgresql database
createdb next_graphql_simple_todo_app

# add .env
cp .env.sample .env  # set username and password to DATABASE_URL

# schema migration
npx prisma migrate dev

# insert seeds
npx prisma db seed

# serve
npm run dev
```


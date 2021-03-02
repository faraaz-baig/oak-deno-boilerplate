import { Application, Router, RouterContext } from "./deps.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx: RouterContext) => {
  ctx.response.body = "hello world, Faraaz here";
});

app.use(router.routes());
app.use(router.allowedMethods()); // telling router to just use the method allowed to run on it for example: "/" route can only run ger method as we have configured it in our code

app.addEventListener("listen", ({ hostname, port, secure }) => {
  console.log(
    `listening on ${secure ? "https://" : "http://"}${hostname ||
      "localhost"}:${port}`,
  );
});

await app.listen({ port: 8000 });

import Router from "@koa/router";

const router = new Router();

router.get("", (ctx) => {
  console.log("This is index");
  ctx.body = "hello koa!";
});

export default router;

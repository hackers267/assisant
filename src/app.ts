import Koa from "koa";
import Router from "@koa/router";
import index from "./routes/index";

const app = new Koa();
const router = new Router();
router.use(index.routes());
app.use(router.routes()).use(router.allowedMethods());

app.listen(3003, () => {
  console.log(`running in port:${3003}`);
});

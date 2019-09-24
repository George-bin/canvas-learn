import Vue from "vue";
import Router from "vue-router";
import Line from "@/components/Line";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Line",
      component: Line
    }
  ]
});

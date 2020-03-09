import Home from "./pages/Home.vue";
import Signup from "./pages/Signup.vue";
import profile from "./pages/Profile.vue";
import Login from "./pages/Login.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/profile", component: profile }
];

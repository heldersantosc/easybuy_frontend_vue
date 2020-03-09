import Home from "./pages/Home.vue";
import Signup from "./pages/Signup.vue";
import Profile from "./pages/Profile.vue";
import Login from "./pages/Login.vue";
import ResetPassword from "./pages/ResetPassword.vue";

export const routes = [
  { path: "", component: Home },
  { path: "/home", component: Home },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/profile", component: Profile },
  { path: "/resetpasword", component: ResetPassword }
];

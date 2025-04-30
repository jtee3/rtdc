import { defineBackend } from "@aws-amplify/backend";
import { auth }           from "./auth/resource.js";
import { data }           from "./data/resource.js";

// 1️⃣ Build the backend
const backend = defineBackend({
  auth,
  data,
});
export default backend;
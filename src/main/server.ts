import { app } from "./config/app";
import { constants } from "./config/constants";

const { port } = constants;

app.listen(port, () => {
  console.log(`Server is running in ${port}`);
});

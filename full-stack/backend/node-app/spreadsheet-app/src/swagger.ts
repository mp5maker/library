import { Router } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerOptions from "@plant-rest-api/api/swagger.json";

const router = Router();

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerOptions));
export default router;

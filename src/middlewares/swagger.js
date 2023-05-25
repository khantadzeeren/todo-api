import  SwaggerUI  from "swagger-ui-express";
import YAML from "yamljs";

const swaggerMiddleware = () => {
    const options = {
        customSiteTitle: "TODO APP"
    };
    const swaggerDocument = YAML.load("./src/database/swagger.yaml");
    return [SwaggerUI.serve, SwaggerUI.setup(swaggerDocument, options)];


}

export default swaggerMiddleware;
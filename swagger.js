const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yml'); // Point to your YAML file

module.exports = swaggerDocument;

// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
const targetPathProd = './src/environments/environment.prod.ts';
// Load node modules
const fs = require('file-system');
require('dotenv').load();
// `environment.ts` file structure
const envConfigFile = isProd => `export const environment = {
   emailJsTemplateId: '${process.env.EMAILJS_TEMPLATEID}',
   emailJsServiceId: '${process.env.EMAILJS_SERVICEID}',
   emailJsUserId: '${process.env.EMAILJS_USERID}',
   production: ${isProd.toString()}
};
`;
console.log('The file `environment.ts` will be written with the following content: \n');
console.log(envConfigFile);
fs.writeFile(targetPath, envConfigFile(false), err => {
    if (err) {
        throw console.error(err);
    } else {
        console.log(`Angular environment.ts file generated correctly at ${targetPath} \n`);
    }
});

fs.writeFile(targetPathProd, envConfigFile(true), err => {
    if (err) {
        throw console.error(err);
    } else {
        console.log(`Angular environment.prod.ts file generated correctly at ${targetPathProd} \n`);
    }
});

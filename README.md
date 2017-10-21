# EmbeddedDeviceHostedWebApplicationSample
A sample application shows a static web application (supposed to be hosted on embed device) with a stub Asp.NET Core backend.

Static web content sources can be found in ClientApp folder. It consists of index.js root file and index.html.ejs template. To build web application you should first restore npm packages with 
    
    npm install

command and then use

    npm run build

to build web application with webpack. Webpack will bundle and minify javascript sources to a single bundle.[hash].js file and will generate an index.html file from template with a link to the generated bundle. Build result will be placed to a wwwroot folder so the Asp.NET Core backend may host this web app.

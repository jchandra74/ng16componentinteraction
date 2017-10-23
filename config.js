System.config({
    baseURL: '/',
    defaultJSExtensions: true,
    transpiler: false,
    paths: {
        "npm:*": "node_modules/*"
    },
    packages: {
        "src": {
            "main": "main.js",
            "defaultJSExtension": "js"
        }
    },
    map: {
        "angular": "npm:angular/index"
    }
})
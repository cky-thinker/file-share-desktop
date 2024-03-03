let path = require('path')

const nodeEnv = process.env.NODE_ENV.trim();
console.log(`NODE_ENV: ${nodeEnv}`);
console.log(`__dirname: ${__dirname}`);
global._env = nodeEnv

if (nodeEnv === 'development') {
    global.__project_home = path.dirname(__dirname)
} else {
    global.__project_home = __dirname
}

global.__static = path.join(global.__project_home, 'static')

export function isDev() {
    if (global._env === 'development') {
        return true;
    } else {
        return false;
    }
}

export function getLogLevel() {
    return isDev() ? 'debug' : 'info'
}

export function getPreloadPath() {
    if (isDev()) {
        return path.join(global.__project_home, "src", "render", "render.js")
    } else {
        return path.join(global.__project_home, "render.js")
    }
}

export function getPageAppPath() {
    if (isDev()) {
        return `http://127.0.0.1:8001`
    } else {
        return path.join(global.__project_home, "page_app", "index.html")
    }
}

export function getPageWebHome() {
    if (isDev()) {
        return path.join(global.__project_home, "dist", "page_web")
    } else {
        return path.join(global.__project_home, "page_web")
    }
}

export function getPageWebPath() {
    return path.join(getPageWebHome(), "index.html")
}

export function getLogPath() {
    return path.join(global.__project_home, "log", 'main.log')
}


console.log("__project_home: ", global.__project_home)
console.log("__static: ", global.__static)
console.log("preload path: ", getPreloadPath())
console.log("page app path: ", getPageAppPath())
console.log("page web path: ", getPageWebPath())
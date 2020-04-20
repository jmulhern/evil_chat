const { environment } = require('@rails/webpacker')


let loaderName;
for(loaderName of ["css", "moduleCss"]) {
    const loader = environment.loaders.get(loaderName);

    loader.test = /\.(p?css)$/i;

    environment.loaders.insert(loaderName, loader);
}

module.exports = environment

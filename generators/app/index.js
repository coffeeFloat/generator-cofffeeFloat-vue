const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'the project name',
        default: this.appname,
      },
    ]).then(anwsers => {
      this.anwsers = anwsers;
    });
  };
  writing() {
    const templates = [
      '.babelrc',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      '.postcssrc.js',
      'index.html',
      'package.json',
      'README.md',
      'yarn.lock',
      'static/.gitkeep',
      'src/App.vue',
      'src/main.js',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue',
      'src/router/index.js',
    ];
    templates.forEach(item => {
      const tpl = this.templatePath(item);
      const out = this.destinationPath(item);
      this.fs.copyTpl(tpl, out, this.anwsers);
    });
  };
};
module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          targetDir: 'app/lib'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-task');

  grunt.registerTask('default', ['bower:install']);
};

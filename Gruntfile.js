module.exports = function(grunt) {

  grunt.initConfig({
    // Méta-données
    pkg: grunt.file.readJSON("package.json"),

    // Fichers que les tâches utiliserons
    files: {
      html: {
        src: "app/index.html"
      },

      css: {
        src: "app/stylesheets/style.css"
      },

      js: {
        vendor: [
          "bower_modules/phaser/build/phaser.min.js"
        ],
        app: {
          main: "app/javascripts/app.js",
          compiled: "generated/js/app-bundle.js"
        }
      }
    },

    // Configurations
    browserify: {
      app: {
        files: {
          "<%= files.js.app.compiled %>" : "<%= files.js.app.main %>"
        }
      }
    },

    concat: {
      app: {
        src: [
          "<%= files.js.vendor %>",
          "<%= files.js.app.compiled %>"
        ],
        dest: "generated/js/app.min.js"
      }
    },

    watch: {
      js: {
        files: ["app/javascripts/**/*.js"],
        tasks: ["browserify", "concat"]
      },
      css: {
        files: ["<%= files.css.src %>"],
        tasks: ["copy"]
      },
      html: {
        files: ["<%= files.html.src %>"],
        tasks: ["copy"]
      }
    },

    copy: {
      html: {
        src: "<%= files.html.src %>",
        dest: "generated/",
        expand: true,
        flatten: true
      },
      css: {
        src: "<%= files.css.src %>",
        dest: "generated/css/",
        expand: true,
        flatten: true
      },
      image: {
        src: "app/images/*.png",
        dest: "generated/images/",
        expand: true,
        flatten: true
      }
    },

    server: {
      base: process.env.SERVER_BASE || 'generated',
      web: {
        port: 3000
      }
    },

    clean: {
      workspaces: 'generated'
    }
  });

  // Charge les tâches locales
  grunt.loadTasks("tasks");

  // Charge les tâches externe (plugins)
  // Charge tous mes plugins commençant par "grunt-"
  require('matchdep').filterAll('grunt-*').forEach(grunt.loadNpmTasks);

  // Workflow
  grunt.registerTask("default", ["browserify", "concat", "copy", "server", "watch"]);
};

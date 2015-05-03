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
          "bower_modules/underscore/underscore-min.js",
          "bower_modules/phaser/build/phaser.min.js"
        ],
        app: {
          main: "app/javascripts/app.js",
          compiled: "generated/js/app.min.js"
        }
      }
    },

    // Configurations
    browserify: {
      app: {
        options: {
          browserifyOptions: {
            debug: true
          }
        },
        files: {
          "<%= files.js.app.compiled %>" : "<%= files.js.app.main %>"
        }
      }
    },

    concat_sourcemap: {
      options: {
        sourcesContent: true
      },
      vendor: {
        src: "<%= files.js.vendor %>",
        dest: "generated/js/vendor.min.js"
      }
    },

    watch: {
      vendor: {
        files: ["<%= files.js.vendor %>"],
        tasks: ["concat_sourcemap"]
      },
      js: {
        files: ["app/javascripts/**/*.js"],
        tasks: ["browserify", "concat_sourcemap"]
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
  grunt.registerTask("default", ["browserify", "concat_sourcemap", "copy", "server", "watch"]);
};

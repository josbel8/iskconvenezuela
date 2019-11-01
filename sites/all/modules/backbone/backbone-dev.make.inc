; This file was auto-generated by drush make
core = 7.x

api = 2
; projects[drupal][version] = "7.x"
projects[] = "drupal"

projects[ctools][type] = "module"

projects[entity][type] = "module"

projects[features][type] = "module"

projects[jquery_update][type] = "module"

projects[libraries][type] = "module"

projects[qunit][type] = "module"

projects[services][type] = "module"

projects[restws][type] = "module"

projects[services_views][type] = "module"

projects[views][type] = "module"

projects[views_datasource][type] = "module"

; Libraries
; Please fill the following out. Type may be one of get, cvs, git, bzr or svn,
; and url is the url of the download.
libraries[backbone][download][type] = "file"
libraries[backbone][download][url] = "http://documentcloud.github.com/backbone/backbone-min.js"
libraries[backbone][directory_name] = "backbone"
libraries[backbone][type] = "library"

; Please fill the following out. Type may be one of get, cvs, git, bzr or svn,
; and url is the url of the download.
libraries[underscore][download][type] = "file"
libraries[underscore][download][url] = "http://documentcloud.github.com/underscore/underscore-min.js"
libraries[underscore][directory_name] = "underscore"
libraries[underscore][type] = "library"

; Please fill the following out. Type may be one of get, cvs, git, bzr or svn,
; and url is the url of the download.
libraries[spyc][download][type] = "file"
libraries[spyc][download][url] = "http://spyc.googlecode.com/files/spyc-0.5.zip"
libraries[spyc][download][sha1] = "ed25f0a884ee78c94a41c69d282a66101e5511c0"
libraries[spyc][directory_name] = "spyc"
libraries[spyc][type] = "library"

; QUnit lib
libraries[qunit][download][type] = "file"
libraries[qunit][download][url] = "https://github.com/jquery/qunit/zipball/v1.9.0"
libraries[qunit][directory_name] = "qunit"
libraries[qunit][type] = "library"

;Twig.js lib
libraries[twig.js][download][type] = "file"
libraries[twig.js][download][url] = "https://github.com/justjohn/twig.js/zipball/master"
libraries[twig.js][directory_name] = "twig.js"
libraries[twig.js][type] = "library"
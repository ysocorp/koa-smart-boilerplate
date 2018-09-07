define({ "api": [
  {
    "type": "get",
    "url": "/example/:id",
    "title": "",
    "group": "Example",
    "permission": [
      {
        "name": "public"
      }
    ],
    "version": "0.0.0",
    "filename": "/home/djengo/Documents/dev/koa/koa-smart-boilerplate/node_modules/koa-smart/dist/ApiDocTmp/example/-id.js",
    "groupTitle": "Example",
    "name": "GetExampleId"
  },
  {
    "type": "post",
    "url": "/example",
    "title": "",
    "group": "Example",
    "permission": [
      {
        "name": "public"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>It should be a string.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>It should be a string.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "/home/djengo/Documents/dev/koa/koa-smart-boilerplate/node_modules/koa-smart/dist/ApiDocTmp/example.js",
    "groupTitle": "Example",
    "name": "PostExample"
  },
  {
    "type": "get",
    "url": "/",
    "title": "",
    "group": "Index",
    "permission": [
      {
        "name": "public"
      }
    ],
    "version": "0.0.0",
    "filename": "/home/djengo/Documents/dev/koa/koa-smart-boilerplate/node_modules/koa-smart/dist/ApiDocTmp/Index.js",
    "groupTitle": "Index",
    "name": "Get"
  }
] });

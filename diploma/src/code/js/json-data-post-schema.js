{
   "allowed_detail_http_methods":[
      "get",
      "post",
      "put",
      "delete",
      "patch"
   ],
   "allowed_list_http_methods":[
      "get",
      "post",
      "put",
      "delete",
      "patch"
   ],
   "default_format":"application/json",
   "default_limit":20,
   "fields":{
      "author":{
         "blank":false,
         "default":"No default provided.",
         "help_text":"A single related resource. Can be either a URI or set of nested resource data.",
         "nullable":false,
         "readonly":false,
         "related_type":"to_one",
         "resource":"/posts/api/v1/author/",
         "type":"related",
         "unique":false
      },
      "content":{
         "blank":false,
         "default":"",
         "help_text":"Content: ",
         "nullable":false,
         "readonly":false,
         "type":"string",
         "unique":false
      },
      "created_at":{
         "blank":true,
         "default":true,
         "help_text":"Created at: ",
         "nullable":false,
         "readonly":false,
         "type":"datetime",
         "unique":false
      },
      "id":{
         "blank":true,
         "default":"",
         "help_text":"Integer data. Ex: 2673",
         "nullable":false,
         "readonly":false,
         "type":"integer",
         "unique":true
      },
      "resource_uri":{
         "blank":false,
         "default":"No default provided.",
         "help_text":"Unicode string data. Ex: \"Hello World\"",
         "nullable":false,
         "readonly":true,
         "type":"string",
         "unique":false
      },
      "title":{
         "blank":false,
         "default":"No default provided.",
         "help_text":"Title: ",
         "nullable":false,
         "readonly":false,
         "type":"string",
         "unique":false
      }
   }
}
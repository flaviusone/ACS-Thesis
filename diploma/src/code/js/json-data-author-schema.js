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
      "date_joined":{
         "blank":false,
         "default":"2015-06-20T14:49:00.629417",
         "help_text":"A date & time as a string. Ex: \"2010-11-10T03:07:43\"",
         "nullable":false,
         "readonly":false,
         "type":"datetime",
         "unique":false
      },
      "email":{
         "blank":true,
         "default":"",
         "help_text":"Unicode string data. Ex: \"Hello World\"",
         "nullable":false,
         "readonly":false,
         "type":"string",
         "unique":false
      },
      "first_name":{
         "blank":true,
         "default":"",
         "help_text":"Unicode string data. Ex: \"Hello World\"",
         "nullable":false,
         "readonly":false,
         "type":"string",
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
      "last_login":{
         "blank":false,
         "default":"2015-06-20T14:49:00.629387",
         "help_text":"A date & time as a string. Ex: \"2010-11-10T03:07:43\"",
         "nullable":false,
         "readonly":false,
         "type":"datetime",
         "unique":false
      },
      "last_name":{
         "blank":true,
         "default":"",
         "help_text":"Unicode string data. Ex: \"Hello World\"",
         "nullable":false,
         "readonly":false,
         "type":"string",
         "unique":false
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
      "username":{
         "blank":false,
         "default":"No default provided.",
         "help_text":"Required. 30 characters or fewer. Letters, digits and @/./+/-/_ only.",
         "nullable":false,
         "readonly":false,
         "type":"string",
         "unique":true
      }
   },
   "filtering":{
      "username":1
   }
}

  module.exports = {
      swagger : "2.0",
      info:{
          version:"1.0.0",
          title:"API Oranje Juice",
          license: {
              name: "Apache 2.0",
              url: "http://www.apache.org/licenses/LICENSE-2.0.html",
            },
      },
      host: process.env.SWAGGER_HOST,

      schemes: ["http"],
      paths: {
          "/user":{
              get: {
                  tags: ["users"],
                  summary: "Retrive all users",
                  description: "",
                  consumes: ["application/json"],
                  produces: ["application/json"],
                  responses: {
                    200: {
                      description: "Success",
                    },
                    400: {
                      description: "Bad Request",
                    },
                  },
                  security: [
                    {
                      Bearer: [],
                    },
                  ],
                },
              
                post: {
                    tags: ["users"],
                    summary: "Create users",
                    description: "",
                    parameters:[
                      {
                        in:"body",
                        name:"body",
                        required:true, 
                        schema:{
                          $ref:"#/definitions/CreateUser"
                        }
                      }
                    ],
                    consumes: ["application/json"],
                    produces: ["application/json"],
                    responses: {
                      200: {
                        description: "Success",
                      },
                      400: {
                        description: "Bad Request",
                      },
                    },
                    security: [
                      {
                        Bearer: [],
                      },
                    ],
                  },
                },
          "/user/:id": {
                  get: {
                    tags: ["users"],
                    summary: "Retrive an user",
                    description: "",
                    parameters: [
                      {
                        name: "id",
                        in: "path",
                        description: "ID of an user",
                        required: true,
                        type: "integer",
                        format: "int64",
                      },
                    ],
                    consumes: ["application/json"],
                    produces: ["application/json"],
                    responses: {
                      200: {
                        description: "Success",
                      },
                      400: {
                        description: "Bad Request",
                      },
                    },
                    security: [
                      {
                        Bearer: [],
                      },
                    ],
                  },
                },
          "/auth":{
            get:{
              tags:["auth"],
              summary: "Get user information",
              description: "",
              parameters:[
                {name:"x-auth-token",
                  in:"headers",    
                  required:true, 
                }
              ],
              consumes: ["application/json"],
              produces: ["application/json"],
              responses: {
                200: {
                  description: "Success",
                },
                400: {
                  description: "Bad Request",
                },
              },
              security: [
                {
                  Bearer: [],
                },
              ],
            }
         ,
            post:{
              tags:["auth"],
              summary: "Get token",
              description: "",
              parameters:[
                {name:"body",
                  in:"body",    
                  schema:{
                    $ref:"#/definitions/LoginUser"
                  },
                  required:true, 
                }
              ],
              consumes: ["application/json"],
              produces: ["application/json"],
              responses: {
                200: {
                  description: "Success",
                },
                400: {
                  description: "Bad Request",
                },
              },
              security: [
                {
                  Bearer: [],
                },
              ],
            }
        },
        "/user/novoCurso":{
          post:{
            tags:["users"],
            summary: "Novo curso",
            description: "",
            parameters:[
              {name:"body",
                in:"body",    
                schema:{
                  $ref:"#/definitions/NovoCurso"
                },
                required:true, 
              }
            ],
            consumes: ["application/json"],
            produces: ["application/json"],
            responses: {
              200: {
                description: "Success",
              },
              400: {
                description: "Bad Request",
              },
            },
            security: [
              {
                Bearer: [],
              },
            ],
          
          }
        },
        "/user/check":{
          post:{
            tags:["users"],
            summary: " Check no conteúdo",
            description: "",
            parameters:[
              {name:"body",
                in:"body",    
                schema:{
                  $ref:"#/definitions/Check"
                },
                required:true, 
              }
            ],
            consumes: ["application/json"],
            produces: ["application/json"],
            responses: {
              200: {
                description: "Success",
              },
              400: {
                description: "Bad Request",
              },
            },
            security: [
              {
                Bearer: [],
              },
            ],
          
          }
        }, "/trilhas":{
          post:{
            tags:["trilha"],
            summary: " Criar trilha",
            description: "",
            parameters:[
              {name:"body",
                in:"body",    
                schema:{
                  $ref:"#/definitions/CreateTrilha"
                },
                required:true, 
              }
            ],
            consumes: ["application/json"],
            produces: ["application/json"],
            responses: {
              200: {
                description: "Success",
              },
              400: {
                description: "Bad Request",
              },
            },
            security: [
              {
                Bearer: [],
              },
            ],
          
          }
        },"/trilhas/addConteudo":{
          post:{
            tags:["trilha"],
            summary: "Adicionar conteudo na trilha",
            description: "",
            parameters:[
              {name:"body",
                in:"body",    
                schema:{
                  $ref:"#/definitions/AdicionaConteudo"
                },
                required:true, 
              }
            ],
            consumes: ["application/json"],
            produces: ["application/json"],
            responses: {
              200: {
                description: "Success",
              },
              400: {
                description: "Bad Request",
              },
            },
            security: [
              {
                Bearer: [],
              },
            ],
          
          }
        },"/curso":{
          post:{
            tags:["curso"],
            summary: "Create curso",
            description: "",
            parameters:[
              {name:"body",
                in:"body",    
                schema:{
                  $ref:"#/definitions/CreateCurso"
                },
                required:true, 
              }
            ],
            consumes: ["application/json"],
            produces: ["application/json"],
            responses: {
              200: {
                description: "Success",
              },
              400: {
                description: "Bad Request",
              },
            },
            security: [
              {
                Bearer: [],
              },
            ],
          
          }
        },"/curso/addTrilha":{
          post:{
            tags:["curso"],
            summary: "Relaciona trilha e curso",
            description: "",
            parameters:[
              {name:"body",
                in:"body",    
                schema:{
                  $ref:"#/definitions/AdicionaTrilha"
                },
                required:true, 
              }
            ],
            consumes: ["application/json"],
            produces: ["application/json"],
            responses: {
              200: {
                description: "Success",
              },
              400: {
                description: "Bad Request",
              },
            },
            security: [
              {
                Bearer: [],
              },
            ],
          
          }
        },"/curso/{id}":{
          get:{
            tags:["curso"],
            summary: "Retorna curso por id",
            description: "",
            parameters:[  {
              name: "id",
              in: "path",
              description: "ID do curso",
              required: true,
              type: "integer",
              format: "int64",
            },
              {name:"body",
                in:"body",    
                schema:{
                  $ref:"#/definitions/GetCurso"
                },
                required:false, 
              }
            ],
            consumes: ["application/json"],
            produces: ["application/json"],
            responses: {
              200: {
                description: "Success",
              },
              400: {
                description: "Bad Request",
              },
            },
            security: [
              {
                Bearer: [],
              },
            ],
          
          }
        },"/conteudo":{
          post:{
            tags:["curso"],
            summary: "Cria conteudo",
            description: "",
            parameters:[
              {name:"body",
                in:"body",    
                schema:{
                  $ref:"#/definitions/CreateConteudo"
                },
                required:true, 
              }
            ],
            consumes: ["application/json"],
            produces: ["application/json"],
            responses: {
              200: {
                description: "Success",
              },
              400: {
                description: "Bad Request",
              },
            },
            security: [
              {
                Bearer: [],
              },
            ],
          
          }
        }
          },definitions:{
            CreateUser:{
              type:"object",
              properties:{
                name:{
                  type:"string"
                },
                email:{
                  type:"string"
                },
                password:{
                  type:"string"
                }
              }
            },
            LoginUser:{
              type:"object",
              properties:{
                email:{
                  type:"string"
                },
                password:{
                  type:"string"
                }
              }
            },
            NovoCurso:{
              type:"object",
              properties:{
                id_user:{
                  type:"string"
                },
                id_curso:{
                  type:"string"
                }
              }
            },
            Check:   {
              type:"object",
              properties:{
                id_user:{
                  type:"string"
                },
                id_conteudo:{
                  type:"string"
                }
              }
            },
            CreateTrilha:{
              type:"object",
              properties:{
                titulo:{
                  type:"string"
                },
              }
            },
            AdicionaConteudo:{
              type:"object",
              properties:{
                trilha:{
                  type:"string"
                },id:{
                  type:"string"
                }
              }
              },
              CreateCurso:{
                type:"object",
                properties:{
                  titulo:{
                    type:"string"
                  },
                }
              },
              AdicionaTrilha:{
                type:"object",
                properties:{
                  titulo:{
                    type:"string"
                  },
                  curso:{
                    type:"string"
                  }
                }
                },
                GetCurso:{
                  type:"object",
                  properties:{
                    id_user:{
                      type:"string"
                    },
                  }
                },
                CreateConteudo:{
                  type:"object",
                  properties:{
                    titulo:{
                      type:"string"
                    },
                    tipo:{
                      type:"string"
                    },
                    origem:{
                      type:"string"
                    },
                    duracao:{
                      type:"string"
                    },
                    link:{
                      type:"string"
                    },                  }
                },
          }
        }
    
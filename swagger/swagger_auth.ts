export const swaggerAuth = {
      "/auth/login": {
        "post": {
          "summary": "User Login",
          "description": "Logs in a user and returns an access token",
          "tags": ["Auth"],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "email": {
                      "type": "string",
                      "example": "jpvillaplana@gmail.com"
                    },
                    "password": {
                      "type": "string",
                      "example": "password"
                    }
                  },
                  "required": ["email", "password"]
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Login successful",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Login Success"
                      },
                      "user": {
                        "type": "object",
                        "properties": {
                          "id": { "type": "integer", "example": 1 },
                          "email": { "type": "string", "example": "user@example.com" },
                          "token": { "type": "string", "example": "jwt_token" }
                        }
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Login failed",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Login failed"
                      },
                      "error": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/auth/register": {
        "post": {
          "summary": "User Registration",
          "description": "Registers a new user",
          "tags": ["Auth"],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": { "type": "string", "example": "John" },
                    "lastname": { "type": "string", "example": "Doe" },
                    "email": { "type": "string", "example": "user@example.com" },
                    "password": { "type": "string", "example": "password123" },
                    "wallet": { "type": "string", "example": "wallet_address" }
                  },
                  "required": ["name", "lastname", "email", "password"]
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "User registered successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Register Success"
                      },
                      "user": {
                        "type": "object",
                        "properties": {
                          "id": { "type": "integer", "example": 1 },
                          "email": { "type": "string", "example": "user@example.com" },
                          "name": { "type": "string", "example": "John" },
                          "lastname": { "type": "string", "example": "Doe" },
                          "wallet": { "type": "string", "example": "wallet_address" }
                        }
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "description": "User not created",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "User not created"
                      },
                      "error": {
                        "type": "string"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "/auth/logout": {
        "post": {
          "summary": "User Logout",
          "description": "Logs out a user and clears the access token",
          "tags": ["Auth"],
          "responses": {
            "200": {
              "description": "Logout successful",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Logout Success"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

  
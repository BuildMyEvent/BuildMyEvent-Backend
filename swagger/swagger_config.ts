export const swaggerConfig = {
      "/config/by-domain": {
        "get": {
          "summary": "Get Config Settings",
          "description": "Retrieves configuration settings for a specific domain",
          "tags": ["Config"],
          "parameters": [
            {
              "name": "domain",
              "in": "path",
              "required": true,
              "description": "The domain for which to retrieve configuration settings",
              "schema": {
                "type": "string",
                "example": "picnic.buildmyevent.xyz"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Config settings retrieved successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Config settings"
                      },
                      "config": {
                        "type": "object",
                        "additionalProperties": {
                          "type": "string"
                        }
                      },
                      "event": {
                        "$ref": "#/components/schemas/Event"
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Config settings not found",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Config settings not found"
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
      "/config/update": {
        "put": {
            "summary": "Update Config",
            "description": "Update configuration settings",
            "tags": ["Config"],
            "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "domain": { "type": "string", "example": "api.buildmyevent.xyz" },
                    "eventId": { "type": "integer", "example": 1 },
                    "config_key": { "type": "string", "example": "backgroundColor" },
                    "config_value": { "type": "string", "example": "#FFFFFF" }
                  },
                  "required": ["domain", "eventId", "config_key", "config_value"]
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "Config updated successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Config updated"
                      },
                      "config": {
                        "$ref": "#/components/schemas/Config"
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Config not updated",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Config not updated"
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
      "/config/create": {
        "post": {
          "summary": "Create Config",
          "description": "Creates new configuration settings",
          "tags": ["Config"],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "domain": { "type": "string", "example": "example.com" },
                    "eventId": { "type": "integer", "example": 1 },
                    "config_key": { "type": "string", "example": "backgroundColor" },
                    "config_value": { "type": "string", "example": "#FFFFFF" }
                  },
                  "required": ["domain", "eventId", "config_key", "config_value"]
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Config created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Config created"
                      },
                      "config": {
                        "$ref": "#/components/schemas/Config"
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Config not created",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Config not created"
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
        },
      }
    
  };
  
export const swaggerTicket = {
    "/tickets/": {
        "post": {
            "summary": "Create a Ticket",
            "description": "Creates a new ticket for an event",
            "tags": ["Tickets"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "eventId": { "type": "integer", "example": 1 },
                                "type": { "type": "string", "example": "VIP" },
                                "price": { "type": "number", "example": 50.0 },
                                "builderScore": { "type": "integer", "example": 5 },
                                "image": { "type": "string", "example": "https://example.com/image.jpg" },
                                "title": { "type": "string", "example": "VIP Ticket" },
                                "description": { "type": "string", "example": "Access to VIP area" }
                            },
                            "required": ["eventId", "type", "price", "title"]
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Ticket created successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Ticket created" },
                                    "event": { "$ref": "#/components/schemas/Ticket" }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Ticket not created",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Ticket not created" },
                                    "error": { "type": "string" }
                                }
                            }
                        }
                    }
                }
            }
        },
  
    },
    "/tickets/all":{
        "get": {
            "summary": "Get All Tickets",
            "description": "Retrieves all tickets",
            "tags": ["Tickets"],
            "responses": {
                "200": {
                    "description": "Tickets retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "All tickets retrieved" },
                                    "tickets": {
                                        "type": "array",
                                        "items": { "$ref": "#/components/schemas/Ticket" }
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Tickets not found",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Tickets not found" },
                                    "error": { "type": "string" }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/tickets/createbatch": {
        "post": {
            "summary": "Create Tickets in Batch",
            "description": "Creates multiple tickets for an event",
            "tags": ["Tickets"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "eventId": { "type": "integer", "example": 1 },
                                    "type": { "type": "string", "example": "GENERAL" },
                                    "price": { "type": "number", "example": 20.0 },
                                    "builderScore": { "type": "integer", "example": 3 },
                                    "image": { "type": "string", "example": "https://example.com/image.jpg" },
                                    "title": { "type": "string", "example": "General Admission" },
                                    "description": { "type": "string", "example": "General access to the event" }
                                },
                                "required": ["eventId", "type", "price", "title"]
                            }
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Batch tickets created successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Tickets created" },
                                    "event": {
                                        "type": "array",
                                        "items": { "$ref": "#/components/schemas/Ticket" }
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Batch tickets not created",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Ticket not created" },
                                    "error": { "type": "string" }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/tickets/by-event/{eventId}": {
        "get": {
            "summary": "Get Tickets by Event",
            "description": "Retrieves all tickets for a specific event",
            "tags": ["Tickets"],
            "parameters": [
                {
                    "name": "eventId",
                    "in": "path",
                    "required": true,
                    "description": "The ID of the event",
                    "schema": { "type": "integer", "example": 1 }
                }
            ],
            "responses": {
                "200": {
                    "description": "Tickets retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Tickets retrieved" },
                                    "tickets": {
                                        "type": "array",
                                        "items": { "$ref": "#/components/schemas/Ticket" }
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Tickets not found",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Tickets not found" },
                                    "error": { "type": "string" }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/tickets/by-id/{id}": {
        "get": {
            "summary": "Get Ticket by ID",
            "description": "Retrieves a ticket by its ID",
            "tags": ["Tickets"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "description": "The ID of the ticket",
                    "schema": { "type": "integer", "example": 1 }
                }
            ],
            "responses": {
                "200": {
                    "description": "Ticket retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Ticket" },
                                    "ticket": { "$ref": "#/components/schemas/Ticket" }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Ticket not found",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Ticket not found" },
                                    "error": { "type": "string" }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


export const swaggerEvent = {
    "/events/create": {
        "post": {
            "summary": "Create Event",
            "description": "Creates a new event with the provided details",
            "tags": ["Events"],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "title": { "type": "string", "example": "Conference 2024" },
                                "description": { "type": "string", "example": "Annual tech conference" },
                                "startDate": { "type": "string", "format": "date-time", "example": "2024-12-01T10:00:00Z" },
                                "endDate": { "type": "string", "format": "date-time", "example": "2024-12-01T18:00:00Z" },
                                "location": { "type": "string", "example": "Conference Hall A" },
                                "domain": { "type": "string", "example": "example.com" },
                                "config": {
                                    "type": "object",
                                    "additionalProperties": { "type": "string" }
                                }
                            },
                            "required": ["title", "startDate", "endDate", "location", "domain"]
                        }
                    }
                }
            },
            "responses": {
                "201": {
                    "description": "Event created successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Event created" },
                                    "event": { "$ref": "#/components/schemas/Event" }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Event not created",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Event not created" },
                                    "error": { "type": "string" }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/events/{id}": {
        "get": {
            "summary": "Get Event by ID",
            "description": "Retrieves an event by its ID",
            "tags": ["Events"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "description": "The ID of the event to retrieve",
                    "schema": { "type": "integer", "example": 1 }
                }
            ],
            "responses": {
                "200": {
                    "description": "Event retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Event" },
                                    "event": { "$ref": "#/components/schemas/Event" }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "Event not found",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Event not found" },
                                    "error": { "type": "string" }
                                }
                            }
                        }
                    }
                }
            }
        },
    },
    "/events/my": {
        "get": {
            "summary": "Get All My Events",
            "description": "Retrieves all events associated with the current user",
            "tags": ["Events"],
            "responses": {
                "200": {
                    "description": "Events retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Events" },
                                    "events": {
                                        "type": "array",
                                        "items": { "$ref": "#/components/schemas/Event" }
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Events not found",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Events not found" },
                                    "error": { "type": "string" }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/events/{id}/update": {
        "put": {
            "summary": "Update Event",
            "description": "Updates an existing event by ID",
            "tags": ["Events"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "description": "The ID of the event to update",
                    "schema": { "type": "integer", "example": 1 }
                }
            ],
            "requestBody": {
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "type": "object",
                            "properties": {
                                "title": { "type": "string", "example": "Updated Conference 2024" },
                                "description": { "type": "string", "example": "Updated tech conference details" },
                                "startDate": { "type": "string", "format": "date-time", "example": "2024-12-01T12:00:00Z" },
                                "endDate": { "type": "string", "format": "date-time", "example": "2024-12-01T20:00:00Z" },
                                "location": { "type": "string", "example": "Conference Hall B" },
                                "domain": { "type": "string", "example": "example.com" }
                            }
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Event updated successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Event updated" },
                                    "event": { "$ref": "#/components/schemas/Event" }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Event not updated",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Event not updated" },
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


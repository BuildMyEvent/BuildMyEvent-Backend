export const swaggerUser = {
    "/users/all": {
        "get": {
            "summary": "Get All Users",
            "description": "Retrieves all users from the database",
            "tags": ["Users"],
            "responses": {
                "200": {
                    "description": "Users retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Users" },
                                    "users": {
                                        "type": "array",
                                        "items": { "$ref": "#/components/schemas/User" }
                                    }
                                }
                            }
                        }
                    }
                },
                "400": {
                    "description": "Users not found",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "Users not found" },
                                    "error": { "type": "string" }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    "/users/by-id/{id}": {
        "get": {
            "summary": "Get User by ID",
            "description": "Retrieves a user by their ID",
            "tags": ["Users"],
            "parameters": [
                {
                    "name": "id",
                    "in": "path",
                    "required": true,
                    "description": "The ID of the user to retrieve",
                    "schema": { "type": "integer", "example": 1 }
                }
            ],
            "responses": {
                "200": {
                    "description": "User retrieved successfully",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "User" },
                                    "user": { "$ref": "#/components/schemas/User" }
                                }
                            }
                        }
                    }
                },
                "404": {
                    "description": "User not found",
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "message": { "type": "string", "example": "User not found" },
                                    "error": { "type": "string" }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

};

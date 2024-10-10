import { swaggerAuth } from './swagger_auth';
import { swaggerConfig } from './swagger_config';
import { swaggerEvent } from './swagger_event';
import { swaggerUser } from './swagger_user';

export const swaggerWrapper = {
    "openapi": "3.0.0",
    "info": {
        "title": "Auth API Documentation",
        "version": "1.0.0",
        "description": "API for managing user authentication"
    },
    "paths": {
        ...swaggerAuth,
        ...swaggerConfig,
        ...swaggerEvent,
        ...swaggerUser
    },
    "components": {
        "securitySchemes": {
            "BearerAuth": {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT"
            }
        },
        "schemas": {
            "User": {
                "type": "object",
                "properties": {
                    "id": { "type": "integer" },
                    "email": { "type": "string" },
                    "name": { "type": "string" },
                    "lastname": { "type": "string" },
                    "wallet": { "type": "string" },
                    "token": { "type": "string" }
                }
            },
            "Config": {
                "type": "object",
                "properties": {
                    "domain": { "type": "string" },
                    "eventId": { "type": "integer" },
                    "config_key": { "type": "string" },
                    "config_value": { "type": "string" }
                }
            },
            "Event": {
                "type": "object",
                "properties": {
                    "id": { "type": "integer", "example": 1 },
                    "title": { "type": "string", "example": "Conference 2024" },
                    "description": { "type": "string", "example": "Annual tech conference" },
                    "startDate": { "type": "string", "format": "date-time", "example": "2024-12-01T10:00:00Z" },
                    "endDate": { "type": "string", "format": "date-time", "example": "2024-12-01T18:00:00Z" },
                    "location": { "type": "string", "example": "Conference Hall A" },
                    "domain": { "type": "string", "example": "example.com" }
                }
            }
        }
    }
}

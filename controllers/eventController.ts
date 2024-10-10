import { Request, Response } from 'express';
import EventModel from '../models/eventModel';
import { getCurrentUser } from '../utils/auth';

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Event:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *           example: "My Event"
 *         description:
 *           type: string
 *           example: "This is a description of my event."
 *         startDate:
 *           type: string
 *           format: date-time
 *           example: "2024-10-09T09:00:00Z"
 *         endDate:
 *           type: string
 *           format: date-time
 *           example: "2024-10-09T12:00:00Z"
 *         location:
 *           type: string
 *           example: "123 Event St, City, Country"
 *         domain:
 *           type: string
 *           example: "events"
 *         organizerId:
 *           type: integer
 *     EventResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         event:
 *           $ref: '#/components/schemas/Event'
 *     EventsResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         events:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Event'
 */

/**
 * @swagger
 * tags:
 *   name: Events
 *   description: Events API
 */

export class EventController {
  /**
   * @swagger
   * /events:
   *   post:
   *     summary: Create a new event
   *     tags: [Events]
   *     security:
   *       - BearerAuth: []
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *                 example: "My Event"
   *               description:
   *                 type: string
   *                 example: "This is a description of my event."
   *               startDate:
   *                 type: string
   *                 format: date-time
   *                 example: "2024-10-09T09:00:00Z"
   *               endDate:
   *                 type: string
   *                 format: date-time
   *                 example: "2024-10-09T12:00:00Z"
   *               location:
   *                 type: string
   *                 example: "123 Event St, City, Country"
   *               domain:
   *                 type: string
   *                 example: "events"
   *     responses:
   *       201:
   *         description: Event created successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/EventResponse'
   *       400:
   *         description: Error in creating the event
   */
  static async createEvent(req: Request, res: Response) {
    const currentUser = getCurrentUser(req);

    try {
      const event = await EventModel.createEvent(currentUser?.id, req.body);
      res.status(201).json({ message: 'Event created', event });
    } catch (error) {
      res.status(400).json({ message: 'Event not created', error });
    }
  }

  /**
   * @swagger
   * /events/update/{id}:
   *   put:
   *     summary: Update an existing event
   *     tags: [Events]
   *     security:
   *       - BearerAuth: []
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID of the event to update
   *         schema:
   *           type: integer
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *                 example: "Updated Event Title"
   *               description:
   *                 type: string
   *                 example: "Updated event description."
   *               startDate:
   *                 type: string
   *                 format: date-time
   *                 example: "2024-10-09T10:00:00Z"
   *               endDate:
   *                 type: string
   *                 format: date-time
   *                 example: "2024-10-09T13:00:00Z"
   *               location:
   *                 type: string
   *                 example: "456 Updated St, City, Country"
   *               domain:
   *                 type: string
   *                 example: "events"
   *     responses:
   *       200:
   *         description: Event updated successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/EventResponse'
   *       400:
   *         description: Error in updating the event
   */
  static async updateEvent(req: Request, res: Response) {
    const currentUser = getCurrentUser(req);
    const event_id = parseInt(req.params.id);

    try {
      const event = await EventModel.updateEvent(currentUser?.id, event_id, req.body);
      res.status(200).json({ message: 'Event updated', event });
    } catch (error) {
      res.status(400).json({ message: 'Event not updated', error });
    }
  }

  /**
   * @swagger
   * /events/{id}:
   *   get:
   *     summary: Get an event by ID
   *     tags: [Events]
   *     security:
   *       - BearerAuth: []
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID of the event to retrieve
   *         schema:
   *           type: integer
   *     responses:
   *       200:
   *         description: Event retrieved successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/EventResponse'
   *       400:
   *         description: Error retrieving the event
   */
  static async getEventById(req: Request, res: Response) {
    const event_id = req.params.id;

    try {
      const event = await EventModel.getEventById(parseInt(event_id));
      res.status(200).json({ message: 'Event', event });
    } catch (error) {
      res.status(400).json({ message: 'Event not found', error });
    }
  }

  /**
   * @swagger
   * /events/my:
   *   get:
   *     summary: Get all my events
   *     tags: [Events]
   *     security:
   *       - BearerAuth: []
   *     responses:
   *       200:
   *         description: Events retrieved successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/EventsResponse'
   *       400:
   *         description: Error retrieving events
   */
  static async getAllMyEvents(req: Request, res: Response) {
    const currentUser = getCurrentUser(req);

    try {
      const events = await EventModel.getMyEvents(currentUser?.id);
      res.status(200).json({ message: 'Events', events });
    } catch (error) {
      res.status(400).json({ message: 'Events not found', error });
    }
  }
}

export default EventController;

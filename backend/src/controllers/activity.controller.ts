import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getActivities = async (req: Request, res: Response) => {
  try {
    const { category, location, date } = req.query;
    
    const where: any = {};
    
    if (category) {
      where.category = category as string;
    }
    
    if (location) {
      where.location = { contains: location as string, mode: 'insensitive' };
    }
    
    if (date) {
      const targetDate = new Date(date as string);
      where.date = {
        gte: targetDate,
        lt: new Date(targetDate.getTime() + 24 * 60 * 60 * 1000),
      };
    }

    const activities = await prisma.activity.findMany({
      where,
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        participants: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
      orderBy: {
        date: 'asc',
      },
    });

    res.json(activities);
  } catch (error) {
    console.error('Get activities error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getActivityById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const activity = await prisma.activity.findUnique({
      where: { id },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            avatar: true,
            bio: true,
          },
        },
        participants: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    res.json(activity);
  } catch (error) {
    console.error('Get activity error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const createActivity = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { title, description, category, location, date, maxParticipants } = req.body;

    const activity = await prisma.activity.create({
      data: {
        title,
        description,
        category,
        location,
        date: new Date(date),
        maxParticipants,
        creatorId: userId,
      },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    res.status(201).json(activity);
  } catch (error) {
    console.error('Create activity error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const joinActivity = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).userId;

    const activity = await prisma.activity.findUnique({
      where: { id },
      include: {
        participants: true,
      },
    });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    if (activity.participants.length >= activity.maxParticipants) {
      return res.status(400).json({ message: 'Activity is full' });
    }

    if (activity.participants.some(p => p.id === userId)) {
      return res.status(400).json({ message: 'Already joined this activity' });
    }

    const updatedActivity = await prisma.activity.update({
      where: { id },
      data: {
        participants: {
          connect: { id: userId },
        },
      },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        participants: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    res.json(updatedActivity);
  } catch (error) {
    console.error('Join activity error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const leaveActivity = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const userId = (req as any).userId;

    const updatedActivity = await prisma.activity.update({
      where: { id },
      data: {
        participants: {
          disconnect: { id: userId },
        },
      },
      include: {
        creator: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        participants: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
      },
    });

    res.json(updatedActivity);
  } catch (error) {
    console.error('Leave activity error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

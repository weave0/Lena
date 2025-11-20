export interface User {
  id: string;
  email: string;
  name: string;
  bio?: string;
  avatar?: string;
  dateOfBirth?: Date;
  gender?: string;
  phone?: string;
  verified: boolean;
  latitude?: number;
  longitude?: number;
  city?: string;
  country?: string;
  interests?: string[];
  safetyRating?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  latitude: number;
  longitude: number;
  address?: string;
  city: string;
  country: string;
  startTime: Date;
  endTime?: Date;
  maxParticipants?: number;
  minAge?: number;
  maxAge?: number;
  status: ActivityStatus;
  isPublic: boolean;
  images?: string[];
  creatorId: string;
  creator?: User;
  participants?: ActivityParticipant[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ActivityParticipant {
  id: string;
  activityId: string;
  userId: string;
  user?: User;
  status: ParticipantStatus;
  joinedAt: Date;
}

export interface Message {
  id: string;
  senderId: string;
  sender?: User;
  receiverId?: string;
  receiver?: User;
  activityId?: string;
  content: string;
  type: MessageType;
  read: boolean;
  createdAt: Date;
}

export interface Review {
  id: string;
  reviewerId: string;
  reviewer?: User;
  revieweeId: string;
  reviewee?: User;
  rating: number;
  comment?: string;
  createdAt: Date;
}

export type ActivityCategory =
  | 'skiing'
  | 'hiking'
  | 'dining'
  | 'cultural'
  | 'nightlife'
  | 'sports'
  | 'fitness'
  | 'arts'
  | 'music'
  | 'travel'
  | 'language'
  | 'professional'
  | 'other';

export type ActivityStatus = 'active' | 'cancelled' | 'completed';

export type ParticipantStatus = 'joined' | 'left' | 'removed';

export type MessageType = 'text' | 'image' | 'location';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  success: boolean;
  user: User;
  token: string;
  refreshToken: string;
}

export interface CreateActivityRequest {
  title: string;
  description: string;
  category: ActivityCategory;
  latitude: number;
  longitude: number;
  address?: string;
  city: string;
  country: string;
  startTime: Date;
  endTime?: Date;
  maxParticipants?: number;
  minAge?: number;
  maxAge?: number;
  isPublic?: boolean;
}

export interface ActivityFilters {
  category?: ActivityCategory;
  latitude?: number;
  longitude?: number;
  radius?: number; // in kilometers
  startDate?: Date;
  endDate?: Date;
  search?: string;
  page?: number;
  limit?: number;
}

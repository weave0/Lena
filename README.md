# MeetConnect - Real Life Social Connection App

## 🎯 Vision
An app and web platform for meeting people in real life through shared activities and interests - combining the excitement of travel, outdoor activities (like skiing), and safe social connections.

## 🌟 Key Features (Planned)

### Core Functionality
- **Activity-Based Meetups**: Create and join activities (skiing, hiking, dining, cultural events)
- **Location-Based Discovery**: Find people and events nearby or in cities you're traveling to
- **Interest Matching**: Connect with people who share similar interests
- **Safety First**: Verification systems, public meetup suggestions, safety check-ins
- **International Support**: Multi-language support, timezone awareness
- **Real-Time Chat**: Communicate before and coordinate during meetups

### Safety Features
- User verification (phone, email, social media linking)
- Public place suggestions for first meetups
- Friend check-in system
- User reporting and blocking
- Emergency contact features
- Meeting history and reviews

### Social Features
- User profiles with interests and activity preferences
- Photo sharing from activities
- Group creation for regular meetups
- Event calendars
- Travel mode (find locals/travelers in new cities)

## 🏗️ Technical Architecture

### Tech Stack
- **Mobile App**: React Native (iOS & Android)
- **Web App**: React.js (shared components with RN via react-native-web)
- **Backend**: Node.js + Express.js
- **Database**: PostgreSQL (main data) + Redis (caching, real-time)
- **Real-time**: Socket.io for chat and live updates
- **Authentication**: JWT + OAuth (Google, Facebook, Apple)
- **File Storage**: AWS S3 or Cloudinary for images
- **Maps**: Google Maps API / Mapbox
- **Push Notifications**: Firebase Cloud Messaging

### Project Structure
```
MeetConnect/
├── mobile/              # React Native mobile app
├── web/                 # React web app
├── backend/             # Node.js API server
├── shared/              # Shared code (types, utils)
└── docs/                # Documentation and planning
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- React Native development environment
- PostgreSQL database
- Git

### Installation
See individual directories for specific setup instructions:
- [Mobile App Setup](./mobile/README.md)
- [Web App Setup](./web/README.md)
- [Backend Setup](./backend/README.md)

## 📋 Development Roadmap

### Phase 1: MVP (Months 1-3)
- [ ] User authentication and profiles
- [ ] Basic activity creation and discovery
- [ ] Location-based search
- [ ] Simple chat functionality
- [ ] Mobile app (iOS/Android)

### Phase 2: Enhancement (Months 4-6)
- [ ] Web app launch
- [ ] Advanced matching algorithms
- [ ] Safety features (verification, check-ins)
- [ ] Push notifications
- [ ] Photo sharing

### Phase 3: Scale (Months 7-12)
- [ ] International expansion features
- [ ] Group functionality
- [ ] Event calendar
- [ ] Premium features
- [ ] Analytics dashboard

## 🤝 Contributing
This is currently a private project. Team collaboration guidelines TBD.

## 📄 License
Proprietary - All rights reserved

## 👥 Team
- **Founder**: Lena - Software Development Leader, International experience
- **Co-Founder**: [To be added]

---
*Last Updated: November 2025*

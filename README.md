# YouTube Clone

A scalable YouTube-like application that allows users to upload, process, and stream videos. This project leverages modern web technologies and cloud infrastructure to create a functional video-sharing platform.

---

## Features
- **List Videos**: Browse all uploaded videos.
- **Watch Videos**: Stream videos directly from the app.
- **Sign In/Out**: Authenticate users using Firebase Auth.
- **Upload Videos**: Upload raw video files.
- **Transcoded Videos**: Watch videos processed for optimized streaming.

---

## Tech Stack

### Languages & Frameworks
- TypeScript
- Next.js
- Express.js

### Infrastructure & Tools
- Docker
- FFmpeg
- Firebase Auth
- Firebase Functions
- Firebase Firestore
- Google Cloud Storage
- Google Cloud Pub/Sub
- Google Cloud Run

---

## Architecture Overview

The application is built with a scalable cloud-based architecture:
1. **Cloud Storage**: Stores raw and processed video files uploaded by users.
2. **Pub/Sub Messaging**: Sends messages to trigger the video processing service.
3. **Video Processing Service (Cloud Run)**:
   - Transcodes videos using FFmpeg.
   - Uploads processed videos back to Cloud Storage.
4. **Metadata Storage (Cloud Firestore)**: Stores metadata for each video (e.g., title, description, processing status).
5. **Web Client (Next.js on Cloud Run)**:
   - Hosts the frontend for users to interact with the application.
6. **API Layer (Firebase Functions)**:
   - Handles API requests from the Next.js app and fetches data from Firestore.

---

## Getting Started

### Prerequisites
1. Install [Node.js and NPM](https://nodejs.org/en/download).
2. Install [Docker](https://docs.docker.com/engine/install).
3. (Optional) Install [WSL2 for Windows Users](https://learn.microsoft.com/en-us/windows/wsl/install).

### Installation Steps
1. Clone this repository:
   ```bash
   git clone 
   cd youtube-clone
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

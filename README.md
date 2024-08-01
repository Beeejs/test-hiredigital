# File Management System with Vercel Blob Storage

This project is a file management system built with Next.js and integrated with Vercel Blob Storage for handling file uploads, downloads, and deletions. The system includes drag-and-drop functionality, file preview, and persistent storage using localStorage.

## Features

- **File Upload**: Drag and drop files to upload or select files from your device.
- **File List**: Displays a list of uploaded files with details (name, size, preview).
- **File Deletion**: Delete files from the list.
- **File Rename**: Rename files with a modal for save and cancel actions.
- **File Preview**: Display an image preview of the uploaded file.
- **Error Handling**: Display appropriate messages for file upload failures.
- **Loading Skeleton**: Show skeleton loading screen while the file list is loading.
- **Persistent State**: State persists across page reloads using localStorage.

## Technologies Used

- **Next.js 14**: React framework with AppRouter and Server Actions.
- **TypeScript**: For type safety.
- **Tailwind CSS**: For styling.
- **Vercel Blob Storage**: For file storage.
- **Axios**: For making API requests.
- **Radix UI**: For UI components.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.
- Vercel account.

## API Routes

- **POST /api/file**: Upload a new file.
- **PUT /api/file**: Rename an existing file.
- **DELETE /api/file**: Delete a file.

## Usage

- **File Upload**: Drag and drop a file into the designated area or click to select a file.
- **File Rename**: Click the pencil icon next to a file name to rename it.
- **File Delete**: Click the trash icon next to a file name to delete it.
- **File Download**: Click the file link to download it.

## Known Issues

- Ensure that the Vercel Blob Storage token is valid and has the necessary permissions.
- If the file list doesn't update in production, check for potential caching issues or deployment settings. (UNSOLVED)

## License

This project is licensed under the MIT License. See the LICENSE file for details.
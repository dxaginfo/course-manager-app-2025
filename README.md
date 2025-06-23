# Course Content Manager

A web application for managing and displaying course content with section management, FAQ handling, and student-facing views. Built with React, TypeScript, shadcn-ui, and Tailwind CSS.

## Features

1. **Course section management**
   - Create, edit, and delete course sections
   - Set section titles, durations, and content

2. **FAQ management**
   - Create, edit, and delete FAQs
   - Organize question and answer pairs

3. **Content organization interface**
   - Admin view for content management
   - User-friendly forms for editing course structure

4. **Student-facing course view**
   - Clean, organized display of course materials
   - Tabbed interface for overview, curriculum, and FAQs
   - Accordion components for expandable content

5. **Progress tracking**
   - Track completion of course sections
   - Visual progress indicator
   - Persistent storage using localStorage

## Course Structure Implementation

The app includes these key sections:
1. What You Will Learn
2. Description
3. Who This Course is For
4. Requirements
5. Curriculum with sections:
   - Section 1 - Intro To Making AI Movies (05:30)
   - Section 2 – Developing with ChatGPT (05:44)
   - Section 3 – Creating Our Images (08:22)
   - Section 4 - Image Editing (07:35)
6. FAQ section with expandable answers

## Technical Implementation

- **Frontend**: React with TypeScript
- **UI Components**: shadcn-ui with accordion components
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: Lovable platform

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dxaginfo/course-manager-app-2025.git
cd course-manager-app-2025

# Install dependencies
npm install
# or
yarn install

# Start the development server
npm run dev
# or
yarn dev
```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The app is designed to be deployed via the Lovable platform using the Share -> Publish option.

## License

MIT
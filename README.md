# KrishiLink – Farmer’s Growth & Connection Platform

KrishiLink is a modern web application that connects farmers, traders, and consumers in one digital space. It functions as a social agro network where users can interact directly instead of a traditional buyer-seller model.

## Features

- Users can post what they are growing or selling.
- Browse and search crop posts.
- Show interest to connect and collaborate.
- Private routes for posting crops, managing interests, and updating profiles.
- Responsive design for desktop and mobile devices.

## Pages

- **Home:** Hero section, latest crop posts, how it works, agro news/blogs.  
- **All Crops:** Grid or card layout of all crops with search and view details.  
- **Crop Details (Private):** Crop info, interest form for non-owners, manage received interests for owners.  
- **Add Crop (Private):** Form to post new crops with automatic owner association.  
- **My Posts (Private):** Manage and edit/delete user’s own crops.  
- **Profile (Private):** View and edit user profile.  
- **My Interests (Private):** Track crop interests sent by the user.  

## Authentication

- Login and Register with Email/Password or Google.  
- Password validation: minimum 6 characters, at least one uppercase and lowercase letter.  
- Proper error handling and success notifications.

## Other Requirements

- Loading indicators while fetching data or navigating.  
- Error page for invalid routes.  
- Ensure no page errors on reload.  
- Maintain consistent design and responsive layout.  

## Tech & Hosting

- Frontend: React, Tailwind CSS.  
- Backend: Node.js, MongoDB.  
- Hosting: Client-side (Netlify/Surge/Firebase), Server-side (Vercel).  

## Challenges & Features

- Owners can accept or reject crop interests.  
- Quantity reduces automatically when interest is accepted.  
- Sorting options on My Interests page.  


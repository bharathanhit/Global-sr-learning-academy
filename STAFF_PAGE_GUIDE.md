# Staff Page - Firestore Data Structure Guide

## Overview
The Staff page (`/staff`) displays staff ID cards fetched from Google Firestore. This document explains how to add and manage staff data.

## Firestore Collection Structure

### Collection Name: `staff`

### Document Fields:
Each staff member document should contain the following fields:

```javascript
{
  // Required fields
  name: "Dr. John Smith",                    // Staff member's full name
  position: "Senior English Educator",       // Job title/position
  order: 1,                                  // Display order (lower numbers appear first)
  
  // Optional fields
  staffId: "GS-001",                        // Unique staff ID (e.g., GS-001, GS-002)
  photoURL: "https://...",                  // URL to profile photo (if empty, uses avatar with initials)
  email: "john.smith@globalsr.com",         // Contact email
  phone: "+91 98765 43210",                 // Contact phone number
  qualification: "M.A. English, B.Ed.",     // Educational qualifications
  bio: "Experienced educator with 10+ years in IELTS coaching...",  // Brief biography
  isHead: false                             // Set to true for department heads (shows award badge)
}
```

## How to Add Staff Data

### Option 1: Using Firebase Console (Recommended for initial setup)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `golbalsr`
3. Navigate to **Firestore Database** from the left menu
4. Click **Start collection**
5. Enter collection ID: `staff`
6. Click **Next**
7. Add your first document with the fields above
8. Click **Save**

### Option 2: Using Firebase CLI or Code

You can also add staff data programmatically using the Firebase SDK in your functions or a setup script.

## Example Staff Data

Here are some example documents you can add to get started:

### Document 1: Department Head
```javascript
{
  name: "Dr. T. Sheela",
  position: "Founder & Director",
  staffId: "GS-001",
  email: "sheela@globalsr.com",
  phone: "+91 98765 43210",
  qualification: "Ph.D. in English Literature",
  bio: "Visionary founder with 15+ years of experience transforming English language education",
  isHead: true,
  order: 1,
  photoURL: ""  // Leave empty to use default avatar
}
```

### Document 2: Senior Faculty
```javascript
{
  name: "Mr. Rajesh Kumar",
  position: "IELTS Specialist",
  staffId: "GS-002",
  email: "rajesh@globalsr.com",
  phone: "+91 98765 43211",
  qualification: "M.A. English, CELTA Certified",
  bio: "Expert IELTS trainer with 8+ years helping students achieve their dream scores",
  isHead: false,
  order: 2,
  photoURL: ""
}
```

### Document 3: Faculty Member
```javascript
{
  name: "Ms. Priya Sharma",
  position: "Spoken English Coach",
  staffId: "GS-003",
  email: "priya@globalsr.com",
  phone: "+91 98765 43212",
  qualification: "M.A. English",
  bio: "Passionate educator specializing in communication skills and accent training",
  isHead: false,
  order: 3,
  photoURL: ""
}
```

## Important Notes

1. **Order Field**: Staff members are displayed in ascending order based on the `order` field. Lower numbers appear first.

2. **Photo URLs**: 
   - If you don't provide a `photoURL`, the system automatically generates an avatar with the staff member's initials
   - You can upload photos to Firebase Storage and use those URLs
   - External image URLs also work

3. **Required vs Optional**:
   - Only `name`, `position`, and `order` are truly essential
   - Other fields enhance the display but aren't required
   - Missing optional fields won't break the page

4. **Staff ID Format**: Use a consistent format like "GS-001", "GS-002", etc.

5. **Department Heads**: Set `isHead: true` to display an award badge on their card

## Firestore Security Rules

Make sure your Firestore rules allow reading the staff collection. Example rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to read staff data
    match /staff/{staffId} {
      allow read: if true;
      allow write: if request.auth != null; // Only authenticated users can write
    }
  }
}
```

## Features of the Staff Page

✅ Fetches data from Firestore in real-time
✅ Beautiful, modern card design with gradients
✅ Responsive grid layout (1 column mobile, 2 tablet, 3 desktop)
✅ Hover animations and effects
✅ Automatic avatar generation if no photo provided
✅ Loading and error states
✅ Contact information with clickable email/phone links
✅ Special badge for department heads
✅ SEO optimized

## Testing

After adding staff data to Firestore:
1. Navigate to `http://localhost:5173/staff` (in development)
2. Click the "Staff" link in the navigation menu
3. Verify all staff cards display correctly
4. Check that contact links work (email, phone)

## Troubleshooting

**Problem**: "Loading..." never goes away
- Check Firebase console for the `staff` collection
- Verify Firestore rules allow reading
- Check browser console for errors

**Problem**: Cards show "Unknown User"
- Check that documents have a `name` field
- Verify the field name is exactly `name` (lowercase)

**Problem**: Cards appear in wrong order
- Check the `order` field values
- Lower numbers appear first (1, 2, 3...)

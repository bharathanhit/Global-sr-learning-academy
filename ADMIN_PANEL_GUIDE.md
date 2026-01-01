# Admin Panel Guide - Staff Management

## Overview
The Admin Panel provides a secure, user-friendly interface to manage staff ID cards that display on your website. No coding knowledge required!

## Access the Admin Panel

### URL
Navigate to: `http://localhost:5173/admin` (development) or `https://yourdomain.com/admin` (production)

### Login Credentials
- **Default Password**: `globalsr2025`
- **Important**: Change this password in `AdminPanel.jsx` before deploying to production!

### How to Change the Admin Password
1. Open `src/AdminPanel.jsx`
2. Find line 46: `const ADMIN_PASSWORD = 'globalsr2025';`
3. Change `'globalsr2025'` to your secure password
4. Save the file

## Features

### ✅ Complete Staff Management
- **Add new staff members** with full details
- **Edit existing staff** information
- **Delete staff members** with confirmation
- **Upload profile photos** directly to Firebase Storage
- **Reorder staff** using the display order field
- **Mark department heads** with special badges

### 🔒 Security
- Password-protected access
- Session-based authentication
- Confirmation dialogs for destructive actions
- Input validation

### 📱 Responsive Design
- Works on desktop, tablet, and mobile
- Modern, intuitive interface
- Real-time updates
- Success/error notifications

## How to Use

### 1. Login
1. Navigate to `/admin`
2. Enter the admin password
3. Click "Login"

### 2. Add a New Staff Member

#### Step-by-Step:
1. Click the **"Add Staff"** button (top right)
2. Fill in the form fields:

   **Required Fields:**
   - **Full Name**: Staff member's complete name
   - **Position**: Job title or role

   **Optional Fields:**
   - **Profile Photo**: Click "Upload Photo" to select an image
     - Supported formats: JPG, PNG, GIF
     - Max size: 5MB
     - Image is automatically uploaded to Firebase Storage
   
   - **Staff ID**: Unique identifier (e.g., GS-001, GS-002)
   
   - **Display Order**: Number determining display position
     - Lower numbers appear first
     - Use 1, 2, 3, etc.
   
   - **Email**: Contact email address
   
   - **Phone**: Contact phone number
   
   - **Qualification**: Educational credentials
   
   - **Bio**: Brief description or background
   
   - **Mark as Department Head**: Check this box to display an award badge

3. Click **"Add Staff"** to save
4. You'll see a success notification
5. The new staff member appears in the list immediately

### 3. Edit a Staff Member

1. Find the staff card you want to edit
2. Click the **"Edit"** button (blue button)
3. The form opens with current information pre-filled
4. Make your changes
5. Click **"Update Staff"** to save
6. Changes reflect immediately on the website

### 4. Delete a Staff Member

1. Find the staff card you want to delete
2. Click the **trash icon** button (red button)
3. Confirm deletion in the popup dialog
4. Staff member is permanently removed

### 5. Change Display Order

To reorder how staff appear on the website:
1. Edit the staff member
2. Change the **Display Order** number
3. Lower numbers appear first (1, 2, 3...)
4. Save changes

### 6. Upload/Change Profile Photo

**During Add/Edit:**
1. Click **"Upload Photo"** button
2. Select an image file from your computer
3. Wait for "Image uploaded successfully!" notification
4. Preview appears immediately
5. Save the form to apply changes

**Photo Requirements:**
- File types: JPG, PNG, GIF
- Maximum size: 5MB
- Recommended: Square images (e.g., 400x400px)
- High quality, professional photos work best

**If no photo is uploaded:**
- System automatically generates an avatar with initials
- Clean, professional appearance

### 7. Mark Department Heads

Department heads get a special gold award badge:
1. When adding/editing staff
2. Scroll to bottom of form
3. Check the **"Mark as Department Head"** checkbox
4. Save the form

## Example Workflow

### Adding Your First Staff Member

1. **Login** to `/admin` with password
2. Click **"Add Staff"**
3. Fill in the details:
   ```
   Name: Dr. T. Sheela
   Position: Founder & Director
   Staff ID: GS-001
   Email: sheela@globalsr.com
   Phone: +91 98765 43210
   Qualification: Ph.D. in English Literature
   Bio: Visionary founder with 15+ years of experience...
   Display Order: 1
   ☑ Mark as Department Head
   ```
4. Click **"Upload Photo"** and select Dr. Sheela's photo
5. Click **"Add Staff"**
6. Done! Visit `/staff` to see the card live

## Tips & Best Practices

### 📸 Photos
- Use professional headshots
- Ensure good lighting
- Keep consistent style across all staff photos
- Square aspect ratio works best

### 📝 Content
- Keep bios concise (2-3 sentences)
- Use professional email addresses
- Format phone numbers consistently
- List most relevant qualifications

### 🔢 Ordering
- Use gaps in numbering (1, 5, 10, 15...) to easily insert staff later
- Put department heads first
- Group by department if applicable

### 🏆 Department Heads
- Only mark true leadership positions
- Typically: Director, Department Head, Senior Manager

## Troubleshooting

### Problem: Can't Login
**Solution**: 
- Verify you're using the correct password
- Check `AdminPanel.jsx` line 46 for the password
- Clear browser cache and try again

### Problem: Image won't upload
**Solution**:
- Check file size (must be under 5MB)
- Verify file format (JPG, PNG, GIF only)
- Check internet connection
- Check Firebase Storage permissions

### Problem: Changes don't appear on website
**Solution**:
- Refresh the `/staff` page
- Check browser console for errors
- Verify Firestore rules allow read access

### Problem: "Failed to save staff" error
**Solution**:
- Check internet connection
- Verify Firebase configuration in `firebase.js`
- Check Firestore security rules
- Ensure all required fields are filled

## Firebase Firestore Security Rules

Make sure your Firestore has appropriate security rules. Here's a recommended setup:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /staff/{staffId} {
      // Anyone can read staff data (for public website)
      allow read: if true;
      
      // Only admin can write (you can add authentication later)
      allow write: if true; // Change this to add authentication
    }
  }
}
```

**For Production**: Implement proper Firebase Authentication instead of password-only protection.

## Firebase Storage Rules

For image uploads to work, configure Storage rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /staff/{allPaths=**} {
      allow read: if true;
      allow write: if true; // Change this to add authentication in production
    }
  }
}
```

## Production Deployment Checklist

Before deploying to production:

- [ ] Change admin password to something secure
- [ ] Implement proper Firebase Authentication
- [ ] Update Firestore security rules
- [ ] Update Storage security rules
- [ ] Test all CRUD operations
- [ ] Test on mobile devices
- [ ] Backup existing staff data
- [ ] Document your custom admin password securely

## Advanced: Implementing Firebase Authentication

For better security, replace password-only auth with Firebase Authentication:

1. Enable Firebase Authentication in your Firebase Console
2. Add Email/Password authentication method
3. Modify `AdminPanel.jsx` to use Firebase Auth instead of session storage
4. Update Firestore rules to check `request.auth != null`

Would you like help implementing this? Let me know!

## Support

If you encounter issues:
1. Check browser console for errors (F12)
2. Verify Firebase configuration
3. Check network tab for failed requests
4. Review Firestore and Storage rules

## Summary

✅ **Access**: `/admin`
✅ **Password**: `globalsr2025` (changeable)
✅ **Features**: Add, Edit, Delete, Upload photos
✅ **Real-time**: Changes appear instantly
✅ **User-friendly**: No coding required!

Enjoy managing your staff with ease! 🎉

# Web3Forms Setup Guide

## Getting Your Access Key

1. **Visit Web3Forms**: Go to [https://web3forms.com/](https://web3forms.com/)

2. **Sign Up**: Create a free account (no credit card required)

3. **Get Access Key**: After signing up, you'll receive a unique access key

4. **Update the Code**: Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/components/contact.tsx` with your actual access key

## How It Works

- **No Backend Required**: Web3Forms handles all the email processing
- **Direct to Your Inbox**: Form submissions are sent directly to your email
- **Reply-to Feature**: You can reply directly to the sender's email
- **Free Tier**: 250 submissions per month (more than enough for most portfolios)

## Email Configuration

When you receive form submissions:
- **From**: Web3Forms service email
- **Reply-to**: The visitor's email address (so you can reply directly)
- **Subject**: "New Contact Form Submission" (or custom)
- **Content**: All form fields (name, email, subject, message)

## Testing

1. Update the access key in the code
2. Deploy your site
3. Fill out the contact form
4. Check your email inbox for the submission

## Benefits

✅ **Simple Setup**: No server configuration needed  
✅ **Reliable**: Professional email delivery service  
✅ **Free**: 250 submissions/month at no cost  
✅ **Secure**: Built-in spam protection  
✅ **Professional**: Emails look professional and trustworthy

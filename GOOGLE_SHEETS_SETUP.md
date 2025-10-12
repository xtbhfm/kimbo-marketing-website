# Google Sheets Integration Setup

To set up Google Sheets integration for the waitlist:

## 1. Google Cloud Console Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Sheets API
4. Go to "Credentials" and create a new Service Account
5. Download the JSON key file

## 2. Environment Variables
Create a `.env.local` file in the root directory with:

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-google-sheet-id-here
```

## 3. Google Sheet Setup
1. Create a new Google Sheet
2. Share it with your service account email (found in the JSON key file)
3. Set up columns:
   - Column A: Timestamp
   - Column B: Name
   - Column C: Email
4. Copy the Sheet ID from the URL

## 4. Test the Integration
The waitlist form will now automatically add entries to your Google Sheet when submitted.

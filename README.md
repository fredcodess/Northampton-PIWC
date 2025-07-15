# Northampton PIWC Web App

**Northampton PIWC** is the official responsive website for the **Pentecost International Worship Centre (PIWC)** in Northampton. It serves as a modern digital platform for event updates, contact, and community engagement, tightly integrated with Google and Web3Forms services for seamless content and communication management.

🌐 **Live Site:** [northamptonpiwc.co.uk](https://northamptonpiwc.co.uk)

![readme intro vid](https://github.com/fredcodess/Northampton-PIWC/blob/main/public/media/readme_intro.gif?raw=true)

---

## Objectives

* Display **real-time church events** via Google Calendar integration
* Allow users to **subscribe to newsletters** via Google Forms (data stored in Google Sheets)
* Provide a secure and easy-to-use **contact form** via Web3Forms
* Ensure full **mobile responsiveness** and performance with modern frontend tools

---

## 🛠️ Tech Stack

* **Frontend Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **API Integrations:**

  * Google Calendar API (for event updates)
  * Google Forms → Google Sheets (for newsletter sign-ups)
  * Web3Forms (for contact form submissions)
* **Hosting:** Deployed on a modern hosting platform (e.g., Netlify, Vercel)

---

## ⚙️ Environment Variables

Create a `.env` file in the root of your project with the following keys:

```env
VITE_CALENDAR_API_KEY=your_google_calendar_api_key
VITE_CALENDAR_ID=your_calendar_id
VITE_NEWSLETTER_EMAIL_ENTRY_ID=google_form_email_entry_id
VITE_NEWSLETTER_FORM_URL=google_form_url
VITE_WEB3FORM_ACCESS_KEY=your_web3form_access_key
```

---

## 🚀 Features

### 📅 Live Events Feed

* Integrated with **Google Calendar API**
* Displays upcoming events dynamically on the website
* Admins can update calendar events directly from Google Calendar

### 📰 Newsletter Subscription

* Built using **Google Forms**
* Submissions are linked to **Google Sheets**
* Easily customizable and low-maintenance

### 📬 Contact Form

* Powered by **Web3Forms**
* Spam-protected and secure
* Sends messages to designated email via Web3Forms dashboard

### 📱 Fully Responsive Design

* Mobile-first and optimized for all screen sizes
* Clean and accessible UI built with **Tailwind CSS**

---

## 🚦 Getting Started

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open `http://localhost:5173` to view the site in your browser.

---

## 📫 Contact

For questions, suggestions, or contributions, feel free to open an issue or visit [northamptonpiwc.co.uk](https://northamptonpiwc.co.uk).

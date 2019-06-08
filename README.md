# Node with React Project

A full stack project with Node and React. It has been deployed here: [https://murmuring-cove-50727.herokuapp.com/](https://murmuring-cove-50727.herokuapp.com/).

## App Overview

This is a feedback collection application for startup owners. If you are a startup owner and you want some feedback from your customers, you can use this application to send emails requesting feedback and get tabulation of results.

## User Flow

Here is the app user flow:

1. User signs up via Google OAuth
2. User pays for email credits via Stripe
3. User creates a new 'campaign'
4. User enters a list of emails to send survey to
5. We send email to list of surveyees
6. Surveyees click on link in email to provide feedback
7. We tabulate feedback
8. User can see report of all survey responses

## Tech Stack

Main tech for main steps:

1. **User Signup:** Express Server + MongoDB + PassportJS
2. **User Payment:** Stripe + MongoDB
3. **User Create Survey:** React + Redux
4. **User Enter Emails:** React + Redux + Redux Form
5. **We Send Emails:** Email Provider (SendGrid)
6. **Surveyees Click Links:** SendGrid + Express + MongoDB

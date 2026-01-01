import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
  authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
  measurementId: import.meta.env.PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Contact form submission interface
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  type: 'contact' | 'meeting';
  meetingDate?: string;
  createdAt: Timestamp;
  status: 'new' | 'read' | 'replied';
}

// Submit contact form to Firestore
export async function submitContactForm(formData: Omit<ContactFormData, 'createdAt' | 'status'>) {

  try {
    const contactData: ContactFormData = {
      ...formData,
      createdAt: Timestamp.now(),
      status: 'new',
    };

    const docRef = await addDoc(collection(db, 'contacts'), contactData);
    
    return {
      success: true,
      id: docRef.id,
      message: 'Form submitted successfully',
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// Submit meeting booking to Firestore
export async function submitMeetingBooking(formData: Omit<ContactFormData, 'createdAt' | 'status'>) {
  try {
    const bookingData: ContactFormData = {
      ...formData,
      type: 'meeting',
      createdAt: Timestamp.now(),
      status: 'new',
    };

    const docRef = await addDoc(collection(db, 'contacts'), bookingData);
    
    return {
      success: true,
      id: docRef.id,
      message: 'Meeting scheduled successfully',
    };
  } catch (error) {
    console.error('Error scheduling meeting:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

// Newsletter subscription interface
export interface NewsletterSubscription {
  email: string;
  subscribedAt: Timestamp;
  status: 'active' | 'unsubscribed';
  source: string;
}

// Submit newsletter subscription to Firestore
export async function subscribeToNewsletter(email: string, source: string = 'footer') {
  try {
    // Check if email already exists (optional - you might want to handle duplicates)
    const subscriptionData: NewsletterSubscription = {
      email: email.toLowerCase().trim(),
      subscribedAt: Timestamp.now(),
      status: 'active',
      source,
    };

    const docRef = await addDoc(collection(db, 'subscribers'), subscriptionData);
    
    return {
      success: true,
      id: docRef.id,
      message: 'Successfully subscribed to newsletter',
    };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
}

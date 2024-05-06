export const HOME_ROUTE = '/';
export const LOGIN_ROUTE = '/user/login';
export const REGISTRATION_ROUTE = '/user/registration';
export const NOTES_ROUTE = '/home/notes';
export const ABOUT_ROUTE = '/about';
export const AI_ROUTE = '/ai';
export const SETTINGS_ROUTE = '/settings';
export const FAVORITES_ROUTE = '/home/favorites';

export const ErrorAuth = {
  LOGIN_ERROR: 'Login error, please try again! Notium cannot give you access to use :/',
  REGISTRATION_ERROR: 'Registration error, please try again! Notium cannot give you access to use :/'
} as const;

export const NoteToasts = {
  NOTE_UPDATED: 'Your note has been successfully updated!',
  NOTE_DELETED: 'The note has been deleted!',
} as const;

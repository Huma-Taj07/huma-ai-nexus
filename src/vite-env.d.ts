/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Cal.com event link slug — recommended for real Google Meet links + automatic emails.
   * Example: `huma-taj/30min` from https://cal.com/huma-taj/30min
   * Setup: https://cal.com → connect Google Calendar + Google Meet → create event type
   */
  readonly VITE_CAL_LINK?: string;
  /** Formspree form id — fallback when Cal.com is not set. Create at https://formspree.io */
  readonly VITE_FORMSPREE_FORM_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

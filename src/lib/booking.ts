import { contactInfo } from "@/content/lab";

export type BookingSubmission = {
  name: string;
  email: string;
  dateLabel: string;
  timeLabel: string;
  timezone: string;
};

export function getCalLink(): string | undefined {
  const link = import.meta.env.VITE_CAL_LINK?.trim();
  return link || undefined;
}

export function getFormspreeId(): string | undefined {
  const id = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim();
  return id || undefined;
}

export async function submitBookingRequest(
  booking: BookingSubmission,
): Promise<{ ok: true } | { ok: false; message: string }> {
  const formId = getFormspreeId();
  if (!formId) {
    return {
      ok: false,
      message:
        "Booking is not connected yet. Please email directly or set up Cal.com / Formspree.",
    };
  }

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        _subject: `New strategy call booking — ${booking.name}`,
        _replyto: booking.email,
        form_type: "booking",
        guest_name: booking.name,
        guest_email: booking.email,
        meeting_date: booking.dateLabel,
        meeting_time: booking.timeLabel,
        timezone: booking.timezone,
        host_email: contactInfo.email,
        message: [
          `${booking.name} (${booking.email}) booked a strategy call.`,
          `Date: ${booking.dateLabel}`,
          `Time: ${booking.timeLabel}`,
          `Timezone: ${booking.timezone}`,
          "",
          "Please send them a Google Meet link and calendar invite.",
        ].join("\n"),
      }),
    });

    if (!response.ok) {
      const data = (await response.json().catch(() => null)) as { error?: string } | null;
      return { ok: false, message: data?.error ?? "Could not send booking request. Try again." };
    }

    return { ok: true };
  } catch {
    return { ok: false, message: "Network error. Check your connection and try again." };
  }
}

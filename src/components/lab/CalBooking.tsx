import { contactInfo } from "@/content/lab";
import { getCalLink } from "@/lib/booking";
import { cn } from "@/lib/utils";

const cardClass =
  "card-shadow w-full max-w-[46rem] overflow-hidden rounded-4xl border border-border bg-white";

export function CalBooking() {
  const calLink = getCalLink();
  if (!calLink) return null;

  const src = new URL(`https://cal.com/${calLink}`);
  src.searchParams.set("embed", "true");
  src.searchParams.set("theme", "light");
  src.searchParams.set("layout", "month_view");
  src.searchParams.set("brandColor", "f5a800");

  return (
    <div className={cn(cardClass, "flex flex-col")}>
      <div className="border-b border-border px-6 py-5 sm:px-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
          Book a call
        </p>
        <h3 className="font-display mt-1 text-xl font-extrabold">Strategy Call · 30 min</h3>
        <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
          Pick a time below. You and{" "}
          <span className="font-semibold text-foreground">{contactInfo.email}</span> will both
          receive a confirmation email with the Google Meet link.
        </p>
      </div>

      <iframe
        title="Schedule a strategy call"
        src={src.toString()}
        className="h-[min(680px,72dvh)] w-full border-0 bg-white"
        loading="lazy"
      />
    </div>
  );
}

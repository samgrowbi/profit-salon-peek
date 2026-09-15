import { useEffect, useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const leadSchema = z.object({
  full_name: z.string().trim().min(1, "Please enter your name").max(100),
  business_name: z.string().trim().max(120).optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  monthly_revenue: z.string().trim().min(1, "Please choose a range"),
  bookkeeping_software: z.string().trim().min(1, "Please choose one"),
  pain_point: z.string().trim().max(500).optional().or(z.literal("")),
});

type Utm = Record<string, string>;

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";
const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

export function LeadForm() {
  const [utm, setUtm] = useState<Utm>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const collected: Utm = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) collected[key] = value.slice(0, 200);
    }
    collected.referrer = document.referrer.slice(0, 500);
    collected.landing_page = window.location.href.slice(0, 500);
    setUtm(collected);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    const parsed = leadSchema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        next[String(issue.path[0])] = issue.message;
      }
      setErrors(next);
      return;
    }

    setErrors({});
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({ ...parsed.data, ...utm });
    setSubmitting(false);

    if (error) {
      setFormError("Something went wrong sending your details. Please try again.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
          Step 1 complete
        </span>
        <h3 className="mt-4 text-2xl">You're almost booked.</h3>
        <p className="mt-2 text-muted-foreground">
          Last step: pay securely and pick your 60-minute time slot. Your Profit Clarity Analysis is
          confirmed once payment is complete.
        </p>

        {/* PLACEHOLDER: replace this container with the real Stripe payment link / booking widget embed. */}
        <div className="mt-6 grid min-h-56 place-items-center rounded-xl border-2 border-dashed border-border bg-secondary p-6 text-center">
          <div>
            <p className="text-sm font-semibold text-foreground">
              [PLACEHOLDER] Stripe payment &amp; booking widget embed
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Real checkout/booking URL to be added before launch.
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          $250 today (normally $500) • 60 minutes • Secure payment via Stripe
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label className={labelClass} htmlFor="full_name">
            Full name
          </label>
          <input id="full_name" name="full_name" className={fieldClass} autoComplete="name" />
          <FieldError message={errors.full_name} />
        </div>

        <div className="sm:col-span-1">
          <label className={labelClass} htmlFor="business_name">
            Salon / business name
          </label>
          <input
            id="business_name"
            name="business_name"
            className={fieldClass}
            autoComplete="organization"
          />
          <FieldError message={errors.business_name} />
        </div>

        <div className="sm:col-span-1">
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            className={fieldClass}
            autoComplete="email"
          />
          <FieldError message={errors.email} />
        </div>

        <div className="sm:col-span-1">
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            className={fieldClass}
            autoComplete="tel"
          />
          <FieldError message={errors.phone} />
        </div>

        <div className="sm:col-span-1">
          <label className={labelClass} htmlFor="monthly_revenue">
            Monthly revenue
          </label>
          <select id="monthly_revenue" name="monthly_revenue" className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            <option>Under $50K / month</option>
            <option>$50K – $85K / month</option>
            <option>$85K – $125K / month</option>
            <option>$125K – $200K / month</option>
            <option>$200K+ / month</option>
          </select>
          <FieldError message={errors.monthly_revenue} />
        </div>

        <div className="sm:col-span-1">
          <label className={labelClass} htmlFor="bookkeeping_software">
            Bookkeeping software you use
          </label>
          <select
            id="bookkeeping_software"
            name="bookkeeping_software"
            className={fieldClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select one
            </option>
            <option>QuickBooks Online</option>
            <option>QuickBooks Desktop</option>
            <option>Xero</option>
            <option>Spreadsheet / Excel</option>
            <option>None / Not sure</option>
            <option>Other</option>
          </select>
          <FieldError message={errors.bookkeeping_software} />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="pain_point">
            Biggest financial pain point right now
          </label>
          <textarea
            id="pain_point"
            name="pain_point"
            rows={3}
            maxLength={500}
            className={fieldClass}
            placeholder="e.g. I can't tell what I should be paying myself."
          />
          <FieldError message={errors.pain_point} />
        </div>
      </div>

      {formError && (
        <p className="mt-4 text-sm font-medium text-destructive" role="alert">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 w-full rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Claim My 50% Off Deep Dive"}
      </button>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        $500 value, now $250 • 60 minutes • Pay securely via Stripe
      </p>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-sm text-destructive">{message}</p>;
}

import { useEffect, useState } from "react";
import { z } from "zod";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const TOTAL_STEPS = 5;

const REVENUE_OPTIONS = [
  "Under $50K / month",
  "$50K – $85K / month",
  "$85K – $125K / month",
  "$125K – $200K / month",
  "$200K+ / month",
];

const SOFTWARE_OPTIONS = [
  "QuickBooks Online",
  "QuickBooks Desktop",
  "Xero",
  "Spreadsheet / Excel",
  "None / Not sure",
  "Other",
];

type Answers = {
  monthly_revenue: string;
  bookkeeping_software: string;
  full_name: string;
  business_name: string;
  email: string;
  phone: string;
  pain_point: string;
};

const EMPTY_ANSWERS: Answers = {
  monthly_revenue: "",
  bookkeeping_software: "",
  full_name: "",
  business_name: "",
  email: "",
  phone: "",
  pain_point: "",
};

type Utm = Record<string, string>;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;

const nameSchema = z.string().trim().min(1, "Please enter your name").max(100);
const emailSchema = z.string().trim().email("Please enter a valid email").max(255);
const phoneSchema = z.string().trim().min(7, "Please enter a valid phone number").max(30);

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/30";
const labelClass = "mb-1.5 block text-sm font-medium text-foreground";

export function LeadForm() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<Answers>(EMPTY_ANSWERS);
  const [errors, setErrors] = useState<Partial<Record<keyof Answers, string>>>({});
  const [utm, setUtm] = useState<Utm>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const collected: Utm = {};
    for (const key of UTM_KEYS) {
      const value = params.get(key);
      if (value) collected[key] = value.slice(0, 200);
    }
    collected["referrer"] = document.referrer.slice(0, 500);
    collected["landing_page"] = window.location.href.slice(0, 500);
    setUtm(collected);
  }, []);

  const set = <K extends keyof Answers>(key: K, value: string) => {
    setAnswers((a) => ({ ...a, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const goTo = (next: number) => {
    setStep(next);
    setAnimKey((k) => k + 1);
  };

  const pick = (key: keyof Answers, value: string, nextStep: number) => {
    set(key, value);
    goTo(nextStep);
  };

  const back = () => {
    if (step > 1) goTo(step - 1);
  };

  function validateStep(current: number): boolean {
    if (current === 3) {
      const n = nameSchema.safeParse(answers.full_name);
      if (!n.success) {
        setErrors((e) => ({ ...e, full_name: n.error.issues[0]?.message ?? "Required" }));
        return false;
      }
      return true;
    }
    if (current === 4) {
      const next: Partial<Record<keyof Answers, string>> = {};
      const em = emailSchema.safeParse(answers.email);
      if (!em.success) next.email = em.error.issues[0]?.message ?? "Invalid";
      const ph = phoneSchema.safeParse(answers.phone);
      if (!ph.success) next.phone = ph.error.issues[0]?.message ?? "Invalid";
      if (Object.keys(next).length > 0) {
        setErrors((e) => ({ ...e, ...next }));
        return false;
      }
      return true;
    }
    return true;
  }

  async function submitLead() {
    setFormError(null);
    setSubmitting(true);
    const { error } = await supabase.from("leads").insert({
      full_name: answers.full_name.trim(),
      business_name: answers.business_name.trim() || null,
      email: answers.email.trim(),
      phone: answers.phone.trim(),
      monthly_revenue: answers.monthly_revenue,
      bookkeeping_software: answers.bookkeeping_software,
      pain_point: answers.pain_point.trim() || null,
      utm_source: utm["utm_source"] || null,
      utm_medium: utm["utm_medium"] || null,
      utm_campaign: utm["utm_campaign"] || null,
      utm_term: utm["utm_term"] || null,
      utm_content: utm["utm_content"] || null,
      referrer: utm["referrer"] || null,
      landing_page: utm["landing_page"] || null,
    });

    setSubmitting(false);
    if (error) {
      setFormError("Something went wrong sending your details. Please try again.");
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8 text-center">
        <span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
          You're on the list
        </span>
        <h3 className="mt-4 text-2xl">Thanks! We've got your details.</h3>
        <p className="mt-2 text-muted-foreground">
          A member of our team will reach out shortly to schedule your 60-minute Profit Clarity
          Analysis and confirm the details.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          $250 for your session (normally $500) &bull; 60 minutes &bull; No payment needed today
        </p>
      </div>
    );
  }

  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm sm:p-8">
      <div className="flex items-center justify-between">
        {step > 1 ? (
          <button
            type="button"
            onClick={back}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back
          </button>
        ) : (
          <span />
        )}
        <p className="text-xs font-medium tracking-wide text-muted-foreground">
          Step {step} of {TOTAL_STEPS}
        </p>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full bg-primary transition-[width] duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div key={animKey} className="tps-step mt-6">
        {step === 1 && (
          <StepCards
            title="What's your monthly revenue?"
            options={REVENUE_OPTIONS}
            value={answers.monthly_revenue}
            onSelect={(v) => pick("monthly_revenue", v, 2)}
          />
        )}

        {step === 2 && (
          <StepCards
            title="What bookkeeping software do you currently use?"
            options={SOFTWARE_OPTIONS}
            value={answers.bookkeeping_software}
            onSelect={(v) => pick("bookkeeping_software", v, 3)}
          />
        )}

        {step === 3 && (
          <div>
            <h3 className="text-xl font-semibold text-foreground">Let's get your info</h3>
            <div className="mt-5 space-y-4">
              <div>
                <label className={labelClass} htmlFor="full_name">
                  Full name
                </label>
                <input
                  id="full_name"
                  className={fieldClass}
                  autoComplete="name"
                  value={answers.full_name}
                  onChange={(e) => set("full_name", e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && validateStep(3)) goTo(4);
                  }}
                />
                <FieldError message={errors.full_name} />
              </div>
              <div>
                <label className={labelClass} htmlFor="business_name">
                  Spa / business name
                </label>
                <input
                  id="business_name"
                  className={fieldClass}
                  autoComplete="organization"
                  value={answers.business_name}
                  onChange={(e) => set("business_name", e.target.value)}
                />
              </div>
            </div>
            <NextButton onClick={() => { if (validateStep(3)) goTo(4); }} />
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-xl font-semibold text-foreground">How should we reach you?</h3>
            <div className="mt-5 space-y-4">
              <div>
                <label className={labelClass} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  className={fieldClass}
                  autoComplete="email"
                  value={answers.email}
                  onChange={(e) => set("email", e.target.value)}
                />
                <FieldError message={errors.email} />
              </div>
              <div>
                <label className={labelClass} htmlFor="phone">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  className={fieldClass}
                  autoComplete="tel"
                  value={answers.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && validateStep(4)) goTo(5);
                  }}
                />
                <FieldError message={errors.phone} />
              </div>
            </div>
            <NextButton onClick={() => { if (validateStep(4)) goTo(5); }} />
          </div>
        )}

        {step === 5 && (
          <div>
            <h3 className="text-xl font-semibold text-foreground">Anything else? (optional)</h3>
            <div className="mt-5">
              <label className={labelClass} htmlFor="pain_point">
                Biggest financial pain point right now
              </label>
              <textarea
                id="pain_point"
                rows={3}
                maxLength={500}
                className={fieldClass}
                placeholder="e.g. I can't tell what I should be paying myself."
                value={answers.pain_point}
                onChange={(e) => set("pain_point", e.target.value)}
              />
            </div>

            {formError && (
              <p className="mt-4 text-sm font-medium text-destructive" role="alert">
                {formError}
              </p>
            )}

            <button
              type="button"
              onClick={submitLead}
              disabled={submitting}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 aria-hidden="true" className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                "Claim My 50% Off Comprehensive Analysis"
              )}
            </button>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              $500 value, now $250 &bull; 60 minutes &bull; No payment needed today
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function StepCards({
  title,
  options,
  value,
  onSelect,
}: {
  title: string;
  options: string[];
  value: string;
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const selected = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              aria-pressed={selected}
              className={`rounded-xl border px-5 py-4 text-left text-base font-medium transition-colors hover:border-primary hover:bg-secondary ${
                selected ? "border-primary bg-secondary text-foreground" : "border-border bg-card text-foreground"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function NextButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-base font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto"
    >
      Continue
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </button>
  );
}

function FieldError({ message }: { message?: string | undefined }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-sm text-destructive" role="alert">
      {message}
    </p>
  );
}

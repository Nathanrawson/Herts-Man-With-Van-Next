"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  CheckCircle2,
  Loader2,
  CreditCard,
  Package,
  Wrench,
  Warehouse,
  Home,
  Building2,
  ArrowRight,
  ArrowLeft,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

/* ── Toggle button for yes / no / not sure ────────────────── */

function ToggleCard({
  icon,
  label,
  value,
  onChange,
  name,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  const opts = ["Yes", "No", "Not Sure"] as const;
  return (
    <div className="rounded-lg border border-border bg-[#f8fafc] p-4">
      <input type="hidden" name={name} value={value} />
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <span className="text-sm font-medium text-foreground">{label}</span>
      </div>
      <div className="flex gap-2">
        {opts.map((opt) => {
          const selected = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(selected ? "" : opt)}
              className={cn(
                "flex-1 py-2 rounded-md text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selected
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white border border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              )}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ── Pill selector for property type / bedrooms ───────────── */

type PillOption = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};

function PillGroup({
  options,
  value,
  onChange,
  name,
}: {
  options: PillOption[];
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  return (
    <>
      <input type="hidden" name={name} value={value} />
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              onClick={() => onChange(selected ? "" : opt.value)}
              className={cn(
                "flex items-center gap-1.5 rounded-md border px-4 py-2.5 text-sm font-medium transition-colors",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                selected
                  ? "border-primary bg-primary text-white shadow-sm"
                  : "border-border bg-white text-muted-foreground hover:text-foreground hover:border-foreground/20"
              )}
            >
              {opt.icon}
              {opt.label}
            </button>
          );
        })}
      </div>
    </>
  );
}

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "07479 645823",
    href: "tel:07479645823",
  },
  {
    icon: Mail,
    label: "Email",
    value: "phil@hertsmanwithavan.com",
    href: "mailto:phil@hertsmanwithavan.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "134 Oakdale, Welwyn Garden City, AL8 7QX",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Sunday: 08:00 - 18:00",
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/hertsmanwithavan",
    icon: Facebook,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hertsmanwithavan",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13.1a8.2 8.2 0 005.58 2.18V11.8a4.84 4.84 0 01-3.77-1.66V6.69z" />
      </svg>
    ),
  },
  {
    label: "Google Business",
    href: "https://g.page/r/CQ18emji1YUIEAE",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
      </svg>
    ),
  },
  {
    label: "Yell",
    href: "https://www.yell.com/biz/herts-man-with-a-van-welwyn-garden-city-10460871/",
    icon: () => (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm9 14.5c3.04 0 5.5-2.46 5.5-5.5S15.04 6.5 12 6.5 6.5 8.96 6.5 12s2.46 5.5 5.5 5.5z" />
      </svg>
    ),
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

const propertyOptions: PillOption[] = [
  { label: "House", value: "House", icon: <Home className="w-4 h-4" /> },
  {
    label: "Flat",
    value: "Apartment / Flat",
    icon: <Building2 className="w-4 h-4" />,
  },
  {
    label: "Bungalow",
    value: "Bungalow",
    icon: <Home className="w-4 h-4" />,
  },
];

const bedroomOptions: PillOption[] = [
  { label: "Studio", value: "Studio" },
  { label: "1", value: "1" },
  { label: "2", value: "2" },
  { label: "3", value: "3" },
  { label: "4", value: "4" },
  { label: "5+", value: "5+" },
];

const TOTAL_STEPS = 3;

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [step, setStep] = useState(1);

  // Step 1 controlled fields (must persist across steps)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Pill selection state
  const [propertyOption, setPropertyOption] = useState("");
  const [numberOfBedrooms, setNumberOfBedrooms] = useState("");
  const [packingService, setPackingService] = useState("");
  const [dismantleReassemble, setDismantleReassemble] = useState("");
  const [storageRequired, setStorageRequired] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Only submit on the final step — Enter key in earlier steps
    // should advance to the next step, not fire the API call.
    if (step < TOTAL_STEPS) {
      if (step === 1 && (!name.trim() || !phone.trim() || !email.trim())) {
        return;
      }
      setStep(step + 1);
      return;
    }

    setFormState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      movingFrom: formData.get("movingFrom") as string,
      movingTo: formData.get("movingTo") as string,
      propertyOption: formData.get("propertyOption") as string,
      numberOfBedrooms: formData.get("numberOfBedrooms") as string,
      packingService: formData.get("packingService") as string,
      dismantleReassemble: formData.get("dismantleReassemble") as string,
      storageRequired: formData.get("storageRequired") as string,
      movingDate: formData.get("movingDate") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong");
      }

      setFormState("success");
      form.reset();
      setName("");
      setPhone("");
      setEmail("");
      setPropertyOption("");
      setNumberOfBedrooms("");
      setPackingService("");
      setDismantleReassemble("");
      setStorageRequired("");
    } catch (err) {
      setFormState("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Failed to send enquiry"
      );
    }
  }

  return (
    <section className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground">
              Get in Touch
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              We offer a wide range of solutions, including removal services,
              packing and storage, and informative video blogs to support your
              moving journey.
            </p>

            {/* Payment methods */}
            <div className="mt-6 p-4 bg-white rounded-xl border border-border">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <CreditCard className="w-4 h-4 text-primary" />
                Payment Methods Accepted
              </div>
              <p className="text-sm text-muted-foreground">
                Cheque, Contactless, BACS, Cash, and all major Debit &amp; Credit
                Cards
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-8 space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-border p-5 sm:p-8 md:p-10">
              {formState === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="font-heading text-xl font-bold text-foreground mb-2">
                    Enquiry Sent!
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    Thank you for getting in touch. We&apos;ll get back to you
                    as soon as possible.
                  </p>
                  <Button
                    onClick={() => {
                      setFormState("idle");
                      setStep(1);
                    }}
                    variant="outline"
                  >
                    Send Another Enquiry
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Progress bar */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">
                        {step === 1 && "Your Details"}
                        {step === 2 && "About Your Move"}
                        {step === 3 && "Anything Else?"}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        Step {step} of {TOTAL_STEPS}
                      </span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-primary rounded-full"
                        initial={false}
                        animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      />
                    </div>
                  </div>

                  {/* Hidden inputs to persist step 1 values across steps */}
                  <input type="hidden" name="name" value={name} />
                  <input type="hidden" name="phone" value={phone} />
                  <input type="hidden" name="email" value={email} />

                  <AnimatePresence mode="wait">
                    {/* ── Step 1: Contact info ────────────── */}
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-5"
                      >
                        <p className="text-muted-foreground text-sm">
                          Just the basics so we can get back to you with your
                          quote.
                        </p>
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-foreground mb-1.5"
                          >
                            Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="name"
                            type="text"
                            required
                            maxLength={100}
                            placeholder="Your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-foreground mb-1.5"
                          >
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="phone"
                            type="tel"
                            required
                            maxLength={50}
                            placeholder="Your phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-foreground mb-1.5"
                          >
                            Email <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="email"
                            type="email"
                            required
                            maxLength={250}
                            placeholder="your@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* ── Step 2: Move details ────────────── */}
                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-5"
                      >
                        <p className="text-muted-foreground text-sm">
                          Tell us a bit about the move so we can give you an
                          accurate quote.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label
                              htmlFor="movingFrom"
                              className="block text-sm font-medium text-foreground mb-1.5"
                            >
                              Moving From
                            </label>
                            <Input
                              id="movingFrom"
                              name="movingFrom"
                              type="text"
                              placeholder="e.g. Welwyn Garden City"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="movingTo"
                              className="block text-sm font-medium text-foreground mb-1.5"
                            >
                              Moving To
                            </label>
                            <Input
                              id="movingTo"
                              name="movingTo"
                              type="text"
                              placeholder="e.g. St Albans"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Property Type
                          </label>
                          <PillGroup
                            name="propertyOption"
                            options={propertyOptions}
                            value={propertyOption}
                            onChange={setPropertyOption}
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Bedrooms
                          </label>
                          <PillGroup
                            name="numberOfBedrooms"
                            options={bedroomOptions}
                            value={numberOfBedrooms}
                            onChange={setNumberOfBedrooms}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="movingDate"
                            className="block text-sm font-medium text-foreground mb-1.5"
                          >
                            Approx Moving Date
                          </label>
                          <Input
                            id="movingDate"
                            name="movingDate"
                            type="date"
                          />
                        </div>
                      </motion.div>
                    )}

                    {/* ── Step 3: Extras + message ────────── */}
                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-5"
                      >
                        <p className="text-muted-foreground text-sm">
                          Optional extras &mdash; skip anything you&apos;re not
                          sure about.
                        </p>

                        <div className="space-y-3">
                          <ToggleCard
                            icon={
                              <Package className="w-4 h-4 text-primary" />
                            }
                            label="Need a packing service?"
                            name="packingService"
                            value={packingService}
                            onChange={setPackingService}
                          />
                          <ToggleCard
                            icon={
                              <Wrench className="w-4 h-4 text-primary" />
                            }
                            label="Furniture dismantle & reassemble?"
                            name="dismantleReassemble"
                            value={dismantleReassemble}
                            onChange={setDismantleReassemble}
                          />
                          <ToggleCard
                            icon={
                              <Warehouse className="w-4 h-4 text-primary" />
                            }
                            label="Need storage?"
                            name="storageRequired"
                            value={storageRequired}
                            onChange={setStorageRequired}
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-foreground mb-1.5"
                          >
                            Anything else we should know?
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            rows={3}
                            placeholder="e.g. heavy items, access issues, specific timing..."
                            className="resize-none"
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {formState === "error" && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                      {errorMessage}
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className="mt-8 flex gap-3">
                    {step > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="lg"
                        onClick={() => setStep(step - 1)}
                        className="h-12 px-5 rounded-lg"
                      >
                        <ArrowLeft className="w-4 h-4 mr-1.5" />
                        Back
                      </Button>
                    )}

                    {step < TOTAL_STEPS ? (
                      <Button
                        type="button"
                        size="lg"
                        onClick={() => {
                          // Validate step 1 before proceeding
                          if (step === 1 && (!name.trim() || !phone.trim() || !email.trim())) {
                            return;
                          }
                          setStep(step + 1);
                        }}
                        className="flex-1 h-12 rounded-lg text-base font-semibold bg-primary hover:bg-primary/90 text-white"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={formState === "submitting"}
                        size="lg"
                        className="flex-1 h-12 rounded-lg text-base font-semibold bg-primary hover:bg-primary/90 text-white"
                      >
                        {formState === "submitting" ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Get My Free Quote
                            <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

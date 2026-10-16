/**
 * Minimal EmailJS client (REST API), so the contact form keeps sending through
 * the same EmailJS service and template as the current site without adding a dependency.
 */

const ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_gp8kf5j",
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_h7j16tk",
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "",
};

export function isEmailConfigured() {
  return Boolean(emailConfig.serviceId && emailConfig.templateId && emailConfig.publicKey);
}

export async function sendEmail(templateParams: Record<string, string>) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: emailConfig.serviceId,
      template_id: emailConfig.templateId,
      user_id: emailConfig.publicKey,
      template_params: templateParams,
    }),
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(text || `EmailJS responded with ${res.status}`);
  }
}

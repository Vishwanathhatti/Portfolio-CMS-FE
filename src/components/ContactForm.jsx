import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = ({ onSubmit, isLoading }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaToken) {
      alert("Please complete the CAPTCHA verification");
      return;
    }

    onSubmit({ ...formData, captchaToken });

    // Reset form after successful submission
    setFormData({
      fullname: "",
      email: "",
      subject: "",
      message: "",
    });
    setCaptchaToken(null);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <Input
          name="fullname"
          placeholder="Name"
          className="rounded-xl"
          value={formData.fullname}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          className="rounded-xl"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <Input
        name="subject"
        placeholder="Subject"
        className="rounded-xl"
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <Textarea
        name="message"
        placeholder="Message"
        rows={6}
        className="rounded-xl"
        value={formData.message}
        onChange={handleChange}
        required
      />

      <div className="flex justify-center">
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
          onChange={handleCaptchaChange}
          theme="light"
        />
      </div>

      <Button
        type="submit"
        className="w-full rounded-full"
        disabled={isLoading || !captchaToken}
      >
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;

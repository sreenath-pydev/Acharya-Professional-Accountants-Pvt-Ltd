import { useState, useEffect } from "react";
import { captureLead } from "../services/leadService";
import syllabusPdf from "../assets/Acharya_CPAT_Syllabus.pdf";

const SESSION_KEY = "acharya_syllabus_downloaded";

export const useLeadCapture = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [alreadyDownloaded, setAlreadyDownloaded] = useState(false);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    const downloaded = sessionStorage.getItem(SESSION_KEY);
    if (downloaded) {
      setAlreadyDownloaded(true);
    }
  }, []);

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value.trim()) error = "Name is required";
        else if (value.trim().length < 3)
          error = "Minimum 3 characters";
        break;

      case "mobile":
        if (!/^[6-9]\d{9}$/.test(value))
          error = "Enter valid mobile number";
        break;

      case "email":
        if (
          value &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        ) {
          error = "Enter valid email";
        }
        break;

      case "location":
        if (!value.trim()) error = "Location required";
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));

    return !error;
  };

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "mobile") {
      // Strip out any characters that aren't digits or + sign
      let cleaned = value.replace(/[^0-9+]/g, "");

      // If it starts with +91, remove it
      if (cleaned.startsWith("+91")) {
        cleaned = cleaned.substring(3);
      } else if (cleaned.startsWith("91") && cleaned.length > 10) {
        // Only strip "91" if the total length is greater than 10 digits
        cleaned = cleaned.substring(2);
      }

      // Strip out any remaining non-digit characters
      cleaned = cleaned.replace(/[^0-9]/g, "");

      // Truncate to maximum of 10 digits
      value = cleaned.slice(0, 10);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    validateField(name, value);
  };

  const downloadPdf = () => {
    const link = document.createElement("a");

    link.href = syllabusPdf;
    link.download = "Acharya_CPAT_Syllabus.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDirectDownload = () => {
    downloadPdf();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const valid =
      validateField("name", formData.name) &&
      validateField("mobile", formData.mobile) &&
      validateField("email", formData.email) &&
      validateField("location", formData.location);

    if (!valid) return;

    setIsSubmitting(true);

    const result = await captureLead(formData);

    setIsSubmitting(false);

    if (result.success) {
      setIsSuccess(true);

      sessionStorage.setItem(
        SESSION_KEY,
        "true"
      );

      setAlreadyDownloaded(true);

      downloadPdf();
    } else {
      setApiError(result.message);
    }
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    alreadyDownloaded,
    apiError,
    handleChange,
    handleSubmit,
    handleDirectDownload,
  };
};

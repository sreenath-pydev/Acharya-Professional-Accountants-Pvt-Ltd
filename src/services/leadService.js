const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL?.trim();

export const captureLead = async (leadData) => {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name: leadData.name,
        mobile: leadData.mobile,
        email: leadData.email,
        location: leadData.location,
        source: "Website - Syllabus Download",
      }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return {
      success: result.success,
      message: result.message || (result.success ? "Lead captured successfully" : "Unable to submit form. Please try again."),
    };
  } catch (error) {
    console.error("Lead Capture Error:", error);
    return {
      success: false,
      message: "Unable to submit form. Please try again.",
    };
  }
};

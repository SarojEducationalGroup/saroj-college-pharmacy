import { useEffect } from "react";

const PopupForm = () => {
  useEffect(() => {
    // Load the external popup script
    const script1 = document.createElement("script");
    script1.src = "https://in8cdn.npfs.co/js/widget/npfwpopup.js";
    script1.async = true;
    document.body.appendChild(script1);

    script1.onload = () => {
      // Initialize the popup widget
      const initScript = document.createElement("script");
      initScript.innerHTML = `
        window.npfWidgetInstance = new NpfWidgetsInit({
          widgetId: "c4686ca3db50effadb9f24fc7ca22401",
          baseurl: "widgets.in8.nopaperforms.com",
          formTitle: "Enquiry Form",
          titleColor: "#FF0033",
          backgroundColor: "#ddd",
          iframeHeight: "500px",
          buttonbgColor: "#4c79dc",
          buttonTextColor: "#FFF",
        });
      `;
      document.body.appendChild(initScript);

      // Automatically open popup on load 
      setTimeout(() => {
        const btn = document.querySelector(
          ".npfWidgetButton.npfWidget-c4686ca3db50effadb9f24fc7ca22401"
        );
        if (btn) btn.click();
      }, 5000);
    };

    return () => {
      // Cleanup the script when component unmounts
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <button
      type="button"
      className="npfWidgetButton npfWidget-c4686ca3db50effadb9f24fc7ca22401"
      style={{
        position: "fixed",
        right: "-60px",
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        cursor: "pointer",
        backgroundColor: "#dc2626",
        color: "#fff", 
        padding: "0.6rem 2rem",
        borderRadius: "0.375rem 0.375rem 0 0.375rem", 
        boxShadow:
          "0 10px 15px -3px rgba(220, 38, 38, 0.5), 0 4px 6px -2px rgba(220, 38, 38, 0.25)", 
        transition: "background-color 0.3s ease", 
        zIndex: 50,
      }}
    >
      Enquire Now!
    </button>
  );
};

export default PopupForm;
import React, { useState } from "react";

// PUBLIC_INTERFACE
function ReviewBox({ review, onReviewChange, onSubmit, submitted }) {
  /**
   * Review feedback box appearing after user preferences/customization.
   * Allows user to enter multiline feedback, submit, and visually matches the app's style.
   */
  const [localValue, setLocalValue] = useState(review || "");

  const handleChange = (e) => {
    setLocalValue(e.target.value);
    onReviewChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(localValue);
  };

  return (
    <form onSubmit={handleSubmit} className="review-box" style={{ margin: "30px 0 34px 0" }}>
      <label className="subtitle" htmlFor="review-textarea" style={{ color: "var(--accent-green)", marginBottom: 6, display: "block" }}>
        How was your customization experience?
      </label>
      <textarea
        id="review-textarea"
        className="input"
        rows={4}
        maxLength={300}
        value={localValue}
        onChange={handleChange}
        placeholder="Share feedback, ideas, or what you loved…"
        disabled={submitted}
        style={{
          width: "100%",
          resize: "vertical",
          background: "#13223b",
          color: "#fff",
          padding: "10px 14px",
          border: "2px solid var(--accent-green-soft)",
          fontSize: "1.07rem",
          borderRadius: 6,
          fontFamily: "inherit",
          marginBottom: 11,
          boxShadow: "0 1.5px 9px 0 #0c121f22",
        }}
      />
      <div style={{ display: "flex", alignItems: "center", marginTop: 3 }}>
        <button
          type="submit"
          className="btn btn-large"
          style={{
            background: "linear-gradient(116deg,#67ea68 70%, #b0ffe0 100%)",
            color: "#051d0a", minWidth: 126,
            boxShadow: "0 2px 13px 0 #00a23726",
          }}
          disabled={submitted || !localValue.trim()}
        >
          {submitted ? "Submitted!" : "Submit Feedback"}
        </button>
        {submitted && (
          <div style={{
            color: "var(--accent-green)",
            marginLeft: 16,
            fontWeight: 500,
            fontSize: "0.98rem",
            letterSpacing: ".1px"
          }}>
            Thank you for your feedback!
          </div>
        )}
        <div style={{ flex: 1 }} />
        <span style={{ color: "#a6e4b0", fontSize: "0.91rem", opacity: 0.72 }}>
          {localValue.length} / 300
        </span>
      </div>
      <style>{`
        .review-box {
          background: linear-gradient(95deg, #162347e0 80%, #50917326 100%);
          border-radius: 15px;
          box-shadow: 0 3px 19px #1a402024;
          border: 1.8px solid var(--accent-green-soft);
          padding: 26px 24px 16px 24px;
        }
        .review-box .input,
        .review-box textarea {
          transition: border 0.18s, background 0.18s;
        }
        .review-box .input:focus, .review-box textarea:focus {
          border: 2.2px solid var(--accent-green);
          background: #14341b;
        }
        .btn[disabled], .review-box button[disabled] {
          opacity: 0.7;
          pointer-events: none;
          background: #27614499;
        }
      `}</style>
    </form>
  );
}

export default ReviewBox;

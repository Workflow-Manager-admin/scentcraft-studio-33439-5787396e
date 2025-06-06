import React from "react";

// PUBLIC_INTERFACE
function PackagingOptionsStep({
  packagingChoices,
  selectedPackaging,
  packagingMessage,
  onPackagingChange,
  onMessageChange,
  onPrev,
  onNext
}) {
  /** Step 3: Packaging and custom message UI */
  return (
    <div>
      <h2 className="title" style={{ marginBottom: 8 }}>Choose Packaging</h2>
      <div className="description" style={{ marginBottom: 18 }}>
        Select gift packaging and optionally add a message.
      </div>
      <div className="packaging-options" style={{ marginBottom: 24 }}>
        {packagingChoices.map(pkg => (
          <label key={pkg.value} className={"packaging-chip" + (selectedPackaging === pkg.value ? " selected" : "")}>
            <input
              type="radio"
              name="packaging"
              value={pkg.value}
              checked={selectedPackaging === pkg.value}
              onChange={() => onPackagingChange(pkg.value)}
              style={{ display: "none" }}
            />
            {pkg.label}
          </label>
        ))}
      </div>
      <div style={{ marginBottom: 22 }}>
        <div className="subtitle" style={{ marginBottom: 4 }}>Gift Message (optional)</div>
        <textarea
          maxLength="140"
          value={packagingMessage}
          onChange={e => onMessageChange(e.target.value)}
          rows={3}
          className="input"
          placeholder="Write a message…"
          style={{
            width: "100%",
            border: "1.5px solid #bfa16c",
            borderRadius: 5,
            padding: "8px 12px",
            fontSize: "1rem",
            color: "#fff",
            background: "#162347",
            fontFamily: "inherit",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <button className="btn" onClick={onPrev}>Back</button>
        <button className="btn btn-large"
          disabled={!selectedPackaging}
          onClick={onNext}
        >Next: Preview & Order</button>
      </div>
      <style>{`
        .packaging-options {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .packaging-chip {
          background: #162347;
          color: #fff;
          border: 2px solid var(--floral-accent);
          border-radius: 16px;
          padding: 9px 20px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
          transition: background 0.22s, color 0.16s;
        }
        .packaging-chip.selected {
          background: var(--floral-accent);
          color: #fff;
          box-shadow: 0 0 0 3px #dfafc633;
        }
        .btn[disabled] {
          opacity: 0.6;
          pointer-events: none;
        }
        .input {
          background: #151e36;
          color: var(--floral-accent);
          border: 1.5px solid var(--floral-accent);
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
}

export default PackagingOptionsStep;

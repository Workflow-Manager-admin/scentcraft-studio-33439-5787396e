import React from "react";

// PUBLIC_INTERFACE
function ScentSelectionStep({ scentOptions, selectedScents, onChange, onNext }) {
  /** Step 1: Scent selection UI */
  return (
    <div>
      <h2 className="title" style={{ marginBottom: 8 }}>Choose Your Scent Notes</h2>
      <div className="description" style={{ marginBottom: 24 }}>
        Select 1–3 scents to craft your unique perfume blend.
      </div>
      <div className="scent-options">
        {scentOptions.map((scent) => (
          <label key={scent.value} className={"scent-chip" + (selectedScents.includes(scent.value) ? " selected" : "")}>
            <input
              type="checkbox"
              value={scent.value}
              checked={selectedScents.includes(scent.value)}
              onChange={() => onChange(scent.value)}
              style={{ display: "none" }}
            />
            {scent.label}
          </label>
        ))}
      </div>
      <button
        className="btn btn-large"
        disabled={selectedScents.length === 0 || selectedScents.length > 3}
        style={{ marginTop: 32 }}
        onClick={onNext}
      >
        Next: Bottle Design
      </button>
      <style>{`
        .scent-options {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 8px;
        }
        .scent-chip {
          background: #182a4e;
          color: var(--floral-accent);
          border: 2px solid var(--floral-accent);
          border-radius: 20px;
          padding: 8px 18px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
          transition: background 0.25s, color 0.18s;
        }
        .scent-chip.selected {
          background: var(--floral-accent);
          color: #fff;
          box-shadow: 0 0 0 3px #d9a8bc33;
        }
        .btn[disabled] {
          opacity: 0.6;
          pointer-events: none;
        }
      `}</style>
    </div>
  );
}

export default ScentSelectionStep;

import React from "react";

// PUBLIC_INTERFACE
function BottleCustomizationStep({
  bottleShapes,
  bottleColors,
  selectedShape,
  selectedColor,
  bottleLabel,
  onShapeChange,
  onColorChange,
  onLabelChange,
  onPrev,
  onNext,
}) {
  /** Step 2: Bottle and label design UI */
  return (
    <div>
      <h2 className="title" style={{ marginBottom: 8 }}>
        Customize Your Bottle
      </h2>
      <div className="description" style={{ marginBottom: 16 }}>
        Pick a bottle shape and color, and personalize with a label.
      </div>
      <div style={{ marginBottom: 18 }}>
        <div className="subtitle" style={{ marginBottom: 8 }}>Bottle Shape</div>
        <div className="bottle-options">
          {bottleShapes.map(shape => (
            <label key={shape.value} className={"bottle-chip" + (selectedShape === shape.value ? " selected" : "")}>
              <input
                type="radio"
                value={shape.value}
                checked={selectedShape === shape.value}
                name="bottle-shape"
                onChange={() => onShapeChange(shape.value)}
                style={{ display: "none" }}
              />
              {shape.label}
            </label>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: 18 }}>
        <div className="subtitle" style={{ marginBottom: 8 }}>Bottle Color</div>
        <div className="bottle-options">
          {bottleColors.map(color =>
            <label key={color.value} className={"bottle-chip" + (selectedColor === color.value ? " selected" : "")}
              style={selectedColor === color.value
                ? { background: color.hex, color: "#fff" }
                : { borderColor: color.hex }
              }>
              <input
                type="radio"
                value={color.value}
                checked={selectedColor === color.value}
                name="bottle-color"
                onChange={() => onColorChange(color.value)}
                style={{ display: "none" }}
              />
              <span style={{
                display: "inline-block",
                background: color.hex,
                borderRadius: 6,
                width: 18,
                height: 18,
                marginRight: 6,
                verticalAlign: "middle",
                border: "1.5px solid #bfa16c",
              }} />{color.label}
            </label>)}
        </div>
      </div>
      <div style={{ marginBottom: 24 }}>
        <div className="subtitle" style={{ marginBottom: 6 }}>Bottle Label (optional)</div>
        <input
          type="text"
          maxLength="20"
          value={bottleLabel}
          onChange={e => onLabelChange(e.target.value)}
          className="input"
          style={{
            padding: "10px 14px",
            borderRadius: 4,
            border: "1.5px solid #bfa16c",
            outline: "none",
            fontSize: "1rem",
            minWidth: 200,
            color: "#bfa16c",
            background: "#fff",
            marginRight: 12,
          }}
          placeholder="e.g. Rose Dream"
        />
      </div>
      <div style={{ display: "flex", gap: "12px" }}>
        <button className="btn" onClick={onPrev}>Back</button>
        <button className="btn btn-large"
          disabled={!selectedShape || !selectedColor}
          onClick={onNext}
        >
          Next: Packaging
        </button>
      </div>
      <style>{`
        .bottle-options {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }
        .bottle-chip {
          background: #1b2741;
          color: var(--floral-accent);
          border: 2px solid var(--floral-accent);
          border-radius: 16px;
          padding: 8px 16px;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
          transition: background 0.22s, color 0.18s, border 0.14s;
        }
        .bottle-chip.selected {
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

export default BottleCustomizationStep;

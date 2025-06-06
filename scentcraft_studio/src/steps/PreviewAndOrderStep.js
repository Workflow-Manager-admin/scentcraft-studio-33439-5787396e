import React, { useState } from "react";

// PUBLIC_INTERFACE
function PreviewAndOrderStep({
  summary,
  onPrev,
  onOrder
}) {
  /** Step 4: Preview all selections and complete the order. */
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      onOrder();
    }, 1800);
  };

  return (
    <div>
      <h2 className="title" style={{ marginBottom: 10 }}>Review & Place Order</h2>
      <div className="description" style={{ marginBottom: 22 }}>
        Here’s your custom perfume summary. Please check all details!
      </div>

      <div className="summary-box">
        <div><b>Scent Notes:</b> {summary.scents.length > 0 ? summary.scents.map(label => <span key={label} className="tag">{label}</span>) : <i>None</i>}</div>
        <div><b>Bottle:</b> <span className="tag">{summary.bottleShape}</span> <span className="tag" style={{
          background: summary.bottleColorHex,
          color: "#fff",
          borderColor: "#bfa16c",
        }}>{summary.bottleColorLabel}</span></div>
        <div><b>Label:</b> <span>{summary.bottleLabel ? summary.bottleLabel : <i>(none)</i>}</span></div>
        <div><b>Packaging:</b> <span className="tag">{summary.packagingLabel}</span></div>
        <div>
          <b>Gift Message:</b> <div style={{ color: "#bfa16c", marginLeft: 6 }}>{summary.message ? summary.message : <i>(none)</i>}</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 30 }}>
        <button className="btn" onClick={onPrev}>Back</button>
        <button className="btn btn-large" onClick={handlePlaceOrder} disabled={orderPlaced}>
          {orderPlaced ? "Placing Order…" : "Place Order"}
        </button>
      </div>
      {orderPlaced && <div style={{ color: "#bfa16c", marginTop: 18, fontWeight: 500, fontSize: "1.15rem" }}>Thank you! Your order is being processed…</div>}

      <style>{`
        .summary-box {
          background: #151e2c;
          color: var(--floral-accent);
          border: 2px solid var(--floral-accent);
          border-radius: 12px;
          padding: 22px 26px;
          margin-bottom: 16px;
          font-size: 1.08rem;
          box-shadow: 0 1.5px 17px 0 #0d203415;
        }
        .tag {
          display: inline-block;
          background: var(--floral-accent);
          color: #fff;
          border-radius: 10px;
          padding: 3px 10px;
          font-size: 0.98rem;
          margin: 0 4px 4px 0;
          border: 1px solid var(--floral-accent);
          box-shadow: 0 1px 4px #ddc0ea18;
        }
      `}</style>
    </div>
  );
}

export default PreviewAndOrderStep;

import React from "react";
import "../App.css";

// PUBLIC_INTERFACE
function Stepper({ steps, currentStep }) {
  /** Step progress component for visual navigation. */
  return (
    <div className="stepper-container">
      <ol className="stepper">
        {steps.map((step, idx) => (
          <li
            key={step.label}
            className={
              "step" +
              (idx === currentStep ? " active" : "") +
              (idx < currentStep ? " completed" : "")
            }
          >
            <span className="step-icon">{idx + 1}</span>
            <span className="step-label">{step.label}</span>
          </li>
        ))}
      </ol>
      <style>{`
        .stepper-container {
          margin-top: 40px;
          margin-bottom: 32px;
          position: relative;
        }
        .stepper-container::before {
          /* Subtle large floral blob in background top left, very pale */
          content: "";
          position: absolute;
          left: 0;
          top: -30px;
          width: 220px;
          height: 38px;
          background: url("data:image/svg+xml,%3Csvg width='220' height='44' viewBox='0 0 220 44' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='90' cy='17' rx='90' ry='17' fill='%23f9d6e212'/%3E%3Cellipse cx='200' cy='34' rx='20' ry='8' fill='%23bc8f8f12'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-size: contain;
          opacity: 0.17;
          z-index: 0;
        }
        .stepper {
          display: flex;
          justify-content: space-between;
          list-style: none;
          padding: 0;
          position: relative;
          z-index: 2;
        }
        .step {
          text-align: center;
          flex: 1;
          position: relative;
          color: var(--floral-accent);
          opacity: 0.96;
          font-weight: 500;
        }
        .step .step-icon {
          background: #1c2d54;
          border: 2.5px solid var(--floral-accent);
          color: var(--floral-accent);
          border-radius: 50%;
          padding: 7px 16px;
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 6px;
          display: inline-block;
          transition: background 0.3s, color 0.3s;
          box-shadow: 0 2px 10px 0 #0c121f13;
        }
        .step.active .step-icon,
        .step.completed .step-icon {
          background: var(--floral-accent);
          color: #fff;
          border-color: var(--floral-accent);
          text-shadow: 0 1.5px 2px #491c3681;
        }
        .step.completed {
          opacity: 1;
        }
        .step.active .step-label {
          font-weight: bolder;
          color: var(--accent);
        }
        .step-label {
          display: block;
          font-size: 1rem;
          margin-top: 4px;
          letter-spacing: 0.01em;
          color: var(--floral-accent);
          text-shadow: 0 0.5px 2px #54263d0f;
        }
        .step:not(:last-child):after {
          content: '';
          display: block;
          position: absolute;
          top: 18px;
          right: -50%;
          width: 100%;
          height: 2.7px;
          background: linear-gradient(90deg, var(--floral-accent), var(--accent));
          opacity: 0.24;
          z-index: 0;
        }
        .step.completed:not(:last-child):after {
          opacity: 1;
          background: linear-gradient(90deg, var(--floral-accent) 70%, #f9d6e2cc 100%);
        }
      `}</style>
    </div>
  );
}

export default Stepper;

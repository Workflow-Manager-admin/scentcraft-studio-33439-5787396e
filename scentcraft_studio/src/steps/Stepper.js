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
        }
        .stepper {
          display: flex;
          justify-content: space-between;
          list-style: none;
          padding: 0;
        }
        .step {
          text-align: center;
          flex: 1;
          position: relative;
          color: #bfa16c;
          opacity: 0.8;
        }
        .step .step-icon {
          background: #f8f4f0;
          border: 2px solid #bfa16c;
          color: #bfa16c;
          border-radius: 50%;
          padding: 7px 14px;
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 6px;
          display: inline-block;
          transition: background 0.3s, color 0.3s;
        }
        .step.active .step-icon,
        .step.completed .step-icon {
          background: #bfa16c;
          color: #fff;
        }
        .step.completed {
          opacity: 1;
        }
        .step.active .step-label {
          font-weight: bold;
          color: #bfa16c;
        }
        .step-label {
          display: block;
          font-size: 0.95rem;
          margin-top: 4px;
          color: #bfa16c;
        }
        .step:not(:last-child):after {
          content: '';
          display: block;
          position: absolute;
          top: 18px;
          right: -50%;
          width: 100%;
          height: 2px;
          background: #bfa16c;
          opacity: 0.3;
          z-index: 0;
        }
        .step.completed:not(:last-child):after {
          opacity: 1;
          background: #bfa16c;
        }
      `}</style>
    </div>
  );
}

export default Stepper;

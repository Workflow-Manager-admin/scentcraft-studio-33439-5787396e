import React, { useState } from "react";
import Stepper from "./steps/Stepper";
import ScentSelectionStep from "./steps/ScentSelectionStep";
import BottleCustomizationStep from "./steps/BottleCustomizationStep";
import PackagingOptionsStep from "./steps/PackagingOptionsStep";
import ReviewBox from "./steps/ReviewBox";
import PreviewAndOrderStep from "./steps/PreviewAndOrderStep";

// Step definitions and options
// * Added Review step after Packaging
const STEPS = [
  { label: "Scent Selection" },
  { label: "Bottle Customization" },
  { label: "Packaging" },
  { label: "Review Experience" },
  { label: "Preview & Order" }
];

const SCENT_OPTIONS = [
  { value: "floral", label: "Floral" },
  { value: "woody", label: "Woody" },
  { value: "citrus", label: "Citrus" },
  { value: "spicy", label: "Spicy" },
  { value: "fresh", label: "Fresh" },
  { value: "oriental", label: "Oriental" },
  { value: "fruity", label: "Fruity" },
];

const BOTTLE_SHAPES = [
  { value: "classic", label: "Classic" },
  { value: "modern", label: "Modern" },
  { value: "vintage", label: "Vintage" }
];

const BOTTLE_COLORS = [
  { value: "clear", label: "Clear", hex: "#fafafa" },
  { value: "rose", label: "Rose Gold", hex: "#d1bfa7" },
  { value: "amber", label: "Amber", hex: "#bfa16c" },
];

const PACKAGING_OPTIONS = [
  { value: "none", label: "No packaging" },
  { value: "gift", label: "Gift Box" },
  { value: "deluxe", label: "Deluxe Velvet" }
];

// PUBLIC_INTERFACE
function MainContainer() {
  /**
   * Main container for the ScentCraft Studio multi-step process.
   * Handles navigation and state for each step.
   */
  const [currentStep, setCurrentStep] = useState(0);

  // State for each step
  const [selectedScents, setSelectedScents] = useState([]);
  const [selectedShape, setSelectedShape] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [bottleLabel, setBottleLabel] = useState("");
  const [selectedPackaging, setSelectedPackaging] = useState("");
  const [packagingMessage, setPackagingMessage] = useState("");

  // New: Review feedback state
  const [reviewText, setReviewText] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Handlers for steps
  const handleScentChange = (val) => {
    setSelectedScents((prev) =>
      prev.includes(val)
        ? prev.filter((v) => v !== val)
        : prev.length < 3
        ? [...prev, val]
        : prev
    );
  };
  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const handleShapeChange = (val) => setSelectedShape(val);
  const handleColorChange = (val) => setSelectedColor(val);
  const handleLabelChange = (val) => setBottleLabel(val);
  const handlePackagingChange = (val) => setSelectedPackaging(val);
  const handleMessageChange = (val) => setPackagingMessage(val);

  // Review step logic
  const handleReviewChange = (val) => {
    setReviewText(val);
    if (reviewSubmitted) setReviewSubmitted(false);
  };
  const handleReviewSubmit = (val) => {
    setReviewText(val);
    setReviewSubmitted(true);
    // Remain on review step: next button in box is disabled after submit
    // Optionally, could auto-advance on submit
    setTimeout(() => setReviewSubmitted(false), 2300);
  };

  // For order: reset or show confirmation etc.
  const handleOrder = () => {
    // For demo: reset state and jump to step 0 after delay.
    setTimeout(() => {
      setCurrentStep(0);
      setSelectedScents([]);
      setSelectedShape("");
      setSelectedColor("");
      setBottleLabel("");
      setSelectedPackaging("");
      setPackagingMessage("");
      setReviewText("");
      setReviewSubmitted(false);
    }, 1200);
  };

  // Compute human-labels for preview
  const previewSummary = {
    scents: selectedScents.map(
      v => SCENT_OPTIONS.find(opt => opt.value === v)?.label || v
    ),
    bottleShape: BOTTLE_SHAPES.find(b => b.value === selectedShape)?.label || "",
    bottleColorLabel: BOTTLE_COLORS.find(c => c.value === selectedColor)?.label || "",
    bottleColorHex: BOTTLE_COLORS.find(c => c.value === selectedColor)?.hex || "#fff",
    bottleLabel: bottleLabel,
    packagingLabel: PACKAGING_OPTIONS.find(p => p.value === selectedPackaging)?.label || "",
    message: packagingMessage,
  };

  let stepContent = null;
  switch (currentStep) {
    case 0:
      stepContent = (
        <ScentSelectionStep
          scentOptions={SCENT_OPTIONS}
          selectedScents={selectedScents}
          onChange={handleScentChange}
          onNext={handleNext}
        />
      );
      break;
    case 1:
      stepContent = (
        <BottleCustomizationStep
          bottleShapes={BOTTLE_SHAPES}
          bottleColors={BOTTLE_COLORS}
          selectedShape={selectedShape}
          selectedColor={selectedColor}
          bottleLabel={bottleLabel}
          onShapeChange={handleShapeChange}
          onColorChange={handleColorChange}
          onLabelChange={handleLabelChange}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      );
      break;
    case 2:
      stepContent = (
        <PackagingOptionsStep
          packagingChoices={PACKAGING_OPTIONS}
          selectedPackaging={selectedPackaging}
          packagingMessage={packagingMessage}
          onPackagingChange={handlePackagingChange}
          onMessageChange={handleMessageChange}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      );
      break;
    case 3:
      stepContent = (
        <PreviewAndOrderStep
          summary={previewSummary}
          onPrev={handlePrev}
          onOrder={handleOrder}
        />
      );
      break;
    default:
      stepContent = null;
  }

  return (
    <section>
      <div className="container main-panel-container">
        <Stepper steps={STEPS} currentStep={currentStep} />
        <div className="main-step-panel floral-overlay">
          {stepContent}
        </div>
      </div>
      {/* floral SVG overlay at the corner */}
      <style>{`
        .main-panel-container {
          position: relative;
        }
        .main-step-panel {
          background: linear-gradient(120deg, #16284dbb 84%, #234477e8 100%);
          border-radius: 18px;
          max-width: 630px;
          margin: 0 auto;
          padding: 42px 34px 36px 34px;
          box-shadow: 0 6px 36px #0b142838, 0 1.5px 0px #27345b55;
          color: var(--text-color);
          border: 1.5px solid #39548044;
          position: relative;
          overflow: hidden;
        }
        /* Subtle floral SVG at bottom right for panel, low opacity */
        .main-step-panel.floral-overlay::after {
          content: "";
          pointer-events: none;
          position: absolute;
          right: -32px;
          bottom: -20px;
          width: 170px;
          height: 120px;
          background: url("data:image/svg+xml,%3Csvg width='170' height='120' viewBox='0 0 170 120' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cellipse cx='80' cy='58' rx='75' ry='45' fill='%23bc8f8f17'/%3E%3Cellipse cx='130' cy='100' rx='30' ry='14' fill='%23f9d6e21f'/%3E%3Cellipse cx='27' cy='22' rx='22' ry='10' fill='%23f9d6e224'/%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          opacity: 0.34;
          z-index: 0;
        }
      `}</style>
    </section>
  );
}

export default MainContainer;

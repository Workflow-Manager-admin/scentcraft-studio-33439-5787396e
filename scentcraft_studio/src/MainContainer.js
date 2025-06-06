import React, { useState } from "react";
import Stepper from "./steps/Stepper";
import ScentSelectionStep from "./steps/ScentSelectionStep";
import BottleCustomizationStep from "./steps/BottleCustomizationStep";
import PackagingOptionsStep from "./steps/PackagingOptionsStep";
import PreviewAndOrderStep from "./steps/PreviewAndOrderStep";

// Step definitions and options
const STEPS = [
  { label: "Scent Selection" },
  { label: "Bottle Customization" },
  { label: "Packaging" },
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
  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handlePrev = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const handleShapeChange = (val) => setSelectedShape(val);
  const handleColorChange = (val) => setSelectedColor(val);
  const handleLabelChange = (val) => setBottleLabel(val);
  const handlePackagingChange = (val) => setSelectedPackaging(val);
  const handleMessageChange = (val) => setPackagingMessage(val);

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
      <div className="container">
        <Stepper steps={STEPS} currentStep={currentStep} />
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            maxWidth: 600,
            margin: "0 auto",
            padding: "38px 34px",
            boxShadow: "0 3px 32px rgba(191,161,108,0.08)",
            color: "#bfa16c"
          }}
        >
          {stepContent}
        </div>
      </div>
    </section>
  );
}

export default MainContainer;

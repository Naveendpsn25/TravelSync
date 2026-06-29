import { useState } from "react";
import {
  Step,
  StepLabel,
  Stepper,
  Button,
  Box,
} from "@mui/material";
import "./BookingStepper.css";
import {FormProvider,useForm,} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import BookingLayout from "../BookingLayout/BookingLayout";
import BookingSummary from "../BookingLayout/BookingSummary/BookingSummary";
import TravelDetails from "../TravelDetails/TravelDetails";
import TravellerDetails from "../TravellerDetails/TravellerDetails";
import ReviewBooking from "../ReviewBooking/ReviewBooking";
import { createBooking } from "../../../services/services/bookingService";
import BookingSuccessDialog from "../BookingSuccessDialog/BookingSuccessDialog";


const steps = [
  "Travel Details",
  "Traveller Details",
  "Review & Confirm",
];

const bookingSchema = z.object({
  travelDate: z.string().min(1, "Travel date is required."),

  travellers: z.coerce
    .number()
    .min(1, "Minimum one traveller is required."),

    fullName: z
    .string()
    .trim()
    .min(3, "Please enter your full name."),

    email: z
    .email("Please enter a valid email address."),

    phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit mobile number."),

    specialRequests: z.string().optional(),
    });


function BookingStepper({ travelPackage }) {

    const methods = useForm({resolver: zodResolver(bookingSchema),defaultValues: {travelDate: "",
                                                                                    travellers: 1,
                                                                                    fullName: "",
                                                                                    email: "",
                                                                                    phone: "",
                                                                                    specialRequests: "",},});

    const { trigger,getValues } = methods;

    const [activeStep, setActiveStep] = useState(0);
    const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);

const handleNext = async () => {
  let isValid = false;

  switch (activeStep) {
    case 0:
      isValid = await trigger([
        "travelDate",
        "travellers",
      ]);
      break;

    case 1:
      isValid = await trigger([
        "fullName",
        "email",
        "phone",
      ]);
      break;

    case 2:
      isValid = true;
      break;

    default:
      isValid = true;
  }

  if (!isValid) {
    return;
  }

  // Last step
  if (activeStep === steps.length - 1) {
    await handleSubmitBooking();
    return;
  }

  // Move to next step
  setActiveStep((previous) => previous + 1);
};

  function handleBack() {
    setActiveStep((previousStep) => previousStep - 1);
  }

  async function handleSubmitBooking() {
  try {
    const formData = getValues();

    const bookingData = {
      bookingReference: `TS-${Date.now()}`,

      packageId: travelPackage.id,
      packageTitle: travelPackage.title,

      travelDate: formData.travelDate,
      travellers: formData.travellers,

      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,

      totalAmount:
        travelPackage.price * formData.travellers,

      bookingDate: new Date().toISOString(),

      status: "Confirmed",
    };

    await createBooking(bookingData);
    setBookingDetails(bookingData);
    setBookingDialogOpen(true);

    // console.log("bookingDetails:", bookingData);
    // console.log("dialog should open");

    // console.log("Booking Created");
  } catch (error) {
    console.error(error);
  }
}



 return (
  <FormProvider {...methods}>
    <BookingLayout
      leftContent={
        <>
          <Stepper
            activeStep={activeStep}
            className="booking-stepper"
          >
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && <TravelDetails />}
          {activeStep === 1 && <TravellerDetails />}
          {activeStep === 2 && (<ReviewBooking travelPackage={travelPackage}/>
)}
        </>
      }
      rightContent={
        <BookingSummary
          travelPackage={travelPackage}
        />
      }
      onBack={handleBack}
      onNext={handleNext}
      disableBack={activeStep === 0}
      disableNext={false}
      nextButtonText={
        activeStep === steps.length - 1
        ? "Submit Booking"
        : "Next"
        }
    />



    <BookingSuccessDialog
            open={bookingDialogOpen}
            bookingDetails={bookingDetails}
            onClose={() => setBookingDialogOpen(false)}
            />
  </FormProvider>
);
 }

export default BookingStepper;
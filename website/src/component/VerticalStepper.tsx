"use client";

import SectionTitleMedium from "./SectionTitleMedium";

const steps = [
  {
    number: 1,
    title: "Check-in, Check-out",
    content: (
      <p className="mt-3">
        Check-in is at 4:00 Checkout is at 11:00 am You may request early
        check-in and/or late check-out after booking. Our team will do our best
        to accommodate any requests based on availability.
      </p>
    ),
  },
  {
    number: 2,
    title: "Accessibility",
    content: (
      <ul className="list-disc ml-5 mt-3">
        <li>Elevators available</li>
        <li>Elevators available</li>
      </ul>
    ),
  },

  {
    number: 3,
    title: "House Rules",
    content: (
      <>
        <ul className="list-disc ml-5 mt-3">
          <li>No smoking (not even on balconies/patios)</li>
          <li>No pets (not even really cute ones) unless otherwise stated</li>
          <li>No parties (not even really quiet ones)</li>
        </ul>
        <p className="mt-3">
          * Please be respectful of your neighbors and keep noise to a minimum
          from 10:00 pm – 8:00 am.
        </p>
      </>
    ),
  },
  {
    number: 4,
    title: "Please note",
    content: (
      <>
        <ul className="list-disc ml-5 mt-3">
          <li>There’s no cable.</li>
          <li>
            The bedroom and living space for some Sonders are separated by
            opaque curtain panels instead of a solid wall.
          </li>
          <li>Due to the central location, noise may be present.</li>
          <li>
            Intra-stay cleanings are available during weekdays for an additional
            charge.
          </li>
        </ul>
        <p className="mt-3">1 hour • Admission Ticket Free</p>
      </>
    ),
  },
  {
    number: 5,
    title: "Flexible cancellation",
    content: (
      <p className="mt-3">
        We offer flexible cancellations for all bookings. Select the Flex Rate
        to cancel your booking up to 3 days before check-in and receive a full
        refund. For longer stays that are paid monthly, we require at least 30
        days notice to cancel or modify without fees.
      </p>
    ),
  },
];

const BookingPoliciesStepper = () => {
  return (
    <>
      <div className="mb-7">
        <SectionTitleMedium title={"Booking policies"} />
      </div>
      <div className="relative">
        {/* Vertical line behind steps */}
        <div className="absolute top-0 left-4 h-[87%] w-0.5 bg-[#B1905E]" />

        {/* Step Items */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-8">
              {/* Step Number */}
              <div className="z-10 px-3 py-1 rounded-full border border-[#B1905E] bg-white primary_text font-bold">
                {step.number}
              </div>

              {/* Text Content */}
              <div>
                {/* <SectionTitleMedium title={step.title} /> */}
                <h2 className="text-xl font-bold">{step.title}</h2>
                <span className="text-[#4F5E71]">{step.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookingPoliciesStepper;

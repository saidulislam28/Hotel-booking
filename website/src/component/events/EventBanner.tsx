import SectionTitle from "../SectionTitle";
import SectionTitleMedium from "../SectionTitleMedium";

export default function EventBanner() {
  return (
    <>
      <div
        className="relative h-[650px] bg-cover bg-center rounded-xl"
        style={{ backgroundImage: "url('/event-room.jpg')" }}
      ></div>

      <div className="py-8" 
      style={{
        borderBottom: "0.5px solid #dedede"
      }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Header */}
          <div className="lg:col-span-1">
            <p className="text-sm font-medium text-[#4F5E71] uppercase tracking-wide mb-3">
              OUTSTANDING OCCASIONS
            </p>
            <h2 className="text-3xl lg:text-3xl font-bold">
              Host Your Event At Sailing With Professional Service
            </h2>
          </div>

          {/* Middle Column - Description */}
          <div className="lg:col-span-1">
            <p className="text-[#4F5E71] leading-relaxed">
              Our efficient, dynamic and experienced events team will tailor
              every detail to your needs, from world-class catering to carefully
              planned entertainment. All you need to do is raise your glass and
              savor the moment. To reserve or have more information about the
              events please contact us.
            </p>
          </div>

          {/* Right Column - Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex justify-center py-4 bg-[#F2F4F4] rounded-xl">
              <p className="text-gray-700 font-medium">
                Call us for a quote:
                <span className="text-[#4F5E71] font-semibold ml-1">
                  +1 234 567 8899
                </span>
              </p>
            </div>
            <div className="flex justify-center py-4 bg-[#F2F4F4] rounded-xl">
              <p className="text-gray-700 font-medium">
               Email us for a quote:
                <span className="text-[#4F5E71] font-semibold ml-1">
                  contact.devs@gmail.com
                </span>
              </p>
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
}

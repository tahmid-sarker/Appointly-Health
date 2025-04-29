import React from "react";
import SuccessDoctors from "../../assets/success-doctor.png";
import SuccessPatients from "../../assets/success-patients.png";
import SuccessReview from "../../assets/success-review.png";
import SuccessStaffs from "../../assets/success-staffs.png";
import CountUp from "react-countup";

const Success = () => {

  return (
    <section className="my-20 mx-12.5">
      {/* Title and Description */}
      <h1 className="text-4xl font-bold text-center mb-4">We Provide Best Medical Services</h1>
      <p className="text-lg text-center">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience.
      </p>
      {/* Success Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center">
          <img src={SuccessDoctors} alt="Success Doctors" className="w-20 h-20 md:w-16 md:h-16 mb-4" />
          <div className="text-4xl md:text-6xl font-bold mt-2" >
            <CountUp start={0} end={789} duration={7}/>
          </div>
          <div className="text-sm mt-1">Total Doctors</div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center">
          <img src={SuccessPatients} alt="Success Patients" className="w-20 h-20 md:w-16 md:h-16 mb-4" />
          <div className="text-4xl md:text-6xl font-bold mt-2">
          <CountUp start={0} end={1243} duration={7} separator="," />
          </div>
          <div className="text-sm mt-1">Total Reviews</div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center">
          <img src={SuccessReview} alt="Success Review" className="w-20 h-20 md:w-16 md:h-16 mb-4" />
          <div className="text-4xl md:text-6xl font-bold mt-2">
          <CountUp start={0} end={8720} duration={7} separator="," />
          </div>
          <div className="text-sm mt-1">Patients</div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center">
          <img src={SuccessStaffs} alt="Success Staffs" className="w-20 h-20 md:w-16 md:h-16 mb-4" />
          <div className="text-4xl md:text-6xl font-bold mt-2">
          <CountUp start={0} end={165} duration={7} />
          </div>
          <div className="text-sm mt-1">Total Staffs</div>
        </div>
      </div>
    </section>
  );
};

export default Success;

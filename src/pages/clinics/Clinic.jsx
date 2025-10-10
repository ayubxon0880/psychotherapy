import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { API } from "../../service/api.jsx";

const Clinic = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [clinic, setClinic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/clinic/${id}`)
      .then((res) => res.json())
      .then((data) => setClinic(data))
      .catch((error) =>
        console.error("Could not fetch clinic at id: " + id, error)
      )
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">...</p>;
  }
  if (!clinic) return <p className="text-center">{t("general.no-data")}</p>;

  return (
    <div className="mt-10 max-w-7xl m-auto p-6 max-md:p-3 bg-white rounded-3xl flex flex-col gap-6 mb-16">
      <img
        src={clinic.imageUrl ? API + "/file/files/" + clinic.imageUrl : "/images/clinic.png"}
        alt={clinic.name}
        className="w-full h-96 lg:h-[550px] object-cover rounded-3xl"
      />

      <div className="p-4 flex flex-col gap-3 text-[#666666]">
        {/* Clinic Name - Responsive */}
        <h3 className="text-2xl md:text-3xl font-bold">{clinic.name}</h3>

        {/* Responsive info sections */}
        <div className="flex justify-between text-base md:text-xl gap-4 border-2 rounded-lg p-3">
          <span className="font-bold">{t("clinics.direction")}:</span>
          <span className="text-end">
            {clinic.directions?.map((d) => d.direction).join(", ")}
          </span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 border-2 rounded-lg p-3">
          <span className="font-bold">{t("clinics.address")}:</span>
          <span className="text-end">{clinic.address}</span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 border-2 rounded-lg p-3">
          <span className="font-bold">{t("clinics.phone")}:</span>
          <span className="text-end">{clinic.phoneNumber}</span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 border-2 rounded-lg p-3">
          <span className="font-bold">{t("clinics.time")}:</span>
          <span className="text-end">
            {clinic.startWorkTime} - {clinic.endWorkTime}
          </span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 border-2 rounded-lg p-3">
          <span className="font-bold">{t("clinics.website")}:</span>
          <span className="text-end">
            <a
              href={clinic.website}
              className="text-blue-600 hover:underline break-words"
              target="_blank"
              rel="noreferrer"
            >
              {clinic.website}
            </a>
          </span>
        </div>

        <a href={`${API}/file/files/${clinic.licenceUrl}`} className="flex justify-between text-base md:text-xl gap-4 border-2 rounded-lg p-3 font-bold">
          {t("clinics.licence")}
        </a>
      </div>
    </div>
  );
};

export default Clinic;

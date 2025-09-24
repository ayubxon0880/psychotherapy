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
      .then(res => res.json())
      .then(data => setClinic(data))
      .catch(error => console.error("Could not fetch clinic at id: " + id, error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">...</p>;
  }
  if (!clinic) return <p className="text-center">{t("general.no-data")}</p>;

  return (
    <div className="bg-white rounded-3xl p-6 flex max-md:p-3 flex-col gap-4 max-w-7xl m-auto mb-16">
      <img
        src={clinic.imageUrl ? API + "/file/files/" + clinic.imageUrl : "/images/clinic.png"}
        alt={clinic.name}
        className="max-w-full h-96 object-cover rounded-2xl"
      />
      <div className="flex flex-col flex-1">
        <h3 className="text-xl font-semibold">{clinic.name}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-2">
          <span className="font-semibold">{t("clinics.direction")}:</span>{" "}
          {clinic.directions?.map((d) => d.direction).join(", ")}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">{t("clinics.address")}:</span> {clinic.address}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">{t("clinics.phone")}:</span> {clinic.phoneNumber}
        </p>
        <p className="text-sm text-gray-700">
          <span className="font-semibold">{t("clinics.time")}:</span> {clinic.startWorkTime} - {clinic.endWorkTime}
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">{t("clinics.website")}:</span>{" "}
          <a href={clinic.website} className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">
            {clinic.website}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Clinic;

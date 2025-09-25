import React, { useEffect, useState } from 'react';
import { API } from '../service/api';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const Specialist = () => {
  const [specialist, setSpecialist] = useState(null);
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`${API}/specialist/${id}`)
      .then(res => res.json())
      .then(data => setSpecialist(data))
      .catch(error => console.error(`Could not fetch specialist at id: ${id}`, error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10">...</p>;
  }

  if (!specialist) {
    return <p className="text-center text-red-500">{t("general.no-data")}</p>;
  }

  return (
    <div className="mt-10 max-w-7xl m-auto p-6 max-md:p-3">
      <img
        src={`${API}/file/files/${specialist.imageUrl}`}
        alt={specialist.FIO}
        className="w-full h-96 lg:h-[550px] object-cover rounded-3xl"
      />

      {/* Responsive headline */}
      <p className="text-2xl md:text-3xl font-bold p-4">{specialist.fio}</p>

      <div className="p-4 this-block text-[#666666] flex flex-col gap-3">
        {/* Responsive sections */}
        <div className="flex justify-between text-base md:text-xl gap-4 p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.direction")}</span>
          {specialist.directionResponse.map(item => (
            <span key={item.id}>{item.direction} </span>
          ))}
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.category")}</span>
          <span>{specialist.category}</span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.experience")}</span>
          <span>{specialist.experience}</span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.firstConsult")}</span>
          <span>{specialist.firstConsultationPrice} UZS</span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.reConsult")}</span>
          <span>{specialist.reconsultationPrice} UZS</span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.onlineConsult")}</span>
          <span>{specialist.onlineConsultationPrice} UZS</span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.consultPeriod")}</span>
          <span>{specialist.consultationPeriod}</span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.workSchedule")}</span>
          <span>{specialist.workSchedule}</span>
        </div>

        <div className="flex justify-between text-base md:text-xl gap-4 p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.workSkills")}</span>
          <span className="text-end max-w-[500px]">{specialist.workSkills}</span>
        </div>
      </div>

      {/* Lists below */}
      <div className="flex flex-col gap-1 mt-10 text-base md:text-xl text-[#666666] p-4">
        <p className="flex justify-between p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.workWith")} </span>
          <div>
            {specialist.workWith.map((item, i) => (
              <span key={i}>{item} </span>
            ))}
          </div>
        </p>
        <p className="flex justify-between p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.format")} </span>
          <div>
            {specialist.formats.map((item, i) => (
              <span key={i}>{item} </span>
            ))}
          </div>
        </p>
        <p className="flex justify-between p-3 rounded-lg border-2">
          <span className="font-bold">{t("specialist.languages")} </span>
          <div>
            {specialist.languages.map((item, i) => (
              <span key={i}>{item} </span>
            ))}
          </div>
        </p>
      </div>
    </div>
  );
};

export default Specialist;

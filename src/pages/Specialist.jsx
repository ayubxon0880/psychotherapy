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
      .then(data => {
        setSpecialist(data);
      })
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
      <div className="flex items-end p-4">
        <div className="text-[#666666]">
          <p className="text-3xl font-bold">{specialist.fio}</p>
          <p className="text-xl font-bold">{specialist.category}</p>
          <p className="text-xl">{specialist.academicDegree}</p>
          <p className="text-xl">{specialist.recommendation}</p>
          <p className="text-xl">{specialist.experience}</p>
          <p className="text-xl">{specialist.firstConsultationPrice}</p>
          <p className="text-xl">{specialist.reconsultationPrice}</p>
          <p className="text-xl">{specialist.onlineConsultationPrice}</p>
          <p className="text-xl">{specialist.consultationPeriod}</p>
          <p className="text-xl">{specialist.workSchedule}</p>
          {
            specialist.workWith.map(item => (
              <span className="font-md">{item} </span>
            ))
          }
          <br />
          {
            specialist.formats.map(item => (
              <span className="font-md">{item} </span>
            ))
          }
          <br />
          {
            specialist.languages.map(item => (
              <span className="font-md">{item} </span>
            ))
          }
          <p className="text-xl">{specialist.workSkills}</p>
        </div>
      </div>
    </div>
  );
};

export default Specialist;

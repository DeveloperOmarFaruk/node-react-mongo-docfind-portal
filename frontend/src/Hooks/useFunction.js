import { useEffect, useRef, useState } from "react";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router";
import useFirebase from "./useFirebase";
import axios from "axios";

const useFunction = () => {
  const [isOpen, setIsopen] = useState(true);
  const [services, setServices] = useState([]);
  const [service, setService] = useState({});
  const [appoinments, setAppoinments] = useState([]);
  const [appoinmentsAdmin, setAppoinmentsAdmin] = useState([]);
  const [users, setUsers] = useState([]);
  const [appoinment, setAppoinment] = useState({});
  const [appoinmentAction, setAppoinmentAction] = useState("Not Visited");
  const [appoinmentTotal, setAppoinmentTotal] = useState(0);
  const [todayAppoinmentTotal, setTodayAppoinmentTotal] = useState(0);
  const [totalVisited, setTotalVisited] = useState(0);
  const [totalPaidPayment, setTotalPaidPayment] = useState(0);
  const [id, setId] = useState(0);
  const [idView, setIdView] = useState(0);
  const [date, setDate] = useState(new Date());
  const [appoDate, setAppoDate] = useState(new Date());
  const [adminAppoDate, setAdminAppoDate] = useState(new Date());
  const [adminEmail, setAdminEmail] = useState("");
  const [admin, setAdmin] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [doctor, setDoctor] = useState({});
  const [doctorsData, setDoctorsData] = useState({
    doctorName: "",
    doctorCategory: "",
    doctorProgram: "",
  });
  const [doctorsDataUpdate, setDoctorsDataUpdate] = useState({
    doctorName: "",
    doctorCategory: "",
    doctorProgram: "",
  });

  const [contactData, setContactData] = useState({
    contactEmail: "",
    contactSubject: "",
    contactMessage: "",
  });

  const [servicesData, setServicesData] = useState({
    serviceTitle: "",
    serviceTime: "",
    serviceSpaces: "",
    serviceFee: "",
  });

  const [serviceUpdateData, setServiceUpdateData] = useState({
    serviceTitle: "",
    serviceTime: "",
    serviceSpaces: "",
    serviceFee: "",
  });

  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({});
  const { loading, setLoading, userInfo, authToken } = useFirebase();
  const alert = useAlert();

  const navigate = useNavigate();
  const apoiDateRef = useRef();
  const doctorImageRef = useRef();
  const doctorUpdateImageRef = useRef();

  const URL = `${process.env.REACT_APP_URL}`;

  const ImageHostURL = `${process.env.REACT_IMAGE_HOSTING_URL}?key=${process.env.REACT_IMAGE_HOSTING_KEY}`;

  // ===================================
  // Dashboard Doctor Add Functionality
  // ===================================

  const handleDoctorsDataChange = (e) => {
    const { name, value } = e.target;
    setDoctorsData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleDoctorDataSubmit = async (e) => {
    e.preventDefault();
    const doctorImageFile = doctorImageRef.current.files[0];
    const formData = new FormData();
    formData.append("image", doctorImageFile);

    const res = await axios.post(ImageHostURL, formData);

    if (res.data.success) {
      const doctorAddData = {
        doctorName: doctorsData.doctorName,
        doctorCategory: doctorsData.doctorCategory,
        doctorProgram: doctorsData.doctorProgram,
        doctorImage: res.data.data.display_url,
      };

      const doctorsRes = await axios.post(`${URL}/doctors`, doctorAddData);
      if (doctorsRes.data.insertedId) {
        alert.show("Doctor Add Successful");
        setDoctorsData({
          doctorName: "",
          doctorCategory: "",
          doctorProgram: "",
        });
      }
    }
  };

  // =========================================
  // Dashboard Doctor Data Load Functionality
  // ===========================================
  useEffect(() => {
    axios.get(`${URL}/doctors`).then((res) => {
      setDoctors(res.data);
    });
  }, [URL]);

  // =========================================
  // Dashboard Doctor Edit Data Load Functionality
  // ===========================================

  const handleDoctorEdit = async (id) => {
    const doctorRes = await axios.get(`${URL}/doctors/${id}`);
    setDoctor(doctorRes.data);
  };

  // =========================================
  // Dashboard Doctor Update Functionality
  // ===========================================

  const handleDoctorsDataUpdateChange = (e) => {
    setDoctorsDataUpdate((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDoctorUpdate = async (e) => {
    e.preventDefault();
    const doctorImageFile = doctorUpdateImageRef.current.files[0];
    const formData = new FormData();
    formData.append("image", doctorImageFile);

    // if (doctorImageFile !== undefined) {
    //   const res = await axios.post(ImageHostURL, formData);
    //   if (res.data.success) {
    //     const doctorUpdateData = {
    //       doctorName: doctorsDataUpdate.doctorName || doctor.doctorName,
    //       doctorCategory:
    //         doctorsDataUpdate.doctorCategory || doctor.doctorCategory,
    //       doctorProgram:
    //         doctorsDataUpdate.doctorProgram || doctor.doctorProgram,
    //       doctorImage: res.data.data.display_url,
    //     };
    //     const doctorsRes = await axios.put(
    //       `${URL}/doctors/${id}`,
    //       doctorUpdateData
    //     );
    //     if (doctorsRes.data.matchedCount > 0) {
    //       alert.show("Doctor Update Successful");
    //     }
    //   }
    // }

    const doctorUpdateData = {
      doctorName: doctorsDataUpdate.doctorName || doctor.doctorName,
      doctorCategory: doctorsDataUpdate.doctorCategory || doctor.doctorCategory,
      doctorProgram: doctorsDataUpdate.doctorProgram || doctor.doctorProgram,
      doctorImage: doctor.doctorImage,
    };

    const doctorsRes = await axios.put(
      `${URL}/doctors/${id}`,
      doctorUpdateData
    );
    if (doctorsRes.data.matchedCount > 0) {
      alert.show("Doctor Update Successful");
    }
  };

  // =========================================
  // Dashboard Doctors Data Delete Functionality
  // ===========================================
  const handleDoctorDelete = async (id) => {
    const doctorRes = await axios.delete(`${URL}/doctors/${id}`);
    if (doctorRes.data.deletedCount > 0) {
      alert.show("Doctor Delete Successful");
      const remainingData = doctors.filter((item) => item._id !== id);
      setDoctors(remainingData);
    }
  };

  // =========================================
  // Dashboard Contact Add Functionality
  // ===========================================

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    const contactAddData = {
      contactEmail: contactData.contactEmail,
      contactSubject: contactData.contactSubject,
      contactMessage: contactData.contactMessage,
    };

    const res = await axios.post(`${URL}/contactUs`, contactAddData);

    if (res.data.insertedId) {
      alert.show("Submit Successful");
      setContactData({
        contactEmail: "",
        contactSubject: "",
        contactMessage: "",
      });
    }
  };

  // =========================================
  // Dashboard Contact Load Functionality
  // ===========================================
  useEffect(() => {
    axios.get(`${URL}/contactUs`).then((res) => {
      setContacts(res.data);
    });
  }, [URL]);

  // =========================================
  // Dashboard Contact View Load Functionality
  // ===========================================
  const handleViewContact = async (id) => {
    const res = await axios.get(`${URL}/contactUs/${id}`);
    setContact(res.data);
  };

  // =========================================
  // Dashboard Contact Delete Functionality
  // ===========================================
  const handleDeleteContact = async (id) => {
    const res = await axios.delete(`${URL}/contactUs/${id}`);
    if (res.data.deletedCount > 0) {
      alert.show("Contact Delete Successful");
      const remainingData = contacts.filter((item) => item._id !== id);
      setContacts(remainingData);
    }
  };

  // ===================================
  // Dashboard Service Add Functionality
  // ===================================

  const handleServicesDataChange = (e) => {
    const { name, value } = e.target;
    setServicesData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleServiceAdd = async (e) => {
    e.preventDefault();

    setLoading(true);

    const addService = {
      serviceTitle: servicesData.serviceTitle,
      serviceTime: servicesData.serviceTime,
      serviceSpaces: servicesData.serviceSpaces,
      serviceFee: servicesData.serviceFee,
    };

    const res = await axios
      .post(`${URL}/services`, addService)
      .finally(() => setLoading(false));
    if (res.data.insertedId) {
      alert.show("Service Add Successful");
      setServicesData({
        serviceTitle: "",
        serviceTime: "",
        serviceSpaces: "",
        serviceFee: "",
      });
    }
  };

  // =========================================
  // Dashboard Services Data Load Functionality
  // ===========================================
  useEffect(() => {
    axios.get(`${URL}/services`).then((res) => {
      setServices(res.data);
    });
  }, [URL]);

  // ======================================
  // Dashboard Service Delete Functionality
  // =======================================

  const handleServiceDelete = async (id) => {
    const res = await axios.delete(`${URL}/services/${id}`);
    if (res.data.deletedCount > 0) {
      alert.show("Service Delete Successful");
      const remainingData = services.filter((service) => service._id !== id);
      setServices(remainingData);
    }
  };

  // ===============================================
  // Dashboard Service Edit Data Load Functionality
  // ===============================================

  const handleEditService = async (id) => {
    const res = await axios.get(`${URL}/services/${id}`);
    setService(res.data);
  };

  // ======================================
  // Dashboard Service Update Functionality
  // =======================================

  const handleServicesDataUpdate = (e) => {
    const { name, value } = e.target;
    setServiceUpdateData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleServiceUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const serciceUpdateData = {
      serviceTitle: serviceUpdateData.serviceTitle || service.serviceTitle,
      serviceTime: serviceUpdateData.serviceTime || service.serviceTime,
      serviceSpaces: serviceUpdateData.serviceSpaces || service.serviceSpaces,
      serviceFee: serviceUpdateData.serviceFee || service.serviceFee,
    };

    const res = await axios
      .put(`${URL}/services/${id}`, serciceUpdateData)
      .finally(() => setLoading(false));
    if (res.data.matchedCount > 0) {
      alert.show("Service Update Successful");
      setServiceUpdateData({
        serviceTitle: "",
        serviceTime: "",
        serviceSpaces: "",
        serviceFee: "",
      });
    }
  };

  // ===================================
  // Appoinment Add Functionality
  // ===================================
  const [appointmentAddData, setAppointmentAddData] = useState({
    appoinmentName: "",
    appoinmentPhone: "",
  });

  const handleAppointmentDataChange = (e) => {
    const { name, value } = e.target;
    setAppointmentAddData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAppoinmentAddSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const appoinmentBookData = {
      appoinmentTitle: service.serviceTitle,
      appoinmentTime: service.serviceTime,
      appoinmentName: appointmentAddData.appoinmentName,
      email: userInfo.email,
      appoinmentPhone: appointmentAddData.appoinmentPhone,
      appoinmentBookingFee: service.serviceFee,
      appoinmentDate: apoiDateRef.current.value,
    };
    console.log(appoinmentBookData);
    const res = await axios
      .post(`${URL}/appoinments`, appoinmentBookData)
      .finally(() => setLoading(false));

    if (res.data.insertedId) {
      alert.show("Booking Successful");
      navigate(`/my-appoinment`);
    }

    setAppointmentAddData({
      appoinmentName: "",
      appoinmentPhone: "",
    });
  };

  // =============================================
  // Dashboard Appoinments Data Load Functionality
  // =============================================
  const myDate = new Date(appoDate).toISOString().slice(0, 10);

  useEffect(() => {
    fetch(
      `${URL}/appoinments?email=${userInfo.email}&appoinmentDate=${myDate}`,
      {
        headers: {
          authorization: `Bearer ${authToken}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setAppoinments(data));
  }, [URL, userInfo.email, myDate, authToken]);

  const adminDate = new Date(adminAppoDate).toISOString().slice(0, 10);

  useEffect(() => {
    axios
      .get(`${URL}/appoinments/admin?appoinmentDate=${adminDate}`)
      .then((res) => {
        setAppoinmentsAdmin(res.data.appoinmentAdmin);
        setAppoinmentTotal(res.data.countNumber);
        setTodayAppoinmentTotal(res.data.TodayCountNumber);
        setTotalVisited(res.data.visitedCount);
        setTotalPaidPayment(res.data.totalPaid);
      });
  }, [URL, adminDate]);

  // ==================================================
  // Dashboard Appoinment View Data Load Functionality
  // ====================================================

  const handleAppointmentView = async (id) => {
    const res = await axios.get(`${URL}/appoinments/${id}`);
    setAppoinment(res.data);
  };

  // ==================================================
  // Dashboard Appoinment Data Delete Functionality
  // ====================================================

  const handleDeleteAppoinment = async (id) => {
    const res = await axios.delete(`${URL}/appoinments/${id}`);
    if (res.data.deletedCount > 0) {
      alert.show("Appoinment Delete Successful");
      const remainingData = appoinments.filter(
        (appoinment) => appoinment._id !== id
      );
      setAppoinments(remainingData);
    }
  };

  // ==================================================
  // Dashboard Appoinment Data Action Functionality
  // ====================================================

  const handleAppoinmentAction = async (e) => {
    e.preventDefault();
    const appoinmentActionData = {
      appoinmentAction: appoinmentAction,
    };
    const res = await axios.put(
      `${URL}/appoinments/apoinmentAction/${idView}`,
      appoinmentActionData
    );
    if (res.data.modifiedCount > 0) {
      alert.show("Appoinment Action Successful");
    }
  };

  // ==================================================
  // Admin Create Functionality
  // ====================================================
  const handleMakeAdmin = (e) => {
    e.preventDefault();

    const user = { adminEmail };
    fetch(`${URL}/users/admin`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchedCount) {
          alert.show("Admin Create Successful");
          setAdminEmail(" ");
        }
      });
  };

  // ==================================================
  // Admin Load Functionality
  // ====================================================

  useEffect(() => {
    axios.get(`${URL}/users/${userInfo.email}`).then((res) => {
      setAdmin(res.data.admin);
    });
  }, [userInfo.email]);

  // ==================================================
  // Users Load Functionality
  // ====================================================
  useEffect(() => {
    axios.get(`${URL}/users`).then((res) => {
      setUsers(res.data);
    });
  }, [URL]);

  return {
    URL,
    isOpen,
    services,
    service,
    loading,
    date,
    appoDate,
    admin,
    appoinments,
    appoinment,
    alert,
    users,
    idView,
    doctors,
    apoiDateRef,
    appoinmentsAdmin,
    adminAppoDate,
    appoinmentAction,
    appoinmentTotal,
    todayAppoinmentTotal,
    totalVisited,
    totalPaidPayment,
    doctorsData,
    doctorImageRef,
    doctor,
    doctorsDataUpdate,
    doctorUpdateImageRef,
    contactData,
    contacts,
    contact,
    servicesData,
    serviceUpdateData,
    appointmentAddData,
    handleViewContact,
    navigate,
    setIsopen,
    handleServiceAdd,
    handleServiceDelete,
    setId,
    setDate,
    setAppoDate,
    setIdView,
    handleServiceUpdate,
    handleAppoinmentAddSubmit,
    handleDeleteAppoinment,
    setAdminEmail,
    handleMakeAdmin,
    setAdminAppoDate,
    setAppoinment,
    handleAppoinmentAction,
    setAppoinmentAction,
    handleDoctorsDataChange,
    handleDoctorDataSubmit,
    handleDoctorDelete,
    handleDoctorEdit,
    handleDoctorsDataUpdateChange,
    handleDoctorUpdate,
    handleContactChange,
    handleContactSubmit,
    handleDeleteContact,
    handleServicesDataChange,
    handleEditService,
    handleServicesDataUpdate,
    handleAppointmentDataChange,
    handleAppointmentView,
  };
};

export default useFunction;

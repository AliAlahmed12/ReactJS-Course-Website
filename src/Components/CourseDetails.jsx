import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CourseDetails = () =>{

    const location = useLocation()
    const program  = location.state;


    const dispatch = useDispatch();
  

  

  return (
    
    <div className="container w-100">
        <div className="row mt-5 d-flex justify-content-end">
            <div className="col-12 col-lg-9 d-flex align-items-center justify-content-end">
                <h3 className='arabicFont'><strong>{program.title}</strong></h3>
                <img src={program.image} className="p-2 ms-5" style={{ width: '80px' }} alt="" />
            </div>
        </div>

        <div className="row mt-5 d-flex justify-content-center">
            <div className="col-12 col-lg-4 mb-3">
                <div className="card">
                    <div className="card-body" id="background3">
                        <div className="row">
                            <div className="col text-center">{program.startDate}</div>
                            <div className="col text-end text-primary">
                                <p>
                                    <strong className='arabicFont'>:البداية</strong>
                                    <i className="bi bi-calendar4-week ms-1 text-primary-emphasis"></i>
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col text-center">{program.endDate}</div>
                            <div className="col text-end text-primary">
                                <p>
                                    <strong className='arabicFont'>:النهاية</strong>
                                    <i className="bi bi-calendar4-week ms-1 text-primary-emphasis"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-8 mb-3">
                <div className="card" id="background3">
                    <div className="card-body">
                        <div className="d-flex justify-content-around align-items-center">
                            <div className="d-flex align-items-center flex-nowrap">
                                <p style={{ whiteSpace: 'nowrap', margin: 0 }}>{program.time}</p>
                                <i className="bi bi-clock-fill ms-2 text-primary-emphasis" style={{ fontSize: '20px' }}></i>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <h5 style={{ margin: 0 }}>{program.duration}</h5>
                                <i className="bi bi-calendar ms-2 text-primary-emphasis" style={{ fontSize: '20px' }}></i>
                            </div>
                            <div className="d-flex align-items-center flex-nowrap">
                                <h5 style={{ margin: 0 }}>{program.location}</h5>
                                <i className="bi bi-geo-alt-fill ms-2 text-primary-emphasis" style={{ fontSize: '20px' }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-4 mt-3 mb-3">
                <div className="card">
                    <div className="card-body" id="background3">
                        <p className='text-end'>
                            <strong className='text-primary arabicFont'>:الفئة العمرية</strong>
                            <i className="bi bi-person ms-1 text-primary-emphasis"></i>
                        </p>
                        <div className='d-flex justify-content-end'>
                            <p className="">18 سنة فما فوق</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-8 text-end mb-3">
                <div className="card">
                    <div className="card-body" id="background3">
                        <div className="row">
                            <div className="col">
                                <h3 className='text-primary'>
                                    <strong className='arabicFont'>:الوصف
                                        <i className="bi bi-file-text text-primary-emphasis ms-1"></i>
                                    </strong>
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>{program.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="row d-flex justify-content-center">
            <div className="col-12 col-lg-4 mt-3 mb-3">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body" id="background3">
                                <p className='text-end'>
                                    <strong className='text-primary arabicFont'>:السعر</strong>
                                    <i className="bi bi-cash ms-1 text-primary-emphasis"></i>
                                </p>
                                <p className="text-end">{program.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col text-center d-grid gap-2">
                        <button className='btn btn-lg btn-success rounded-5 p-3'  id="btnCourses1" onClick={() => dispatch({ type: 'INCREMENT' })}>
                            <strong className='arabicFont'>بادر بالتسجيل</strong>
                        </button>
                    </div>
                </div>
            </div>

            <div className="col-12 col-lg-8 text-end mt-3 mb-3">
                <div className="card">
                    <div className="card-body" id="background3">
                        <div className="row">
                            <div className="col">
                                <h3 className='text-primary'>
                                    <strong className='arabicFont'>:الأسئلة الشائعة
                                        <i className="bi bi-question-octagon text-primary-emphasis ms-1"></i>
                                    </strong>
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h6><strong className='arabicFont'>هل توجد شهادة بعد انتهاء المعسكر / البرنامج؟</strong></h6>
                                <p>تقدم أكاديمية طويق معسكرات وبرامج بشهادات احترافية بالشراكة مع كبرى الجهات العالمية، بالإضافة إلى شهادات حضور لكافة المعسكرات والبرامج</p>
                                <h6><strong className='arabicFont'>هل يتم إشعاري بالقبول؟</strong></h6>
                                <p>يتم إشعارك بالقبول النهائي عبر البريد الإلكتروني قبل بدء المعسكر / البرنامج بفترة كافية</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* If the size for the secreen mobile will display this and remove the above one */}
        <div className="row mt-3">
                    <div className="col text-center d-grid gap-2">
                        <button className='btn btn-lg btn-success rounded-5 p-3' id="btnCourses2" onClick={() => dispatch({ type: 'INCREMENT' })}>
                            <strong className='arabicFont'>بادر بالتسجيل</strong>
                        </button>
                    </div>
                </div>
    </div>

  );

}


export default CourseDetails;
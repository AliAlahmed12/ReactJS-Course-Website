import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { chunk } from 'lodash';
import { useState } from 'react';
import '../index.css';

const Landing = () => {

    // const [isLoading, setLoading] = useState(true);

  
    // useEffect(() => {
    //     const timer = setTimeout(()=>{
    //         setLoading(false);
    //        }, 2000);

    //         return ()=> clearTimeout(timer);
    // });

        
  

    const programsData = [
        {
            id: 1,
            title: "React JS بناء وتطوير تطبيقات الويب باستخدام",
            price: "30 SAR",
            image: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
            location: "الاحساء",
            duration: "شهر",
            time: "16:00 - 18:00",
            startDate: "26-05-2024",
            endDate: "13-06-2024",
            description: "هذا الكورس سيعلمك كيفية إنشاء مواقع ويب تفاعلية. ستتعلم المفاهيم الأساسية لبناء تطبيقات ويب تتفاعل مع المستخدم. خلال الكورس، ستتعلم عن واجهة المستخدم والحالة والعناصر والوظائف. ستتعلم كيفية إدارة بيانات التطبيق والتواصل مع مصادر خارجية. بنهاية الكورس، ستكون قادرًا على إنشاء مواقع ويب تفاعلية باستخدام التقنيات الحديثة. ستكتسب مهارات في تصميم واجهات المستخدم وبناء تطبيقات قوية."
        },
        {
            id: 2,
            title: "Laravel بناء وتطوير تطبيقات الويب باستخدام",
            price: "50 SAR",
            image: "https://static-00.iconduck.com/assets.00/laravel-icon-1990x2048-xawylrh0.png",
            location: "الرياض",
            duration: "شهرين",
            time: "18:00 - 21:00",
            startDate: "14-06-2024",
            endDate: "14-07-2024",
            description: "هذا الكورس سيعلّم بناء مواقع ويب باستخدام إطار عمل برمجي. سيتضمن تعلم الأساسيات والمفاهيم المتقدمة. بنهاية الكورس ستتمكن من إنشاء مواقع ويب قوية وآمنة."
        },
        {
            id: 3,
            title: "AngularJS بناء وتطوير تطبيقات الويب باستخدام",
            price: "76 SAR",
            image: "https://cdn.freebiesupply.com/logos/large/2x/angular-icon-1-logo-png-transparent.png",
            location: "جده",
            duration: "شهر",
            time: "18:00 - 21:00",
            startDate: "18-06-2024",
            endDate: "18-07-2024",
            description: "يهدف البرنامج للتعرف على كيفية بناء تطبيقات الويب المتطورة والمتجاوبة التي توفر تجربة مستخدم جيدة، والتعرف على المفاهيم الحديثة في تطوير الويب."
        },
        {
            id: 4,
            title: "Containers إلى Linux التطوّر من أنظمة",
            price: "70 SAR",
            image: "https://www.pngall.com/wp-content/uploads/5/Linux-Logo-PNG-Download-Image.png",
            location: "الاحساء",
            duration: "شهر",
            time: "16:00 - 18:00",
            startDate: "23-07-2024",
            endDate: "23-08-2024",
            description: "لقاءات دورية في أبرز المجالات والتخصصات، من تقديم خبراء ومتخصصين وبالتعاون مع جهات رائدة ومتقدمة."
        },
        {
            id: 5,
            title: "Microsoft Azure أساسيات",
            price: "10 SAR",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png",
            location: "الاحساء",
            duration: "شهر",
            time: "16:00 - 18:00",
            startDate: "23-07-2024",
            endDate: "23-08-2024",
            description: "من خلال هذه الدورة، ستتعرف على المفاهيم السحابية، الخدمات الأساسية، ومميزات وأدوات الإدارة والحوكمة للحلول السحابية. كما ستتعلم كيفية إدارة الاشتراكات الخاصة بك، والهويات الآمنة، وإدارة البنية التحتية، وتكوين الشبكات الافتراضية، وإدارة حركة مرور الشبكة، وتنفيذ حلول التخزين. سيكون هذا الكورس مفيدًا بشكل خاص لأولئك الذين يرغبون في اكتساب المهارات اللازمة لإدارة وتكوين الحلول السحابية بشكل فعال."
        },
        {
            id: 6,
            title: "Django بناء مواقع الويب باستخدام",
            price: "45 SAR",
            image: "https://static.djangoproject.com/img/logos/django-logo-negative.png",
            location: "الرياض",
            duration: "شهرين",
            time: "15:00 - 17:00",
            startDate: "15-06-2024",
            endDate: "15-08-2024",
            description: "تعلم كيفية بناء مواقع الويب باستخدام إطار العمل Django. سيتضمن الكورس تعلم المفاهيم الأساسية والمتقدمة لإطار العمل."
        },
        {
            id: 7,
            title: "Vue.js بناء تطبيقات الويب باستخدام",
            price: "40 SAR",
            image: "https://vuejs.org/images/logo.png",
            location: "جده",
            duration: "شهر",
            time: "16:00 - 18:00",
            startDate: "01-07-2024",
            endDate: "01-08-2024",
            description: "تعلم كيفية بناء تطبيقات الويب التفاعلية باستخدام إطار العمل Vue.js. ستتعلم الأساسيات والمفاهيم المتقدمة لتطوير تطبيقات ويب متقدمة."
        },
        {
            id: 8,
            title: "JavaScript أساسيات برمجة",
            price: "30 SAR",
            image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            location: "الدمام",
            duration: "شهر",
            time: "09:00 - 11:00",
            startDate: "05-06-2024",
            endDate: "05-07-2024",
            description: "تعلم أساسيات برمجة JavaScript وكيفية استخدامها لتطوير تطبيقات ويب تفاعلية. ستتعلم كيفية التعامل مع الأحداث وإنشاء عناصر ديناميكية."
        },
        {
            id: 9, 
            title: "Kubernetes إدارة الحاويات باستخدام",
            price: "65 SAR",
            image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
            location: "الرياض",
            duration: "شهر",
            time: "11:00 - 13:00",
            startDate: "25-07-2024",
            endDate: "25-08-2024",
            description: "تعلم كيفية إدارة ونشر الحاويات باستخدام Kubernetes. ستتعلم كيفية إنشاء وتوسيع التطبيقات المتنقلة على مستوى واسع."
        },
        
       
    ];

    return (
        <div className="">
            {/*------------------------------------------------- Header Background -------------------------------------------------*/}
            <div className="d-flex flex-column justify-content-center w-100" id="background">
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <h1 id='h1Background' className='text-white mt-5 text-center' ><strong>تعلم تقنيات المستقبل</strong></h1>
                    </div>
                </div>

                <div className="row mt-5 d-flex justify-content-center arabicFont">
                    <div className="col-12 col-md-8 col-lg-6">
                        <p id='pBackground' className='text-black text-center'><strong>نرحب بكم في منصتنا التعليمية المتخصصة في تقديم الدورات التدريبية عالية الجودة. سواء كنت طالبًا جديدًا أو محترفًا ذو خبرة، فلدينا ما يناسب احتياجاتك التعليمية والمهنية</strong></p>
                    </div>
                </div>
                <div className="row mt-5 arabicFont" style={{ marginBottom: '50px' }}>
                    <div className="col text-center">
                        <button className='btn btn-primary px-5 rounded-5' id="headerBtn"><strong>ابدأ الان</strong></button>
                    </div>
                </div>
            </div>
            {/*------------------------------------------------- Header Background -------------------------------------------------*/}


            <div className="container">
                {/*----------------------------------------------- plus Information -----------------------------------------------*/}
                <div className="row d-flex justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6 d-flex justify-content-center">
                        <h5 className='text-center mt-5 arabicFont' id="pBackground">
                            Master Courses Plus تعلم من أكثر من 325 جامعة وشركة رائدة من خلال برنامج
                        </h5>
                    </div>
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col-4 col-sm-2 text-center"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/1cf37d98b6fd015d85b68f95a84163c4.svg?auto=format%2Ccompress&dpr=1&h=32" alt="" className='responsive-image img-fluid' /></div>
                        <div className="col-4 col-sm-2 text-center"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/d266099ac753c0c93d7d291257fee686.png?auto=format%2Ccompress&dpr=1&h=37" alt="" className='responsive-image img-fluid'/></div>
                        <div className="col-4 col-sm-2 text-center"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/49f6fc3123e17dd16361d5b70bc258a9.png?auto=format%2Ccompress&dpr=1&h=55" alt="" className='responsive-image img-fluid'/></div>
                        <div className="col-4 col-sm-2 text-center"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/80cdb2567bfa0103fbbfb573784d479c.png?auto=format%2Ccompress&dpr=1&h=32" alt="" className='responsive-image img-fluid'/></div>
                        <div className="col-4 col-sm-2 text-center"><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/25920b7c8bd5d2b415220fa76b7e9590.png?auto=format%2Ccompress&dpr=1&h=37" alt="" className='responsive-image img-fluid'/></div>
                    </div>
                </div>
                {/*----------------------------------------------- plus Information -----------------------------------------------*/}

                <hr style={{ marginBottom: '100px' }} />

                {/*-------------------------------------------------- Courses Carousel --------------------------------------------------*/}
                <h1 className='mt-5 arabicFont text-center' style={{ marginBottom: '50px' }}><strong>المعسكرات و البرامج</strong></h1>
                <div id="coursesCarousel" className="carousel slide" data-bs-ride="carousel" style={{ minHeight: '450px' }}>
                    <div className="carousel-inner">
                        {chunk(programsData, 4).map((col, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <div className="row mt-5 d-flex justify-content-center p-2">
                                    {col.map((program) => (
                                        <div key={program.id} className="col-12 col-md-5 d-flex justify-content-center mt-3">
                                            <Link to="/courses/details" className='text-decoration-none d-flex justify-content-center' state={program}>
                                                <div className="card w-75 border-2 shadow" id="hover">
                                                    <div className="card-body d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <p className="text-end">{program.title}</p>
                                                            <div className="d-flex justify-content-between mt-4">
                                                            <Link to="/courses/details" className="btn bg-primary btn-sm rounded text-white" state={program}>التفاصيل</Link>
                                                            <div className="badge bg-success">{program.price}</div>
                                                            </div>
                                                        </div>
                                                        <img src={program.image} alt="" className="w-25 ms-3" />
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#coursesCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#coursesCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className='d-flex justify-content-center mt-5'>
                    <Link to="/courses" className='btn btn-primary btn-lg'><strong className='arabicFont'>المزيد من المعسكرات والبرامج</strong></Link>
                </div>
                {/*-------------------------------------------------- Courses Carousel --------------------------------------------------*/}

                <hr className='mt-5' />
            </div>
            
            {/*-------------------------------------------------- Course Statistics --------------------------------------------------*/}
                <div className="row d-flex justify-content-around p-5" id="background3">
                    <h1 className='arabicFont text-center text-black'><strong>احصائيات الكورسات</strong></h1>
                    <div className="col-12 col-sm-6 col-md-3 mt-5">
                        <div className="card border-top-0 shadow-lg">
                            <div className="caad-body">
                                <i className="bi bi-rocket text-primary d-flex justify-content-center mt-4" style={{ fontSize: '80px' }}></i>
                                <h4 className='text-primary text-center mt-4'><strong>عدد المعسكرات والبرامج</strong></h4>
                                <h6 className='text-success text-center mt-4' style={{ marginBottom: '50px' }}><strong>1,042</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5">
                        <div className="card border-top-0 shadow-lg">
                            <div className="caad-body">
                                <i className="bi bi-person-circle text-primary d-flex justify-content-center mt-4" style={{ fontSize: '80px' }}></i>
                                <h4 className='text-primary text-center mt-4'><strong>عــدد الخريجين</strong></h4>
                                <h6 className='text-success text-center mt-4' style={{ marginBottom: '50px' }}><strong>15,000+</strong></h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5">
                        <div className="card border-top-0 shadow-lg">
                            <div className="caad-body">
                                <i className="bi bi-calendar2-check text-primary d-flex justify-content-center mt-4" style={{ fontSize: '80px' }}></i>
                                <h4 className='text-primary text-center mt-4'><strong>عدد المسجلين في البرامج</strong></h4>
                                <h6 className='text-success text-center mt-4' style={{ marginBottom: '50px' }}><strong>1,247,220</strong></h6>
                            </div>
                        </div>
                    </div>
                </div>
            {/*-------------------------------------------------- Course Statistics --------------------------------------------------*/}
                
        </div>
    );
};

export default Landing;

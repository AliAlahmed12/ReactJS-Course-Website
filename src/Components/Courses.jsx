import '../index.css';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { chunk } from 'lodash';


const Courses = () =>{



    useEffect(()=>(

        console.log('Welcome')
    ))

    const programsData = [
        {
            id: 2,
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
    


    return(
        
        <div className="container-fluid">

            <div className="row mt-5 d-flex justify-content-center">
                <div className="col-sm-8">
                    <div className="p-2 rounded" id="background2">
                        <div className="d-flex justify-content-between ">
                            <a href="" id="filterHover"><i className="bi bi-filter-circle-fill text-white ms-5" id="filter"></i></a>
                            <h2 className='arabicFont d-flex align-items-center text-white px-2'><strong id="h2Background">المعسكرات والبرامج</strong></h2>
                        </div>
                    </div>
                </div>
            </div>



           
            {chunk(programsData, 2).map((col, index) => (
                <div className="row mt-5" key={index}>
                {col.map((program) => (
                    <div className="col-sm-6 d-flex justify-content-center mt-2" key={program.id}>
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
            ))}



        </div>
    )
}



export default Courses;
import React, { useState } from 'react';

const banks = [
    {
        'samaCode': '55',
        'bankName': 'Banque Saudi Fransi',
        'nameEn': 'Banque Saudi Fransi',
        'nameAr': 'البنك السعودي الفرنسي',
    },
    {
        'name': 'Alrajhi Bank',
        'samaCode': '80',
        'nameEn': 'Alrajhi Bank',
        'nameAr': 'بنك الراجحي',
    },
    {
        'samaCode': '10',
        'bankName': 'National Commercial Bank',
        'nameEn': 'National Commertial Bank',
        'nameAr': 'البنك الأهلي التجاري',
    },
    {
        'samaCode': '45',
        'bankName': 'Saudi British Bank',
        'nameEn': 'SABB',
        'nameAr': 'ساب',
    },
    {
        'samaCode': '20',
        'bankName': 'Riyadh Bank',
        'nameEn': 'Riyad Bank',
        'nameAr': 'بنك الرياض',
    },
    {
        'samaCode': '40',
        'bankName': 'Saudi American Bank',
        'nameEn': 'SAMBA',
        'nameAr': 'سامبا',
    },
    {
        'samaCode': '05',
        'bankName': 'Alinma Bank',
        'nameEn': 'AL Inma Bank',
        'nameAr': 'بنك الانماء',
    },
    {
        'samaCode': '50',
        'bankName': 'Alawwal bank',
        'nameEn': 'AlAwwal Bank',
        'nameAr': 'البنك الأول',
    },
    {
        'samaCode': '60',
        'bankName': 'Bank AlJazira',
        'nameEn': 'Bank Aljazerah',
        'nameAr': 'بنك الجزيرة',
    },
    {
        'samaCode': '65',
        'bankName': 'Saudi Investment Bank',
        'nameEn': 'Saudi Investment Bank',
        'nameAr': 'البنك السعودي للأستثمار',
    },
    {
        'samaCode': '15',
        'bankName': 'Bank AlBilad ',
        'nameEn': 'BANK ALBELAD',
        'nameAr': 'بنك البلاد',
    },
    {
        'samaCode': '30',
        'bankName': 'Arab National Bank',
        'nameEn': 'Arab National Bank',
        'nameAr': 'البنك العربي الوطني',
    },
    {
        'samaCode': '90',
        'bankName': 'GULF Bank',
        'sarieCode': 'GULFSARI',
        'nameEn': 'Gulf International Bank',
        'nameAr': 'بنك الخليج',
    },
    {
        'samaCode': '95',
        'bankName': 'Emirates Bank',
        'nameEn': 'EMARITE BANK',
        'nameAr': 'بنك الامارات',
    },
    {
        'samaCode': '76',
        'bankName': 'Bank Muscat',
        'nameEn': 'Bank Muscat',
        'nameAr': 'بنك مسقط',
    },
    {
        'samaCode': '71',
        'bankName': 'National Bank of Bahrain',
        'nameEn': 'National Bank Of Bahrain',
        'nameAr': 'بنك البحرين الوطني',
    },
    {
        'samaCode': '75',
        'bankName': 'National Bank of Kuwait',
        'nameEn': 'National Bank of Kuwait',
        'nameAr': 'بنك الكويت الوطني',
    },
    {
        'samaCode': '85',
        'bankName': 'BNP Paribas Bank',
        'nameEn': 'BNP PARIBAS SAUDI ARABIA',
        'nameAr': 'بي ان بي باريبوس',
    },
];

const First = () => {
    const [iban, setIban] = useState('');
    const [isValid, setIsValid] = useState(null);
    const [bankName, setBankName] = useState('');

    const validateIban = (input) => {
        const trimmedIban = input.trim();

        if (trimmedIban.length !== 24) {
            setIsValid(false);
            setBankName('');
            return;
        }

        if (!trimmedIban.startsWith('SA')) {
            setIsValid(false);
            setBankName('');
            return;
        }

        const samaCode = trimmedIban.substring(4, 6);
        const bank = banks.find((b) => b.samaCode === samaCode);

        if (bank) {
            setIsValid(true);
            setBankName(bank.nameAr);
        } else {
            setIsValid(false);
            setBankName('');
        }
    };

    const handleChange = (e) => {
        const newIban = e.target.value;
        setIban(newIban);
        validateIban(newIban);
    };

    return (
      <body className='bg-primary d-flex justify-content-center align-items-center' style={{height: '500px'}}>
        <div className="container">
            <div className='row d-flex justify-content-center mt-5'>

              <div className="col-sm-3 text-white"><strong>Iban Checker</strong></div>

              <div className="col-sm-3 text-end">
                {isValid === false && <p className="text-danger"><strong>خطأ في الايبان</strong></p>}
                {isValid === true && <p className="text-success text-white"><strong>{bankName}</strong></p>}
              </div>

            </div>

            <div className='row d-flex justify-content-center'>
                <div className='col-sm-6'>
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                              <div className="col">
                                <p>{iban}</p>
                              </div>

                              <div className="col text-end">
                                {isValid === true && <p><i class="bi bi-check-circle text-success" style={{fontSize: '30px'}}></i></p>}
                                {isValid === false && <p><i class="bi bi-x-circle text-danger" style={{fontSize: '30px'}}></i></p>}
                              </div>
                            </div>
                            <input type="text" className='rounded border-dark w-100' onChange={handleChange}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row d-flex justify-content-center'>
              <div className="col-sm-3 text-white">Saudi Arabia Ibans</div>
              <div className="col-sm-3 text-end text-white">s</div>
            </div>
        </div>
      </body>
        
    );
};

export default First;

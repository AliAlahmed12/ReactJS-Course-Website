import { useState } from 'react';

const MenueFood = () => {

    const [total, setTotal] = useState(0);
  
  const datamenu=[
    {
      img:"https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?t=st=1714213671~exp=1714217271~hmac=d6ff108916c006dda6cc2e21999f8274d6e9abe8e22b4404c8ad77f30e7329e8&w=740",
      name:"شاورما",
      price:30
    },
    {
      img:"https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?t=st=1714213943~exp=1714217543~hmac=9d06ce2d4fdfdf3788ff3e5cae72d904b9003e64a6971c59c05783a680bc2978&w=740",
      name:"هامبرجر",
      price:15
    },
    {
      img:"https://img.freepik.com/premium-psd/psd-saudi-food-kabsa-isolated-without-background_867452-12773.jpg?w=740",
      name:"برياني باللحم",
      price:13
    },
  ];

  const SetTotal = (Val, event) => {

    let checked = event.target.checked;

    if(checked)
    {
        setTotal(total + Val);

    } else{
        setTotal(total - Val);
    }
  }

  


  return (

    <div className="container">
        <div className="row mt-5 d-flex justify-content-center">
            <div className="col-sm-8">
                <div className="card">
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h1 className='alert bg-danger'>قائمة الطعام</h1> 
                            <h1>{total}</h1>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col"></div>
                            <div className="col">الاسم</div>
                            <div className="col">السعر</div>
                        </div>

                        {
                            datamenu.map((item) =>(
                                <div className="row mt-4">
                                    <div className="col">
                                        <img src={item.img} height='70px'></img>
                                    </div>

                                    <div className="col">
                                        <p>{item.name}</p>
                                    </div>

                                    <div className="col">
                                        <div className='d-flex justify-content-center align-items-center'>
                                        <p>{item.price}</p>
                                        <input type="checkbox" onChange={(event) => SetTotal(item.price, event)}/>
                                        </div>
                                    </div>
                                    <hr />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
};

export default MenueFood;
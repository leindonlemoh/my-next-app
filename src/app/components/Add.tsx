import React,{useState,useEffect} from 'react'
import axiosInstance from '@/lib/axiosInstance';

import Form from './StudioForm';
const Add = () => {
    const [studio, setStudio] = useState({
	business_type: "",
    name: "",
    address: "",
    country: "",
    currency_symbol: "",
    status: 0,
  });


  const onFormSubmit = (e:any ) => {
    e.preventDefault();
    console.log('cliic')

axiosInstance
      .post("/studios/register", studio)
      .then((res:any) => {
alert('Submitted')
      })
      .catch((err:any) => {
        console.log(err);

      });
  };

  return (
    <div>
     

<Form content={studio} from={'add'} button={onFormSubmit} stateChange={setStudio}/>
    
	</div>
  )
}

export default Add
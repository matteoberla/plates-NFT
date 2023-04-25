import { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown';
import IlB41 from './il-backgrounds/ilb41.js';
import IlB42 from './il-backgrounds/ilb42.js';
import IlB43 from './il-backgrounds/ilb43.js';
import IlB44 from './il-backgrounds/ilb44.js';
import IlB45 from './il-backgrounds/ilb45.js';
import IlB46 from './il-backgrounds/ilb46.js';
import IlB47 from './il-backgrounds/ilb47.js';
import IlB48 from './il-backgrounds/ilb48.js';
import IlB49 from './il-backgrounds/ilb49.js';
import IlB1601 from './il-backgrounds/ilb1601.js';
import IlB1602 from './il-backgrounds/ilb1602.js';
import IlB1603 from './il-backgrounds/ilb1603.js';
import IlB1604 from './il-backgrounds/ilb1604.js';
import IlB1605 from './il-backgrounds/ilb1605.js';
import IlB1606 from './il-backgrounds/ilb1606.js';

const Il = (props) => {


  const options = [
    { value: '41', label: '123 4567'},
    { value: '42', label: 'A12 3456'},
    { value: '43', label: 'ABC 123'},
    { value: '44', label: 'Vanity Plates'},
    { value: '45', label: 'Antique Vehicle'},
    { value: '46', label: 'B-Truck'},
    { value: '47', label: 'AB 12345'},
    { value: '48', label: 'AB1 2345'},
    { value: '49', label: 'Apportioned (P123456)'},
    { value: '1601', label: 'AB 1234'},
    { value: '1602', label: '123 456'},
    { value: '1603', label: 'Specialty plates'},
    { value: '1604', label: 'C-Truck (123 456)'},
    { value: '1605', label: 'Dealer'},
    { value: '1606', label: 'Vehicles for disabled persons (123 456)'},
  ];

    const defaultOption = options[0].label;
    const defaultValue = options[0].value;

    const [back, setBack] = useState(defaultOption);
    const [backVal, setBackVal] = useState(defaultValue);

    const pull_data = (data) => {
      //console.log("fon: " + data + ", ctype: " + backVal);
      props.func(data, backVal);
    }

    const components = {
      '41':<IlB41 func={pull_data}/>,
      '42':<IlB42 func={pull_data}/>,
      '43':<IlB43 func={pull_data}/>,
      '44':<IlB44 func={pull_data}/>,
      '45':<IlB45 func={pull_data}/>,
      '46':<IlB46 func={pull_data}/>,
      '47':<IlB47 func={pull_data}/>,
      '48':<IlB48 func={pull_data}/>,
      '49':<IlB49 func={pull_data}/>,
      '1601':<IlB1601 func={pull_data}/>,
      '1602':<IlB1602 func={pull_data}/>,
      '1603':<IlB1603 func={pull_data}/>,
      '1604':<IlB1604 func={pull_data}/>,
      '1605':<IlB1605 func={pull_data}/>,
      '1606':<IlB1606 func={pull_data}/>,
    }


    return (
      <div>
        <Dropdown options={options} onChange={(e) => {setBack(e.label);setBackVal(e.value);}} value={back} placeholder="Background" />
        <br/>
        {components[backVal]}
      </div>

    )
}

export default Il;

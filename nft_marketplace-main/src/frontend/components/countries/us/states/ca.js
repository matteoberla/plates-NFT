import { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown';
import CaB1 from './ca-backgrounds/cab1.js';
import CaB2 from './ca-backgrounds/cab2.js';
import CaB3 from './ca-backgrounds/cab3.js';
import CaB4 from './ca-backgrounds/cab4.js';
import CaB5 from './ca-backgrounds/cab5.js';
import CaB6 from './ca-backgrounds/cab6.js';
import CaB7 from './ca-backgrounds/cab7.js';
import CaB8 from './ca-backgrounds/cab8.js';
import CaB9 from './ca-backgrounds/cab9.js';
import CaB10 from './ca-backgrounds/cab10.js';
import CaB1001 from './ca-backgrounds/cab1001.js';
import CaB1002 from './ca-backgrounds/cab1002.js';
import CaB1003 from './ca-backgrounds/cab1003.js';
import CaB1004 from './ca-backgrounds/cab1004.js';
import CaB1005 from './ca-backgrounds/cab1005.js';

const Ca = (props) => {


  const options = [
      { value: '1', label: 'Passenger Car (AAA 000)'},
      { value: '2', label: 'Passenger Car (000 AAA)'},
      { value: '3', label: 'Passenger Car (0AAA000)'},
      { value: '4', label: 'Vanity Plates'},
      { value: '5', label: 'Commercial vehicles (00000A0)'},
      { value: '6', label: 'Commercial vehicles (0A00000)'},
      { value: '7', label: 'Commercial vehicles (A 11 111)'},
      { value: '8', label: 'Commercial vehicles (11 111 A)'},
      { value: '9', label: 'Legacy plates (A111A1)'},
      { value: '10', label: 'Vehicles for disabled persons (DP XXXXX / XXXXX DP)'},
      { value: '1001', label: 'Exempt (1234567)'},
      { value: '1002', label: 'Apportioned (AB12345)'},
      { value: '1003', label: '1956 year system (AAA 000)'},
      { value: '1004', label: 'Historical (000A)'},
      { value: '1005', label: 'DLR/DST/MFG (12345 XXX)'}
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
      '1':<CaB1 func={pull_data}/>,
      '2':<CaB2 func={pull_data}/>,
      '3':<CaB3 func={pull_data}/>,
      '4':<CaB4 func={pull_data}/>,
      '5':<CaB5 func={pull_data}/>,
      '6':<CaB6 func={pull_data}/>,
      '7':<CaB7 func={pull_data}/>,
      '8':<CaB8 func={pull_data}/>,
      '9':<CaB9 func={pull_data}/>,
      '10':<CaB10 func={pull_data}/>,
      '1001':<CaB1001 func={pull_data}/>,
      '1002':<CaB1002 func={pull_data}/>,
      '1003':<CaB1003 func={pull_data}/>,
      '1004':<CaB1004 func={pull_data}/>,
      '1005':<CaB1005 func={pull_data}/>
    }


    return (
      <div>
        <Dropdown options={options} onChange={(e) => {setBack(e.label);setBackVal(e.value);}} value={back} placeholder="Background" />
        <br/>
        {components[backVal]}
      </div>

    )
}

export default Ca;

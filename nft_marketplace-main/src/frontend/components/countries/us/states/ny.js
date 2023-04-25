import { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown';
import NyB21 from './ny-backgrounds/nyb21.js';
import NyB22 from './ny-backgrounds/nyb22.js';
import NyB23 from './ny-backgrounds/nyb23.js';
import NyB24 from './ny-backgrounds/nyb24.js';
import NyB25 from './ny-backgrounds/nyb25.js';
import NyB26 from './ny-backgrounds/nyb26.js';
import NyB27 from './ny-backgrounds/nyb27.js';
import NyB28 from './ny-backgrounds/nyb28.js';
import NyB29 from './ny-backgrounds/nyb29.js';
import NyB30 from './ny-backgrounds/nyb30.js';
import NyB1501 from './ny-backgrounds/nyb1501.js';
import NyB1502 from './ny-backgrounds/nyb1502.js';
import NyB1503 from './ny-backgrounds/nyb1503.js';
import NyB1504 from './ny-backgrounds/nyb1504.js';
import NyB1505 from './ny-backgrounds/nyb1505.js';
import NyB1506 from './ny-backgrounds/nyb1506.js';
import NyB1507 from './ny-backgrounds/nyb1507.js';

const Ny = (props) => {


  const options = [
    { value: '21', label: 'ААА-0000'},
    { value: '22', label: 'ААА 000'},
    { value: '23', label: '0АА 000'},
    { value: '24', label: 'А0А 000'},
    { value: '25', label: 'А00 0АА'},
    { value: '26', label: 'АА0 00А'},
    { value: '27', label: 'Vanity Plates'},
    { value: '28', label: 'Apportioned (12345-PA)'},
    { value: '29', label: 'Commercial vehicles (12345-AB)'},
    { value: '30', label: 'Vehicles for disabled persons (123456)'},
    { value: '1501', label: 'Dealer (1234567)'},
    { value: '1502', label: 'T&LC (T123456C)'},
    { value: '1503', label: 'Historical (HX-12345)'},
    { value: '1504', label: 'Official (A-12345)'},
    { value: '1505', label: 'Taxi (1A11a)'},
    { value: '1506', label: 'Specialty plates'},
    { value: '1507', label: 'Buses (12345-BB)'},
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
      '21':<NyB21 func={pull_data}/>,
      '22':<NyB22 func={pull_data}/>,
      '23':<NyB23 func={pull_data}/>,
      '24':<NyB24 func={pull_data}/>,
      '25':<NyB25 func={pull_data}/>,
      '26':<NyB26 func={pull_data}/>,
      '27':<NyB27 func={pull_data}/>,
      '28':<NyB28 func={pull_data}/>,
      '29':<NyB29 func={pull_data}/>,
      '30':<NyB30 func={pull_data}/>,
      '1501':<NyB1501 func={pull_data}/>,
      '1502':<NyB1502 func={pull_data}/>,
      '1503':<NyB1503 func={pull_data}/>,
      '1504':<NyB1504 func={pull_data}/>,
      '1505':<NyB1505 func={pull_data}/>,
      '1506':<NyB1506 func={pull_data}/>,
      '1507':<NyB1507 func={pull_data}/>
    }


    return (
      <div>
        <Dropdown options={options} onChange={(e) => {setBack(e.label);setBackVal(e.value);}} value={back} placeholder="Background" />
        <br/>
        {components[backVal]}
      </div>

    )
}

export default Ny;

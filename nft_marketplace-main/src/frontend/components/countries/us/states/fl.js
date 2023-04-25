import { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown';
import FlB31 from './fl-backgrounds/flb31.js';
import FlB32 from './fl-backgrounds/flb32.js';
import FlB33 from './fl-backgrounds/flb33.js';
import FlB34 from './fl-backgrounds/flb34.js';
import FlB35 from './fl-backgrounds/flb35.js';
import FlB36 from './fl-backgrounds/flb36.js';
import FlB37 from './fl-backgrounds/flb37.js';
import FlB38 from './fl-backgrounds/flb38.js';
import FlB39 from './fl-backgrounds/flb39.js';
import FlB1201 from './fl-backgrounds/flb1201.js';
import FlB1202 from './fl-backgrounds/flb1202.js';
import FlB1203 from './fl-backgrounds/flb1203.js';
import FlB1204 from './fl-backgrounds/flb1204.js';
import FlB1205 from './fl-backgrounds/flb1205.js';
import FlB1206 from './fl-backgrounds/flb1206.js';
import FlB1207 from './fl-backgrounds/flb1207.js';

const Fl = (props) => {


  const options = [
    { value: '31', label: '000 ААА'},
    { value: '32', label: 'ААА А00'},
    { value: '33', label: 'А00 0АА'},
    { value: '34', label: '000 0АА'},
    { value: '35', label: 'А00 ААА'},
    { value: '36', label: 'Vanity Plates'},
    { value: '37', label: 'ААА 00A'},
    { value: '38', label: 'Dealer (AA0 00A)'},
    { value: '39', label: 'А00 00A'},
    { value: '1201', label: 'Antique (XXX 123)'},
    { value: '1202', label: 'Apportioned (A12 34B)'},
    { value: '1203', label: 'AA0 0AA'},
    { value: '1204', label: '000 00A'},
    { value: '1205', label: '00A AAA'},
    { value: '1206', label: 'Manufacturer (A0 000)'},
    { value: '1207', label: 'Veteran'},
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
      '31':<FlB31 func={pull_data}/>,
      '32':<FlB32 func={pull_data}/>,
      '33':<FlB33 func={pull_data}/>,
      '34':<FlB34 func={pull_data}/>,
      '35':<FlB35 func={pull_data}/>,
      '36':<FlB36 func={pull_data}/>,
      '37':<FlB37 func={pull_data}/>,
      '38':<FlB38 func={pull_data}/>,
      '39':<FlB39 func={pull_data}/>,
      '1201':<FlB1201 func={pull_data}/>,
      '1202':<FlB1202 func={pull_data}/>,
      '1203':<FlB1203 func={pull_data}/>,
      '1204':<FlB1204 func={pull_data}/>,
      '1205':<FlB1205 func={pull_data}/>,
      '1206':<FlB1206 func={pull_data}/>,
      '1207':<FlB1207 func={pull_data}/>
    }


    return (
      <div>
        <Dropdown options={options} onChange={(e) => {setBack(e.label);setBackVal(e.value);}} value={back} placeholder="Background" />
        <br/>
        {components[backVal]}
      </div>

    )
}

export default Fl;

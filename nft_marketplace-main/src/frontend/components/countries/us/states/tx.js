import { useState, useEffect } from 'react'
import Dropdown from 'react-dropdown';
import TxB11 from './tx-backgrounds/txb11.js';
import TxB12 from './tx-backgrounds/txb12.js';
import TxB13 from './tx-backgrounds/txb13.js';
import TxB14 from './tx-backgrounds/txb14.js';
import TxB15 from './tx-backgrounds/txb15.js';
import TxB16 from './tx-backgrounds/txb16.js';
import TxB17 from './tx-backgrounds/txb17.js';
import TxB18 from './tx-backgrounds/txb18.js';
import TxB19 from './tx-backgrounds/txb19.js';
import TxB20 from './tx-backgrounds/txb20.js';
import TxB1101 from './tx-backgrounds/txb1101.js';
import TxB1102 from './tx-backgrounds/txb1102.js';
import TxB1103 from './tx-backgrounds/txb1103.js';
import TxB1104 from './tx-backgrounds/txb1104.js';


const Tx = (props) => {


  const options = [
    { value: '11', label: 'Regular plates (2012) (ААА-0000)'},
    { value: '12', label: 'Apportioned vehicles (2012) (A00-0000)'},
    { value: '13', label: 'Combination (2012) (0A0-0000)'},
    { value: '14', label: 'Regular plates (2009) (АА0-А000)'},
    { value: '15', label: 'Trucks (2010) (АА0-0000)'},
    { value: '16', label: '2007 year system (ААА-000)'},
    { value: '17', label: '2004 year system (А00-ААА)'},
    { value: '18', label: '2004 year system (000-ААА)'},
    { value: '19', label: 'Vanity Plates'},
    { value: '20', label: 'Antique Vehicle'},
    { value: '1101', label: '111-1111 (Exempt)'},
    { value: '1102', label: 'Trucks (0AA-А00)'},
    { value: '1103', label: 'Trucks (00A-АА0)'},
    { value: '1104', label: 'Trucks (000-0АА)'}
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
      '11':<TxB11 func={pull_data}/>,
      '12':<TxB12 func={pull_data}/>,
      '13':<TxB13 func={pull_data}/>,
      '14':<TxB14 func={pull_data}/>,
      '15':<TxB15 func={pull_data}/>,
      '16':<TxB16 func={pull_data}/>,
      '17':<TxB17 func={pull_data}/>,
      '18':<TxB18 func={pull_data}/>,
      '19':<TxB19 func={pull_data}/>,
      '20':<TxB20 func={pull_data}/>,
      '1101':<TxB1101 func={pull_data}/>,
      '1102':<TxB1102 func={pull_data}/>,
      '1103':<TxB1103 func={pull_data}/>,
      '1104':<TxB1104 func={pull_data}/>,

    }


    return (
      <div>
        <Dropdown options={options} onChange={(e) => {setBack(e.label);setBackVal(e.value);}} value={back} placeholder="Background" />
        <br/>
        {components[backVal]}
      </div>

    )
}

export default Tx;

import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { create as ipfsHttpClient, urlSource  } from 'ipfs-http-client'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const options = [
  { value: '1', label: 'Cars'},
  { value: '16', label: 'Public transport'},
  { value: '2', label: 'Trailers'},
  { value: '3', label: 'Special vehicles'},
  { value: '4', label: 'Motorcycles'},
  { value: '14', label: 'ATV and snowmobiles'},
  { value: '5', label: 'Military cars'},
  { value: '6', label: 'Military trailers'},
  { value: '7', label: 'Special military vehicles'},
  { value: '8', label: 'Military motorcycles'},
  { value: '12', label: 'Foreign citizens and enterprises'},
  { value: '15', label: 'Transit plates'},
  { value: '19', label: 'Export transit plates'},
  { value: '17', label: 'Paper transit plates'},
  { value: '10', label: 'Special Vehicles Transits'},
  { value: '13', label: 'Military Transits'},
  { value: '20', label: 'Police cars'},
  { value: '21', label: 'Police trailers'},
  { value: '22', label: 'Police motorcycles'},
  { value: '9', label: 'Diplomatic'},
  { value: '33', label: 'Diplomatic motorcycles'},
];


let defaultOption = options[0].value;

const Ru = () => {
  const [loading, setLoading] = useState(true)
  const [ctype, setCtype] = useState(defaultOption)

  const [plate, setPlate] = useState('')
  const [imageUrl, setImage] = useState('')

  const updateIndex = (labelToFind) => {
    let indexOflabel = options.findIndex(i => i.label == labelToFind);
    let ctypeSelected = options[indexOflabel].value;
    console.log(ctypeSelected);
    setCtype(ctypeSelected);
    return labelToFind;
  }

  const generateNFT = async () => {
    if (!ctype || !plate) return
    try{
      console.log("plate:" + plate + ", ctype: " + ctype);
      var url = 'http://platesmania.com/mobile/api_inf.php?key=Kn4D23xCa&gal=1&ctype=' + ctype + '&nomer=' + plate;
      //console.log(url);
      fetch(url).then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        var fileUrl = response.text();
        return fileUrl

      }).then(async function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.

        try{
          console.log("url:" + data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
          setImage(data);
          //const res = await client.add(urlSource(data));
          //console.log(res);
        } catch(error){
          console.log(error);
        }
        // generateFile(data,'test').then(file => {
        //     return file;
        // });

      });

      //const result = await client.add(JSON.stringify({image, price, name, description}))

    } catch(error) {
      console.log("ipfs uri upload error: ", error)
    }
  }


  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Loading...</h2>
    </main>
  )
  return (
    <div className="flex justify-center">
        <div className="px-5 container">
          <main style={{ padding: "1rem 0" }}>
            <h2>Generate your plate</h2>
          </main>
          <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
            <div className="content mx-auto">
              <Row className="g-4">
                <Col><Dropdown options={options} onChange={(e) => {setCtype(e.value);}} value={ctype} placeholder="State" /></Col>
                <Col><Form.Control onChange={(e) => setPlate(e.target.value.toLowerCase())} size="lg" required type="text" placeholder="Plate" maxLength='10' /></Col>

                <div className="row margin-bottom-20">
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/tip_1.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Cars"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/tip_2.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Trailers"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/tip_4.png")} style={{"pointerEvents": "all"}}onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Special vehicles"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/tip_3.png")} style={{"pointerEvents": "all"}}onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Motorcycles"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/tip_15.png")} style={{"pointerEvents": "all"}}onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Transit plates"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/tip_16.png")}  style={{"pointerEvents": "all"}}onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Public transport"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/tip_19.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Export transit plates"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/dip.png")}  style={{"pointerEvents": "all"}}onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Diplomatic"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/mil_5.png")}style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Military cars"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/mil_6.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Military trailers"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/mil_7.png")}style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Special military vehicles"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/mil_8.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Military motorcycles"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/police_20.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Police cars"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/police_21.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Police trailers"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/police_22.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Police motorcycles"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/tip_12.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Foreign citizens and enterprises"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/ru_tip17.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Paper transit plates"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/ru_tip10.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Special Vehicles Transits"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/ru_tip13.png")}style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Military Transits"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/ru_tip14.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="ATV and snowmobiles"/></div>
                	<div className="col-xs-4 col-sm-2"><img src={ require("./img_new/ru_tip33.png")} style={{"pointerEvents": "all"}} onClick={(e) => {updateIndex(e.target.dataset.originalTitle);}} onMouseOver={(e) => {e.target.title = e.target.dataset.originalTitle;}} width="130" height="90" data-toggle="tooltip" data-original-title="Diplomatic motorcycles"/></div>
                </div>

                <div className="d-grid px-0">
                  <Button onClick={generateNFT} variant="primary" size="lg">
                    Generate!
                  </Button>
                  <br/>

                  { imageUrl !== '' && imageUrl !== '0' ?
                    <img src={imageUrl}/>

                    :
                    <h1>nothing</h1>
                  }
                  <br/>
                </div>
              </Row>
            </div>
          </main>

        </div>
    </div>
  );
}
export default Ru;

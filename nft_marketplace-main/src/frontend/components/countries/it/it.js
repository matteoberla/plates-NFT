import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button, Form } from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { create as ipfsHttpClient, urlSource  } from 'ipfs-http-client'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const options = [
  { value: '1', label: 'Cars (1994 year series)'},
  { value: '2', label: 'Motorcycles (1994 year series)'},
  { value: '3', label: 'Trailers (1994 year series)'},
  { value: '4', label: 'Temporary'},
  { value: '5', label: 'Cars (1927 year series)'},
  { value: '6', label: 'Motorcycles (1927 year series)'},
  { value: '7', label: 'Trailers (1927 year series)'},
  { value: '8', label: 'Specialty plates'},
  { value: '9', label: 'Diplomatic'},
];

const backgrounds = [
  { value: '3', label: 'Single-row plate with euroband (back)'},
  { value: '9', label: 'Single-row plate with euroband (front)'},
  { value: '4', label: 'Two-row plate with euroband'},
  { value: '1', label: 'Single-row plate without euroband (back)'},
  { value: '10', label: 'Single-row plate without euroband (front)'},
  { value: '2', label: 'Two-row plate without euroband'},
];


let defaultOption = options[0].value;
let defaultBg = backgrounds[0].value;

const It = () => {
  const [loading, setLoading] = useState(true)
  const [ctype, setCtype] = useState(defaultOption)
  const [fon, setFon] = useState(defaultOption)

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
      console.log("plate:" + plate + ", ctype: " + ctype + ", fon: " + fon );
      var url = 'http://platesmania.com/mobile/api_inf.php?key=Kn4D23xCa&gal=10&ctype=' + ctype + '&nomer=' + plate + '&fon=' + fon;
      console.log(url);
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
              <Row className="g-4">
              <Col>
              <Dropdown options={options} onChange={(e) => {setCtype(e.value);}} value={ctype} placeholder="State" />
              </Col>
              <Col>
              <Dropdown options={backgrounds} onChange={(e) => {setFon(e.value);}} value={fon} placeholder="Background" />
              </Col>
              </Row>

                <Col><Form.Control onChange={(e) => setPlate(e.target.value.toUpperCase())} size="lg" required type="text" placeholder="Plate" maxLength='10' /></Col>



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
export default It;

import { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Button, Form, Spinner, Alert } from 'react-bootstrap'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Ca from './states/ca.js';
import Tx from './states/tx.js';
import Il from './states/il.js';
import Ny from './states/ny.js';
import Fl from './states/fl.js';
import { create, urlSource } from 'ipfs-http-client'
import { Buffer } from "buffer";

const ipfsClient = require('ipfs-http-client');
const projectId = '2DcJ9WTcJzdwvSTA9NyZRcffLlJ';
const projectSecret = '46a7720699ce8a74f6ab419d747885ef';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = ipfsClient.create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});


const countryCode = "US";

const options = [
  { value: 'ca', label: 'California'},
  { value: 'tx', label: 'Texas'},
  { value: 'il', label: 'Illinoise'},
  { value: 'ny', label: 'New York'},
  { value: 'fl', label: 'Florida'}
];

var fonNum = '';
var ctypeNum = '';

const pull_data = (fon, type) => {
  console.log("fon: " + fon + ", ctype: " + type);
  fonNum = "1" + fon;
  ctypeNum = type;
}

const components = {
  'ca':<Ca func={pull_data}/>,
  'tx':<Tx func={pull_data}/>,
  'il':<Il func={pull_data}/>,
  'ny':<Ny func={pull_data}/>,
  'fl':<Fl func={pull_data}/>,
}
const defaultOption = options[0].label;
const defaultValue = options[0].value;

const Us = ({ nft }) => {
  const [loading, setLoading] = useState(true)
  const [previewLoading, setPreviewLoading] = useState(false)
  const [mintLoading, setMintLoading] = useState(false)
  const [state, setState] = useState(defaultOption)
  const [stateVal, setStateVal] = useState(defaultValue)
  const [plate, setPlate] = useState('')
  const [imageUrl, setImage] = useState('')
  const [plateUid, setPlateUid] = useState('')
  const [plateUri, setPlateUri] = useState('')
  const [alertError, setAlertError] = useState(false);
  const [alertErrorStr, setAlertErrorStr] = useState("");
  const [alertWarn, setAlertWarn] = useState(false);
  const [alertWarnStr, setAlertWarnStr] = useState("");
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertSuccessStr, setAlertSuccessStr] = useState("");


  const generateNFT = async () => {
    if (!state || !plate) return
    try{
      setPreviewLoading(true);
      setImage('');
        setAlertError(false);
        setAlertWarn(false);
        setAlertSuccess(false);
      console.log("state:" + stateVal + ", plate:" + plate + ", ctype: " + ctypeNum + ", fonNum: " + fonNum);
      var url = 'http://platesmania.com/mobile/api_inf1.php?key=Kn4D23xCa&gal=22&state=' + stateVal + '&ctype=' + ctypeNum + '&fon=' + fonNum + '&nomer=' + plate;
      console.log(url);
      fetch(url).then(function(response) {
        // The response is a Response instance.
        // You parse the data into a useable format using `.json()`
        var fileUrl = response.text();

        return fileUrl

      }).then(async function(data) {
        // `data` is the parsed version of the JSON returned from the above endpoint.
        //console.log(data);
        data = data.replace("httpss", "https");
        try{

          //console.log("url:" + data);

          const res = await client.add(urlSource(data));
          let cid = res.cid._baseCache.get('z');
          //console.log(res);
          let image = `ipfs://${cid}`;
          await setImage(image);


        } catch(error){
          console.log(error);
        }
        setPreviewLoading(false);
      });

    } catch(error) {
      setPreviewLoading(false);
      let errorMsg = error === undefined ? '' : error;
      console.log("ipfs uri upload error1: ", errorMsg);
      setAlertError(true);
      setAlertErrorStr(errorMsg);
    }

  }

  const createNFT = async () => {
    if (!imageUrl || !plate  || !ctypeNum || !fonNum) return
    try{
      setMintLoading(true);

      let newPlateUid = "-" + plate + "-" + countryCode.toLowerCase() + "-" + state + "-";
      await setPlateUid(newPlateUid);
      let description = "A new unique plate generated on " + new Date().toLocaleString();
      let name = plate + " " + countryCode + " " + state;
      let image = imageUrl;
      let attributes = [

        {
          "trait_type": "Country",
          "value": countryCode
        },
        {
          "trait_type": "State",
          "value": state
        }

      ]

      const result = await client.add(JSON.stringify({image, newPlateUid, name, description, attributes}));
      let newPlateUri = `ipfs://${result.cid}`;//https://ipfs.infura.io/ipfs/
      console.log(newPlateUri);
      await setPlateUri(newPlateUri);


      try{
        let platePrice = await nft.platePrice();
        //console.log(platePrice);
        // mint nft
        let ethValue = ethers.utils.formatEther(platePrice._hex);
        const options = {value: ethers.utils.parseEther(ethValue.toString())}
        console.log('Sending Transaction...' + newPlateUid);
        setAlertWarn(true);
        setAlertWarnStr("Sending Transaction...");
        await(await nft.mint(newPlateUid, newPlateUri, options)).wait().then(function(genPlateId){
            console.log('Deployed Transaction');
            setMintLoading(false);
            setAlertWarn(false);
            setAlertSuccess(true);
            setAlertSuccessStr("Your Plate was minted successfully");
            setImage('');
            //console.log(genPlateId);
        });

      }catch(error){

        setMintLoading(false);
        let errorMsg = error.data.message === undefined ? '' : error.data.message;
        console.log("Smart contract Error: ", errorMsg);
        setAlertError(true);
        setAlertErrorStr(errorMsg);
      }


    } catch(errorTx) {
      setMintLoading(false);
      console.log("ipfs uri upload error2: ", errorTx);
      setAlertError(true);
      setAlertErrorStr("Transaction Error");
    }
  }

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) return (

    <main style={{ padding: "1rem 0" }}>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <Spinner animation="border" style={{ display: 'flex' }} />
      <p className='mx-3 my-0'>Loading...</p>
    </div>
    </main>
  )


  if(mintLoading) return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , minHeight: '80vh'}}>
      <Spinner animation="border" style={{ display: 'flex' }} />
      <p className='mx-3 my-0'>Minting...</p>
    </div>

  )

  return (
    <div className="flex justify-center">
        <div className="px-5 container">
          <main style={{ padding: "1rem 0" }}>
            <h2>Mint unique NFT plates!</h2>
          </main>
          <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
            <div className="content mx-auto">
              <Row className="g-4">
                <Col><Dropdown options={options} onChange={(e) => {setState(e.label);setStateVal(e.value)}} value={state} placeholder="State" /></Col>
                <Col><Form.Control onChange={(e) => setPlate(e.target.value)} size="lg" required type="text" placeholder="Plate" maxLength='10' /></Col>
                {components[stateVal]}
                <div className="d-grid px-0">
                  <Button onClick={generateNFT} variant="primary" size="lg">
                    Generate the preview!
                  </Button>
                  <br/>


                  {
                      alertSuccess ? <Alert key="success" variant="success">
                        Success: {alertSuccessStr}!
                        </Alert> : <div></div>

                  }


                  {
                    alertWarn ? <Alert key="warning" variant="warning">
                      {alertWarnStr}!
                      </Alert> : <div></div>

                  }

                  {

                    alertError ? <Alert key="danger" variant="danger">
                      Error: {alertErrorStr}!
                      </Alert> : <div></div>
                  }


                  { previewLoading ?
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Spinner animation="border" style={{ display: 'flex' }} />
                      <p className='mx-3 my-0'>Generating preview...</p>
                    </div> :


                    imageUrl !== '' ?
                    <center><img alt="plate" src={imageUrl.replace("ipfs://", "https://berlas.infura-ipfs.io/ipfs/")}/><br></br>
                    <p style={{marginBottom:"3%"}}></p>
                    <Button onClick={createNFT} variant="primary" size="lg">
                      Mint it now!
                    </Button></center>
                    :
                    <br></br>
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
export default Us

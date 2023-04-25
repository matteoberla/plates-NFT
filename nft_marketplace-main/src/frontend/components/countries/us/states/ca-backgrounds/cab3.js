import { useEffect } from 'react'

const CaB3 = (props) => {

  const getCheckboxValue = (event) => {
    const value = event.target.value;
    props.func(value);
  }

  useEffect(() => {
    props.func("8");
  }, [])

    return (
      <table id="myTable">
          <tbody>
              <tr className="rouws">
                  <td>
                      <input id="r8" name="radio1" value="8" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L8" htmlFor="r8"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/08.png" title="dmv.ca.gov" className="img-responsive" /></label>
                  </td>
                  <td>
                      <input id="r7" name="radio1" value="7" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L7" htmlFor="r7"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/07.png" title="SESQUICENTENNIAL - 150 YEARS" className="img-responsive" /></label>
                  </td>
                  <td>
                      <input id="r6" name="radio1" value="6" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L6" htmlFor="r6"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/06.png" className="img-responsive" /></label>
                  </td>
                  <td>
                      <input id="r5" name="radio1" value="5" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L5" htmlFor="r5"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/05.png" className="img-responsive" /></label>
                  </td>
              </tr>
              <tr className="rouws">
                  <td>
                      <input id="r4" name="radio1" value="4" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L4" htmlFor="r4"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/04.png" title="The Golden State" className="img-responsive" /></label>
                  </td>
                  <td>
                      <input id="r3" name="radio1" value="3" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L3" htmlFor="r3"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/03.png" className="img-responsive" /></label>
                  </td>
                  <td>
                      <input id="r9" name="radio1" value="9" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L9" htmlFor="r9"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/09.png" title="LAKE TAHO" className="img-responsive" /></label>
                  </td>
                  <td>
                      <input id="r10" name="radio1" value="10" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L10" htmlFor="r10"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/10.png" title="PROTECT OUR COAST &amp; OCEAN" className="img-responsive" /></label>
                  </td>
              </tr>
              <tr className="rouws">
                  <td>
                      <input id="r11" name="radio1" value="11" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L11" htmlFor="r11"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/11.png" title="PROTECT OUR COAST &amp; OCEAN" className="img-responsive" /></label>
                  </td>
                  <td>
                      <input id="r12" name="radio1" value="12" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L12" htmlFor="r12"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/12.png" title="PROTECT LAKE TAHO" className="img-responsive" /></label>
                  </td>
                  <td>
                      <input id="r13" name="radio1" value="13" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L13" htmlFor="r13"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/13.png" title="YOSEMITE NATIONAL PARK" className="img-responsive" /></label>
                  </td>
              </tr>
          </tbody>
      </table>
    )
}

export default CaB3;

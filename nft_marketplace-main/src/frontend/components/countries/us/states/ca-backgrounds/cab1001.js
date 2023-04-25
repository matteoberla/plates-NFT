import { useEffect } from 'react'

const CaB1001 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("16");
    }, [])

    return (
      <table id="myTable">
      <tbody>
          <tr className="rouws">
              <td>
                  <input id="r16" name="radio1" value="16" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked />
                  <label id="L16" htmlFor="r16"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/16.png" title="EXEMPT" className="img-responsive" /></label>
              </td>
          </tr>
      </tbody>
  </table>
    )
}

export default CaB1001;

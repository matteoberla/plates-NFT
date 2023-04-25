import { useEffect } from 'react'

const TxB20 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("18");
    }, [])

    return (
      <table id="myTable">
      <tbody>
          <tr className="rouws">
              <td>
                  <input id="r18" name="radio1" value="18" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L18" htmlFor="r18"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/18.png" title="Antique Vehicle" className="img-responsive" /></label>
              </td>
              <td>
                  <input id="r19" name="radio1" value="19" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L19" htmlFor="r19"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/19.png" title="Antique Vehicle" className="img-responsive" /></label>
              </td>
          </tr>
      </tbody>
  </table>
    )
}

export default TxB20;

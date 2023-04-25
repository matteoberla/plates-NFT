import { useEffect } from 'react'

const TxB1103 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("1");
    }, [])

    return (
      <table id="myTable">
          <tbody>
              <tr className="rouws">
                  <td>
                      <input id="r1" name="radio1" value="1" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L1" htmlFor="r1"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/01t.png" className="img-responsive" /></label>
                  </td>
                  <td>
                      <input id="r2" name="radio1" value="2" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L2" htmlFor="r2"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/02t.png" className="img-responsive" /></label>
                  </td>
              </tr>
          </tbody>
      </table>
    )
}

export default TxB1103;

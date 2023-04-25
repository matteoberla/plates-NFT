import { useEffect } from 'react'

const CaB1 = (props) => {

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
              <input id="r1" name="radio1" value="1" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked/>
              <label id="L1" htmlFor="r1"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/01.png" className="img-responsive"/>
              </label>
            </td>
          </tr>
       </tbody>
      </table>
    )
}

export default CaB1;

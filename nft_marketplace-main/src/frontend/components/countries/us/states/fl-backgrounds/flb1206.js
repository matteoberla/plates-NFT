import { useEffect } from 'react'

const FlB1206 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("43");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r43" name="radio1" value="43" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L43" htmlFor="r43"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/43.png" title="Manufacturer" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r42" name="radio1" value="42" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L42" htmlFor="r42"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/42.png" title="Manufacturer" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default FlB1206;

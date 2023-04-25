import { useEffect } from 'react'

const IlB46 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("3");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r3" name="radio1" value="3" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L3" htmlFor="r3"><img src="http://img03.platesmania.com/makenomer/us/il/plates/03.png" title="B-Truck" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r17" name="radio1" value="17" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L17" htmlFor="r17"><img src="http://img03.platesmania.com/makenomer/us/il/plates/17.png" title="B-Truck (B)" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default IlB46;

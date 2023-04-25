import { useEffect } from 'react'

const NyB28 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("4");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r4" name="radio1" value="4" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L4" htmlFor="r4"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/04.png" title="Apportioned" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r5" name="radio1" value="5" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L5" htmlFor="r5"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/05.png" title="Apportioned" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r29" name="radio1" value="29" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L29" htmlFor="r29"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/29.png" title="Apportioned" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>

    )
}

export default NyB28;

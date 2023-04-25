import { useEffect } from 'react'

const FlB1201 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("27");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r27" name="radio1" value="27" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L27" htmlFor="r27"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/27.png" title="Antique" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default FlB1201;

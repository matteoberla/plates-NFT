import { useEffect } from 'react'

const FlB32 = (props) => {

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
                <input id="r1" name="radio1" value="1" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L1" htmlFor="r1"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/01.png" title="SUNSHINE STATE" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default FlB32;

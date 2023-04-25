import { useEffect } from 'react'

const FlB1203 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("2");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r2" name="radio1" value="2" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L2" htmlFor="r2"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/02.png" title="IN GOD WE TRUST" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default FlB1203;

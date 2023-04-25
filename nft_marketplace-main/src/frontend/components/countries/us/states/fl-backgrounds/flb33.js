import { useEffect } from 'react'

const FlB33 = (props) => {

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
            <td>
                <input id="r2" name="radio1" value="2" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L2" htmlFor="r2"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/02.png" title="IN GOD WE TRUST" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default FlB33;

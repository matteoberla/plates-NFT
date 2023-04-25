import { useEffect } from 'react'

const NyB1501 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("8");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r8" name="radio1" value="8" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L8" htmlFor="r8"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/08.png" title="Dealer" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r9" name="radio1" value="9" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L9" htmlFor="r9"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/09.png" title="Dealer" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r28" name="radio1" value="28" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L28" htmlFor="r28"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/28.png" title="Dealer" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default NyB1501;

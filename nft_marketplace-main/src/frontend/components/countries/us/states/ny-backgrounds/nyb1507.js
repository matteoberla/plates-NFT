import { useEffect } from 'react'

const NyB1507 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("81");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r81" name="radio1" value="81" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L81" htmlFor="r81"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/81.png" title="Bus" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r82" name="radio1" value="82" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L82" htmlFor="r82"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/82.png" title="Bus" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r83" name="radio1" value="83" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L83" htmlFor="r83"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/83.png" title="Bus" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default NyB1507;

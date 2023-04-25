import { useEffect } from 'react'

const CaB5 = (props) => {

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
                <input id="r8" name="radio1" value="8" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked />
                <label id="L8" htmlFor="r8"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/08.png" title="dmv.ca.gov" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r6" name="radio1" value="6" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L6" htmlFor="r6"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/06.png" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>

    )
}

export default CaB5;

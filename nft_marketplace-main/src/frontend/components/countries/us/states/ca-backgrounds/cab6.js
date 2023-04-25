import { useEffect } from 'react'

const CaB6 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("6");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r7" name="radio1" value="7" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L7" htmlFor="r7"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/07.png" title="SESQUICENTENNIAL - 150 YEARS" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r6" name="radio1" value="6" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked />
                <label id="L6" htmlFor="r6"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/06.png" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r5" name="radio1" value="5" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L5" htmlFor="r5"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/05.png" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r3" name="radio1" value="3" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L3" htmlFor="r3"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/03.png" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default CaB6;

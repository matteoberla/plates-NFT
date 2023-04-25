import { useEffect } from 'react'

const CaB1003 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("19");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r19" name="radio1" value="19" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked />
                <label id="L19" htmlFor="r19"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/19.png" title="1956, yellow" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default CaB1003;

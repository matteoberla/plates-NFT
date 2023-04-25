import { useEffect } from 'react'

const CaB10 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("17");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r17" name="radio1" value="17" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked />
                <label id="L17" htmlFor="r17"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/17.png" title="Diasabled" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>

    )
}

export default CaB10;

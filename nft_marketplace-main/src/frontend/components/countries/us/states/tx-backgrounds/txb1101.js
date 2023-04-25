import { useEffect } from 'react'

const TxB1101 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("4");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r4" name="radio1" value="4" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L4" htmlFor="r4"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/04.png" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default TxB1101;

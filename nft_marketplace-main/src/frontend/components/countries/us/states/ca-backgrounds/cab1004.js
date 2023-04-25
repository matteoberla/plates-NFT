import { useEffect } from 'react'

const CaB1004 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("20");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r20" name="radio1" value="20" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked />
                <label id="L20" htmlFor="r20"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/20.png" title="Historical" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default CaB1004;

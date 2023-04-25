import { useEffect } from 'react'

const CaB1 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("18");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r18" name="radio1" value="18" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked />
                <label id="L18" htmlFor="r18"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/18.png" title="Apportioned" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default CaB1;

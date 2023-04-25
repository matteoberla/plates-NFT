import { useEffect } from 'react'

const FlB38 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("44");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r44" name="radio1" value="44" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L44" htmlFor="r44"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/44.png" title="Dealer" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r45" name="radio1" value="45" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L45" htmlFor="r45"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/45.png" title="Dealer" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default FlB38;

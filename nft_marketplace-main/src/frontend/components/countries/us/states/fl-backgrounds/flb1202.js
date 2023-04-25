import { useEffect } from 'react'

const FlB1202 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("34");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r34" name="radio1" value="34" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L34" htmlFor="r34"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/34.png" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r35" name="radio1" value="35" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L35" htmlFor="r35"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/35.png" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r36" name="radio1" value="36" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L36" htmlFor="r36"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/36.png" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r37" name="radio1" value="37" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L37" htmlFor="r37"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/37.png" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default FlB1202;

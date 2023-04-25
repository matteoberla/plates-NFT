import { useEffect } from 'react'

const IlB1605 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("36");
    }, [])

    return (
      <table id="myTable">
        <tbody>
            <tr className="rouws">
                <td>
                    <input id="r36" name="radio1" value="36" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L36" htmlFor="r36"><img src="http://img03.platesmania.com/makenomer/us/il/plates/36.png" title="Dealer" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r41" name="radio1" value="41" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L41" htmlFor="r41"><img src="http://img03.platesmania.com/makenomer/us/il/plates/41.png" title="Dealer" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r42" name="radio1" value="42" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L42" htmlFor="r42"><img src="http://img03.platesmania.com/makenomer/us/il/plates/42.png" title="Dealer" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r43" name="radio1" value="43" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L43" htmlFor="r43"><img src="http://img03.platesmania.com/makenomer/us/il/plates/43.png" title="Dealer" className="img-responsive" /></label>
                </td>
            </tr>
            <tr className="rouws">
                <td>
                    <input id="r44" name="radio1" value="44" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L44" htmlFor="r44"><img src="http://img03.platesmania.com/makenomer/us/il/plates/44.png" title="Dealer" className="img-responsive" /></label>
                </td>
            </tr>
        </tbody>
    </table>

    )
}

export default IlB1605;

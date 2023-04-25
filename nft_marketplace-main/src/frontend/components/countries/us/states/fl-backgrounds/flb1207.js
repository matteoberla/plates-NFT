import { useEffect } from 'react'

const FlB1207 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("52");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r52" name="radio1" value="52" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L52" htmlFor="r52"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/52.png" title="Disabled Veteran" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r53" name="radio1" value="53" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L53" htmlFor="r53"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/53.png" title="Disabled Veteran" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r54" name="radio1" value="54" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L54" htmlFor="r54"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/54.png" title="Paralyzed Veterans of America" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r55" name="radio1" value="55" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L55" htmlFor="r55"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/55.png" title="Veteran" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default FlB1207;

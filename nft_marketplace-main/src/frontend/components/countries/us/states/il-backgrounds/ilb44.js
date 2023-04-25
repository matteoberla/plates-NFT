import { useEffect } from 'react'

const IlB44 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("1");
    }, [])

    return (
      <table id="myTable">
        <tbody>
            <tr className="rouws">
                <td>
                    <input id="r1" name="radio1" value="1" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L1" htmlFor="r1"><img src="http://img03.platesmania.com/makenomer/us/il/plates/01.png" title="Land of Lincoln" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r4" name="radio1" value="4" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L4" htmlFor="r4"><img src="http://img03.platesmania.com/makenomer/us/il/plates/04.png" title="Land of Lincoln" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r16" name="radio1" value="16" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L16" htmlFor="r16"><img src="http://img03.platesmania.com/makenomer/us/il/plates/16.png" title="Land of Lincoln (Light Gray)" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r3" name="radio1" value="3" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L3" htmlFor="r3"><img src="http://img03.platesmania.com/makenomer/us/il/plates/03.png" title="B-Truck" className="img-responsive" /></label>
                </td>
            </tr>
            <tr className="rouws">
                <td>
                    <input id="r17" name="radio1" value="17" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L17" htmlFor="r17"><img src="http://img03.platesmania.com/makenomer/us/il/plates/17.png" title="B-Truck" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r18" name="radio1" value="18" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L18" htmlFor="r18"><img src="http://img03.platesmania.com/makenomer/us/il/plates/18.png" title="C-Truck" className="img-responsive" /></label>
                </td>
            </tr>
        </tbody>
    </table>
    )
}

export default IlB44;

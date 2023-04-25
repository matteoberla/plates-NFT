import { useEffect } from 'react'

const IlB42 = (props) => {

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
                    <input id="r4" name="radio1" value="4" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L4" htmlFor="r4"><img src="http://img03.platesmania.com/makenomer/us/il/plates/04.png" title="AB 12345" className="img-responsive" /></label>
                </td>
            </tr>
        </tbody>
    </table>
    )
}

export default IlB42;

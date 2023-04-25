import { useEffect } from 'react'

const NyB1505 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("23");
    }, [])

    return (
      <table id="myTable">
        <tbody>
            <tr className="rouws">
                <td>
                    <input id="r23" name="radio1" value="23" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L23" htmlFor="r23"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/23.png" title="Taxi" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r22" name="radio1" value="22" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L22" htmlFor="r22"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/22.png" title="Taxi" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r33" name="radio1" value="33" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L33" htmlFor="r33"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/33.png" title="Taxi" className="img-responsive" /></label>
                </td>
            </tr>
        </tbody>
    </table>
    )
}

export default NyB1505;

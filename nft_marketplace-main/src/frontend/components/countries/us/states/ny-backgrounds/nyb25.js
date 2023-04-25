import { useEffect } from 'react'

const NyB25 = (props) => {

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
                    <input id="r1" name="radio1" value="1" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L1" htmlFor="r1"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/01.png" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r2" name="radio1" value="2" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L2" htmlFor="r2"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/02.png" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r3" name="radio1" value="3" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L3" htmlFor="r3"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/03.png" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r25" name="radio1" value="25" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L25" htmlFor="r25"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/25.png" title="EXCELSIOR" className="img-responsive" /></label>
                </td>
            </tr>
        </tbody>
    </table>
    )
}

export default NyB25;

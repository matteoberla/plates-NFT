import { useEffect } from 'react'

const IlB45 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("2");
    }, [])

    return (
      <table id="myTable">
        <tbody>
            <tr className="rouws">
                <td>
                    <input id="r2" name="radio1" value="2" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L2" htmlFor="r2"><img src="http://img03.platesmania.com/makenomer/us/il/plates/02.png" title="Antique Vehicle" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r6" name="radio1" value="6" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L6" htmlFor="r6"><img src="http://img03.platesmania.com/makenomer/us/il/plates/06.png" title="Expanded-Use Antique" className="img-responsive" /></label>
                </td>
                <td>
                    <input id="r32" name="radio1" value="32" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L32" htmlFor="r32"><img src="http://img03.platesmania.com/makenomer/us/il/plates/32.png" title="Old base AV" className="img-responsive" /></label>
                </td>
            </tr>
        </tbody>
    </table>

    )
}

export default IlB45;

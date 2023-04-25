import { useEffect } from 'react'

const IlB49 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("5");
    }, [])

    return (
      <table id="myTable">
        <tbody>
            <tr className="rouws">
                <td>
                    <input id="r5" name="radio1" value="5" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L5" htmlFor="r5"><img src="http://img03.platesmania.com/makenomer/us/il/plates/05.png" title="Apportioned" className="img-responsive" /></label>
                </td>
            </tr>
        </tbody>
    </table>
    )
}

export default IlB49;

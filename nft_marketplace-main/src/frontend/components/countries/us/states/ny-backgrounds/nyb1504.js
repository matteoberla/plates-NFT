import { useEffect } from 'react'

const NyB1504 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("21");
    }, [])

    return (
      <table id="myTable">
        <tbody>
            <tr className="rouws">
                <td>
                    <input id="r21" name="radio1" value="21" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L21" htmlFor="r21"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/21.png" title="Official" className="img-responsive" /></label>
                </td>
            </tr>
        </tbody>
    </table>
    )
}

export default NyB1504;

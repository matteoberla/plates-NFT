import { useEffect } from 'react'

const NyB30 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("16");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r16" name="radio1" value="16" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L16" htmlFor="r16"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/16.png" title="Handicapped" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r17" name="radio1" value="17" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L17" htmlFor="r17"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/17.png" title="Handicapped" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default NyB30;

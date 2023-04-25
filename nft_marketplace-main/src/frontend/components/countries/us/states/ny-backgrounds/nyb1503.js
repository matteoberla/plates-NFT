import { useEffect } from 'react'

const NyB1503 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("20");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r20" name="radio1" value="20" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L20" htmlFor="r20"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/20.png" title="Historical" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r19" name="radio1" value="19" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L19" htmlFor="r19"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/19.png" title="Historical" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r24" name="radio1" value="24" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L24" htmlFor="r24"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/24.png" title="Historical" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r30" name="radio1" value="30" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L30" htmlFor="r30"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/30.png" title="Historical" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default NyB1503;

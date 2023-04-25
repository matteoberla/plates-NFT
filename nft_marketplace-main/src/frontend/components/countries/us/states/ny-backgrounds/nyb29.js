import { useEffect } from 'react'

const NyB29 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("6");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r6" name="radio1" value="6" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L6" htmlFor="r6"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/06.png" title="Commercial" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r7" name="radio1" value="7" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L7" htmlFor="r7"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/07.png" title="Commercial" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r26" name="radio1" value="26" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L26" htmlFor="r26"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/26.png" title="Commercial" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r85" name="radio1" value="85" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L85" htmlFor="r85"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/85.png" title="SPEC-COMM" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r86" name="radio1" value="86" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L86" htmlFor="r86"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/86.png" title="SPEC-COMM" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default NyB29;

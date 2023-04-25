import { useEffect } from 'react'

const NyB1502 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("14");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r14" name="radio1" value="14" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L14" htmlFor="r14"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/14.png" title="T&amp;LC" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r15" name="radio1" value="15" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L15" htmlFor="r15"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/15.png" title="T&amp;LC" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r12" name="radio1" value="12" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L12" htmlFor="r12"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/12.png" title="T&amp;LC - Westchester County" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r13" name="radio1" value="13" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L13" htmlFor="r13"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/13.png" title="T&amp;LC - Westchester County" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r10" name="radio1" value="10" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L10" htmlFor="r10"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/10.png" title="T&amp;LC - Nassau County" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r11" name="radio1" value="11" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L11" htmlFor="r11"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/11.png" title="T&amp;LC - Nassau County" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r31" name="radio1" value="31" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L31" htmlFor="r31"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/31.png" title="T&amp;LC – Nassau County" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r32" name="radio1" value="32" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L32" htmlFor="r32"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/32.png" title="T&amp;LC – Westchester County" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r27" name="radio1" value="27" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L27" htmlFor="r27"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/27.png" title="T&amp;LC" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>

    )
}

export default NyB1502;

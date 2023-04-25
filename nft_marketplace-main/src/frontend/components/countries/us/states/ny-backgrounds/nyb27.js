import { useEffect } from 'react'

const NyB27 = (props) => {

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
                <input id="r4" name="radio1" value="4" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L4" htmlFor="r4"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/04.png" title="Apportioned" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r5" name="radio1" value="5" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L5" htmlFor="r5"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/05.png" title="Apportioned" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r6" name="radio1" value="6" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L6" htmlFor="r6"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/06.png" title="Commercial" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r7" name="radio1" value="7" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L7" htmlFor="r7"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/07.png" title="Commercial" className="img-responsive" /></label>
            </td>
            <td>
<input id="r8" name="radio1" value="8" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L8" htmlFor="r8"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/08.png" title="Dealer" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r9" name="radio1" value="9" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L9" htmlFor="r9"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/09.png" title="Dealer" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r10" name="radio1" value="10" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L10" htmlFor="r10"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/10.png" title="T&amp;LC - Nassau County" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r11" name="radio1" value="11" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L11" htmlFor="r11"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/11.png" title="T&amp;LC - Nassau County" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r12" name="radio1" value="12" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L12" htmlFor="r12"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/12.png" title="T&amp;LC - Westchester County" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r13" name="radio1" value="13" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L13" htmlFor="r13"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/13.png" title="T&amp;LC - Westchester County" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r14" name="radio1" value="14" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L14" htmlFor="r14"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/14.png" title="T&amp;LC" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r15" name="radio1" value="15" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L15" htmlFor="r15"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/15.png" title="T&amp;LC" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r19" name="radio1" value="19" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L19" htmlFor="r19"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/19.png" title="Historical" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r20" name="radio1" value="20" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L20" htmlFor="r20"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/20.png" title="Historical" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r25" name="radio1" value="25" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L25" htmlFor="r25"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/25.png" title="EXCELSIOR" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r26" name="radio1" value="26" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L26" htmlFor="r26"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/26.png" title="Commercial" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r29" name="radio1" value="29" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L29" htmlFor="r29"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/29.png" title="Apportioned" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r27" name="radio1" value="27" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L27" htmlFor="r27"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/27.png" title="T&amp;LC" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r31" name="radio1" value="31" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L31" htmlFor="r31"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/31.png" title="T&amp;LC – Nassau County" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r32" name="radio1" value="32" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L32" htmlFor="r32"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/32.png" title="T&amp;LC – Westchester County" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r28" name="radio1" value="28" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L28" htmlFor="r28"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/28.png" title="Dealer" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r30" name="radio1" value="30" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L30" htmlFor="r30"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/30.png" title="Historical" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default NyB27;

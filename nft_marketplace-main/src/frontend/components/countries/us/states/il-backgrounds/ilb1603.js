import { useEffect } from 'react'

const IlB1603 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("7");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r7" name="radio1" value="7" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L7" htmlFor="r7"><img src="http://img03.platesmania.com/makenomer/us/il/plates/07.png" title="White Sox" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r8" name="radio1" value="8" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L8" htmlFor="r8"><img src="http://img03.platesmania.com/makenomer/us/il/plates/08.png" title="Police Memorial" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r9" name="radio1" value="9" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L9" htmlFor="r9"><img src="http://img03.platesmania.com/makenomer/us/il/plates/09.png" title="Chicago Blackhawks" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r10" name="radio1" value="10" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L10" htmlFor="r10"><img src="http://img03.platesmania.com/makenomer/us/il/plates/10.png" title="Chicago Bears" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r11" name="radio1" value="11" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L11" htmlFor="r11"><img src="http://img03.platesmania.com/makenomer/us/il/plates/11.png" title="Firefighters Memorial" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r12" name="radio1" value="12" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L12" htmlFor="r12"><img src="http://img03.platesmania.com/makenomer/us/il/plates/12.png" title="Organ Donor" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r13" name="radio1" value="13" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L13" htmlFor="r13"><img src="http://img03.platesmania.com/makenomer/us/il/plates/13.png" title="Where the Road Begins" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r14" name="radio1" value="14" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L14" htmlFor="r14"><img src="http://img03.platesmania.com/makenomer/us/il/plates/14.png" title="Illinois Police Association Memorial" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r15" name="radio1" value="15" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L15" htmlFor="r15"><img src="http://img03.platesmania.com/makenomer/us/il/plates/15.png" title="Prevent Violence" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r19" name="radio1" value="19" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L19" htmlFor="r19"><img src="http://img03.platesmania.com/makenomer/us/il/plates/19.png" title="Chicago Bulls" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r20" name="radio1" value="20" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L20" htmlFor="r20"><img src="http://img03.platesmania.com/makenomer/us/il/plates/20.png" title="America Remembers" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r21" name="radio1" value="21" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L21" htmlFor="r21"><img src="http://img03.platesmania.com/makenomer/us/il/plates/21.png" title="Chicago Cubs" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r22" name="radio1" value="22" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L22" htmlFor="r22"><img src="http://img03.platesmania.com/makenomer/us/il/plates/22.png" title="Saluting Agriculture" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r23" name="radio1" value="23" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L23" htmlFor="r23"><img src="http://img03.platesmania.com/makenomer/us/il/plates/23.png" title="University of Illinois at Chicago" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r24" name="radio1" value="24" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L24" htmlFor="r24"><img src="http://img03.platesmania.com/makenomer/us/il/plates/24.png" title="Illinois State University" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r25" name="radio1" value="25" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L25" htmlFor="r25"><img src="http://img03.platesmania.com/makenomer/us/il/plates/25.png" title="Support Our Troops!" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r26" name="radio1" value="26" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L26" htmlFor="r26"><img src="http://img03.platesmania.com/makenomer/us/il/plates/26.png" title="Corps Marine" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r27" name="radio1" value="27" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L27" htmlFor="r27"><img src="http://img03.platesmania.com/makenomer/us/il/plates/27.png" title="Afghanistan Campaign" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r28" name="radio1" value="28" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L28" htmlFor="r28"><img src="http://img03.platesmania.com/makenomer/us/il/plates/28.png" title="State Police Heritage Foundation" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r29" name="radio1" value="29" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L29" htmlFor="r29"><img src="http://img03.platesmania.com/makenomer/us/il/plates/29.png" title="Wildlife Prairie Park" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r30" name="radio1" value="30" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L30" htmlFor="r30"><img src="http://img03.platesmania.com/makenomer/us/il/plates/30.png" title="Light blue" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r31" name="radio1" value="31" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L31" htmlFor="r31"><img src="http://img03.platesmania.com/makenomer/us/il/plates/31.png" title="Light green" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r33" name="radio1" value="33" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L33" htmlFor="r33"><img src="http://img03.platesmania.com/makenomer/us/il/plates/33.png" title="University of Illinois" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r34" name="radio1" value="34" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L34" htmlFor="r34"><img src="http://img03.platesmania.com/makenomer/us/il/plates/34.png" title="Environment" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r35" name="radio1" value="35" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L35" htmlFor="r35"><img src="http://img03.platesmania.com/makenomer/us/il/plates/35.png" title="The University of Chicago" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r37" name="radio1" value="37" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L37" htmlFor="r37"><img src="http://img03.platesmania.com/makenomer/us/il/plates/37.png" title="Livery" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r38" name="radio1" value="38" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L38" htmlFor="r38"><img src="http://img03.platesmania.com/makenomer/us/il/plates/38.png" title="Ambulance" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r39" name="radio1" value="39" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L39" htmlFor="r39"><img src="http://img03.platesmania.com/makenomer/us/il/plates/39.png" title="Fleet Vehicle" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r1" name="radio1" value="1" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L1" htmlFor="r1"><img src="http://img03.platesmania.com/makenomer/us/il/plates/01.png" title="Land of Lincoln" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r40" name="radio1" value="40" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L40" htmlFor="r40"><img src="http://img03.platesmania.com/makenomer/us/il/plates/40.png" title="University of Illinois" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default IlB1603;

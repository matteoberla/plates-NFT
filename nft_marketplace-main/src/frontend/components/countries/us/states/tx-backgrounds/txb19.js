import { useEffect } from 'react'

const TxB19 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("4");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r4" name="radio1" value="4" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L4" htmlFor="r4"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/04.png" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r7" name="radio1" value="7" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L7" htmlFor="r7"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/07.png" title="Lone Star State" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r26" name="radio1" value="26" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L26" htmlFor="r26"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/26.png" title="Lone Star State Pink" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r9" name="radio1" value="9" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L9" htmlFor="r9"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/09.png" title="Lone Star State" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r8" name="radio1" value="8" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L8" htmlFor="r8"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/08.png" title="Lone Star State" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r11" name="radio1" value="11" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L11" htmlFor="r11"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/11.png" title="Lone Star State" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r15" name="radio1" value="15" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L15" htmlFor="r15"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/15.png" title="Lone Star Pink" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r21" name="radio1" value="21" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L21" htmlFor="r21"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/21.png" title="Lone Star Blue" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r13" name="radio1" value="13" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L13" htmlFor="r13"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/13.png" title="Texas Vintage Black" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r17" name="radio1" value="17" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L17" htmlFor="r17"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/17.png" title="Texas Vintage White" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r28" name="radio1" value="28" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L28" htmlFor="r28"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/28.png" title="Texas Vintage Pink" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r35" name="radio1" value="35" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L35" htmlFor="r35"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/35.png" title="Texas Vintage Blue" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r20" name="radio1" value="20" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L20" htmlFor="r20"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/20.png" title="Oil and Gas" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r24" name="radio1" value="24" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L24" htmlFor="r24"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/24.png" title="Classic Black" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r12" name="radio1" value="12" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L12" htmlFor="r12"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/12.png" title="Sunflower" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r23" name="radio1" value="23" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L23" htmlFor="r23"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/23.png" title="T For Texas - Longhorns" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r14" name="radio1" value="14" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L14" htmlFor="r14"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/14.png" title="T For Texas" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r25" name="radio1" value="25" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L25" htmlFor="r25"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/25.png" title="T For Texas - Breast Cancer" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r29" name="radio1" value="29" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L29" htmlFor="r29"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/29.png" title="T For Texas - Pink" className="img-responsive" /></label>
            </td>
            <td>
  <input id="r27" name="radio1" value="27" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L27" htmlFor="r27"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/27.png" title="T For Texas - Red/White/Blue" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r16" name="radio1" value="16" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L16" htmlFor="r16"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/16.png" title="The Lone Star State" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r10" name="radio1" value="10" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L10" htmlFor="r10"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/10.png" title="Texas Black 1845" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r22" name="radio1" value="22" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L22" htmlFor="r22"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/22.png" title="Dallas Cowboys" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r41" name="radio1" value="41" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L41" htmlFor="r41"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/41.png" title="Dallas Cowboys Silver" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r31" name="radio1" value="31" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L31" htmlFor="r31"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/31.png" title="Lone Star State Orange" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r32" name="radio1" value="32" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L32" htmlFor="r32"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/32.png" title="Lone Star State Red" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r33" name="radio1" value="33" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L33" htmlFor="r33"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/33.png" title="Lone Star State Blue" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r34" name="radio1" value="34" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L34" htmlFor="r34"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/34.png" title="Lone Star State Green" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r42" name="radio1" value="42" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L42" htmlFor="r42"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/42.png" title="Classic Auto" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r43" name="radio1" value="43" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L43" htmlFor="r43"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/43.png" title="Disabled Veteran" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r44" name="radio1" value="44" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L44" htmlFor="r44"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/44.png" title="Amateur Radio Operator" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r45" name="radio1" value="45" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L45" htmlFor="r45"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/45.png" title="Texas White" className="img-responsive" /></label>
       </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r30" name="radio1" value="30" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L30" htmlFor="r30"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/30.png" title="State of the Arts" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r39" name="radio1" value="39" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L39" htmlFor="r39"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/39.png" title="Texas 2000" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r40" name="radio1" value="40" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L40" htmlFor="r40"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/40.png" title="Lone Star Badge" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r46" name="radio1" value="46" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L46" htmlFor="r46"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/46.png" title="UT Longhorns Black" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r36" name="radio1" value="36" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L36" htmlFor="r36"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/36.png" title="Lone Star 1836" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r37" name="radio1" value="37" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L37" htmlFor="r37"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/37.png" title="Western Yoke Black" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r38" name="radio1" value="38" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L38" htmlFor="r38"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/38.png" title="Carbon Fiber" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r47" name="radio1" value="47" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L47" htmlFor="r47"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/47.png" title="Protect Wild Animals" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default TxB19;

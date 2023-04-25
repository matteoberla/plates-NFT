import { useEffect } from 'react'

const FlB36 = (props) => {

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
                <input id="r1" name="radio1" value="1" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L1" htmlFor="r1"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/01.png" title="SUNSHINE STATE" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r2" name="radio1" value="2" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L2" htmlFor="r2"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/02.png" title="IN GOD WE TRUST" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r11" name="radio1" value="11" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L11" htmlFor="r11"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/11.png" title="SUNSHINE STATE" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r3" name="radio1" value="3" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L3" htmlFor="r3"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/03.png" title="AQUACULTURE" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r4" name="radio1" value="4" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L4" htmlFor="r4"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/04.png" title="Protect Wild Doplphins" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r5" name="radio1" value="5" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L5" htmlFor="r5"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/05.png" title="Save Our Seas" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r6" name="radio1" value="6" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L6" htmlFor="r6"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/06.png" title="MAIAMI HEAT" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r7" name="radio1" value="7" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L7" htmlFor="r7"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/07.png" title="SUPPORT LAW ENFORCEMENT" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r8" name="radio1" value="8" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L8" htmlFor="r8"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/08.png" title="TAMPA BAY Buccaneers" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r9" name="radio1" value="9" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L9" htmlFor="r9"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/09.png" title="Save the Manatee" className="img-responsive" /></label>
            </td>
            <td>
<input id="r10" name="radio1" value="10" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L10" htmlFor="r10"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/10.png" title="PROTECT FLORIDA WHALES" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r12" name="radio1" value="12" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L12" htmlFor="r12"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/12.png" title="Sea Turtle" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r13" name="radio1" value="13" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L13" htmlFor="r13"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/13.png" title="POLICE ATHLETIC LEAGUE" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r14" name="radio1" value="14" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L14" htmlFor="r14"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/14.png" title="University of Florida" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r15" name="radio1" value="15" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L15" htmlFor="r15"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/15.png" title="Florida State University" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r16" name="radio1" value="16" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L16" htmlFor="r16"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/16.png" title="Protect the Panter" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r17" name="radio1" value="17" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L17" htmlFor="r17"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/17.png" title="Endless Summer" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r18" name="radio1" value="18" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L18" htmlFor="r18"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/18.png" title="Marine Corps" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r19" name="radio1" value="19" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L19" htmlFor="r19"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/19.png" title="Protect Our Reefs" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r20" name="radio1" value="20" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L20" htmlFor="r20"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/20.png" title="State of the Arts" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r21" name="radio1" value="21" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L21" htmlFor="r21"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/21.png" title="Salutes Firefighters" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r22" name="radio1" value="22" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L22" htmlFor="r22"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/22.png" title="Catch Me, Release Me" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r23" name="radio1" value="23" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L23" htmlFor="r23"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/23.png" title="Protect Our Oceans" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r24" name="radio1" value="24" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L24" htmlFor="r24"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/24.png" title="State Wildflower" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r25" name="radio1" value="25" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L25" htmlFor="r25"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/25.png" title="Challenger/Columbia" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r26" name="radio1" value="26" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L26" htmlFor="r26"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/26.png" title="U.S. Olympic" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r28" name="radio1" value="28" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L28" htmlFor="r28"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/28.png" title="U.S. Army" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r29" name="radio1" value="29" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L29" htmlFor="r29"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/29.png" title="Fish Florida" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r30" name="radio1" value="30" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L30" htmlFor="r30"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/30.png" title="Golf Capital of the World" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r31" name="radio1" value="31" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L31" htmlFor="r31"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/31.png" title="University of Miami" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r32" name="radio1" value="32" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L32" htmlFor="r32"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/32.png" title="Keep Kids Drug Free" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r33" name="radio1" value="33" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L33" htmlFor="r33"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/33.png" title="Discover Florida`s Oceans" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r38" name="radio1" value="38" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L38" htmlFor="r38"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/38.png" title="U.S. Navy" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r39" name="radio1" value="39" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L39" htmlFor="r39"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/39.png" title="U.S. Air Force" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r40" name="radio1" value="40" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L40" htmlFor="r40"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/40.png" title="University of Miami" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r41" name="radio1" value="41" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L41" htmlFor="r41"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/41.png" title="TAMPA BAY Buccaneers (Black)" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r47" name="radio1" value="47" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L47" htmlFor="r47"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/47.png" title="Imagine" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r48" name="radio1" value="48" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L48" htmlFor="r48"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/48.png" title="Choose Life" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r49" name="radio1" value="49" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L49" htmlFor="r49"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/49.png" title="Miami Heat" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r50" name="radio1" value="50" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L50" htmlFor="r50"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/50.png" title="Play Tennis" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r51" name="radio1" value="51" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L51" htmlFor="r51"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/51.png" title="In God We Trust" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r56" name="radio1" value="56" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L56" htmlFor="r56"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/56.png" title="Big Brothers Big Sisters" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r57" name="radio1" value="57" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L57" htmlFor="r57"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/57.png" title="Support Law EnhtmlForcement (Black)" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r58" name="radio1" value="58" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L58" htmlFor="r58"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/58.png" title="Tampa Bay Lightning" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r59" name="radio1" value="59" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L59" htmlFor="r59"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/59.png" title="Tampa Bay Lightning (Blue)" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r60" name="radio1" value="60" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L60" htmlFor="r60"><img src="http://img03.platesmania.com/makenomer/us/fl/plates/60.png" title="University of Miami (Black)" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default FlB36;

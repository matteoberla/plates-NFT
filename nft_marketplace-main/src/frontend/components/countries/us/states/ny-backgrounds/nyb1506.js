import { useEffect } from 'react'

const NyB1506 = (props) => {

    const getCheckboxValue = (event) => {
      const value = event.target.value;
      props.func(value);
    }

    useEffect(() => {
      props.func("34");
    }, [])

    return (
      <table id="myTable">
    <tbody>
        <tr className="rouws">
            <td>
                <input id="r34" name="radio1" value="34" onClick={getCheckboxValue.bind(this)} type="radio" defaultChecked /><label id="L34" htmlFor="r34"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/34.png" title="New York Yankees" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r35" name="radio1" value="35" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L35" htmlFor="r35"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/35.png" title="New York Rangers" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r36" name="radio1" value="36" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L36" htmlFor="r36"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/36.png" title="I Love NY" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r37" name="radio1" value="37" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L37" htmlFor="r37"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/37.png" title="New York Knicks" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r38" name="radio1" value="38" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L38" htmlFor="r38"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/38.png" title="Birthplace of Baseball" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r39" name="radio1" value="39" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L39" htmlFor="r39"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/39.png" title="New York Islanders" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r40" name="radio1" value="40" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L40" htmlFor="r40"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/40.png" title="New York Mets" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r41" name="radio1" value="41" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L41" htmlFor="r41"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/41.png" title="New York Yankees World Series Champions 2009" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r42" name="radio1" value="42" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L42" htmlFor="r42"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/42.png" title="New York Giants" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r43" name="radio1" value="43" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L43" htmlFor="r43"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/43.png" title="New York Jets" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r44" name="radio1" value="44" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L44" htmlFor="r44"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/44.png" title="Buffalo Sabres" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r45" name="radio1" value="45" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L45" htmlFor="r45"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/45.png" title="UnihtmlFormed Firefighter - Firefighter" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r46" name="radio1" value="46" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L46" htmlFor="r46"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/46.png" title="UnihtmlFormed Firefighter - The Bravest" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r47" name="radio1" value="47" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L47" htmlFor="r47"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/47.png" title="Fraternal Order of Police" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r48" name="radio1" value="48" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L48" htmlFor="r48"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/48.png" title="New York State Dental Association DDS" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r49" name="radio1" value="49" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L49" htmlFor="r49"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/49.png" title="Doctor of Dental Surgery" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r50" name="radio1" value="50" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L50" htmlFor="r50"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/50.png" title="Medical Doctor" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r51" name="radio1" value="51" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L51" htmlFor="r51"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/51.png" title="Marine and Coastal District of New York Environmental" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r52" name="radio1" value="52" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L52" htmlFor="r52"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/52.png" title="War on Terror Veteran" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r53" name="radio1" value="53" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L53" htmlFor="r53"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/53.png" title="Volunteer Firefighter" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r54" name="radio1" value="54" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L54" htmlFor="r54"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/54.png" title="Ham Radio Operator" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r55" name="radio1" value="55" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L55" htmlFor="r55"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/55.png" title="Empire State Flower" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r56" name="radio1" value="56" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L56" htmlFor="r56"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/56.png" title="Our Best Friends" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r57" name="radio1" value="57" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L57" htmlFor="r57"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/57.png" title="Keep Kids Drug Free" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r58" name="radio1" value="58" onClick={getCheckboxValue.bind(this)}type="radio" /><label id="L58" htmlFor="r58"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/58.png" title="Agriculture in the Classroom" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r59" name="radio1" value="59" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L59" htmlFor="r59"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/59.png" title="Drive htmlFor the Cure" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r60" name="radio1" value="60" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L60" htmlFor="r60"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/60.png" title="Cure Childhood Cancer" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r61" name="radio1" value="61" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L61" htmlFor="r61"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/61.png" title="Life... Pass It On" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r62" name="radio1" value="62" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L62" htmlFor="r62"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/62.png" title="New York City Region" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r63" name="radio1" value="63" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L63" htmlFor="r63"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/63.png" title="Tech Valley" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r64" name="radio1" value="64" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L64" htmlFor="r64"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/64.png" title="US Veteran" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r65" name="radio1" value="65" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L65" htmlFor="r65"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/65.png" title="Hunting - Deer" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r66" name="radio1" value="66" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L66" htmlFor="r66"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/66.png" title="Fishing - Striped Bass" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r67" name="radio1" value="67" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L67" htmlFor="r67"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/67.png" title="Fishing - Trout" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r68" name="radio1" value="68" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L68" htmlFor="r68"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/68.png" title="Parks - Niagara Falls Scene" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r69" name="radio1" value="69" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L69" htmlFor="r69"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/69.png" title="Parks - Bridge Scene" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r70" name="radio1" value="70" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L70" htmlFor="r70"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/70.png" title="Parks - Beach Scene" className="img-responsive" /></label>
   </td>
            <td>
                <input id="r71" name="radio1" value="71" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L71" htmlFor="r71"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/71.png" title="Conserve Habitat" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r72" name="radio1" value="72" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L72" htmlFor="r72"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/72.png" title="Bluebird Environmental" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r73" name="radio1" value="73" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L73" htmlFor="r73"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/73.png" title="Watkins Glen International" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r74" name="radio1" value="74" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L74" htmlFor="r74"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/74.png" title="Martin Truex, Jr." className="img-responsive" /></label>
            </td>
            <td>
                <input id="r75" name="radio1" value="75" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L75" htmlFor="r75"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/75.png" title="Denny Hamlin" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r76" name="radio1" value="76" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L76" htmlFor="r76"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/76.png" title="Kevin Harvick" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r77" name="radio1" value="77" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L77" htmlFor="r77"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/77.png" title="Kyle Busch" className="img-responsive" /></label>
            </td>
        </tr>
        <tr className="rouws">
            <td>
                <input id="r78" name="radio1" value="78" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L78" htmlFor="r78"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/78.png" title="NASCAR Fan" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r79" name="radio1" value="79" onClick={getCheckboxValue.bind(this)} type="radio" />
                <label id="L79" htmlFor="r79"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/79.png" title="Dale Earnhardt NASCAR Hall of Fame" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r80" name="radio1" value="80" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L80" htmlFor="r80"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/80.png" title="Richard Petty Historical" className="img-responsive" /></label>
            </td>
            <td>
                <input id="r84" name="radio1" value="84" onClick={getCheckboxValue.bind(this)} type="radio" /><label id="L84" htmlFor="r84"><img src="http://img03.platesmania.com/makenomer/us/ny/plates/84.png" title="Veterenarian" className="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default NyB1506;

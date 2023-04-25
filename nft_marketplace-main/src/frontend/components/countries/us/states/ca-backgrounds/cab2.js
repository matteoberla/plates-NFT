import { useEffect } from 'react'

const CaB2 = (props) => {

  const getCheckboxValue = (event) => {
    const value = event.target.value;
    props.func(value);
  }

  useEffect(() => {
    props.func("3");
  }, [])

    return (
      <table id="myTable">
   <tbody>
      <tr className="rouws">
         <td>
         <input id="r3" name="radio1" value="3" type="radio" defaultChecked/>
         <label id="L3" htmlFor="r3"><img src="http://img03.platesmania.com/makenomer/us/ca/plates/03.png" className="img-responsive"/>
         </label>
         </td>
      </tr>
   </tbody>
</table>
    )
}

export default CaB2;

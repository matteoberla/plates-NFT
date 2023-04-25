#https://webformatter.com/html

stringa = """


<table id="myTable">
    <tbody>
        <tr class="rouws">
            <td>
                <input id="r2" name="radio1" value="2" type="radio" checked="" /><label id="L2" for="r2"><img src="http://img03.platesmania.com/makenomer/us/tx/plates/02t.png" class="img-responsive" /></label>
            </td>
        </tr>
    </tbody>
</table>



"""



stringa = stringa.replace("for", "htmlFor")
stringa = stringa.replace("class", "className")
stringa = stringa.replace('checked=""', "defaultChecked")
stringa = stringa.replace("type", "onClick={getCheckboxValue.bind(this)} type")
stringa = stringa.replace("class", "class")


print(stringa)
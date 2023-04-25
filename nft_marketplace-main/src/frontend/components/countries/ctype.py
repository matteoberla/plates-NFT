
stringa = """


		<option value="1">Cars (1994 year series)</option>
								<option value="2">Motorcycles (1994 year series)</option>
								<option value="3">Trailers (1994 year series)</option>
								<option value="4">Temporary</option>
								<option value="5">Cars (1927 year series)</option>
								<option value="6">Motorcycles (1927 year series)</option>
								<option value="7">Trailers (1927 year series)</option>
								<option value="8">Specialty plates</option>
								<option value="9">Diplomatic</option>
		

"""


arrayOpt = stringa.split("<option")

for opt in arrayOpt:
    opt = opt.replace("/option>", "")
    opt = opt.replace("\n", "")
    #print(opt)   
    ind = opt.rfind('value="')
    #print(ind)
    apice = opt.rfind('"')
    #print(apice)
    
    mag = opt.rfind('>')
    min = opt.rfind('<')
    
    
    val = opt[ind + 7:apice]
    
    name = opt[mag + 1 :min]
    print("{ value: '" + str(val) + "', label: '" + str(name) + "'},")
    
    


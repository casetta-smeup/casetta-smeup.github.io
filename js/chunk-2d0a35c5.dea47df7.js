(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a35c5"],{"029f":function(o,e,t){"use strict";t.d(e,"b",function(){return n}),t.d(e,"d",function(){return u}),t.d(e,"f",function(){return s}),t.d(e,"g",function(){return i}),t.d(e,"a",function(){return b}),t.d(e,"j",function(){return j}),t.d(e,"h",function(){return v}),t.d(e,"e",function(){return k}),t.d(e,"i",function(){return D}),t.d(e,"c",function(){return C});t("7f7f"),t("6b54");var l=["DELGIO","CASFRA","PARFRA","FIOGIA","ZAMCHI"],p=["Java","Javascript","Delphi","Kotlin","Go"];function a(o,e){return Math.floor(Math.random()*(e-o)+o)}function n(o,e){for(var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=[],u=-20,s=10,i=[0,1],b=0;b<o;b++)n.push({name:"FLD"+b,title:"Column "+b,size:10,hideValuesRepetitions:t&&(Math.random()>.5||i.indexOf(b)>=0)});for(var j=[],v=0;v<e;v++){for(var k={cells:{}},D=0;D<n.length;D++){var C={};C.value=(t?u.toString():v.toString())+D.toString(),C.obj={t:"NR",p:"",k:C.value},0===D?(C.obj.t="",C.value=l[a(0,4)]):1===D&&(C.obj.t="",C.value=p[a(0,4)]),k.cells[n[D].name]=C}v%s||u++,j.push(k)}return{columns:n,rows:j}}var u={columns:[{name:"FLD1",title:"Column A",size:""},{name:"FLD2",title:"Column B",size:10},{name:"FLD3",title:"Column C",size:10},{name:"FLD4",title:"Column D",size:10}],rows:[{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},value:"CASFRA",options:!0},FLD2:{obj:{t:"NR",p:"",k:"10"},value:"10"},FLD3:{obj:{t:"NR",p:"",k:"100.60"},value:"100.60"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180101"},value:"01/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},value:"DELGIO",options:!0},FLD2:{obj:{t:"NR",p:"",k:"6"},value:"6"},FLD3:{obj:{t:"NR",p:"",k:"67.8"},value:"67.8"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180102"},value:"02/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},value:"PARFRA",options:!0},FLD2:{obj:{t:"NR",p:"",k:"5"},value:"5"},FLD3:{obj:{t:"NR",p:"",k:"120.06"},value:"120.06"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180103"},value:"03/01/2018"}}}]},s={columns:[{name:"FLD1",title:"Column A",size:"",visible:!1},{name:"FLD2",title:"Column B",size:10},{name:"FLD3",title:"Column C",size:10,visible:!1},{name:"FLD4",title:"Column D",size:10}],rows:[{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},value:"CASFRA"},FLD2:{obj:{t:"NR",p:"",k:"10"},value:"10"},FLD3:{obj:{t:"NR",p:"",k:"100.60"},value:"100.60"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180101"},value:"01/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},value:"DELGIO"},FLD2:{obj:{t:"NR",p:"",k:"6"},value:"6"},FLD3:{obj:{t:"NR",p:"",k:"67.8"},value:"67.8"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180102"},value:"02/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},value:"PARFRA"},FLD2:{obj:{t:"NR",p:"",k:"5"},value:"5"},FLD3:{obj:{t:"NR",p:"",k:"120.06"},value:"120.06"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180103"},value:"03/01/2018"}}}]},i={columns:[{name:"FLD1",title:"Person",size:""},{name:"FLD2",title:"Icon",size:10},{name:"FLD3",title:"Image",size:10}],rows:[{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},value:"John Doe"},FLD2:{obj:{t:"J4",p:"ICO",k:"CN;COL;CASFRA"},value:"mdi mdi-account"},FLD3:{obj:{t:"J4",p:"IMG",k:"CN;COL;CASFRA"},value:"https://webuptest.smeup.com/WebUPNightly/javax.faces.resource/OG%253BCN%253BCOL.jsf?ln=smeupImages"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},value:"Jonnie Doe"},FLD2:{obj:{t:"J4",p:"ICO",k:"OG;J1;PATHFILE"},value:"mdi mdi-folder"},FLD3:{obj:{t:"J4",p:"IMG",k:"OG;J1;PATHFILE"},value:"https://webuptest.smeup.com/WebUPNightly/javax.faces.resource/OG%253BJ1%253BPATHFILE.jsf?ln=smeupImages"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},value:"Baby Doe"},FLD2:{obj:{t:"J4",p:"ICO",k:"J1;KEY;CTRL"},value:"mdi mdi-play"},FLD3:{obj:{t:"J4",p:"IMG",k:"J1;KEY;CTRL"},value:"https://webuptest.smeup.com/WebUPNightly/javax.faces.resource/J1%253BKEY%253BCTRL.jsf?ln=smeupImages"}}}]},b={columns:[{name:"FLD1",title:"Column A",size:""},{name:"FLD2",title:"Column B",size:10},{name:"FLD3",title:"Column C",size:10},{name:"FLD4",title:"Column D",size:10}],rows:[{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},value:"CASFRA",style:{backgroundColor:"blue",color:"#FFF"}},FLD2:{obj:{t:"NR",p:"",k:"10"},value:"10",style:{backgroundColor:"blue",color:"#FFF"}},FLD3:{obj:{t:"NR",p:"",k:"100.60"},value:"100.60",style:{backgroundColor:"blue",color:"#FFF",borderRadius:"50px",padding:"3px"}},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180101"},value:"01/01/2018",style:{backgroundColor:"blue",color:"yellow",fontWeight:"bold"}}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},value:"DELGIO",style:{fontWeight:"bold"}},FLD2:{obj:{t:"NR",p:"",k:"6"},value:"6",style:{fontStyle:"italic",textAlign:"center"}},FLD3:{obj:{t:"NR",p:"",k:"67.8"},value:"67.8",style:{backgroundColor:"blue",color:"#FFF"}},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180102"},value:"02/01/2018",style:{fontSize:"30px"}}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},value:"PARFRA"},FLD2:{obj:{t:"NR",p:"",k:"5"},value:"5"},FLD3:{obj:{t:"NR",p:"",k:"120.06"},value:"120.06"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180103"},value:"03/01/2018"}}}]},j={columns:[{name:"FLD1",title:"Column A",size:""},{name:"FLD2",title:"Column B",size:10},{name:"FLD3",title:"Column C",size:10},{name:"FLD4",title:"Column D",size:10}],rows:[{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},options:!0,value:"CASFRA"},FLD2:{obj:{t:"NR",p:"",k:"10"},value:"10"},FLD3:{obj:{t:"NR",p:"",k:"100.60"},value:"100.60"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180101"},value:"01/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},options:!0,value:"DELGIO"},FLD2:{obj:{t:"NR",p:"",k:"-2"},value:"-2"},FLD3:{obj:{t:"NR",p:"",k:"67.8"},value:"67.8"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180102"},value:"02/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},options:!0,value:"PARFRA"},FLD2:{obj:{t:"NR",p:"",k:"5"},value:"5"},FLD3:{obj:{t:"NR",p:"",k:"120.06"},value:"120.06"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180103"},value:"03/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},options:!0,value:"CASFRA"},FLD2:{obj:{t:"NR",p:"",k:"11"},value:"11"},FLD3:{obj:{t:"NR",p:"",k:"100.60"},value:"100.60"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180101"},value:"01/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},options:!0,value:"DELGIO"},FLD2:{obj:{t:"NR",p:"",k:"7"},value:"7"},FLD3:{obj:{t:"NR",p:"",k:"67.8"},value:"67.8"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180102"},value:"02/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},options:!0,value:"PARFRA"},FLD2:{obj:{t:"NR",p:"",k:"6"},value:"6"},FLD3:{obj:{t:"NR",p:"",k:"120.06"},value:"120.06"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180103"},value:"03/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"CASFRA"},options:!0,value:"CASFRA"},FLD2:{obj:{t:"NR",p:"",k:"12"},value:"12"},FLD3:{obj:{t:"NR",p:"",k:"100.60"},value:"100.60"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180101"},value:"01/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"DELGIO"},options:!0,value:"DELGIO"},FLD2:{obj:{t:"NR",p:"",k:"8"},value:"8"},FLD3:{obj:{t:"NR",p:"",k:"67.8"},value:"67.8"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180102"},value:"02/01/2018"}}},{cells:{FLD1:{obj:{t:"CN",p:"COL",k:"PARFRA"},options:!0,value:"PARFRA"},FLD2:{obj:{t:"NR",p:"",k:"7"},value:"7"},FLD3:{obj:{t:"NR",p:"",k:"120.06"},value:"120.06"},FLD4:{obj:{t:"D8",p:"*YYMD",k:"20180103"},value:"03/01/2018"}}}]},v=n(20,1e4),k=n(10,3e3),D=n(8,1e3,!0);function C(){return{config:{rowsPerPage:50},data:{columns:[{name:"A",size:0,title:"Numero"},{name:"B",size:0,title:"BarCode"},{name:"C",size:0,title:"Si/No"}],rows:[{cells:{A:{obj:{k:"1",p:"",t:""},options:!1,value:"1"},B:{obj:{k:"J;1111ffffffffff",p:"BRC",t:"J4"},options:!1,value:"J;1111ffffffffff"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"0",object:"",readOnly:!0},{cells:{A:{obj:{k:"2",p:"",t:""},options:!1,value:"2"},B:{obj:{k:"A;12345",p:"BRC",t:"J4"},options:!1,value:"A;12345"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"1",object:"",readOnly:!0},{cells:{A:{obj:{k:"3",p:"",t:""},options:!1,value:"3"},B:{obj:{k:"B;987654321098",p:"BRC",t:"J4"},options:!1,value:"B;987654321098"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"2",object:"",readOnly:!0},{cells:{A:{obj:{k:"4",p:"",t:""},options:!1,value:"4"},B:{obj:{k:"C;123456789012",p:"BRC",t:"J4"},options:!1,value:"C;123456789012"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"3",object:"",readOnly:!0},{cells:{A:{obj:{k:"5",p:"",t:""},options:!1,value:"5"},B:{obj:{k:"D;1122334455667",p:"BRC",t:"J4"},options:!1,value:"D;1122334455667"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"4",object:"",readOnly:!0},{cells:{A:{obj:{k:"6",p:"",t:""},options:!1,value:"6"},B:{obj:{k:"E;9876543210123",p:"BRC",t:"J4"},options:!1,value:"E;9876543210123"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"5",object:"",readOnly:!0},{cells:{A:{obj:{k:"7",p:"",t:""},options:!1,value:"7"},B:{obj:{k:"F;0123987654456",p:"BRC",t:"J4"},options:!1,value:"F;0123987654456"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"6",object:"",readOnly:!0},{cells:{A:{obj:{k:"8",p:"",t:""},options:!1,value:"8"},B:{obj:{k:"G;1234567890123",p:"BRC",t:"J4"},options:!1,value:"G;1234567890123"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"7",object:"",readOnly:!0},{cells:{A:{obj:{k:"9",p:"",t:""},options:!1,value:"9"},B:{obj:{k:"H;51112345621",p:"BRC",t:"J4"},options:!1,value:"H;51112345621"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"8",object:"",readOnly:!0},{cells:{A:{obj:{k:"0",p:"",t:""},options:!1,value:"0"},B:{obj:{k:"I;12345678901",p:"BRC",t:"J4"},options:!1,value:"I;12345678901"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"9",object:"",readOnly:!0},{cells:{A:{obj:{k:"2",p:"",t:""},options:!1,value:"2"},B:{obj:{k:"2345",p:"BRC",t:"J4"},options:!1,value:"2345"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"10",object:"",readOnly:!0},{cells:{A:{obj:{k:"3",p:"",t:""},options:!1,value:"3"},B:{obj:{k:"6789",p:"BRC",t:"J4"},options:!1,value:"6789"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"11",object:"",readOnly:!0},{cells:{A:{obj:{k:"4",p:"",t:""},options:!1,value:"4"},B:{obj:{k:"2511",p:"BRC",t:"J4"},options:!1,value:"2511"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"12",object:"",readOnly:!0},{cells:{A:{obj:{k:"1",p:"",t:""},options:!1,value:"1"},B:{obj:{k:"1111",p:"BRC",t:"J4"},options:!1,value:"1111"},C:{obj:{k:"",p:"SI/NO",t:"V2"},options:!1,value:""}},id:"13",object:"",readOnly:!0},{cells:{A:{obj:{k:"2",p:"",t:""},options:!1,value:"2"},B:{obj:{k:"2345",p:"BRC",t:"J4"},options:!1,value:"2345"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"14",object:"",readOnly:!0},{cells:{A:{obj:{k:"3",p:"",t:""},options:!1,value:"3"},B:{obj:{k:"6789",p:"BRC",t:"J4"},options:!1,value:"6789"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"15",object:"",readOnly:!0},{cells:{A:{obj:{k:"4",p:"",t:""},options:!1,value:"4"},B:{obj:{k:"2511",p:"BRC",t:"J4"},options:!1,value:"2511"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"16",object:"",readOnly:!0},{cells:{A:{obj:{k:"1",p:"",t:""},options:!1,value:"1"},B:{obj:{k:"1111",p:"BRC",t:"J4"},options:!1,value:"1111"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"17",object:"",readOnly:!0},{cells:{A:{obj:{k:"2",p:"",t:""},options:!1,value:"2"},B:{obj:{k:"2345",p:"BRC",t:"J4"},options:!1,value:"2345"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"18",object:"",readOnly:!0},{cells:{A:{obj:{k:"3",p:"",t:""},options:!1,value:"3"},B:{obj:{k:"6789",p:"BRC",t:"J4"},options:!1,value:"6789"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"19",object:"",readOnly:!0},{cells:{A:{obj:{k:"4",p:"",t:""},options:!1,value:"4"},B:{obj:{k:"2511",p:"BRC",t:"J4"},options:!1,value:"2511"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"20",object:"",readOnly:!0},{cells:{A:{obj:{k:"1",p:"",t:""},options:!1,value:"1"},B:{obj:{k:"1111",p:"BRC",t:"J4"},options:!1,value:"1111"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"21",object:"",readOnly:!0},{cells:{A:{obj:{k:"2",p:"",t:""},options:!1,value:"2"},B:{obj:{k:"2345",p:"BRC",t:"J4"},options:!1,value:"2345"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"22",object:"",readOnly:!0},{cells:{A:{obj:{k:"3",p:"",t:""},options:!1,value:"3"},B:{obj:{k:"6789",p:"BRC",t:"J4"},options:!1,value:"6789"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"23",object:"",readOnly:!0},{cells:{A:{obj:{k:"4",p:"",t:""},options:!1,value:"4"},B:{obj:{k:"2511",p:"BRC",t:"J4"},options:!1,value:"2511"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"24",object:"",readOnly:!0},{cells:{A:{obj:{k:"1",p:"",t:""},options:!1,value:"1"},B:{obj:{k:"1111",p:"BRC",t:"J4"},options:!1,value:"1111"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"25",object:"",readOnly:!0},{cells:{A:{obj:{k:"2",p:"",t:""},options:!1,value:"2"},B:{obj:{k:"2345",p:"BRC",t:"J4"},options:!1,value:"2345"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"26",object:"",readOnly:!0},{cells:{A:{obj:{k:"3",p:"",t:""},options:!1,value:"3"},B:{obj:{k:"6789",p:"BRC",t:"J4"},options:!1,value:"6789"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"27",object:"",readOnly:!0},{cells:{A:{obj:{k:"4",p:"",t:""},options:!1,value:"4"},B:{obj:{k:"2511",p:"BRC",t:"J4"},options:!1,value:"2511"},C:{obj:{k:"1",p:"SI/NO",t:"V2"},options:!1,value:"1"}},id:"28",object:"",readOnly:!0}]},key:"i146"}}}}]);
//# sourceMappingURL=chunk-2d0a35c5.dea47df7.js.map
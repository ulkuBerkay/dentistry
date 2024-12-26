import{L as S,s as P}from"./main-e24c86ad.js";import{P as A}from"./page-header-c6b63424.js";import{a as L}from"./avatar-1-15b743f1.js";import{p as D}from"./profile-img-1e13af7a.js";import{_ as F,e as B,w as t,r as o,o as r,d as e,a as s,c as m,f as x,F as f,g as l,t as c}from"../js/app2.js";import"./logo-light-deb27e23.js";import"./logo-9faa3827.js";const q={series:[{name:"series1",data:[31,40,36,51,49,72,69,56,68,82,68,76]}],chartOptions:{chart:{height:320,type:"line",toolbar:"false",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:8,opacity:.2}},dataLabels:{enabled:!1},colors:["#556ee6"],stroke:{curve:"smooth",width:3}}},T={series:[56,38,26],chartOptions:{chart:{type:"donut",height:240},labels:["Series A","Series B","Series C"],colors:["#556ee6","#34c38f","#f46a6a"],legend:{show:!1},plotOptions:{pie:{donut:{size:"70%"}}}}},O={series:[37],chartOptions:{chart:{type:"radialBar",width:60,height:60,sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#556ee6"],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}}},$={series:[72],chartOptions:{chart:{type:"radialBar",width:60,height:60,sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#34c38f"],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}}},N={series:[54],chartOptions:{chart:{type:"radialBar",width:60,height:60,sparkline:{enabled:!0}},dataLabels:{enabled:!1},colors:["#f46a6a"],plotOptions:{radialBar:{hollow:{margin:0,size:"60%"},track:{margin:0},dataLabels:{show:!1}}}}},E={LineChart:q,DonutChart:T,RadialChart1:O,RadialChart2:$,RadialChart3:N},H={components:{Layout:S,PageHeader:A,simplebar:P},data(){return{avatar1:L,profileimg:D,title:"Saas",items:[{text:"Dashboards",href:"javascript:void(0)"},{text:"Saas",active:!0}],ChartData:E,earnings:[{name:"This month",amount:"$2453.35",revenue:"0.4",time:"From previous period",month:"Last month",previousamount:"$2281.04",series:[{name:"series1",data:[31,40,36,51,49,72,69,56,68,82,68,76]}]}],chartOptions:{chart:{height:320,type:"line",toolbar:"false",dropShadow:{enabled:!0,color:"#000",top:18,left:7,blur:8,opacity:.2}},dataLabels:{enabled:!1},colors:["#556ee6"],stroke:{curve:"smooth",width:3}},products:[{title:"Product A",amount:"$ 6385",revenue:"0.6",list:[{name:"Product A",text:"Neque quis est",sales:37},{name:"Product B",text:"Quis autem iure",sales:72},{name:"Product C",text:"Sed aliquam mauris.",sales:54}]}],productChartOptions:{chart:{type:"donut"},dataLabels:{enabled:!1},tooltip:{enabled:!1},legend:{show:!1},plotOptions:{pie:{donut:{labels:{show:!1},size:"65%"}}},responsive:[{breakpoint:480,options:{chart:{width:100}}}],colors:["#556ee6","#f8f9fa"]}}},mounted(){var u=document.querySelector("#containerElement .simplebar-content-wrapper");u.scrollTo({top:500,behavior:"smooth"})},methods:{monthlyEarning(u){switch(u.target.value){case"december":this.earnings=[{name:"This month",amount:"$2453.35",revenue:"0.4",time:"From previous period",month:"Last month",previousamount:"$2281.04",series:[{name:"series1",data:[31,22,12,41,20,12,89,46,78,62,28,56]}]}];break;case"november":this.earnings=[{name:"This month",amount:"$2887.35",revenue:"0.4",time:"From previous period",month:"Last month",previousamount:"$684.04",series:[{name:"series1",data:[28,30,48,50,47,40,35,48,56,42,65,41]}]}];break;case"october":this.earnings=[{name:"This month",amount:"$2100.35",revenue:"0.4",time:"From previous period",month:"Last month",previousamount:"$674.04",series:[{name:"series1",data:[28,48,39,47,58,46,38,47,30,40,70,42]}]}];break;case"january":this.earnings=[{name:"This month",amount:"$2453.35",revenue:"0.4",time:"From previous period",month:"Last month",previousamount:"$2281.04",series:[{name:"series1",data:[31,40,36,51,49,72,69,56,68,82,68,76]}]}];break;default:this.earnings=[{name:"This month",amount:"$2453.35",revenue:"0.4",time:"From previous period",month:"Last month",previousamount:"$2281.04",series:[{name:"series1",data:[31,40,36,51,49,72,69,56,68,82,68,76]}]}]}},SellProductChange(u){switch(u.target.value){case"december":this.products=[{title:"Product B",amount:"$ 7842",revenue:"0.4",list:[{name:"Product D",text:"Neque quis est",sales:41},{name:"Product E",text:"Quis autem iure",sales:14},{name:"Product F",text:"Sed aliquam mauris.",sales:85}]}];break;case"january":this.products=[{title:"Product A",amount:"$ 6385",revenue:"0.6",list:[{name:"Product A",text:"Neque quis est",sales:37},{name:"Product B",text:"Quis autem iure",sales:72},{name:"Product C",text:"Sed aliquam mauris.",sales:54}]}];break;case"november":this.products=[{title:"Product C",amount:"$ 4745",revenue:"0.8",list:[{name:"Product G",text:"Neque quis est",sales:37},{name:"Product H",text:"Quis autem iure",sales:42},{name:"Product I",text:"Sed aliquam mauris.",sales:63}]}];break;case"october":this.products=[{title:"Product D",amount:"$ 8745",revenue:"0.4",list:[{name:"Product J",text:"Neque quis est",sales:41},{name:"Product K",text:"Quis autem iure",sales:74},{name:"Product L",text:"Sed aliquam mauris.",sales:52}]}];default:this.products=[{title:"Product D",amount:"$ 8745",revenue:"0.4",list:[{name:"Product J",text:"Neque quis est",sales:41},{name:"Product K",text:"Quis autem iure",sales:74},{name:"Product L",text:"Sed aliquam mauris.",sales:52}]}];break}}}},M={class:"row"},I={class:"col-lg-12"},J={class:"card"},R={class:"card-body"},U={class:"row"},Q={class:"col-lg-4"},W={class:"d-flex"},V={class:"me-3"},K=["src"],G=s("div",{class:"flex-grow-1 align-self-center"},[s("div",{class:"text-muted"},[s("p",{class:"mb-2"}," Welcome to skote dashboard "),s("h5",{class:"mb-1"},"Henry wells"),s("p",{class:"mb-0"},"UI / UX Designer")])],-1),X=s("div",{class:"col-lg-4 align-self-center"},[s("div",{class:"text-lg-center mt-4 mt-lg-0"},[s("div",{class:"row"},[s("div",{class:"col-4"},[s("div",null,[s("p",{class:"text-muted text-truncate mb-2"}," Total Projects "),s("h5",{class:"mb-0"},"48")])]),s("div",{class:"col-4"},[s("div",null,[s("p",{class:"text-muted text-truncate mb-2"}," Projects "),s("h5",{class:"mb-0"},"40")])]),s("div",{class:"col-4"},[s("div",null,[s("p",{class:"text-muted text-truncate mb-2"}," Clients "),s("h5",{class:"mb-0"},"18")])])])])],-1),Y=s("div",{class:"col-lg-4 d-none d-lg-block"},[s("div",{class:"clearfix mt-4 mt-lg-0"},[s("div",{class:"dropdown float-end"},[s("button",{class:"btn btn-primary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},[s("i",{class:"bx bxs-cog align-middle me-1"}),l(" Setting ")]),s("div",{class:"dropdown-menu dropdown-menu-right"},[s("a",{class:"dropdown-item",href:"#"},"Action"),s("a",{class:"dropdown-item",href:"#"},"Another action"),s("a",{class:"dropdown-item",href:"#"},"Something else")])])])],-1),Z={class:"row"},ss={class:"col-xl-4"},ts={class:"card bg-soft bg-primary"},es={class:"row"},ls=s("div",{class:"col-7"},[s("div",{class:"text-primary p-3"},[s("h5",{class:"text-primary"},"Welcome Back !"),s("p",null,"Skote Saas Dashboard"),s("ul",{class:"ps-3 mb-0"},[s("li",{class:"py-1"},"7 + Layouts"),s("li",{class:"py-1"},"Multiple apps")])])],-1),as={class:"col-5 align-self-end"},is=["src"],cs=s("div",{class:"col-xl-8"},[s("div",{class:"row"},[s("div",{class:"col-sm-4"},[s("div",{class:"card"},[s("div",{class:"card-body"},[s("div",{class:"d-flex align-items-center mb-3"},[s("div",{class:"avatar-xs me-3"},[s("span",{class:"avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"},[s("i",{class:"bx bx-copy-alt"})])]),s("h5",{class:"font-size-14 mb-0"},"Orders")]),s("div",{class:"text-muted mt-4"},[s("h4",null,[l(" 1,452 "),s("i",{class:"mdi mdi-chevron-up ms-1 text-success"})]),s("div",{class:"d-flex"},[s("span",{class:"badge badge-soft-success font-size-12"}," + 0.2% "),s("span",{class:"ms-2 text-truncate"},"From previous period")])])])])]),s("div",{class:"col-sm-4"},[s("div",{class:"card"},[s("div",{class:"card-body"},[s("div",{class:"d-flex align-items-center mb-3"},[s("div",{class:"avatar-xs me-3"},[s("span",{class:"avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"},[s("i",{class:"bx bx-archive-in"})])]),s("h5",{class:"font-size-14 mb-0"},"Revenue")]),s("div",{class:"text-muted mt-4"},[s("h4",null,[l(" $ 28,452 "),s("i",{class:"mdi mdi-chevron-up ms-1 text-success"})]),s("div",{class:"d-flex"},[s("span",{class:"badge badge-soft-success font-size-12"}," + 0.2% "),s("span",{class:"ms-2 text-truncate"},"From previous period")])])])])]),s("div",{class:"col-sm-4"},[s("div",{class:"card"},[s("div",{class:"card-body"},[s("div",{class:"d-flex align-items-center mb-3"},[s("div",{class:"avatar-xs me-3"},[s("span",{class:"avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"},[s("i",{class:"bx bx-purchase-tag-alt"})])]),s("h5",{class:"font-size-14 mb-0"}," Average Price ")]),s("div",{class:"text-muted mt-4"},[s("h4",null,[l(" $ 16.2 "),s("i",{class:"mdi mdi-chevron-up ms-1 text-success"})]),s("div",{class:"d-flex"},[s("span",{class:"badge badge-soft-warning font-size-12"}," 0% "),s("span",{class:"ms-2 text-truncate"},"From previous period")])])])])])])],-1),ns={class:"row"},os={class:"col-xl-8"},ds={class:"card"},rs={class:"card-body"},us={class:"clearfix"},ms={class:"float-end"},hs={class:"input-group input-group-sm"},ps=s("option",{value:"january",selected:""},"Jan",-1),bs=s("option",{value:"december"},"Dec",-1),vs=s("option",{value:"november"},"Nov",-1),_s=s("option",{value:"october"},"Oct",-1),xs=[ps,bs,vs,_s],fs=s("label",{class:"input-group-text"},"Month",-1),gs=s("h4",{class:"card-title mb-4"},"Earning",-1),ks={class:"col-lg-4"},ys={class:"text-muted"},ws={class:"mb-4"},Cs={class:"badge badge-soft-success font-size-12 mr-1"},js=s("div",null,[s("a",{href:"javascript: void(0);",class:"btn btn-primary btn-sm"},[l(" View Details "),s("i",{class:"mdi mdi-chevron-right ml-1"})])],-1),zs={class:"mt-4"},Ss={class:"mb-2"},Ps={class:"col-lg-8"},As=s("div",{id:"line-chart"},null,-1),Ls={class:"col-xl-4"},Ds={class:"card"},Fs={class:"card-body"},Bs=s("h4",{class:"card-title mb-4"},"Sales Analytics",-1),qs=s("div",{class:"text-center text-muted"},[s("div",{class:"row"},[s("div",{class:"col-4"},[s("div",{class:"mt-4"},[s("p",{class:"mb-2 text-truncate"},[s("i",{class:"mdi mdi-circle text-primary me-1"}),l(" Product A ")]),s("h5",null,"$ 2,132")])]),s("div",{class:"col-4"},[s("div",{class:"mt-4"},[s("p",{class:"mb-2 text-truncate"},[s("i",{class:"mdi mdi-circle text-success me-1"}),l(" Product B ")]),s("h5",null,"$ 1,763")])]),s("div",{class:"col-4"},[s("div",{class:"mt-4"},[s("p",{class:"mb-2 text-truncate"},[s("i",{class:"mdi mdi-circle text-danger me-1"}),l(" Product C ")]),s("h5",null,"$ 973")])])])],-1),Ts={class:"row"},Os={class:"col-xl-4"},$s={class:"card"},Ns={class:"card-body"},Es={class:"clearfix"},Hs={class:"float-end"},Ms={class:"input-group input-group-sm"},Is=s("option",{value:"january",selected:""},"Jan",-1),Js=s("option",{value:"december"},"Dec",-1),Rs=s("option",{value:"november"},"Nov",-1),Us=s("option",{value:"october"},"Oct",-1),Qs=[Is,Js,Rs,Us],Ws=s("div",{class:"input-group-append"},[s("label",{class:"input-group-text"},"Month")],-1),Vs=s("h4",{class:"card-title mb-4"},"Top Selling product",-1),Ks={class:"text-muted text-center"},Gs={class:"mb-2"},Xs={class:"mt-4 mb-0"},Ys={class:"badge badge-soft-success font-size-11 me-2"},Zs=s("i",{class:"mdi mdi-arrow-up"},null,-1),st={class:"table-responsive mt-4"},tt={class:"table align-middle mb-0"},et={class:"font-size-14 mb-1"},lt={class:"text-muted mb-0"},at=s("p",{class:"text-muted mb-1"}," Sales ",-1),it={class:"mb-0"},ct={class:"col-xl-4"},nt={class:"card"},ot={class:"card-body"},dt=s("h4",{class:"card-title mb-4"},"Tasks",-1),rt=s("div",{class:"table-responsive mb-0"},[s("table",{class:"table table-nowrap align-mid table-hover"},[s("tbody",null,[s("tr",null,[s("td",{style:{width:"50px"}},[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck01"}),s("label",{class:"form-check-label",for:"tasklistCheck01"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Skote Saas Dashboard ")]),s("p",{class:"text-muted mb-0"}," Assigned to Mark ")]),s("td",{style:{width:"90px"}},[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck02"}),s("label",{class:"form-check-label",for:"tasklistCheck02"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"},"New Landing UI")]),s("p",{class:"text-muted mb-0"}," Assigned to Team A ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck03"}),s("label",{class:"form-check-label",for:"tasklistCheck03"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Brand logo design ")]),s("p",{class:"text-muted mb-0"}," Assigned to Janis ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck04"}),s("label",{class:"form-check-label",for:"tasklistCheck04"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("label",{href:"javascript: void(0);",class:"text-dark"}," Blog Template UI ")]),s("p",{class:"text-muted mb-0"}," Assigned to Dianna ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck05"}),s("label",{class:"form-check-label",for:"tasklistCheck05"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Multipurpose Landing ")]),s("p",{class:"text-muted mb-0"}," Assigned to Team B ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck06"}),s("label",{class:"form-check-label",for:"tasklistCheck06"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Redesign - Landing page ")]),s("p",{class:"text-muted mb-0"}," Assigned to Jerry ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck07"}),s("label",{class:"form-check-label",for:"tasklistCheck07"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Skote Crypto Dashboard ")]),s("p",{class:"text-muted mb-0"}," Assigned to Eric ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])])])])],-1),ut=s("div",{class:"table-responsive"},[s("table",{class:"table table-nowrap align-mid table-hover mb-0"},[s("tbody",null,[s("tr",null,[s("td",{style:{width:"50px"}},[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck01"}),s("label",{class:"form-check-label",for:"tasklistCheck01"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Skote Saas Dashboard ")]),s("p",{class:"text-muted mb-0"}," Assigned to Mark ")]),s("td",{style:{width:"90px"}},[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck02"}),s("label",{class:"form-check-label",for:"tasklistCheck02"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"},"New Landing UI")]),s("p",{class:"text-muted mb-0"}," Assigned to Team A ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck03"}),s("label",{class:"form-check-label",for:"tasklistCheck03"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Brand logo design ")]),s("p",{class:"text-muted mb-0"}," Assigned to Janis ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck04"}),s("label",{class:"form-check-label",for:"tasklistCheck04"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Blog Template UI ")]),s("p",{class:"text-muted mb-0"}," Assigned to Dianna ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck05"}),s("label",{class:"form-check-label",for:"tasklistCheck05"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Multipurpose Landing ")]),s("p",{class:"text-muted mb-0"}," Assigned to Team B ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck06"}),s("label",{class:"form-check-label",for:"tasklistCheck06"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Redesign - Landing page ")]),s("p",{class:"text-muted mb-0"}," Assigned to Jerry ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])]),s("tr",null,[s("td",null,[s("div",{class:"form-check"},[s("input",{class:"form-check-input",type:"checkbox",id:"tasklistCheck07"}),s("label",{class:"form-check-label",for:"tasklistCheck07"})])]),s("td",null,[s("h5",{class:"text-truncate font-size-14 mb-1"},[s("a",{href:"javascript: void(0);",class:"text-dark"}," Skote Crypto Dashboard ")]),s("p",{class:"text-muted mb-0"}," Assigned to Eric ")]),s("td",null,[s("div",null,[s("ul",{class:"list-inline mb-0 font-size-16"},[s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-success p-1"},[s("i",{class:"bx bxs-edit-alt"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"javascript: void(0);",class:"text-danger p-1"},[s("i",{class:"bx bxs-trash"})])])])])])])])])],-1),mt=s("div",{class:"card-footer bg-transparent border-top"},[s("div",{class:"text-center"},[s("a",{href:"javascript: void(0);",class:"btn btn-primary waves-effect waves-light"}," Add new Task")])],-1),ht={class:"col-xl-4"},pt={class:"card"},bt={class:"card-body border-bottom"},vt={class:"row"},_t=s("div",{class:"col-md-4 col-9"},[s("h5",{class:"font-size-15 mb-1"}," Steven Franklin "),s("p",{class:"text-muted mb-0"},[s("i",{class:"mdi mdi-circle text-success align-middle me-1"}),l(" Active now ")])],-1),xt={class:"col-md-8 col-3"},ft={class:"list-inline user-chat-nav text-end mb-0"},gt={class:"list-inline-item d-none d-sm-inline-block"},kt=s("i",{class:"bx bx-search-alt-2"},null,-1),yt=s("form",{class:"p-3"},[s("div",{class:"form-group m-0"},[s("div",{class:"input-group"},[s("input",{type:"text",class:"form-control",placeholder:"Search ...","aria-label":"Recipient's username"}),s("div",{class:"input-group-append"},[s("button",{class:"btn btn-primary",type:"submit"},[s("i",{class:"mdi mdi-magnify"})])])])])],-1),wt={class:"list-inline-item d-none d-sm-inline-block"},Ct=s("i",{class:"bx bx-cog"},null,-1),jt={class:"list-inline-item"},zt=s("i",{class:"bx bx-dots-horizontal-rounded"},null,-1),St={class:"card-body pb-0"},Pt={class:"chat-conversation"},At={class:"list-unstyled"},Lt=s("li",null,[s("div",{class:"chat-day-title"},[s("span",{class:"title"},"Today")])],-1),Dt={class:"conversation-list"},Ft=s("i",{class:"bx bx-dots-vertical-rounded"},null,-1),Bt=s("div",{class:"ctext-wrap"},[s("div",{class:"conversation-name"}," Steven Franklin "),s("p",null,"Hello!"),s("p",{class:"chat-time mb-0"},[s("i",{class:"bx bx-time-five align-middle me-1"}),l(" 10:00 ")])],-1),qt={class:"right"},Tt={class:"conversation-list"},Ot=s("i",{class:"bx bx-dots-vertical-rounded"},null,-1),$t=s("div",{class:"ctext-wrap"},[s("div",{class:"conversation-name"}," Henry Wells "),s("p",null," Hi, How are you? What about our next meeting? "),s("p",{class:"chat-time mb-0"},[s("i",{class:"bx bx-time-five align-middle me-1"}),l(" 10:02 ")])],-1),Nt={class:"conversation-list"},Et=s("i",{class:"bx bx-dots-vertical-rounded"},null,-1),Ht=s("div",{class:"ctext-wrap"},[s("div",{class:"conversation-name"}," Steven Franklin "),s("p",null," Yeah everything is fine "),s("p",{class:"chat-time mb-0"},[s("i",{class:"bx bx-time-five align-middle me-1"}),l(" 10:06 ")])],-1),Mt={class:"last-chat"},It={class:"conversation-list"},Jt=s("i",{class:"bx bx-dots-vertical-rounded"},null,-1),Rt=s("div",{class:"ctext-wrap"},[s("div",{class:"conversation-name"}," Steven Franklin "),s("p",null," & Next meeting tomorrow 10.00AM "),s("p",{class:"chat-time mb-0"},[s("i",{class:"bx bx-time-five align-middle me-1"}),l(" 10:06 ")])],-1),Ut={class:"right"},Qt={class:"conversation-list"},Wt=s("i",{class:"bx bx-dots-vertical-rounded"},null,-1),Vt=s("div",{class:"ctext-wrap"},[s("div",{class:"conversation-name"}," Henry Wells "),s("p",null,"Wow that's great"),s("p",{class:"chat-time mb-0"},[s("i",{class:"bx bx-time-five align-middle me-1"}),l(" 10:07 ")])],-1),Kt=s("div",{class:"p-3 chat-input-section"},[s("div",{class:"row"},[s("div",{class:"col"},[s("div",{class:"position-relative"},[s("input",{type:"text",class:"form-control rounded chat-input",placeholder:"Enter Message..."}),s("div",{class:"chat-input-links"},[s("ul",{class:"list-inline mb-0"},[s("li",{class:"list-inline-item"},[s("a",{href:"#","data-toggle":"tooltip","data-placement":"top",title:"Emoji"},[s("i",{class:"mdi mdi-emoticon-happy-outline"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"#","data-toggle":"tooltip","data-placement":"top",title:"Images"},[s("i",{class:"mdi mdi-file-image-outline"})])]),s("li",{class:"list-inline-item"},[s("a",{href:"#","data-toggle":"tooltip","data-placement":"top",title:"Add Files"},[s("i",{class:"mdi mdi-file-document-outline"})])])])])])]),s("div",{class:"col-auto"},[s("button",{type:"submit",class:"btn btn-primary chat-send w-md waves-effect waves-light"},[s("span",{class:"d-none d-sm-inline-block me-2"},"Send"),s("i",{class:"mdi mdi-send"})])])])],-1);function Gt(u,h,Xt,Yt,n,g){const w=o("PageHeader"),b=o("apexchart"),v=o("simplebar"),k=o("b-card-text"),y=o("b-tab"),C=o("b-tabs"),d=o("b-dropdown"),a=o("b-dropdown-item"),j=o("Layout");return r(),B(j,null,{default:t(()=>[e(w,{title:n.title,items:n.items},null,8,["title","items"]),s("div",M,[s("div",I,[s("div",J,[s("div",R,[s("div",U,[s("div",Q,[s("div",W,[s("div",V,[s("img",{src:n.avatar1,alt:"",class:"avatar-md rounded-circle img-thumbnail"},null,8,K)]),G])]),X,Y])])])])]),s("div",Z,[s("div",ss,[s("div",ts,[s("div",null,[s("div",es,[ls,s("div",as,[s("img",{src:n.profileimg,alt:"",class:"img-fluid"},null,8,is)])])])])]),cs]),s("div",ns,[s("div",os,[s("div",ds,[s("div",rs,[s("div",us,[s("div",ms,[s("div",hs,[s("select",{class:"form-select form-select-sm",onChange:h[0]||(h[0]=i=>g.monthlyEarning(i))},xs,32),fs])]),gs]),(r(!0),m(f,null,x(n.earnings,(i,_)=>(r(),m("div",{class:"row",key:_},[s("div",ks,[s("div",ys,[s("div",ws,[s("p",null,c(i.name),1),s("h4",null,c(i.amount),1),s("div",null,[s("span",Cs,"+ "+c(i.revenue)+"%",1),l(" "+c(i.time),1)])]),js,s("div",zs,[s("p",Ss,c(i.month),1),s("h5",null,c(i.previousamount),1)])])]),s("div",Ps,[As,e(b,{class:"apex-charts",dir:"ltr",height:"300",series:i.series,options:n.chartOptions},null,8,["series","options"])])]))),128))])])]),s("div",Ls,[s("div",Ds,[s("div",Fs,[Bs,s("div",null,[e(b,{class:"apex-charts",options:n.ChartData.DonutChart.chartOptions,series:n.ChartData.DonutChart.series,dir:"ltr",height:"240"},null,8,["options","series"])]),qs])])])]),s("div",Ts,[s("div",Os,[s("div",$s,[s("div",Ns,[s("div",Es,[s("div",Hs,[s("div",Ms,[s("select",{class:"form-select form-select-sm",onChange:h[1]||(h[1]=i=>g.SellProductChange(i))},Qs,32),Ws])]),Vs]),(r(!0),m(f,null,x(n.products,(i,_)=>(r(),m("div",{key:_},[s("div",Ks,[s("p",Gs,c(i.title),1),s("h4",null,c(i.amount),1),s("p",Xs,[s("span",Ys,[l(c(i.revenue)+"% ",1),Zs]),l(" From previous period ")])]),s("div",st,[s("table",tt,[s("tbody",null,[(r(!0),m(f,null,x(i.list,(p,z)=>(r(),m("tr",{key:z},[s("td",null,[s("h5",et,c(p.name),1),s("p",lt,c(p.text),1)]),s("td",null,[e(b,{options:n.productChartOptions,series:[100,p.sales],height:"80",width:"85"},null,8,["options","series"])]),s("td",null,[at,s("h5",it,c(p.sales)+" % ",1)])]))),128))])])])]))),128))])])]),s("div",ct,[s("div",nt,[s("div",ot,[dt,e(C,{pills:"","nav-class":"bg-light rounded","content-class":"mt-4"},{default:t(()=>[e(y,{title:"In Process",active:""},{default:t(()=>[e(k,null,{default:t(()=>[e(v,{style:{"max-height":"250px"}},{default:t(()=>[rt]),_:1})]),_:1})]),_:1}),e(y,{title:"Upcoming"},{default:t(()=>[e(k,null,{default:t(()=>[e(v,{style:{"max-height":"250px"}},{default:t(()=>[ut]),_:1})]),_:1})]),_:1})]),_:1})]),mt])]),s("div",ht,[s("div",pt,[s("div",bt,[s("div",vt,[_t,s("div",xt,[s("ul",ft,[s("li",gt,[e(d,{right:"","menu-class":"dropdown-menu-end py-0 dropdown-menu-md",variant:"white","toggle-class":"p-0 nav-btn"},{"button-content":t(()=>[kt]),default:t(()=>[yt]),_:1})]),s("li",wt,[e(d,{"toggle-class":"nav-btn","menu-class":"dropdown-menu-end",right:"",variant:"white"},{"button-content":t(()=>[Ct]),default:t(()=>[e(a,null,{default:t(()=>[l("View Profile")]),_:1}),e(a,null,{default:t(()=>[l("Clear chat")]),_:1}),e(a,null,{default:t(()=>[l("Muted")]),_:1}),e(a,null,{default:t(()=>[l("Delete")]),_:1})]),_:1})]),s("li",jt,[e(d,{"toggle-class":"nav-btn","menu-class":"dropdown-menu-end",right:"",variant:"white"},{"button-content":t(()=>[zt]),default:t(()=>[e(a,null,{default:t(()=>[l("Action")]),_:1}),e(a,null,{default:t(()=>[l("Another action")]),_:1}),e(a,null,{default:t(()=>[l("Something else")]),_:1})]),_:1})])])])])]),s("div",St,[s("div",null,[s("div",Pt,[s("ul",At,[e(v,{style:{"max-height":"260px"},ref:"current",id:"containerElement"},{default:t(()=>[Lt,s("li",null,[s("div",Dt,[e(d,{variant:"white","menu-class":"dropdown-menu-end"},{"button-content":t(()=>[Ft]),default:t(()=>[e(a,null,{default:t(()=>[l("Copy")]),_:1}),e(a,null,{default:t(()=>[l("Save")]),_:1}),e(a,null,{default:t(()=>[l("Forward")]),_:1}),e(a,null,{default:t(()=>[l("Delete")]),_:1})]),_:1}),Bt])]),s("li",qt,[s("div",Tt,[e(d,{variant:"white","menu-class":"dropdown-menu-end"},{"button-content":t(()=>[Ot]),default:t(()=>[e(a,null,{default:t(()=>[l("Copy")]),_:1}),e(a,null,{default:t(()=>[l("Save")]),_:1}),e(a,null,{default:t(()=>[l("Forward")]),_:1}),e(a,null,{default:t(()=>[l("Delete")]),_:1})]),_:1}),$t])]),s("li",null,[s("div",Nt,[e(d,{variant:"white","menu-class":"dropdown-menu-end"},{"button-content":t(()=>[Et]),default:t(()=>[e(a,null,{default:t(()=>[l("Copy")]),_:1}),e(a,null,{default:t(()=>[l("Save")]),_:1}),e(a,null,{default:t(()=>[l("Forward")]),_:1}),e(a,null,{default:t(()=>[l("Delete")]),_:1})]),_:1}),Ht])]),s("li",Mt,[s("div",It,[e(d,{variant:"white","menu-class":"dropdown-menu-end"},{"button-content":t(()=>[Jt]),default:t(()=>[e(a,null,{default:t(()=>[l("Copy")]),_:1}),e(a,null,{default:t(()=>[l("Save")]),_:1}),e(a,null,{default:t(()=>[l("Forward")]),_:1}),e(a,null,{default:t(()=>[l("Delete")]),_:1})]),_:1}),Rt])]),s("li",Ut,[s("div",Qt,[e(d,{variant:"white","menu-class":"dropdown-menu-end"},{"button-content":t(()=>[Wt]),default:t(()=>[e(a,null,{default:t(()=>[l("Copy")]),_:1}),e(a,null,{default:t(()=>[l("Save")]),_:1}),e(a,null,{default:t(()=>[l("Forward")]),_:1}),e(a,null,{default:t(()=>[l("Delete")]),_:1})]),_:1}),Vt])])]),_:1},512)])])])]),Kt])])])]),_:1})}const ce=F(H,[["render",Gt]]);export{ce as default};

(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{126:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(12),o=t.n(r),l=(t(51),t(6)),s=t(7),c=t(10),d=t(8),u=t(9),h=(t(53),t(26)),m=(t(55),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"bigButtons"},i.a.createElement("ul",{className:"boxList"},i.a.createElement(h.a,{to:"/9-10",exact:!0},i.a.createElement("li",{className:"boxItem"},i.a.createElement("div",{className:"boxItemHelper"},i.a.createElement("div",{className:"name"},"College 9/10"),i.a.createElement("div",{className:"capacity"},"Capacity"),i.a.createElement("div",{className:"rating"},"Rating")))),i.a.createElement(h.a,{to:"/cowell-stevenson",exact:!0},i.a.createElement("li",{className:"boxItem"},i.a.createElement("div",{className:"boxItemHelper"},i.a.createElement("div",{className:"name"},"Cowell/Stevenson"),i.a.createElement("div",{className:"capacity"},"Capacity"),i.a.createElement("div",{className:"rating"},"Rating")))),i.a.createElement(h.a,{to:"/crown-merrill",exact:!0},i.a.createElement("li",{className:"boxItem"},i.a.createElement("div",{className:"boxItemHelper"},i.a.createElement("div",{className:"name"},"Crown/Merrill"),i.a.createElement("div",{className:"capacity"},"Capacity"),i.a.createElement("div",{className:"rating"},"Rating")))),i.a.createElement(h.a,{to:"/porter-kresge",exact:!0},i.a.createElement("li",{className:"boxItem"},i.a.createElement("div",{className:"boxItemHelper"},i.a.createElement("div",{className:"name"},"Porter/Kresge"),i.a.createElement("div",{className:"capacity"},"Capacity"),i.a.createElement("div",{className:"rating"},"Rating")))),i.a.createElement(h.a,{to:"/rcc-oakes",exact:!0},i.a.createElement("li",{className:"boxItem"},i.a.createElement("div",{className:"boxItemHelper"},i.a.createElement("div",{className:"name"},"Rachel Carson/Oakes"),i.a.createElement("div",{className:"capacity"},"Capacity"),i.a.createElement("div",{className:"rating"},"Rating"))))))}}]),a}(i.a.Component)),C=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{className:"title"},"Dining Slug",i.a.createElement("img",{src:t(29)})),i.a.createElement("div",{className:"gradient"}),i.a.createElement(m,null)),i.a.createElement("body",null))}}]),a}(i.a.Component),g=(t(60),function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("ul",{class:"quickNavList"},i.a.createElement("li",{class:"quickNav"},i.a.createElement(h.a,{to:"/",exact:!0},"Home")),i.a.createElement("li",{class:"quickNav"},i.a.createElement(h.a,{to:"/9-10",exact:!0},"9/10")),i.a.createElement("li",{class:"quickNav"},i.a.createElement(h.a,{to:"/cowell-stevenson",exact:!0},"Cowell/Stevenson")),i.a.createElement("li",{class:"quickNav"},i.a.createElement(h.a,{to:"/crown-merrill",exact:!0},"Crown/Merill")),i.a.createElement("li",{class:"quickNav"},i.a.createElement(h.a,{to:"/porter-kresge",exact:!0},"Porter/Kresge")),i.a.createElement("li",{class:"quickNav"},i.a.createElement(h.a,{to:"/rcc-oakes",exact:!0},"Rachel Carson/Oakes"))))}}]),a}(i.a.Component)),S=t(11),p=(t(62),t(41)),B=t.n(p),k=(t(67),function(e){function a(e){var n;Object(l.a)(this,a);(n=Object(c.a)(this,Object(d.a)(a).call(this,e))).props.itemName;var i,r=0,o=t(68),s=0;for(i=0;i<o.length;i++)if(o[i].Food===n.props.itemName){r=o[i].Rating/o[i].Reviews,s=o[i].Reviews,console.log("Rating = ",r);break}return n.state={rating:r,reviews:s,foodCode:i,foodJSON:o,alreadyReviewed:0},n.changeRating=n.changeRating.bind(Object(S.a)(Object(S.a)(n))),n}return Object(u.a)(a,e),Object(s.a)(a,[{key:"changeRating",value:function(e){if(1!==this.state.alreadyReviewed){var a=this.state.reviews+1,t=(e+this.state.rating*this.state.reviews)/a;console.log("NEW RATING: ",t),this.setState({rating:t,reviews:a,alreadyReviewed:1})}else alert("You've already reviewed this item!")}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("button",{className:"listFood"},this.props.itemName," | Reviews: ",this.state.reviews,i.a.createElement("h3",null,"Rating:",i.a.createElement(B.a,{rating:this.state.rating,widgetRatedColors:"rgb(0, 80, 98)",widgetEmptyColors:"rgb(203, 211, 227)",widgetHoverColors:"rgb(0, 110, 110)",changeRating:this.changeRating,widgetDimensions:"20px"},i.a.createElement(B.a.Widget,null),i.a.createElement(B.a.Widget,null),i.a.createElement(B.a.Widget,null),i.a.createElement(B.a.Widget,null),i.a.createElement(B.a.Widget,null)))))}}]),a}(i.a.Component)),E=(t(69),t(43)),R=t.n(E),A=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(c.a)(this,Object(d.a)(a).call(this,e))).renderList=function(){var e=t.state.recipes[t.props.hallCode];e.Title;return e.Menu.map(function(e){var a=e.Title,t=e.Food,n=t.map(function(e){return i.a.createElement("div",null,i.a.createElement(k,{itemName:e}))});return t.length>0?i.a.createElement(R.a,{trigger:a},i.a.createElement("ul",null,n)):void 0})},t.state={recipes:[]},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentWillMount",value:function(){this.setState({recipes:t(71)})}},{key:"render",value:function(){return i.a.createElement("div",{class:"wrapper"},this.renderList())}}]),a}(i.a.Component),f=t(44),w=t(42),T=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(c.a)(this,Object(d.a)(a).call(this))).onchangeOne=function(a){e.setState({query:a.target.value}),a.preventDefault(),""===a.target.value?e.setState({showMenu:!1}):e.setState({showMenu:!0},function(){document.addEventListener("click",e.closeMenu)})},e.renderResults=function(e){return i.a.createElement("div",{className:"col-md-3",style:{marginTop:"10px"}},i.a.createElement(w.Card,null,i.a.createElement(w.CardBody,null,i.a.createElement("button",{title:e},e.substring(0,15),e.length>15&&"..."))))},e.closeMenu=e.closeMenu.bind(Object(S.a)(Object(S.a)(e))),e.state={query:"",showMenu:!1},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"closeMenu",value:function(e){var a=this;null!==this.dropdownMenu&&this.dropdownMenu.contains(e.target)||this.setState({showMenu:!1},function(){document.removeEventListener("click",a.closeMenu)})}},{key:"render",value:function(){var e=this,a=this.state.query,t=f.Food.filter(function(e){return-1!==e.toLowerCase().indexOf(a.toLowerCase())});return i.a.createElement("div",null,i.a.createElement("input",{placeholder:"Search for...",ref:function(a){return e.search=a},onChange:this.onchangeOne}),i.a.createElement("div",{className:"menu ",ref:function(a){e.dropdownMenu=a}},this.state.showMenu?t.map(function(a){return e.renderResults(a)}):null))}}]),a}(n.Component),v=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e;switch(this.props.name){case"9/10":e=0;break;case"Cowell/Stevenson":e=1;break;case"Crown/Merrill":e=2;break;case"Porter/Kresge":e=3;break;default:e=4}return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{className:"title"},this.props.name,i.a.createElement("img",{src:t(29)})),i.a.createElement("div",{className:"gradient"}),i.a.createElement(g,null),i.a.createElement(T,null),i.a.createElement(A,{hallCode:e})))}}]),a}(i.a.Component),b=t(39),O=t(40),F=t(22),y=function(e){function a(){return Object(l.a)(this,a),Object(c.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(b.a,null,i.a.createElement(O.a,null,i.a.createElement(F.a,{path:"/",component:C,exact:!0,strict:!0}),i.a.createElement(F.a,{path:"/9-10",exact:!0,render:function(){return i.a.createElement(v,{name:"9/10"})}}),i.a.createElement(F.a,{path:"/cowell-stevenson",exact:!0,render:function(){return i.a.createElement(v,{name:"Cowell/Stevenson"})}}),i.a.createElement(F.a,{path:"/crown-merrill",exact:!0,render:function(){return i.a.createElement(v,{name:"Crown/Merrill"})}}),i.a.createElement(F.a,{path:"/porter-kresge",exact:!0,render:function(){return i.a.createElement(v,{name:"Porter/Kresge"})}}),i.a.createElement(F.a,{path:"/rcc-oakes",exact:!0,render:function(){return i.a.createElement(v,{name:"Rachel Carson/Oakes"})}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,a){e.exports="data:image/png;base64,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"},44:function(e){e.exports={Id:1,Food:["Belgian Waffles","Cage Free Scrambled Eggs","Crispy Bacon","Hard-boiled Cage Free Eggs","Natural BridgesTofu Scramble","Oatmeal Gluten-Free","Pumpkin Pancakes","Quinoa Fruit Salad","Tator Tots","Almond Allspice Coffecake","Carrot Raisin Muffin","Morning Glory Blueberry Granola Nut Muffin","Vegan Peanut Granola","Bell Peppers","Cage Free Eggs","Cage Free Omelette Bar","Cheddar Cheese","Feta Cheese","Fresh Organic Spinach","Fresh Tomato","Jalapeno","Onions","Oven Roasted Turkey","Sliced Olived","Smoked Ham","Green Pozole","Tomato Bisque Soup","Baked Chicken with Spices","Oven Roasted Chicken Thigh","Cheese Pizza","Chicken Club Pizza","Garlic Mashed Yukon Golds","Sauteed Seasonal Vegetable","Sloppy Joe Sandwich","Tofu Baton Rouge Stroller","Rice Krispy Treats","Vegan Chocolate Cup Cakes","Cajun Bayou Bar","Chicken Tenders","Chipotle BBQ Sauce","Jalapeno Corn Cakes","Mardi Gras Jambalaya","Sausage Andouille","Steamed Rice"]}},46:function(e,a,t){e.exports=t(126)},51:function(e,a,t){},53:function(e,a,t){},55:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},68:function(e){e.exports=[{Food:"Belgian Waffles",Rating:256,Reviews:100},{Food:"Cage Free Scrambled Eggs",Rating:256,Reviews:100},{Food:"Crispy Bacon",Rating:256,Reviews:100},{Food:"Eggbeaters Scramble",Rating:256,Reviews:100},{Food:"Hard-boiled Cage Free Eggs",Rating:256,Reviews:100},{Food:"Oatmeal Gluten-Free",Rating:256,Reviews:100}]},69:function(e,a,t){},71:function(e,a,t){var n=t(72);e.exports=n.data},72:function(e){e.exports={data:[{Title:"Colleges Nine & Ten Menu",Date:"Menus for Wednesday, November 14, 2018",Hours:"Hours go here",Menu:[{Title:"Breakfast",Food:["Belgian Waffles","Bob's Pancakes","Cage Free Scrambled Eggs","Cinnamon Roasted Butternut Squash","Hard-boiled Cage Free Eggs","Oatmeal Gluten-Free","Sausage Patties","Soyrizo Tofu Scramble","Spicy Gold Potatoes","Almond Bear Claws","Apricot Crunch Muffin","Chocolate Chip Muffin","Old Fashioned Frosted Donut","Vegan Peanut Granola","Bell Peppers","Cage Free Eggs","Cage Free Omelette Bar","Cheddar Cheese","Feta Cheese","Fresh Organic Spinach","Fresh Tomato","Jalapeno","Onions","Oven Roasted Turkey","Sliced Olived","Smoked Ham"]},{Title:"Lunch",Food:["Soup Of The Day","Sizzling Buffalo Chicken Salad","Sizzling Buffalo Tofu Salad","Beef Tamales","Oven Roasted Chicken Thigh","Steamed Rice","Cheese Pizza","Garden Patch Supreme Pizza","Black Beans","Mexican Rice","Steamed Seasonal Vegetables","Rice Krispy Treats","UCSC Bakery French Rolls","Vegan Brownie","BBQ Shredded Pork","Chicken Tenders","Chipotle BBQ Sauce","Condiments","Mashed Potato Bowl Bar","Roasted Kale and Butternut Squash","Vegan Garlic Mashed Potatoes","Vegan Mushroom Gravy"]},{Title:"Dinner",Food:["Soup Of The Day","Oven Roasted Chicken Thigh","Steamed Rice","Sustainable Caught Roasted Cod Puttanesca","Cheese Pizza","Garden Patch Supreme Pizza","Spicy Beef with Garlic & Basil","Spicy Vegan with Garlic & Basil","Creamy Polenta","Sesame Chow Mein Noodles","Steamed Seasonal Vegetables","Roasted Vegetable Quesadilla","Bread Pudding","Rice Krispy Treats","UCSC Bakery French Rolls","Argentinian Roasted Chicken","Black Beans","Braised Kale with Crispy Shallots","Condiments","Grilled Chimichurri Tofu","Peruvian Bar","Quinoa with Lemon and Thyme","Roasted Corn","Roasted Sweet Potatoes","Curly Fries","Halal Chicken Patty Sandwich"]},{Title:"Late Night",Food:["Oven Roasted Chicken Thigh","Penne","Spicy Arrabbiata Sauce","Steamed Rice","Swedish Meatballs","Vegan Polpette","Cheese Pizza","Garden Patch Supreme Pizza","Barcelona Steak Sandwich","Curly Fries","Bar Indian","Basmati Rice Pullao","Cauliflower Lentil Dal","Chickpea Curry with Tomato and Kale","Condiments","Madras Chicken","Original Naan"]}]},{Title:"Cowell/Stevenson Dining Hall Menu",Date:"Menus for Wednesday, November 14, 2018",Hours:"Hours go here",Menu:[{Title:"Breakfast",Food:["Belgian Waffles","Blueberry Pancakes","Cage Free Scrambled Eggs","Chicken Apple Sausage","Cinnamon Roasted Butternut Squash","Eggbeaters Scramble","Hard-boiled Cage Free Eggs","Natural BridgesTofu Scramble","Oatmeal Gluten-Free","Spicy Gold Potatoes","Almond Bear Claws","Apricot Crunch Muffin","Chocolate Chip Muffin","Old Fashioned Frosted Donut","Vegan Peanut Granola","Bell Peppers","Cage Free Eggs","Cage Free Omelette Bar","Cheddar Cheese","Feta Cheese","Fresh Organic Spinach","Fresh Tomato","Jalapeno","Onions","Oven Roasted Turkey","Sliced Olived","Smoked Ham"]},{Title:"Lunch",Food:["Chicken Ortega Soup","Creamy Broccoli Cheddar Soup","Farfalle Rustiche","Oven Roasted Chicken Thigh","Steamed Rice","Thai Style Sustainable Pacific Cod","Cheese Pizza","Hanalei Pizza with Chicken and Bacon","Brown Rice Pilaf","Chocolate Chip Cookies","Blended Beef & Mushroom Burger Hawaiian Style","Rice Krispy Treats","Vegan Brownie","Atomic Cheese Sauce","BAR Boardwalk Burgers","Bacon","Bread Bun","Bread Onion Bun","Burger Beef","Burger Turkey","Chili with Beef","Sauteed Mushrooms","Vegan Malibu Burger"]},{Title:"Dinner",Food:["Chicken Ortega Soup","Creamy Broccoli Cheddar Soup","Sizzling Buffalo Chicken Salad","Sizzling Buffalo Tofu Salad","Carne Adobo Verde","Oven Roasted Chicken Thigh","Steamed Rice","Cheese Pizza","Hanalei Pizza with Chicken and Bacon","Oven Roasted Herbed Potatoes","Roasted Seasonal Vegetables","Bread Pudding","Rice Krispy Treats","BAR Yakisoba Noodles","Char Siu Chicken","Char Siu Sauce","Char Siu Seitan","Condiments","Sesame Yakisoba Noodles","Stir Fry Vegetables","Szechuan Sweet Chili Sauce"]},{Title:"Late Night",Food:["Crispy Tostada","Oven Roasted Chicken Thigh","Steamed Rice","Sustainable Caught Roasted Cod Puttanesca","Tortilla Chips","Cheese Pizza","Hanalei Pizza with Chicken and Bacon","Beef and Lamb Gyro","Condiments","Condiments","Vietnamese Chicken Pho","Vietnamese Pho Broth","Vietnamese Pho Noodle Bar","Vietnamese Tofu Pho"]}]},{Title:"Crown/Merrill Dining Hall Menu",Date:"Menus for Wednesday, November 14, 2018",Hours:"Hours go here",Menu:[{Title:"Breakfast",Food:["Belgian Waffles","Cage Free Scrambled Eggs","Cinnamon Roasted Butternut Squash","Ham Steaks","Hard-boiled Cage Free Eggs","Oatmeal Gluten-Free","Tator Tots","Almond Bear Claws","Apricot Crunch Muffin","Chocolate Chip Muffin","Old Fashioned Frosted Donut"]},{Title:"Lunch",Food:["Chicken and Dumpling Soup","Fire Roasted Corn Soup","Greek California Lavash Roll","Greek Chicken Saute","Greek Vegan Saute","Oven Roasted Chicken Thigh","Spicy Garbanzo Curry","Steamed Rice","Cheese Pizza","Chorizo and Jack Cheese Pizza","Pizza Mushroom & Sausage","Garlic Fettuccini","Steamed Basmati Rice","Sauteed Seasonal Vegetable","Rice Krispy Treats","UCSC Bakery French Rolls","Vegan Brownie","BAR Wings","BBQ Wings","Condiments","Hot 'N Spicy Wings","Teriyaki Glaze Wings","Vegan Baked Beans","Vegan Tenders"]},{Title:"Dinner",Food:["Chicken and Dumpling Soup","Fire Roasted Corn Soup","Cuban Chicken and Chorizo","Oven Roasted Chicken Thigh","Steamed Rice","Cheese Pizza","Chorizo and Jack Cheese Pizza","Pizza Mushroom & Sausage","Sweet & Sour Gardein","Sweet and Sour Shrimp","Black Beans","Sticky Rice","Sauteed Seasonal Vegetable","Bread Pudding","Atomic Cheese Sauce","BAR Boardwalk Burgers","Bacon","Bread Bun","Burger Bar #1 Condiments","Burger Beef","Burger Turkey","Chili with Beef","Condiments","Onion Rings","Sauteed Mushrooms","Vegan Malibu Burger"]},{Title:"Late Night",Food:[]}]},{Title:"Porter/Kresge Dining Hall Menu",Date:"Menus for Wednesday, November 14, 2018",Hours:"Hours go here",Menu:[{Title:"Breakfast",Food:["Oatmeal Gluten-Free","Bell Peppers","Cage Free Eggs","Cage Free Omelette Bar","Cheddar Cheese","Feta Cheese","Fresh Organic Spinach","Fresh Tomato","Jalapeno","Onions","Oven Roasted Turkey","Sliced Olived","Smoked Ham","Belgian Waffles","Blueberry Pancakes","Cage Free Scrambled Eggs","Eggbeaters Scramble","Flour Tortilla","Hard-boiled Cage Free Eggs","Papas Fritas","Quinoa Fruit Salad","Turkey Sausage Patty"]},{Title:"Lunch",Food:["Lentil & Lemon Soup","Thai Coconut Curry Chicken Soup","Bar Taqueria","Chipotle Gardein Strips","Condiments","Corn Tortillas","Flour Tortilla","Mexican Rice","Refried Beans","Sweet Potato Fries","Taqueria Chicken","General Tso's Chicken","General Tso's Tofu","Kalua Garden Slider","Kalua Pork Slider","Lemon Pepper Cod","Oven Roasted Chicken Thigh","Roasted Seasonal Vegetables","Steamed Rice","Sticky Rice","Artichoke Flatbread with Tomato, Spinach and Goat Cheese","Cheese Pizza"]},{Title:"Dinner",Food:["Lentil & Lemon Soup","Thai Coconut Curry Chicken Soup","Bar Indian","Basmati Rice Pullao","Chicken Tikka Masala","Chickpea Curry with Tomato and Kale","Condiments","Dal Saag","Original Naan","Potato Samosas","5 Spice BBQ Beef Chow Mein","5 Spice BBQ Tofu Chow Mein","Farro Mushroom Risotto","Oven Roasted Chicken Thigh","Roast Pork Loin with Parsley and Shallot Sauce","Roasted Seasonal Vegetables","Steamed Rice","Artichoke Flatbread with Tomato, Spinach and Goat Cheese","Cheese Pizza"]},{Title:"Late Night",Food:[]}]},{Title:"Rachel Carson/Oakes Dining Hall",Date:"Menus for Wednesday, November 14, 2018",Hours:"Hours go here",Menu:[{Title:"Breakfast",Food:["Belgian Waffles","Buttermilk Pancakes","Cage Free Scrambled Eggs","Eggbeaters Scramble","Hard-boiled Cage Free Eggs","Middle Eastern Shakshuka Eggs","Oatmeal Gluten-Free","Sausage Links","Tator Tots","Almond Bear Claws","Apricot Crunch Muffin","Chocolate Chip Muffin","Old Fashioned Frosted Donut","Vegan Peanut Granola","Bell Peppers","Cage Free Eggs","Cage Free Omelette Bar","Cheddar Cheese","Feta Cheese","Fresh Organic Spinach","Fresh Tomato","Jalapeno","Onions","Oven Roasted Turkey","Sliced Olived","Smoked Ham"]},{Title:"Lunch",Food:["Tomato Bisque Soup","Lime Cilantro Basmati Rice","Oven Roasted Chicken Thigh","Steamed Rice","Sustainable Pacific Rockfish Vera Cruz","Shrimp Creole Wrap","Zesty Seitan Creole Wrap","Artichoke & Roasted Garlic Pizza","Cheese Pizza","Steamed Seasonal Vegetables","Chocolate Chip Cookies","Rice Krispy Treats","UCSC Bakery French Rolls","Vegan Brownie","Bar Indian","Basmati Rice Pullao","Chickpea Curry with Tomato and Kale","Condiments","Original Naan","Potato Samosas","Tandoori Chicken"]},{Title:"Dinner",Food:["Chicken Pozole","Tomato Bisque Soup","Falafel  Wrap","Oven Roasted Chicken Thigh","Spicy Sonoran Meatloaf","Steamed Rice","Artichoke & Roasted Garlic Pizza","Cheese Pizza","Garlic Mashed Potatoes","Steamed Seasonal Vegetables","Bread Pudding","Rice Krispy Treats","UCSC Bakery French Rolls","Armenian Salad","Braised Kale with Crispy Shallots","Chickpea Harira","Harissa Roasted Chicken","North African Bar","Roasted Cauliflower and Almond Salad","Roasted Eggplant with Fried Onion","Spiced Almond Couscous","Tahini Sauce","Tzatziki Sauce"]},{Title:"Late Night",Food:["Curry Tomato Tempeh Stir Fry","Oven Roasted Chicken Thigh","Oven Roasted Turkey","Steamed Brown Rice","Steamed Rice","Artichoke & Roasted Garlic Pizza","Cheese Pizza","Garlic Fries","Braised Kale with Crispy Shallots","Chickpea Harira","Harissa Roasted Chicken","North African Bar","Roasted Cauliflower and Almond Salad","Spiced Almond Couscous","Tahini Sauce","Tzatziki Sauce"]}]}]}}},[[46,2,1]]]);
//# sourceMappingURL=main.a955047d.chunk.js.map
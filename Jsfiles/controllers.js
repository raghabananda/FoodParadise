var app=angular.module("app",["ngRoute","ngCookies"])  
               .config(["$routeProvider",function($routeProvider){               
				$routeProvider.when("/",{
				   templateUrl:"views/home.html"						
					})
					.when("/home",{
                        templateUrl: "views/home.html"						
						})
				    .when("/royalmangalorean",{
					        templateUrl: "views/royalmangalorean.html"					       
				         }) 
					.when("/Odissa",{
					        templateUrl: "views/Odissa.html"					        
				         })
				   	.when("/Americano",{
					        templateUrl: "views/Americano.html"					        
				         })
				    .when("/cart",{
					        templateUrl:"views/cart.html"
				         })
				    .when("/CustomerData",{
					       templateUrl: "views/CustomerData.html"
				         })
				    .when("/NewUser",{
					templateUrl:"views/NewUser.html"
				})
				    .when("/PlaceOrder",{
					  templateUrl:"views/PlaceOrder.html"
				   })
				    .otherwise("/",{
					templateUrl:"views/home.html"
				});
				   
					}])
                    .controller("myctrl",["$scope","$location","$http",
										  function($scope,$location,$http){
					 $scope.name="Raghav";					
					 $scope.cartItems=0;
					 $scope.User="Log In";
						
	//Dishes array					
						
						$scope.Thalis=[
							{
								ID:1,
								name:"Mangalorean Bun",
								ImagePath:"https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/MANGALORE%20BUN_0.jpg",
								Price:25,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
							{
								ID:2,
								name:"Chicken Sukka",
								ImagePath:"http://4.bp.blogspot.com/-IJqx0CHO-y8/UY1ncHi8kAI/AAAAAAAADsk/lzdzjG55EKw/s1600/chickesukkaB2.jpg",
								Price:50,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
							{
								ID:3,
								name:"Neer Dosa",
								ImagePath:"https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2015/04/Featured-image-neer-dosa.jpg?ssl=1?w=356&strip=all&quality=80",
								Price:30,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {
								ID:4,
								name:"Ghee Roast",
								ImagePath:"https://i0.wp.com/media.hungryforever.com/wp-content/uploads/2015/12/17160251/Ghee-Roast.jpg?ssl=1?w=356&strip=all&quality=80",
								Price:60,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
			                {
								ID:5,
								name:"Kori rotti",
								ImagePath:"http://media1.sailusfood.com/wp-content/uploads/2012/08/kori-rotti-chicken-curry.jpg",
								Price:30,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {								
								
								ID:6,
								name:"Bangude gassi",
								ImagePath:"https://sahanasfoodpassion.com/wp-content/uploads/2017/12/IMG_20171007_131136_292_wm.jpg",
								Price:100,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {
								ID:7,
								name:"Golibaje",
								ImagePath:"https://www.vidhyashomecooking.com/wp-content/uploads/2016/09/MangaloreBajji.jpg",
								Price:20,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {
								ID:8,
								name:"Anjal Fry",
								ImagePath:"http://aroundmangalore.com/wp-content/uploads/2016/05/Aromas-of-South-The-Forum-Fiza-Mall-Mangalore-P5.jpg",
								Price:100,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {
								ID:9,
								name:"Mangalore Egg Curry",
								ImagePath:"https://1.bp.blogspot.com/-LewfCHTjK4A/WHQO6tOHiuI/AAAAAAAACQg/cd8YqtPQ2f4ONMteuESb3ZsviQhjOwhsgCEw/s640/Egg%2BCurry%2BRecipe.jpg",
								Price:50,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {
								ID:10,
								name:"Crab Sukka",
				       ImagePath:"https://i.pinimg.com/474x/f3/a0/10/f3a0102178b265226dad32fb4ffb19ad.jpg",
								Price:100,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {
								ID:11,
								name:"Prawn pulimunchi",
								ImagePath:"https://shettyscookery.files.wordpress.com/2017/05/prawns-pulimunchi.jpg?w=676",
								Price:100,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {
								ID:12,
								name:"Pundi",
								ImagePath:"https://1.bp.blogspot.com/-0z0pEB5_7kg/WlY0X1M7hTI/AAAAAAAABzs/T4r7NBlz0RARdfC48LgQW_RWoGbi6Ve4ACLcBGAs/s320/IMG_20180110_143900.jpg",
								Price:45,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {
								ID:13,
								name:"Cucumber Mandas",
								ImagePath:"http://1.bp.blogspot.com/-QXzBOuBtT0w/US80bPh9TbI/AAAAAAAAQN4/uqR4qG3QGHo/s1600/Cucumber+Mandas+Collage+-+1.jpg",
								Price:45,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {
								ID:14,
								name:"Turmeric leaf dessert",
								ImagePath:"http://www.ruchikrandhap.com/wp-content/uploads/2011/08/Haldikolyanche-Patholi-1.jpg",
								Price:45,
								visible:true,
								Qty:0,
								Catg:"Mangalorean"
							},
                            {
								ID:15,
								name:"Rasmalai",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Ras-Malai.jpg/800px-Ras-Malai.jpg",
								Price:20,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:16,
								name:"Pokhal",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Pakhala_bhat.jpg/260px-Pakhala_bhat.jpg",
								Price:50,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:17,
								name:"Chhenapoda",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chennapoda.jpg/1024px-Chennapoda.jpg",
								Price:45,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:18,
								name:"Rasbali",
								ImagePath:"https://3.bp.blogspot.com/-yOi4XX68cys/Wizx8KCyW_I/AAAAAAAAV8k/unlT4vj6RswZaQc2sRmgHZubQhADeUKQACLcBGAs/s400/01%2B-%2BCopy.jpg",
								Price:20,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:19,
								name:"Chhena Jhilli",
								ImagePath:"https://pearlsofeast.com/wp-content/uploads/2016/03/Chenna-Jhilli-e1537166892340.jpg",
								Price:20,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:20,
								name:"Chhena Gaja",
								ImagePath:"https://topicimages.mrowl.com/large/rohanimal/indian_sweets_recipes/c_eastern_india_desserts/chhena_gaja_1.jpg",
								Price:20,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:21,
								name:"Chhena Kheer",
								ImagePath:"https://smedia2.intoday.in/aajtak/images/stories/052016/chhenakheer4pak_520_051216113448.jpg",
								Price:35,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:22,
								name:"Pitha",
								ImagePath:"http://bongong.com/images/recipes/Pathisapta/pic13_1230902669_center.jpg",
								Price:25,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:23,
								name:"Santhula",
								ImagePath:"http://4.bp.blogspot.com/-yn2wTpSzrx0/Uj37fT3ptYI/AAAAAAAAA1I/CfP_CEQTyHE/s1600/photo+%252885%2529.jpg",
								Price:30,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:24,
								name:"Dalma",
								ImagePath:"https://i2.wp.com/spoonforkandfood.com.cp-in-15.webhostbox.net/wp-content/uploads/2015/01/dalma-traditional-cuisine-from-orissa.1024x1024.jpg?w=980",
								Price:25,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:25,
								name:"Dahi Bengan",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Dahi_baigana_Odia_recipe.jpg/800px-Dahi_baigana_Odia_recipe.jpg",
								Price:25,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:26,
								name:"Dahi patra Chutney",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Dhania_patra_catuni.JPG/1024px-Dhania_patra_catuni.JPG",
								Price:25,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:27,
								name:"Kakara Pitha",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/ATTA_KAKARA.jpg/800px-ATTA_KAKARA.jpg",
								Price:35,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:28,
								name:"Macha Tarkari",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Ilishi_maachha.jpg/800px-Ilishi_maachha.jpg",
								Price:50,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:29,
								name:"Bella Paana",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Bela_pana.jpg/200px-Bela_pana.jpg",
								Price:20,
								visible:true,
								Qty:0,
								Catg:"Odiya"
							},
							{
								ID:30,
								name:"Apple Pie",
								ImagePath:"https://img1.southernliving.timeinc.net/sites/default/files/styles/medium_2x/public/image/2017/10/main/arkansas_black_apple_pie_with_caramel_sauce_2540501_pieso_675.jpg?itok=iUlqw3oU",
								Price:100,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:31,
								name:"Chicken Burger",
								ImagePath:"https://www.bellandevans.com/wp-content/uploads/Apricot_Burger3_webNEW-750x560.jpg",
								Price:200,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:32,
								name:"Clam Chowder",
								ImagePath:"https://www.spendwithpennies.com/wp-content/uploads/2018/01/New-England-Clam-Chowder-2.jpg",
								Price:150,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:33,
								name:"Bagel",
								ImagePath:"https://static01.nyt.com/images/2016/08/16/dining/baron-bagels/baron-bagels-articleLarge.jpg",
								Price:100,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:34,
								name:"Bagel with lo sandwich",
								ImagePath:"https://www.nospoonnecessary.com/wp-content/uploads/2014/07/20140505-IMG_4395.jpg",
								Price:200,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:35,
								name:"Chicago deep dish pizza",
								ImagePath:"https://www.tasteofhome.com/wp-content/uploads/2017/10/Chicago-Style-Deep-Dish-Pizza_EXPS_SRBZ16_17170_C09_02_3b-2-696x696.jpg",
								Price:250,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:36,
								name:"American Biscuit",
								ImagePath:"https://www.momontimeout.com/wp-content/uploads/2012/05/biscuit-recipe-easy-733x1000.jpg",
								Price:75,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:37,
								name:"Kansas city style-barbecue",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Kansas_City-Style_Barbecue_%28cropped%29.jpg/1280px-Kansas_City-Style_Barbecue_%28cropped%29.jpg",
								Price:250,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:38,
								name:"Macroni and cheese",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Flickr_stuart_spivack_173603796--Macaroni_and_cheese.jpg/800px-Flickr_stuart_spivack_173603796--Macaroni_and_cheese.jpg",
								Price:50,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:39,
								name:"Hotdogs",
								ImagePath:"https://upload.wikimedia.org/wikipedia/en/d/d5/Hotdog_three.jpg",
								Price:100,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:40,
								name:"Mashed Potato",
								ImagePath:"https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/10/2/0/FNM_110109-Insert-015_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539091038.jpeg",
								Price:50,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:41,
								name:"Pancakes",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Platt_brunch.jpg/1024px-Platt_brunch.jpg",
								Price:100,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:42,
								name:"Pasta and salad",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Pasta_salad_closeup.JPG/1024px-Pasta_salad_closeup.JPG",
								Price:150,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:43,
								name:"Seafood Cocktail",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Shrimp_cocktail_lemons_lettuce_seafood.jpg/800px-Shrimp_cocktail_lemons_lettuce_seafood.jpg",
								Price:250,
								visible:true,
								Qty:0,
								Catg:"American"
							},
							{
								ID:44,
								name:"Waffle",
								ImagePath:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Waffles_with_Strawberries.jpg/800px-Waffles_with_Strawberries.jpg",
								Price:100,
								visible:true,
								Qty:0,
								Catg:"American"
							},
];
						
						$scope.cart=null;
						$scope.TotalPrice=0;
						
 // Dish Add/remove event
						
			$scope.add=(img)=>{				
				$scope.Thalis.find(item=>item.ID==img.ID).Qty++;								
				$scope.cart=$scope.Thalis.filter(item=>item.Qty>0);	
				$scope.cartItems++;
				$scope.TotalPrice+=img.Price;
				
		};
			$scope.remove=(img)=>{
				if($scope.Thalis.find(item=>item.ID==img.ID).Qty>0)											             $scope.Thalis.find(item=>item.ID==img.ID).Qty--;				
			    $scope.cart=$scope.Thalis.filter(item=>item.Qty>0);
				$scope.cartItems--;	
				$scope.TotalPrice-=img.Price;
			};
						
						
	//cart Add/Remove event
						
						$scope.addcart=(img)=>{
							$scope.cart.find(item=>item.ID==img.ID).Qty++;				
				            for(let item in $scope.cart){
								if(item.Qty>0){
									$scope.Thalis.find(elem=>elem.ID==item.ID).Qty=item.Qty;
								}
							}							
							$scope.cartItems++;
							$scope.TotalPrice+=img.Price;
						};
						
						$scope.removecart=(img,$index)=>{
							if($scope.cart.find(item=>item.ID==img.ID).Qty>1)
								$scope.cart.find(item=>item.ID==img.ID).Qty--;  																	
							else{
								$scope.cart.find(item=>item.ID==img.ID).Qty--;  
								$scope.cart.splice($index,1);
							}															 						    				$scope.cartItems--;	
							$scope.TotalPrice-=img.Price;
						}; 
						
		//Place Order
						
						
						$scope.PlaceOrder=()=>{						   							
							$location.path($scope.User=="Log In"?'/CustomerData':'/PlaceOrder');
						};
											  
						$scope.Signup=(cust)=>{							
						  	var post=$http({
								method: "POST",
								url:"FoodService.asmx/SignUp",
								dataType:"json",
								data:{
									  FirstName: cust.FirstName,
									  LastName: cust.LastName,
									  EmailID: cust.EmailID,
									  MobNo: cust.MobNo,
									  Password: cust.Password,
									  Adress : cust.Adress
									 },
								headers:{ "Content-Type": "application/json" }
							});
							//post.success((data,status)=>{});
						};					  

						
	}]);
	
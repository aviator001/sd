	var login
	var html = document.documentElement;
	var objText, objType, objStyle, objWait, spinner
	var alpha = document.getElementById('alpha')
	var toast = document.createElement('span');
	var jToastWn = document.createElement('div');
	var jModalWn = document.createElement('div');
	var jBoxCont = document.createElement('div');
	var spinner = document.createElement('div');
	var objWait = document.createElement('img');
	var objW = document.createElement('img');
	var objT = document.createElement('span');
	var x_gender='Sugar Baby'
	var x_age=50
	var x_miles=50
	var x_photos='No'
	var zip = ''
	var miles = ''
	var age = ''
	var gender = ''
	var photos=''
	var general_info=''
	var pclip = 'assets/images/pclip.png'
	var pclip_o = 'assets/images/pclip_o.png'
	var err_img = 'assets/images/a000.png';
	var dot2 = 'https://lushmatch.com/assets/images/dot4.png'
	var dot1='https://lushmatch.com/assets/images/dot1.png'
	var user_offline = 'User is Offline!'
	var x_validate=true
	var race
	var body_type
	jModalWn.id='jModalWn'
	objW.id='objW'
	objT.id='objT'
	spinner.style.cssText = "display:none;position:fixed;width:100%;height:100%;top:0px;bottom:0px;left:0px;right:0px;margin:auto;z-index:99999999999;background:;opacity:1"
	jModalWn.style.cssText = "display:none;position:fixed;width:100%;height:100%;top:0px;bottom:0px;left:0px;right:0px;margin:auto;z-index:999999999999999999999;background:;opacity:1"
	jToastWn.style.cssText = "text-align:center;padding:10px;display:none;position:fixed;z-index:99999999999999999999999;right:10px;top:10px;font-size:18px;color:white"
	toast.style.cssText = "text-align:center;padding:10px;display:none;position:fixed;z-index:999999999999999999990;right:10px; top: 10px; font-size:18px; color: white"
	objWait.style.cssText = "margin:auto;position:fixed;z-index:9999999999999999999991;left:0;right:0;top:0;bottom:0;width:100px;padding:20px;background:#fff;border-radius:8px;opacity:0.8;box-shadow:0px 0px 5px #333"
	objW.style.cssText = "margin:auto;position:fixed;z-index:9999999999999999999991;left:0;right:0;top:0;bottom:0;width:125px;padding:20px;padding-top:10px;background:#fff;border-radius:8px;opacity:0.9;box-shadow:0px 0px 5px #333"
	objT.style.cssText = "margin:auto;position:fixed;z-index:9999999999999999999992;left:0;right:0;top:0;bottom:0;width:125px;height:125px;padding:5px;padding-top:80px;font-size:14px;font-family:Open Sans;text-align:center;word-wrap:break-word;background:none;text-shadow:1px 1px 0px #fff;border-radius:8px;opacity:1.0;"
	objWait.src='https://lushmatch.com/assets/img/wait.gif'
	objW.src='https://lushmatch.com/assets/img/wait.gif'
	
	toast.id='toast'
	spinner.id='spinner'
	html.appendChild(jModalWn) 
	html.appendChild(jBoxCont)
	html.appendChild(jToastWn)
	html.appendChild(toast)
	html.appendChild(spinner)
	spinner.appendChild(objWait)



		var full_address,formatted_address,street_no,street,city,state,zip
		
		function close_this1() {
				document.getElementById('modal').style.display='block'
				document.getElementById('modal_text').style.display='block'			
				  navigator.geolocation.getCurrentPosition(
					displayPosition, error,
					{ enableHighAccuracy: true }
				  );
		  }

		function close_this2() {
				document.getElementById('modal').style.display='block'
				document.getElementById('modal_text').style.display='block'			
		}
		
	function sms_set(sObj) {

	}

	function delete_allow() {
		var url = 'inc/x_delete_sms.php?mobile=' + document.getElementById('mobile').value
		jwait('Please Wait...')
		var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				jhide()
				return true
			}
		})		
	}
	 setTimeout("sms_set('yes')",1000)
	 var x_tags

	function validate_form(){
		mobile = document.getElementById('mobile')
		pass = document.getElementById('pass')
		email = document.getElementById('email')
		login = document.getElementById('login')
		age = document.getElementById('age')
		general_info = document.getElementById('general_info')
		race = document.getElementById('race')
		body_type = document.getElementById('body_type')
		if ( document.getElementById('form_errors')) form_errors = document.getElementById('form_errors')
		if (!email.value) {
			show_error_reg(email)
			validate = false
		}

		if (!pswd.value) {
			show_error_reg(pswd)
			validate = false
		}

		if (!login.value) {
			show_error_reg(login)
			validate = false
		}

		if (!age.value) {
			show_error_reg(age)
			validate = false
		}
	
		if (!race.value) {
			show_error_reg(race)
			validate = false
		}
	
		if (!body_type.value) {
			show_error_reg(body_type)
			validate = false
		}
	
		if (!general_info.value) {
			show_error_reg(general_info)
			validate = false
		}
/*		if (form_errors) {
			form_errors.style.display='block'
			form_errors.style.display='block'
			form_errors.style.fontSize='18px'
			form_errors.style.color='black'
			form_errors.style.fontFamily='Open Sans'
			form_errors.style.textAlign='left'
		}
*/
		if (validate == true) {
			create_user()
		}	else {
				form_errors.innerHTML = '<i class="fa fa-frown-o"></i>Error(s) found.</i>'
				setTimeout(function(){
					$$('g1').className=''
					setTimeout(function(){
						$$('g2').className=''
						setTimeout(function(){
							$$('g3').className=''
							$('#g1').show()
							$('#g2').show()
							$('#g3').show()
							$('#next_g1').hide()
							$('#next_g2').hide()
						},100)
					},100)
				},100)
			}
	}	

	var mobile_mandatory=false
	
	function validate_field_register(f)	{
		if (document.getElementById(f.id+'_original')) {
			if (document.getElementById(f.id+'_original').value == f.value) return false
		}
		if (f.id=='age') {
			if (!is_valid_age(f)) {
				show_error(f)
				return false 
			} else {
				return true
			}
		}
		if (f.id=='body_type') {
			if (!f.value) {
				show_error(f)
				return false 
			} else {
				return true
			}
		}
		if (f.id=='race') {
			if (!f.value) {
				show_error(f)
				return false 
			} else {
				return true
			}
		}
		if (f.id=='pswd') {
			if (!is_valid_pswd(f)) {
				show_error(f)
				return false 
			} else {
				return true
			}
		}
		if (mobile_mandatory) {
			if (f.id=='mobile') is_valid_mobile(f)
		}
		if (f.id=='email') is_valid_email(f)
		var e = '<span style="color:orange">' + f.value + '</span> Already Exists.<br><a href="login.php">Login</a> with this ' + f.id + ' instead?'
		if (f.value.length > 0) {
			if (mobile_mandatory) {
				if (f.id == 'mobile') {
					var number = f.value
					number = number.replace('-','')
					number = number.replace(' ','')
					number = number.replace('(','')
					number = number.replace(')','')
					number = number.replace('.','')
					number = number.replace('-','')
					number = number.replace(' ','')
					number = number.replace('(','')
					number = number.replace(')','')
					number = number.replace('.','')
				}
			}
			var x = ''
			var r = f.id + '_err'
			var t = r + '_txt'
			var i = f.value
			if (f.id == 'mobile') i = number
			r = document.getElementById(r)
			t = document.getElementById(t)
			var field_id=f.id 
			if (f.id=='mobile') field_id='phone_number'
			var url = 'https://onesugardaddy.com/api/x_validate_field.php?d=' + field_id + '&i=' + f.value
			console.log(url)
			var request = $.ajax({
			url: url,
			type: "GET",
			dataType:'html',
			cache: false,
			success: function(msg) {
					hide()
					if (msg != 0) {
						console.log(f)
						f.style.background='lavenderblush'
						validate = false
						ns = false
						t.style.display = ''
						t.innerHTML = e
					}
					else {
						validate = true
						return true
					}
				}
			})
		}
	}	
	function check_mobile(f)	{

		return true
	}
	var gender='Sugar Baby'
	setCookie('gender',gender)
	function create_user() {
		if (!getCookie('location')) {
			var url='https://lushmatch.com/x_location.php'
			var request = $.ajax({
				url: url,
				type: "GET",
				dataType: "html",
				cache: false,
				success: function(msg) {
					var lx=(JSON.parse(msg))
					lx=lx[0]
					var cc_city = lx.city
					var cc_state=lx.state
					var cc_zip=lx.zip
					var cc_location = cc_city + ', ' + cc_state + ' ' + cc_zip
					setCookie('city',cc_city)
					setCookie('state',cc_state)
					setCookie('zip',cc_zip)
					setCookie('location',cc_location)
					if (!getCookie('lat')) {
						setCookie('lat',lx.lat)
						setCookie('lng',lx.lng)
					}
				}
			})
		} else {
			var cc_city=getCookie('city')
			var cc_state=getCookie('state')
			var cc_location=getCookie('location')
		}
		
		var x=''
		var looking_for=(gender=='Sugar Daddy')?'Sugar Baby':'Sugar Daddy'
		if (gender=='') {
			gender = 'Sugar Baby'
			looking_for = 'Sugar Daddy'
		}
		setCookie('gender',gender)
		if (!document.getElementById('mobile').value) {
			mobile="11234567890"
		} else {
			mobile=document.getElementById('mobile').value
		}
		if ((getCookie('location').indexOf('[NA]')>=0) || (getCookie('location').indexOf('undefined')>=0) || (getCookie('location').indexOf('null')>=0)) {
			b('Error')
			return false
		} 
		setCookie('gender',gender)
		x += 'mob=' + mobile
		x += '&password=' + document.getElementById('pswd').value 
		x += '&email=' + document.getElementById('email').value 
		x += '&login=' + document.getElementById('login').value 
		x += '&gender=' + gender 
		x += '&looking_for=' + looking_for 
		x += '&age=' + document.getElementById('age').value 
		x += '&general_info=' + document.getElementById('general_info').value 
		x += '&cc_city=' + cc_city
		x += '&cc_state=' + cc_state
		x += '&lat=' + getCookie('lat')
		x += '&lng=' + getCookie('lng')
		x += '&zip=' + getCookie('zip')
		x += '&location=' + cc_location 
		x += '&aff=' + getCookie('aff')
		x += '&url=' +  getCookie('url')
		x += '&href=' +  getCookie('href')
		x += '&pic=' + '' 
		x += '&source=SDFM App'
		x += '&w=' + window.screen.width
		x += '&race=' + $$('race').value
		x += '&body_type=' + $$('body_type').value
		x += '&pro=' + Math.random() * 100000000 + '' + Math.random() * 100000000 + '' + Math.random() * 100000000 + '' + Math.random() * 100000000 + '' + Math.random() * 100000000
		wait3('Creating Account')
			var url = 'https://onesugardaddy.com/api/x_create_member.php?' + x
			console.log(url)
			var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
					hide()
					console.log(msg)
					if (msg.trim() == 'Registration failed!') {
							document.getElementById('pay_modal').style.zIndex='-1'
							return false
					} else {
							$('.white-row').hide()
							var mmx=msg.split('|')
							setCookie('mobile', mmx[4])
							setCookie('mid', mmx[2])
							setCookie('login', mmx[1])
							setCookie('gender', mmx[3])
							$.confirm({
								useBootstrap:'false',
								boxWidth:'300px',								
								title:'Success!',
								content:'Congratulations!<br><br>Your account was created successfully.<br><br>',
								buttons: {
									b2: {
										text: 'Final Step: Upload Photo',
										btnClass: 'btn-info',
										action: function(){
											location.href='uploadPhoto.html'
										}
									}
								}
							});
							
							
					}
				}
			})
		}

	function update_field(f) {
		var v=f.value
		f=f.id
		var t = 'dt_members'
		var url = 'https://lushmatch.com/x_update_table.php?table=' + t + '&field=' + f + '&value=' + v + '&id=' + getCookie('mid')
		var request = $.ajax({
				url: url,
				type: "GET",
				dataType: "html",
				cache: false,
				success: function(msg) {
					if (!msg) {
						if (f.id=="mobile") {
									jalert('Update Successfull')
									document.getElementById('co').style.display='none'
									document.getElementById('pay_modal').style.zIndex='1'
									document.getElementById('c1').value=''
									document.getElementById('c2').value=''
									document.getElementById('c3').value=''
									document.getElementById('c4').value=''
									document.getElementById('wait').style.display='none'
									document.getElementById('pay_modal').style.display='none'
						} else {
							if (document.getElementById(f + '_updated')) {
								document.getElementById(f + '_updated').style.display='block'
								document.getElementById(f + '_updated_img').src='assets/images/e5.png'
								document.getElementById(f + '_final_message').innerHTML='Update Succesfull'
							}
							if (document.getElementById(f + '_original')) {
								if (document.getElementById(f + '_original').value) {
									document.getElementById(f + '_original').value=v
								} else if (document.getElementById(f + '_original').innerHTML) {
									document.getElementById(f + '_original').innerHTML = v
								}
							}
						}
					} else {
						jalert(msg)
					}
				}
			})			
		}

		function is_valid_age(f) {
		var number = f.value*1
		if (isNumber(number) && (number>=18) && (number<=80)) {
			return true 
		} else {
				validate = false
				show_error(f,'Invalid Age!')
				return false
		}
	}
	function show_login_error(f,i) {
		var r = f.id + '_err'
		var e = '<i class="fa fa-bomb"></i> No Blanks!'
		var t = r + '_txt'
		if(!i) i = 'Invalid Entry! Please re-enter'
		x_validate = false
		r = document.getElementById(r)
		t = document.getElementById(t)
		validate = false
		f.style.background = 'lavenderblush'
		t.style.color='silver'
		var obj = f.id
		if (f.value.length == 0) t.innerHTML = e
			else t.innerHTML = i
		t.innerHTML += '<br>'
	}

	function clear_error(f) {
		if (document.getElementById(f.id + '_updated')) {
			if (document.getElementById(f.id + '_updated_img')) document.getElementById(f.id + '_updated_img').src='assets/images/e5.png'
			document.getElementById(f.id + '_updated').style.display='none'
		}
		x_validate=true
		validate = true
		var r = f.id + '_err'
		var t = r + '_txt'
		var p = f.value
		f.style.background = '#fff'
		f.style.color='grey'
		t = document.getElementById(t)
		t.innerHTML = ''
		if (document.getElementById('form_errors')) document.getElementById('form_errors').style.display='none'
	}

	function is_valid_mobile(f) {
		var ph=f.value
		if (ph.length==11) {
			if (ph.substring(0,1) != '1') {
				var e = '<span style="color:orange">Invalid Mobile Number<br>You must enter a valid 10 digit mobile number'
				show_error(f,e)
				validate = false
				return false				
			} else {
				ph=ph.substring(1,11)
			}
		}
		f.value=ph
		var m = /^(\W|^)[(]{0,1}\d{3}[)]{0,1}[.]{0,1}[\s-]{0,1}\d{3}[\s-]{0,1}[\s.]{0,1}\d{4}(\W|$)/
		if(!m.test(ph)) {
				validate = false
				show_error(f,'Invalid Mobile! Format:<br>1(123) 456-7890 or XXXYYYZZZZ or 1234567890')
				return false
			}
	}

	function is_valid_age(f) {
		var number = f.value*1
		if (isNumber(number) && (number>=18) && (number<=80)) {
			return true 
		} else {
				validate = false
				show_error(f,'Invalid Age!')
				return false
		}
	}

	function is_valid_currency(f) {
		var obj = f.value
		var c=!jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		if((!c) || (c==false)) {
				validate = false
				show_error(f,'Invalid $ Amount!')
				return false
			} else {
				return true
			}
	}

	function is_valid_pswd(f) {
		var pswd = f.value
		if(pswd.trim().length) {
				return true
			} else 	{
				validate = false
				show_error(f,'Invalid Password!')
				return false
			}
	}
	var old_money=''
	var old_date_money=''
	
	function is_valid_email(f) {
	var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(email.test(f.value)) 
		{
			return true
		} else {
			validate = false
			show_error(f,'Invalid Email! Please re-enter')
			return false
		}
	}

	function isNumber(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function validate_money(f)	{
		if (f.value) {
			if (isNumber(f.value) == true) {
				if (old_money != f.value) update_field('system_status', f.value)
				old_money=f.value
				return true
			} else {
				show_error(f)
				return false	
			}
		}
	}
	function validate_date_money(f)	{
		if (f.value) {
			if (isNumber(f.value) == true) {
				if (old_date_money != f.value)  update_field('system_status_end', f.value)
				old_money=f.value
				return true
			} else {
				show_error(f)
				return false	
			}
		}
	}

	var digit_code
	
	function send_code() {
		if (document.getElementById('mobile_original').value == document.getElementById('mobile').value) return false
		var x = ''
		var mobile = document.getElementById('mobile')
		validate_field(mobile)
		if (validate == true) {
		document.getElementById('pay_modal').style.display='block'
		document.getElementById('wait').style.display='block'
		document.getElementById('spl_text').innerHTML='GENERATING VALIDATION CODE, PLEASE WAIT'
			var url = 'send_code.php?cell=' + document.getElementById('mobile').value
			var request = $.ajax({
			url: url,
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
					if (msg.trim() != '') {
						document.getElementById('wait').style.display='none'
						document.getElementById('co').style.display='block'
						document.getElementById('c1').focus()
						digit_code = msg.trim()	
					} else {
						jalert(msg)
						return false
					}
				}
			})
		} else {
			return false 
		}
	}
	
	function is_valid_currency(f) {
		var obj = f.value
		var c=!jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
		if((!c) || (c==false)) {
				validate = false
				show_error(f,'Invalid $ Amount!')
				return false
			} else {
				return true
			}
	}

	function is_valid_pswd(f) {
		var pswd = f.value
		if(pswd.trim().length) {
				return true
			} else 	{
				validate = false
				show_error(f,'Invalid Password!')
				return false
			}
	}
	var old_money=''
	var old_date_money=''
	
	function is_valid_email(f) {
	var email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(email.test(f.value)) 
		{
			return true
		} else {
			validate = false
			show_error(f,'Invalid Email! Please re-enter')
			return false
		}
	}

	function isNumber(n) {
	  return !isNaN(parseFloat(n)) && isFinite(n);
	}

	function validate_money(f)	{
		if (f.value) {
			if (isNumber(f.value) == true) {
				if (old_money != f.value) update_field('system_status', f.value)
				old_money=f.value
				return true
			} else {
				show_error(f)
				return false	
			}
		}
	}
	function validate_date_money(f)	{
		if (f.value) {
			if (isNumber(f.value) == true) {
				if (old_date_money != f.value)  update_field('system_status_end', f.value)
				old_money=f.value
				return true
			} else {
				show_error(f)
				return false	
			}
		}
	}

	function validate_field(f)	{
		if (document.getElementById(f.id + '_original')) {
			if (document.getElementById(f.id + '_original').value == f.value) return false
		}
		if (f.id=='age') {
			if (!is_valid_age(f)) {
				show_error(f)
				return false 
			} else {
				update_field(f,f.value)
				return true
			}
		}
		if (f.id=='pswd') {
			if (!is_valid_pswd(f)) {
				show_error(f)
				return false 
			} else {
				update_field(f,f.value)
				return true
			}
		}
		if (f.id=='system_status') {
			if (!is_valid_currency(f)) {
				show_error(f)
				return false 
			} else {
				update_field(f,f.value)
				return true
			}
		}

		if (f.id=='system_status_end') {
			if (!is_valid_currency(f)) {
				show_error(f)
				return false 
			} else {
				update_field(f,f.value)
				return true
			}
		}

		if (f.id=='mobile') {
			var tt=is_valid_mobile(f)
			if (tt===false) {
				return false
			} else {
				update_field(f,f.value)
				return true				
			}
		}
		if (f.id=='email') {
			var tt=is_valid_email(f)
			if (tt===false) {
				return false
			} else {
				update_field(f,f.value)
				return true				
			}
		}
		var e = '<span style="color:orange">' + f.value + '</span> Already Exists.<br><a href="login.php">Login</a> with this ' + f + ' instead?'
		if (f.value.length > 0) {
			if (f == 'mobile') {
				var number = '1' + f.value
				number = number.replace('-','')
				number = number.replace(' ','')
				number = number.replace('(','')
				number = number.replace(')','')
				number = number.replace('.','')
				number = number.replace('-','')
				number = number.replace(' ','')
				number = number.replace('(','')
				number = number.replace(')','')
				number = number.replace('.','')
			}
			var x = ''
			var r = f + '_err'
			var t = r + '_txt'
			var i = f.value
			if (f == 'mobile') i = number
			r = document.getElementById(r)
			t = document.getElementById(t)

			var url = 'https://lushmatch.com/x_validate_field.php?d=' + f.id + '&i=' + i
			var request = $.ajax({
			url: url,
			type: "GET",
			dataType:'html',
			cache: false,
			success: function(msg) {
					if (msg != 0) {
						validate = false
						ns = false
						t.style.display = ''
						t.innerHTML = e
					}
					else {
						validate = true
						update_field(f,f.value)
					}
				}
			})
		}
	}
	
	function format_sms(objSMS) {
		return ' (' + objSMS.substr(1,3) + ') ' + objSMS.substr(4,3) + '-' + objSMS.substr(7,4)
	}

	function show_error(f,i) {
		if (document.getElementById(f.id + '_updated')) {
			document.getElementById(f.id + '_updated').style.display='block'
			if (document.getElementById(f.id + '_updated_img')) {
				document.getElementById(f.id + '_updated_img').src='assets/images/e3.png'
				document.getElementById(f.id + '_final_message').innerHTML='Update Failed'
				
			}
		}
		if (document.getElementById(f.id+'_original')) {
			if (document.getElementById(f.id+'_original').value == f.value) return false
		}
		var r = f.id + '_err'
		var e = '<i class="fa fa-bomb"></i> No Blanks!'
		var t = r + '_txt'
		if(!i) i = 'Invalid Entry! Please re-enter'
		x_validate = false
		r = document.getElementById(r)
		t = document.getElementById(t)
		validate = false
		f.style.background = 'lavenderblush'
		t.style.color='silver'
		var obj = f.id
		if (f.value.length == 0) t.innerHTML = e
			else t.innerHTML = i
		t.innerHTML += '<br>'
	}
	
	function show_error_reg(f,i) { 
		if (document.getElementById(f.id + '_updated')) {
			document.getElementById(f.id + '_updated').style.display='block'
			document.getElementById(f.id + '_updated_img').src='assets/images/e3.png'
		}
		var r = f.id + '_err'
		var e = '<i class="fa fa-bomb"></i> No Blanks!'
		var t = r + '_txt'
		if(!i) i = 'Invalid Entry! Please re-enter'
		x_validate = false
		r = document.getElementById(r)
		t = document.getElementById(t)
		validate = false
		f.style.background = 'lavenderblush'
		t.style.color='silver'
		var obj = f.id
		if (f.value.length == 0) t.innerHTML = e
			else t.innerHTML = i
		t.innerHTML += '<br>'
	}
	function show_login_error(f,i) {
		var r = f.id + '_err'
		var e = '<i class="fa fa-bomb"></i> No Blanks!'
		var t = r + '_txt'
		if(!i) i = 'Invalid Entry! Please re-enter'
		x_validate = false
		r = document.getElementById(r)
		t = document.getElementById(t)
		validate = false
		f.style.background = 'lavenderblush'
		t.style.color='silver'
		var obj = f.id
		if (f.value.length == 0) t.innerHTML = e
			else t.innerHTML = i
		t.innerHTML += '<br>'
	}
	function format_sms(objSMS) {
		return ' (' + objSMS.substr(1,3) + ') ' + objSMS.substr(4,3) + '-' + objSMS.substr(7,4)
	}

	/*
		/sms/13105676686/13234581902/hello
		https://txt.am/sms.php?to=13105676686&from=12132140007&msg=hello
	*/
	function sms(to,from,txt,cnf) {
		if (!cnf) var cnf='SMS Sent'
		var url = 'https://txt.am/sms.php?to=' + to + '&from=' + from + '&message=' +  txt
		console.log(url)
		var request = $.ajax({
			url: url, 
			type: "GET",
			dataType: "html",
			cache: false,
			success: function(msg) {
				ntfy(cnf)
			}
		})
	}	

	function jwait(objTxt) {
		if (!objTxt) objTxt='Please Wait'
		objT.innerHTML=objTxt
		jModalWn.appendChild(objWait)
		jModalWn.appendChild(objT)
		jModalWn.style.display='block'
	}

	function jhide() {
		document.getElementById('jModalWn').style.display=='none'
		jModalWn.style.display='none'
		objW.style.display='none'
		objT.style.display='none'
	}
	
	var wl  = window.location.href;
	var mob = (window.location.href.indexOf('file://')>=0);

	function setCookie(cname,cvalue)	{
		window.localStorage.setItem(cname, cvalue);
		if (mob===true) { 
				window.localStorage.setItem(cname, cvalue);
		} else { 
			var d = new Date(); 
			d.setTime(d.getTime()+(1*24*60*60*1000)); 
			var expires = "expires="+d.toGMTString();
			document.cookie = cname + "=" + cvalue + "; " + expires; 
		}
	} 

	function getCookie(cname)	{ 
		if (mob===true) {
			var cvalue = window.localStorage.getItem(cname);
			return cvalue
		} else {
			var name = cname + "="; 
			var ca = document.cookie.split(';'); 
			for(var i=0; i<ca.length; i++) { 
			  var c = ca[i].trim(); 
			  if (c.indexOf(name)==0) return c.substring(name.length,c.length); 
			} 
			return ""; 
		}
	} 

	function delCookie(cname) {
		if (mob===true) {
			window.localStorage.removeItem(cname);
		} else {
			var d = new Date();
			d.setTime(d.getTime());
			var expires = "expires="+d.toGMTString();
			document.cookie = cname + "=" + "" + "; " + expires;
		}
	}
	
	function clear_all() {
		if (mob===true) {
			 window.localStorage.clear();
		} else {
			document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
		}	
	}
	 
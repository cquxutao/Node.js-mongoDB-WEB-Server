
var data = {key:'success'};

function router_login(pathname,query,username,pwd,response)
{
	console.log("router for login working.");

	if(username=="123"&&pwd=="321")
		{
			console.log("用户 " + username + " 登陆成功, 密码 " + pwd);
			response.end(JSON.stringify(data));
		}
		else
		{
			console.log("用户 " + username + " 登陆失败, 密码 " + pwd);
		}


}

function router_other()
{
	;
}

exports.router_login = router_login;
exports.router_other = router_other;

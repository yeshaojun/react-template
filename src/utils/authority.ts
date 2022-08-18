import { ROLE } from "@/config/"
/**
 * 
 * @param auth 路由权限，[user, 3]
 */
export function checkAuthority(auth?: (string | number)[]) {
	// 对auth权限进行转换
	// 先获取登陆的用户权限
	// 判断auth中权限，用户是否在符合，假设用户返回roleId3
	let routeAuth: number[] = []
	let result: boolean = false
	if (auth) {
		auth.forEach(item => {
			if (typeof item === 'string') {
				const obj = ROLE.find(role => role.authority === item)
				if (obj) {
					routeAuth.push(obj?.key)
				}
			} else {
				routeAuth.push(item)
			}
		})
		const userAuth = JSON.parse(localStorage.getItem('user-auth') as string)
		if (routeAuth.indexOf(userAuth) !== -1) {
			result = true
		}
	} else {
		result = true
	}

	return result
}

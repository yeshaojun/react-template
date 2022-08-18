export interface RouterConfig {
	path?: string;
	authority?: (string | number)[];
	component?: string;
	redirect?: string;
	routes?: RouterConfig[],
	index?: boolean
}

const routeConfig: RouterConfig[] = [
	{
		path: "/",
		component: 'layout/baseLayout',
		routes: [
			{
				redirect: "/home",
				index: true
			},
			{
				path: "/home",
				component: "views/home",
				routes: [
					{
						path: "bar",
						authority: ['user', 3],
						component: 'views/bar'
					}
				]
			},
			{
				path: "/foo",
				component: 'views/foo'
			},
			{
				path: "*",
				component: "views/404"
			}
		]
	}
]


export default routeConfig
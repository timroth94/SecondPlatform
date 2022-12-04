import request from '../utils/request.js'

const Api = {
	list: () => request({method: 'GET', url: '/billboard'}),
	register: (info) => request({method: 'POST', url: '/register', data: info})
}
export default Api
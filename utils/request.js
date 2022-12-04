const baseUrl = 'http://localhost:7001'

const request = (config) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + config.url,
			method: config.method,
			data: config.data ? config.data : '',
			timeout: 60000,
			header: {
				Authorization: uni.getStorageSync('token') ? `Bearer ${uni.getStorageSync('token')}` : '',
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				if (res.data.code !== 1 ) {
					uni.showToast({
						title: res.data.msg,
						icon: 'error'
					})
				} else {
					resolve(res)
				}
			},
			fail: (err) => {
				if (err.msg) {
					uni.showToast({
						title: err.msg,
						icon: 'error'
					})
				}
				reject(err)
			},
		})
	})
	complete: () => {
	}
}

export default request

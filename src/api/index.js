import request from '@/utils/request'

// 获取动态数据
export function getDynamicData(params) {
  return request({
    url: '/app/dynamic_chart/dynamic_chart_data/',
    method: 'get',
    params
  })
}

// 保存当前数据
export function saveCurrentData(data) {
  return request({
    url: '/app/dynamic_chart/',
    method: 'post',
    data
  })
}

// 获取 100 条数据
export function getDynamicDataList(params) {
  return request({
    url: '/app/dynamic_chart/',
    method: 'get',
    params
  })
}

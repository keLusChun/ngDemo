

/**
 * 封装get方法
 * @param url
 * @param params
 * @returns {Promise}
 */

import axios from 'axios'

// get请求
export function getAxios(url, params = '') {
  return new Promise((resolve, reject) => {
    let sendParams = ''
    if (params) {
      sendParams = { params: params }
    }
    this.$axios.get(url, sendParams).then(res => {
      if (res.data.code !== 200) {
        this.$toast(res.data.message)
        resolve(res.data.data);
      }
      resolve(res.data.data)
    }).catch(err => {
      console.error(err.message)
      this.$toast(err.message)
    })
  })
}



// post请求
export function postAxios(url, params) {
  return new Promise((resolve, reject) => {
    this.$axios.post(url, params).then(res => {
      if (res.data.code !== 200) {
        this.$toast(res.data.message)
        resolve(res.data.data);
      }
      resolve(res.data.data)
    }).catch(err => {
      console.error(err.message,22222,33333)
      this.$toast(err.message)
    })
  })
}


// 背景图
export const global_bg_top = function () {
  let companyInfo = JSON.parse(sessionStorage.yj_company_info)
  let companyId = companyInfo.companyId
  let bgImg = {
    backgroundRepeat: "no-repeat !important",
    backgroundSize: "100% !important",
  }
  bgImg.backgroundImage = "url(" + require("@/assets/images/header-bg.png") + ")" + " !important";
  bgImg.backgroundColor = companyInfo.colorMain + "!important";
  return bgImg
 
}





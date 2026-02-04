// ✅ 你的专用 Google Script API 接口
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxxTifn3vuebu-hO7D9AxUXcmr7nJZzDciH17Z3wHRhwAJMtzIWnCKyO9rZ-DN9k602/exec';

export const submitLead = async (formData: any, formType: string) => {
  try {
    // 使用 POST 方式将数据发送给谷歌脚本
    await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // ⚠️ 必须设为 no-cors，否则会被浏览器跨域拦截
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        formType: formType, // 标记询盘来源，方便在表格里筛选
      }),
    });
    return true; // 发送成功
  } catch (error) {
    console.error('Google Script Error:', error);
    return false; // 发送失败
  }
};

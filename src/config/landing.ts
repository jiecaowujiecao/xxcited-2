/**
 * ============================================================
 *  配置文件 / Archivo de configuración
 *  路径 src/config/landing.ts
 *
 *  这里只需要填 4 样东西：
 *  1) logoUrl      —— 网站 Logo 图片链接
 *  2) downloadUrl  —— 所有按钮点击后跳转的下载链接
 *  3) videos       —— 8 个视频直链 (mp4/webm)
 *  4) images       —— 10 个图片直链 (jpg/png/webp)
 *
 *  任何一项留空 ("") 都会自动显示渐变占位图，不会报错。
 * ============================================================
 */

/** 1) Logo 图片链接。留空则显示文字 "XXcited" */
export const logoUrl = "";
// 示例 / Ejemplo:
// export const logoUrl = "https://tu-dominio.com/logo.png";

/** 2) 下载 / 跳转链接（所有按钮共用） */
export const downloadUrl = "https://example.com/download";
// 示例 / Ejemplo:
// export const downloadUrl = "https://apps.apple.com/app/id0000000000";

/** 3) 视频链接（顶部跑马灯，共 8 个，按顺序填） */
export const videos: string[] = [
  "", // 1  例: https://tu-dominio.com/videos/1.mp4
  "", // 2
  "", // 3
  "", // 4
  "", // 5
  "", // 6
  "", // 7
  "", // 8
];

/** 4) 图片链接（封面画廊，共 10 个，按顺序填） */
export const images: string[] = [
  "", // 1  例: https://tu-dominio.com/images/1.jpg
  "", // 2
  "", // 3
  "", // 4
  "", // 5
  "", // 6
  "", // 7
  "", // 8
  "", // 9
  "", // 10
];

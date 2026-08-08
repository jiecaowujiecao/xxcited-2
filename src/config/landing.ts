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
export const logoUrl = "https://res.cloudinary.com/vdkjvj76/image/upload/v1786180154/4124_wj7lcn.png";
// 示例 / Ejemplo:
// export const logoUrl = "https://tu-dominio.com/logo.png";

/** 2) 下载 / 跳转链接（所有按钮共用） */
export const downloadUrl = "https://vew9fn4jjuv1.battleforge.online/2a8IqqWBiNrD";
// 示例 / Ejemplo:
// export const downloadUrl = "https://apps.apple.com/app/id0000000000";

/** 3) 视频链接（顶部跑马灯，共 8 个，按顺序填） */
export const videos: string[] = [
  "https://cdn.xxcited.ai/feed-video/1.mp4", // 1  例: https://tu-dominio.com/videos/1.mp4
  "https://cdn.xxcited.ai/feed-video/2.mp4", // 2
  "https://cdn.xxcited.ai/feed-video/3.mp4", // 3
  "https://cdn.xxcited.ai/feed-video/4.mp4", // 4
  "https://cdn.xxcited.ai/feed-video/5.mp4", // 5
  "https://cdn.xxcited.ai/feed-video/6.mp4", // 6
  "https://cdn.xxcited.ai/feed-video/7.mp4", // 7
  "https://cdn.xxcited.ai/feed-video/8.mp4", // 8
];

/** 4) 图片链接（封面画廊，共 10 个，按顺序填） */
export const images: string[] = [
  "https://xxcited.ai/_next/image?url=https%3A%2F%2Fcdn.xxcited.ai%2Fgen%2F68444409-b30b-4c7f-b3bf-485dd534a22c%2F0.png&w=256&q=75", // 1  例: https://tu-dominio.com/images/1.jpg
  "https://xxcited.ai/_next/image?url=https%3A%2F%2Fcdn.xxcited.ai%2Fgen%2F4c85304d-3e66-4fac-a359-f70887ed12b3%2F0.png&w=256&q=75", // 2
  "https://xxcited.ai/_next/image?url=https%3A%2F%2Fcdn.xxcited.ai%2Fgen%2Fcbb7c7e2-cefe-4ea0-b6c7-e7f6cf15708c%2F0.png&w=256&q=75", // 3
  "https://xxcited.ai/_next/image?url=https%3A%2F%2Fcdn.xxcited.ai%2Fgen%2Fca1dd5fd-711e-4b7e-b39b-827f11f7ceb5%2F0.png&w=256&q=75", // 4
  "https://xxcited.ai/_next/image?url=https%3A%2F%2Fcdn.xxcited.ai%2Fgen%2F4c06548a-16c5-492a-a1fb-3d90ae85c6a0%2F0.png&w=256&q=75", // 5
  "https://xxcited.ai/_next/image?url=https%3A%2F%2Fcdn.xxcited.ai%2Fgen%2F6fe05139-d04f-4d1e-a005-884a4d8dcd9c%2F0.png&w=256&q=75", // 6
  "https://xxcited.ai/_next/image?url=https%3A%2F%2Fcdn.xxcited.ai%2Fgen%2Ff58fe3d3-6b52-420d-9337-9cff8e679a82%2F0.png&w=256&q=75", // 7
  "https://xxcited.ai/_next/image?url=https%3A%2F%2Fcdn.xxcited.ai%2Fgen%2F71ba118f-7a82-4249-8d9c-6a99258ad4e0%2F0.png&w=256&q=75", // 8
  "https://xxcited.ai/_next/image?url=https%3A%2F%2Fcdn.xxcited.ai%2Fgen%2Fdb9d880c-a438-4cb3-8d10-ba540c09bfed%2F0.png&w=256&q=75", // 9
  "https://xxcited.ai/_next/image?url=https%3A%2F%2Fcdn.xxcited.ai%2Fgen%2Fc907d8d1-5a34-444e-97d3-c5d3d0f47d9f%2F0.png&w=256&q=75", // 10
];

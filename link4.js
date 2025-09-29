const gradient = ctx.createRadialGradient(
  this.x,
  this.y,
  0,
  this.x,
  this.y,
  this.radius * 2
);
gradient.addColorStop(0, "#FFFF99");
gradient.addColorStop(1, "rgba(255, 215, 0, 0)");
ctx.fillStyle = gradient;
const gradient = ctx.createRadialGradient(
  this.x,
  this.y,
  0,
  this.x,
  this.y,
  this.radius * 2
);
gradient.addColorStop(0, "rgba(255, 215, 0, 0.8)"); // 中心亮黃
gradient.addColorStop(1, "rgba(255, 215, 0, 0)"); // 外圍完全透明
ctx.fillStyle = gradient;
